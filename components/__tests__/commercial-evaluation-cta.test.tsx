import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CCMPage from '@/app/solutions/chronic-care-management/page'
import RPMPage from '@/app/solutions/remote-patient-monitoring/page'
import ComparisonPage from '@/app/solutions/chronic-care-management/vs-in-house-care-coordinators/page'
import { trackEvent } from '@/lib/analytics'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))
jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn(), getAttributionContext: jest.fn(() => ({})) }))

describe('commercial-page evaluation paths', () => {
  beforeEach(() => jest.clearAllMocks())

  it.each([
    [CCMPage, 'Evaluate your CCM workflow', 'ccm_solution_evaluation'],
    [RPMPage, 'Evaluate your RPM workflow', 'rpm_solution_evaluation'],
    [ComparisonPage, 'Discuss a CCM workflow pilot', 'ccm_comparison_evaluation'],
  ] as const)('opens a tracked short demo form from %s', async (Page, button, source) => {
    const user = userEvent.setup()
    render(<Page />)
    await user.click(screen.getByRole('button', { name: button }))
    expect(screen.getByRole('dialog')).toBeVisible()
    expect(screen.getAllByRole('textbox')).toHaveLength(3)
    expect(trackEvent).toHaveBeenCalledWith('cta_click', { cta_name: 'request_demo', cta_location: source })
    expect(jest.mocked(trackEvent).mock.calls.some(([event]) => ['lead_form_start', 'generate_lead', 'meeting_booked'].includes(event))).toBe(false)
  })

  it('labels the example link accurately instead of counting it as an ROI action', () => {
    render(<ComparisonPage />)
    const link = screen.getByRole('link', { name: 'See the call-to-follow-up example' })
    expect(link).toHaveAttribute('href', '/resources/billing-guide#workflow-example')
    fireEvent.click(link)
    expect(jest.mocked(trackEvent).mock.calls).toEqual([
      ['cta_click', { cta_name: 'view_workflow_example', cta_location: 'ccm_comparison_evaluation' }],
    ])
  })
})
