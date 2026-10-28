import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DemoComponent } from '@/components/demo'
import { trackEvent } from '@/lib/analytics'

jest.mock('next/font/google', () => ({ Space_Grotesk: () => ({ className: 'font' }) }))
jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))
jest.mock('react-hot-toast', () => ({ __esModule: true, default: { success: jest.fn(), error: jest.fn() }, Toaster: () => null }))
jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn(), getAttributionContext: () => ({}) }))

const originalBookingUrl = process.env.NEXT_PUBLIC_DEMO_BOOKING_URL
beforeEach(() => { jest.clearAllMocks(); delete process.env.NEXT_PUBLIC_DEMO_BOOKING_URL })
afterAll(() => {
  if (originalBookingUrl === undefined) delete process.env.NEXT_PUBLIC_DEMO_BOOKING_URL
  else process.env.NEXT_PUBLIC_DEMO_BOOKING_URL = originalBookingUrl
})

it('explains email follow-up when no calendar is configured and counts one accepted request', async () => {
  jest.mocked(fetch).mockResolvedValueOnce({ ok: true } as Response)
  const user = userEvent.setup()
  render(<DemoComponent />)
  expect(screen.getByText(/reach out by email/)).toBeVisible()
  expect(screen.queryByText(/then choose a convenient time/)).not.toBeInTheDocument()
  await user.type(screen.getByLabelText('Full name (required)'), 'Synthetic Test')
  await user.type(screen.getByLabelText('Work email (required)'), 'synthetic@example.com')
  await user.click(screen.getByRole('button', { name: 'Request Demo' }))
  expect(await screen.findByRole('status')).toHaveTextContent('No appointment has been booked yet')
  expect(screen.queryByRole('link', { name: 'Choose a demo time' })).not.toBeInTheDocument()
  expect(jest.mocked(trackEvent).mock.calls.filter(([name]) => name === 'generate_lead')).toHaveLength(1)
})

it('retains entered details and offers an email fallback after delivery failure', async () => {
  jest.mocked(fetch).mockResolvedValueOnce({ ok: false, status: 502 } as Response)
  const user = userEvent.setup()
  render(<DemoComponent />)
  await user.type(screen.getByLabelText('Full name (required)'), 'Synthetic Test')
  await user.type(screen.getByLabelText('Work email (required)'), 'synthetic@example.com')
  await user.click(screen.getByRole('button', { name: 'Request Demo' }))
  expect(await screen.findByRole('alert')).toHaveTextContent('We could not confirm your submission')
  expect(screen.getByLabelText('Work email (required)')).toHaveValue('synthetic@example.com')
  expect(screen.getByRole('link', { name: 'Email Positive Check' })).toBeVisible()
  expect(jest.mocked(trackEvent).mock.calls.filter(([name]) => name === 'generate_lead')).toHaveLength(0)
})
