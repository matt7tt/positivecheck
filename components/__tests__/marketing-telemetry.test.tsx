import { render, screen } from '@testing-library/react'
import { readFileSync } from 'fs'
import { join } from 'path'
import { runInNewContext } from 'vm'
import { MarketingTelemetry } from '@/components/marketing-telemetry'
import { isMarketingAnalyticsPage } from '@/lib/analytics-config'
jest.mock('next/navigation', () => ({ usePathname: () => '/' }))
jest.mock('@/lib/analytics-config', () => ({ ...jest.requireActual('@/lib/analytics-config'), isMarketingAnalyticsPage: jest.fn() }))
jest.mock('next/script', () => ({ __esModule: true, default: ({ src }: { src: string }) => <span data-testid="google-script">{src}</span> }))
jest.mock('@vercel/analytics/react', () => ({ Analytics: () => <span data-testid="analytics" /> }))
jest.mock('@vercel/speed-insights/next', () => ({ SpeedInsights: () => <span data-testid="speed-insights" /> }))
jest.mock('@/components/deferred-facebook-pixel', () => ({ DeferredFacebookPixel: () => <span data-testid="facebook" /> }))
jest.mock('@/components/conversion-analytics', () => ({ ConversionAnalytics: () => <span data-testid="conversion" /> }))

describe('marketing telemetry loading boundaries', () => {
  it('does not mount third-party telemetry on a disallowed host', () => {
    jest.mocked(isMarketingAnalyticsPage).mockReturnValue(false)
    const { container } = render(<MarketingTelemetry />)
    expect(container).toBeEmptyDOMElement()
  })
  it('mounts the existing trackers only when the host and path are allowed', () => {
    jest.mocked(isMarketingAnalyticsPage).mockReturnValue(true)
    render(<MarketingTelemetry />)
    for (const id of ['google-script', 'analytics', 'speed-insights', 'facebook', 'conversion']) expect(screen.getByTestId(id)).toBeInTheDocument()
  })
  it.each(['provider.positivecheck.com', 'localhost'])('inline tracking exits before queuing or loading on %s', hostname => {
    const source = readFileSync(join(process.cwd(), 'app/layout.tsx'), 'utf8')
    const snippets = [...source.matchAll(/__html:\s*`([\s\S]*?)`/g)].map(match => match[1]).filter(code => /gtm\.js|gtag\('config'|ai_referral/.test(code))
    expect(snippets).toHaveLength(3)
    for (const code of snippets) {
      const location = { hostname, pathname: '/' }
      const context = { location, window: { location }, document: {} }
      expect(() => runInNewContext(code, context)).not.toThrow()
      expect(context.window).not.toHaveProperty('dataLayer')
    }
  })
})
