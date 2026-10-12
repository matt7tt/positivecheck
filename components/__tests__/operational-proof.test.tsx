import { render, screen } from '@testing-library/react'
import { MonthlyOutreachStats, OperationalAlertProof } from '@/components/operational-proof'
import { alertPriorityLevels, flaggedTopics, monthlyOperationalStats } from '@/lib/operational-stats'
import { enrollmentData, alertsData } from '@/lib/case-study-data'

describe('approved first-party operational figures', () => {
  it('preserves the four supplied monthly measures and channel distinction', () => {
    render(<MonthlyOutreachStats />)
    expect(monthlyOperationalStats.map(s => s.value)).toEqual(['70%+', '6,000+', '500+', '100+'])
    for (const stat of monthlyOperationalStats) {
      expect(screen.getByText(stat.value)).toBeVisible()
      expect(screen.getByText(stat.label)).toBeVisible()
    }
    expect(screen.getByText(/Source: Positive Check operational reporting/)).toBeVisible()
    expect(screen.getByRole('link', { name: 'Reporting notes' })).toHaveAttribute('href', '#operational-reporting-notes')
  })
  it('does not normalize the selected topics or invent a missing category', () => {
    const { container } = render(<OperationalAlertProof />)
    expect(flaggedTopics.map(s => s.percent)).toEqual([26, 23, 16, 16])
    expect(flaggedTopics.reduce((sum, s) => sum + s.percent, 0)).toBe(81)
    expect(screen.getByText('26%')).toBeVisible()
    expect(screen.getByText('23%')).toBeVisible()
    expect(screen.getAllByText('16%')).toHaveLength(2)
    expect(screen.getByText(/Selected reported categories, not a complete breakdown/)).toBeVisible()
    expect(container.textContent).not.toContain('19%')
    expect(container.textContent).not.toMatch(/industry average|40%|resolved 100%/i)
  })
  it('keeps priority distribution separate from topic categories and clinical outcomes', () => {
    render(<OperationalAlertProof />)
    expect(alertPriorityLevels.map(s => s.percent)).toEqual([3, 47, 20, 30])
    expect(alertPriorityLevels.reduce((sum, s) => sum + s.percent, 0)).toBe(100)
    for (const level of alertPriorityLevels) expect(screen.getByText(`${level.percent}%`)).toBeVisible()
    expect(screen.getByText('Escalated in real time')).toBeVisible()
    expect(screen.getByText(/not diagnoses, confirmed emergencies or completed clinical interventions/)).toBeVisible()
  })
  it('retains the earlier study and distinguishes supply date from observation period', () => {
    render(<OperationalAlertProof />)
    expect(screen.getByText(/The supply date is not a measurement period/)).toBeVisible()
    expect(screen.getByText(/That study is not the source of the monthly figures above/)).toBeVisible()
    expect(screen.getByRole('link', { name: /July 2025–February 2026 implementation study/ })).toHaveAttribute('href', '/case-studies/scaling-patient-engagement')
    expect(enrollmentData.at(-1)?.patients).toBe(1509)
    expect(alertsData.reduce((sum, entry) => sum + entry.alerts, 0)).toBe(485)
  })
})
