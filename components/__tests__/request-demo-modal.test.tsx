import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { trackEvent, getAttributionContext } from '@/lib/analytics'

jest.mock('@/lib/analytics', () => ({
  trackEvent: jest.fn(),
  getAttributionContext: jest.fn(() => ({ utm_source: 'test', landing_page: '/resources' })),
}))

const mockFetch = jest.mocked(global.fetch)
const originalBookingUrl = process.env.NEXT_PUBLIC_DEMO_BOOKING_URL

describe('demo request conversions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    delete process.env.NEXT_PUBLIC_DEMO_BOOKING_URL
  })
  afterAll(() => {
    if (originalBookingUrl === undefined) delete process.env.NEXT_PUBLIC_DEMO_BOOKING_URL
    else process.env.NEXT_PUBLIC_DEMO_BOOKING_URL = originalBookingUrl
  })

  async function fillForm() {
    const user = userEvent.setup()
    render(<RequestDemoModal source="test_cta"><button>Open demo</button></RequestDemoModal>)
    await user.click(screen.getByRole('button', { name: 'Open demo' }))
    await user.type(screen.getByLabelText('Full Name'), 'Synthetic Test')
    await user.type(screen.getByLabelText('Email Address'), 'synthetic@example.com')
    return user
  }

  it('sends attribution to the API and records one lead only after delivery succeeds', async () => {
    let resolveResponse!: (response: Response) => void
    mockFetch.mockReturnValueOnce(new Promise(resolve => { resolveResponse = resolve }))
    const user = await fillForm()
    expect(screen.queryByText(/then choose a time/)).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    expect(screen.getByRole('button', { name: /Submitting/ })).toBeDisabled()
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toHaveLength(0)
    expect(JSON.parse(mockFetch.mock.calls[0][1]!.body as string)).toEqual({
      name: 'Synthetic Test', email: 'synthetic@example.com', organization: '', attribution: getAttributionContext(),
    })
    resolveResponse({ ok: true } as Response)
    await screen.findByText('Your request is in.')
    const leads = jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')
    expect(leads).toEqual([['generate_lead', { lead_type: 'demo_request', form_name: 'demo_request', cta_location: 'test_cta' }]])
    expect(JSON.stringify(jest.mocked(trackEvent).mock.calls)).not.toMatch(/synthetic@example.com|Synthetic Test/)
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'form_start')).toHaveLength(1)
  })

  it.each(['http', 'network'])('does not report a lead on a %s delivery failure', async (failure) => {
    if (failure === 'http') mockFetch.mockResolvedValueOnce({ ok: false, status: 502 } as Response)
    else mockFetch.mockRejectedValueOnce(new Error('Network unavailable'))
    const user = await fillForm()
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    await screen.findByText('Failed to submit request. Please try again.')
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toHaveLength(0)
    await waitFor(() => expect(screen.getByRole('button', { name: 'Request demo' })).toBeEnabled())
  })
})
