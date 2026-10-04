import { render, screen } from '@testing-library/react'
import HowItWorksPage, { metadata } from '@/app/how-it-works/page'
import { PlatformComponent } from '@/components/platform'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))
jest.mock('@/components/request-demo-modal', () => ({ RequestDemoModal: ({ children }: { children: React.ReactNode }) => <>{children}</> }))
jest.mock('@/components/lola-call-modal', () => ({ LolaCallModal: ({ children }: { children: React.ReactNode }) => <>{children}</> }))
jest.mock('next/script', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'script'>) => <script {...props} />,
}))

describe('product claims consistency', () => {
  it('describes outreach support without guaranteed financial or clinical outcomes', () => {
    const { container } = render(<PlatformComponent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('AI Patient Outreach for Your Care Team')
    expect(container.textContent).not.toMatch(/pays for itself|never miss a warning sign|thinks like a clinician|reach every patient, every time|without adding staff|gets better with every conversation/i)
    expect(screen.getByText(/Your care team retains clinical review/)).toBeVisible()
    expect(screen.getByText(/they do not replace clinical judgment/)).toBeVisible()
    expect(screen.getByText(/they do not guarantee detection of every concern/)).toBeVisible()
    expect(screen.getByText(/Agree coverage and fallback steps before launch/)).toBeVisible()
  })

  it('keeps scope-dependent rollout timing consistent in visible copy, metadata and schema', () => {
    const { container } = render(<HowItWorksPage />)
    const schemas = Array.from(container.querySelectorAll('script[type="application/ld+json"]'))
      .map(script => JSON.parse(script.textContent || '{}'))
    const howTo = schemas.find(schema => schema['@type'] === 'HowTo')

    expect(howTo).toBeDefined()
    expect(howTo).not.toHaveProperty('totalTime')
    expect(howTo.description).toBe(metadata.description)
    expect(metadata.openGraph?.description).toBe(metadata.description)
    expect(metadata.twitter?.description).toBe(metadata.description)
    expect(screen.getByText(howTo.description)).toBeVisible()
    for (const step of howTo.step) {
      expect(screen.getByText(step.text)).toBeVisible()
    }
    expect(JSON.stringify(metadata) + container.textContent).not.toMatch(/PT15M|set up in minutes|integrates seamlessly/i)
    expect(screen.getByText(/Live transfer depends on routing configuration and staff availability/)).toBeVisible()
    expect(screen.getByText(/they do not guarantee detection of every concern/)).toBeVisible()
  })
})
