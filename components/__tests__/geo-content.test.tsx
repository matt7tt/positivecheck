import { render, screen } from '@testing-library/react'
import CCMPage from '@/app/solutions/chronic-care-management/page'
import ComparisonPage from '@/app/solutions/chronic-care-management/vs-in-house-care-coordinators/page'
import ImplementationPage from '@/app/resources/implementation-guide/page'
import { CaseStudyAnchor } from '@/components/case-study-anchor'
import { ROICalculator } from '@/components/roi-calculator'
import { caseStudyTitle, caseStudyLimitations } from '@/lib/case-study-data'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))
jest.mock('@/components/request-demo-modal', () => ({ RequestDemoModal: ({ children }: { children: React.ReactNode }) => <>{children}</> }))
jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn() }))
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: () => null,
}))

describe('GEO buyer answers', () => {
  it.each([
    ['CCM', CCMPage], ['comparison', ComparisonPage], ['implementation', ImplementationPage],
  ])('%s renders six visible answers matching FAQ structured data', (_name, Page) => {
    const { container } = render(<Page />)
    const schemas = Array.from(container.querySelectorAll('script[type="application/ld+json"]'))
      .map(script => JSON.parse(script.textContent || '{}'))
    const faq = schemas.find(schema => schema['@type'] === 'FAQPage')
    expect(faq.mainEntity).toHaveLength(6)
    for (const question of faq.mainEntity) {
      expect(screen.getByRole('heading', { name: question.name })).toBeVisible()
      expect(screen.getByText(question.acceptedAnswer.text)).toBeVisible()
      const words = question.acceptedAnswer.text.split(/\s+/).length
      expect(words).toBeGreaterThanOrEqual(40)
      expect(words).toBeLessThanOrEqual(80)
    }
  })

  it('keeps case-study web and PDF titles and limitations consistent', () => {
    const { container } = render(<CaseStudyAnchor />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(caseStudyTitle)
    expect(screen.getAllByText(caseStudyLimitations)).toHaveLength(2)
    expect(screen.getAllByText('32.2–54.5%')).toHaveLength(2)
    expect(container.textContent).not.toMatch(/under 6 months|in 6 months|100%.*resolution|\[Healthcare Partner\]/i)
  })

  it('labels software-only results accurately in the calculator and PDF', () => {
    const { container } = render(<ROICalculator />)
    expect(screen.getAllByText('Revenue / Software Cost')[0]).toBeVisible()
    expect(screen.getAllByText(/not net profit/).length).toBeGreaterThanOrEqual(2)
    expect(container.textContent).not.toMatch(/Typical ROI|Return on Investment|Monthly Net|PC Tier/)
    expect(container.textContent).toContain('not a quote')
    // Existing 100-patient RPM + CCM default: 100 × $159 × 85%, less $1,200 software.
    expect(screen.getAllByText('$13,515').length).toBeGreaterThan(0)
    expect(screen.getAllByText('$12,315').length).toBeGreaterThan(0)
  })
})
