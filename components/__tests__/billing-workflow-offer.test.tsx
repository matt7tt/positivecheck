import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BillingGuide, { metadata } from '@/app/resources/billing-guide/page'
import { BILLING_WORKFLOW_OFFER as offer } from '@/lib/demo-offers'
import { trackEvent } from '@/lib/analytics'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))
jest.mock('@/lib/analytics', () => ({
  trackEvent: jest.fn(),
  getAttributionContext: jest.fn(() => ({ landing_page: '/resources/billing-guide' })),
}))

describe('billing-guide workflow offer', () => {
  beforeEach(() => jest.clearAllMocks())

  it('keeps the reference ungated and preserves its search title and canonical', () => {
    render(<BillingGuide />)
    expect(screen.getByRole('heading', { name: offer.title })).toBeVisible()
    for (const point of offer.points) expect(screen.getByText(point)).toBeVisible()
    expect(screen.getByText(offer.disclaimer)).toBeVisible()
    expect(screen.getByRole('heading', { name: 'CPT 99490 Billing Guide' })).toBeVisible()
    expect(screen.getByRole('link', { name: 'Estimate program ROI' })).toHaveAttribute('href', '/roi-calculator')
    expect(metadata.title).toBe('2026 CMS Billing Guide: RPM, CCM, TCM, PCM | Positive Check')
    expect(metadata.alternates?.canonical).toBe('/resources/billing-guide')
  })

  it('carries the offer from the page into one tracked modal opening and form start', async () => {
    const user = userEvent.setup()
    render(<BillingGuide />)
    await user.click(screen.getByRole('button', { name: offer.buttonText }))
    const dialog = screen.getByRole('dialog', { name: offer.modalTitle })
    expect(within(dialog).getByText(offer.disclaimer)).toBeVisible()
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'lead_form_start')).toHaveLength(0)
    await user.type(within(dialog).getByLabelText('Full Name'), 'Synthetic Test')
    await user.click(within(dialog).getByLabelText('Email Address'))
    await user.click(within(dialog).getByLabelText('Full Name'))
    const calls = jest.mocked(trackEvent).mock.calls
    expect(calls.filter(([event]) => event === 'cta_click')).toEqual([
      ['cta_click', { cta_name: 'request_demo', cta_location: 'billing_guide_summary', offer_id: offer.id }],
    ])
    expect(calls.filter(([event]) => event === 'lead_form_start')).toEqual([
      ['lead_form_start', { form_name: 'demo_request', cta_location: 'billing_guide_summary', offer_id: offer.id }],
    ])
    expect(calls.filter(([event]) => ['form_start', 'generate_lead'].includes(event))).toHaveLength(0)
  })
})
