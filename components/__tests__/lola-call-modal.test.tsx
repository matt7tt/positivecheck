import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { LolaCallModal } from '@/components/lola-call-modal'
import { trackEvent } from '@/lib/analytics'
jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn() }))
const mockFetch = jest.mocked(global.fetch)

function openAndFill() {
  render(<LolaCallModal source="test_cta"><button>Open callback</button></LolaCallModal>)
  fireEvent.click(screen.getByText('Open callback'))
  fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'Synthetic' } })
  fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Test' } })
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'synthetic@example.com' } })
  fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '4155550100' } })
}
describe('Lola callback form', () => {
  beforeEach(() => jest.clearAllMocks())
  it('does not count dialog autofocus as a form start', () => {
    render(<LolaCallModal><button>Open callback</button></LolaCallModal>)
    fireEvent.click(screen.getByText('Open callback'))
    fireEvent.focus(screen.getByLabelText('First name'))
    expect(jest.mocked(trackEvent).mock.calls.some(([event]) => event === 'lead_form_start')).toBe(false)
    fireEvent.change(screen.getByLabelText('First name'), { target: { value: 'Test' } })
    fireEvent.change(screen.getByLabelText('Last name'), { target: { value: 'Test' } })
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(1)
  })
  it('requires explicit consent before sending', () => {
    openAndFill()
    fireEvent.click(screen.getByRole('button', { name: 'Get my call from Lola' }))
    expect(screen.getByRole('alert')).toHaveTextContent('agree')
    expect(mockFetch).not.toHaveBeenCalled()
  })
  it('sends one request and distinguishes acceptance from a connected call', async () => {
    mockFetch.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) } as Response)
    openAndFill()
    fireEvent.click(screen.getByRole('checkbox'))
    const submit = screen.getByRole('button', { name: 'Get my call from Lola' })
    fireEvent.click(submit)
    fireEvent.click(submit)
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('does not confirm that a call connected'))
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(JSON.parse(mockFetch.mock.calls[0][1]!.body as string)).toMatchObject({ consent: true, phone: '+14155550100' })
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'generate_lead')).toHaveLength(1)
    expect(JSON.stringify(jest.mocked(trackEvent).mock.calls)).not.toContain('synthetic@example.com')
  })
  it('keeps failed requests out of the lead count and gives a contact fallback', async () => {
    mockFetch.mockResolvedValue({ ok: false, json: async () => ({ error: 'Temporarily unavailable' }) } as Response)
    openAndFill()
    fireEvent.click(screen.getByRole('checkbox'))
    fireEvent.click(screen.getByRole('button', { name: 'Get my call from Lola' }))
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Temporarily unavailable'))
    expect(screen.getByRole('link', { name: 'Contact our team for help' })).toHaveAttribute('href', '/contact')
    expect(jest.mocked(trackEvent).mock.calls.some(([event]) => event === 'generate_lead')).toBe(false)
  })
})
