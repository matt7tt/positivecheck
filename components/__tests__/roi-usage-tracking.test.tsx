import { fireEvent, render, screen } from '@testing-library/react'
import { ROICalculator } from '@/components/roi-calculator'
import { trackEvent } from '@/lib/analytics'
jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn() }))
jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))
jest.mock('recharts', () => ({
  ResponsiveContainer: () => null, BarChart: () => null, Bar: () => null, XAxis: () => null, YAxis: () => null, CartesianGrid: () => null, Tooltip: () => null,
}))

afterEach(() => { jest.clearAllTimers(); jest.useRealTimers() })

it('tracks first scenario use once without treating render or use as a lead', () => {
  jest.clearAllMocks()
  jest.useFakeTimers()
  render(<ROICalculator />)
  expect(trackEvent).not.toHaveBeenCalled()
  const scenarios = screen.getAllByRole('button', { name: 'Try This Scenario' })
  fireEvent.click(scenarios[0])
  fireEvent.click(scenarios[1])
  expect(trackEvent).toHaveBeenCalledTimes(1)
  expect(trackEvent).toHaveBeenCalledWith('calculator_used', { calculator: 'roi_reimbursement' })
})
