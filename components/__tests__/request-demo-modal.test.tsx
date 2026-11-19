import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { trackEvent, getAttributionContext } from '@/lib/analytics'
import { BILLING_WORKFLOW_OFFER as offer } from '@/lib/demo-offers'

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

  it('does not count automatic modal focus or field navigation as a form start', async () => {
    const user = userEvent.setup()
    render(<RequestDemoModal source="test_cta"><button>Open demo</button></RequestDemoModal>)
    await user.click(screen.getByRole('button', { name: 'Open demo' }))
    expect(screen.getByLabelText('Full Name')).toHaveFocus()
    await user.tab()
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(0)
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('sends attribution to the API and records one lead only after delivery succeeds', async () => {
    let resolveResponse!: (response: Response) => void
    mockFetch.mockReturnValueOnce(new Promise(resolve => { resolveResponse = resolve }))
    const user = await fillForm()
    expect(screen.queryByText(/then choose a time/)).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    expect(screen.getByRole('button', { name: /Submitting/ })).toBeDisabled()
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toHaveLength(0)
    expect(JSON.parse(mockFetch.mock.calls[0][1]!.body as string)).toEqual({
      name: 'Synthetic Test', email: 'synthetic@example.com', organization: '', cta_location: 'test_cta', attribution: getAttributionContext(),
    })
    resolveResponse({ ok: true } as Response)
    await screen.findByText('Your request is in.')
    const leads = jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')
    expect(leads).toEqual([['generate_lead', { lead_type: 'demo_request', form_name: 'demo_request', cta_location: 'test_cta' }]])
    expect(JSON.stringify(jest.mocked(trackEvent).mock.calls)).not.toMatch(/synthetic@example.com|Synthetic Test/)
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(1)
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'form_start')).toHaveLength(0)
  })

  it('records one custom start across field changes without submitting a lead', async () => {
    const user = await fillForm()
    await user.click(screen.getByLabelText('Full Name'))
    await user.tab()
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toEqual([
      ['lead_form_start', { form_name: 'demo_request', cta_location: 'test_cta' }],
    ])
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => ['form_start', 'generate_lead', 'form_submit'].includes(event))).toEqual([])
    expect(mockFetch).not.toHaveBeenCalled()
    expect(JSON.stringify(jest.mocked(trackEvent).mock.calls)).not.toMatch(/synthetic@example.com|Synthetic Test/)
  })

  it('allows one new custom start after closing and reopening the modal', async () => {
    const user = await fillForm()
    await user.keyboard('{Escape}')
    await user.click(screen.getByRole('button', { name: 'Open demo' }))
    await user.click(screen.getByLabelText('Full Name'))
    await user.tab()
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(1)
    await user.type(screen.getByLabelText('Full Name'), ' Updated')
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(2)
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it.each(['http', 'network'])('does not report a lead on a %s delivery failure', async (failure) => {
    if (failure === 'http') mockFetch.mockResolvedValueOnce({ ok: false, status: 502 } as Response)
    else mockFetch.mockRejectedValueOnce(new Error('Network unavailable'))
    const user = await fillForm()
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('We could not confirm your submission')
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toHaveLength(0)
    expect(screen.getByLabelText('Email Address')).toHaveValue('synthetic@example.com')
    expect(screen.getByRole('link', { name: 'Email Positive Check' })).toHaveAttribute('href', 'mailto:hello@positivecheck.com')
    expect(trackEvent).toHaveBeenCalledWith('form_error', expect.objectContaining({
      error_type: failure === 'http' ? 'delivery_unavailable' : 'network_or_unknown',
      response_status: failure === 'http' ? 502 : 0,
    }))
    await waitFor(() => expect(screen.getByRole('button', { name: 'Request demo' })).toBeEnabled())
  })

  it('records a start when submitting retained values after reopening', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true } as Response)
    const user = await fillForm()
    await user.keyboard('{Escape}')
    await user.click(screen.getByRole('button', { name: 'Open demo' }))
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(1)
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    await screen.findByText('Your request is in.')
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(2)
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toHaveLength(1)
  })

  it('retains the billing offer through successful submission without putting contact details in analytics', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true } as Response)
    const user = userEvent.setup()
    render(<RequestDemoModal source="billing_guide_summary" offerId={offer.id}><button>Open offer</button></RequestDemoModal>)
    await user.click(screen.getByRole('button', { name: 'Open offer' }))
    await user.type(screen.getByLabelText('Full Name'), 'Synthetic Test')
    await user.type(screen.getByLabelText('Email Address'), 'synthetic@example.com')
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    await screen.findByText('Your request is in.')
    expect(JSON.parse(mockFetch.mock.calls[0][1]!.body as string)).toMatchObject({ offer_id: offer.id })
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toEqual([
      ['generate_lead', { lead_type: 'demo_request', form_name: 'demo_request', cta_location: 'billing_guide_summary', offer_id: offer.id }],
    ])
    expect(JSON.stringify(jest.mocked(trackEvent).mock.calls)).not.toMatch(/synthetic@example.com|Synthetic Test/)
  })

  it('retains the billing offer on errors without reporting a lead', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false } as Response)
    const user = userEvent.setup()
    render(<RequestDemoModal source="billing_guide_summary" offerId={offer.id}><button>Open offer</button></RequestDemoModal>)
    await user.click(screen.getByRole('button', { name: 'Open offer' }))
    await user.type(screen.getByLabelText('Full Name'), 'Synthetic Test')
    await user.type(screen.getByLabelText('Email Address'), 'synthetic@example.com')
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('We could not confirm your submission')
    expect(trackEvent).toHaveBeenCalledWith('form_error', expect.objectContaining({ offer_id: offer.id }))
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toHaveLength(0)
  })

  it('preserves optional scheduling and the offer label on the calendar click', async () => {
    process.env.NEXT_PUBLIC_DEMO_BOOKING_URL = 'https://example.com/schedule'
    mockFetch.mockResolvedValueOnce({ ok: true } as Response)
    const user = userEvent.setup()
    render(<RequestDemoModal source="billing_guide_summary" offerId={offer.id}><button>Open offer</button></RequestDemoModal>)
    await user.click(screen.getByRole('button', { name: 'Open offer' }))
    expect(screen.getByText(/then choose a time/)).toBeVisible()
    await user.type(screen.getByLabelText('Full Name'), 'Synthetic Test')
    await user.type(screen.getByLabelText('Email Address'), 'synthetic@example.com')
    await user.click(screen.getByRole('button', { name: 'Continue to scheduling' }))
    const calendar = await screen.findByRole('link', { name: 'Choose a demo time' })
    expect(screen.getByText(/Your demo is not booked yet/)).toBeVisible()
    expect(calendar).toHaveAttribute('href', 'https://example.com/schedule')
    await user.click(calendar)
    expect(trackEvent).toHaveBeenCalledWith('booking_link_click', {
      form_name: 'demo_request', cta_location: 'billing_guide_summary', offer_id: offer.id,
    })
    expect(jest.mocked(trackEvent).mock.calls.some(([event]) => ['meeting_booked', 'meeting_attended', 'qualify_lead'].includes(event))).toBe(false)
  })

  it('falls back to email scheduling when the calendar configuration is unsafe', async () => {
    process.env.NEXT_PUBLIC_DEMO_BOOKING_URL = 'javascript:alert(1)'
    mockFetch.mockResolvedValueOnce({ ok: true } as Response)
    const user = await fillForm()
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    expect(await screen.findByText(/No appointment has been booked yet/)).toBeVisible()
    expect(screen.queryByRole('link', { name: 'Choose a demo time' })).not.toBeInTheDocument()
  })
})

const LEAD_URL = "/api/marketing-lead"
const leadCalls = () => jest.mocked(global.fetch).mock.calls.filter(([url]) => url === LEAD_URL)

describe('request demo modal marketing lead', () => {
  beforeEach(() => { jest.clearAllMocks(); mockFetch.mockReset() })

  async function fillForm() {
    const user = userEvent.setup()
    render(<RequestDemoModal source="test_cta"><button>Open demo</button></RequestDemoModal>)
    await user.click(screen.getByRole('button', { name: 'Open demo' }))
    await user.type(screen.getByLabelText('Full Name'), 'Synthetic Test')
    await user.type(screen.getByLabelText('Email Address'), 'synthetic@example.com')
    return user
  }

  it('sends a marketing lead after a successful submit', async () => {
    mockFetch.mockResolvedValue({ ok: true } as Response)
    const user = await fillForm()
    await user.type(screen.getByLabelText(/Organization/), 'Synthetic Clinic')
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    await screen.findByText('Your request is in.')
    expect(leadCalls()).toHaveLength(1)
    expect(JSON.parse(leadCalls()[0][1]!.body as string)).toMatchObject({
      kind: 'demo_request', name: 'Synthetic Test', email: 'synthetic@example.com', practice: 'Synthetic Clinic',
    })
  })

  it('does not send one when the submit fails', async () => {
    mockFetch.mockResolvedValue({ ok: false, status: 502 } as Response)
    const user = await fillForm()
    await user.click(screen.getByRole('button', { name: 'Request demo' }))
    await screen.findByRole('alert')
    expect(leadCalls()).toHaveLength(0)
  })

  it('tags the booking link with the first-touch source', async () => {
    process.env.NEXT_PUBLIC_DEMO_BOOKING_URL = 'https://cal.example.com/demo'
    window.localStorage.setItem('pc_attr', JSON.stringify({ first: { utm_source: 'chatgpt', utm_medium: 'cpc', utm_campaign: 'c1', at: new Date().toISOString() } }))
    mockFetch.mockResolvedValue({ ok: true } as Response)
    const user = await fillForm()
    await user.click(screen.getByRole('button', { name: 'Continue to scheduling' }))
    const link = await screen.findByRole('link', { name: /Choose a demo time/ })
    expect(new URL(link.getAttribute('href')!).searchParams.get('utm_source')).toBe('chatgpt')
    window.localStorage.clear()
  })
})
