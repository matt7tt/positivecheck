import { readFileSync } from 'fs'
import { enrollmentData, engagementData, alertsData, caseStudyMetrics, caseStudyTitle } from '@/lib/case-study-data'
import { buildOrganizationSchema, buildWebSiteSchema, buildArticleSchema, ORG_ID } from '@/lib/schema'
import { fitSummaryToPage } from '@/lib/pdf-layout'

describe('Summary PDF bounds', () => {
  it.each([[1600, 1900], [1600, 3000], [1600, 900]])('fits a %s by %s canvas without clipping or distortion', (width, height) => {
    const fit = fitSummaryToPage(width, height, 210, 297)
    expect(fit.width / fit.height).toBeCloseTo(width / height)
    expect(fit.x).toBeGreaterThanOrEqual(10)
    expect(fit.y).toBe(10)
    expect(fit.x + fit.width).toBeLessThanOrEqual(200)
    expect(fit.y + fit.height).toBeLessThanOrEqual(287)
  })
})

describe('Published GEO evidence', () => {
  it('derives headline metrics from the published series without an invented resolution rate', () => {
    expect(enrollmentData[0]).toEqual({ month: "Jul '25", patients: 1 })
    expect(enrollmentData.at(-1)).toEqual({ month: "Feb '26", patients: 1509 })
    expect(alertsData.reduce((sum, item) => sum + item.alerts, 0)).toBe(485)
    expect(engagementData).toHaveLength(6)
    expect(caseStudyMetrics.map(metric => metric.value)).toEqual(['1,509', '32.2–54.5%', '485', 'Jul–Feb'])
    expect(caseStudyTitle).not.toMatch(/6 months/i)
  })

  it('references one stable organization identity in shared schemas', () => {
    const article = buildArticleSchema({ headline: 'Test', description: 'Test', url: 'https://www.positivecheck.com/test', image: 'https://www.positivecheck.com/test.png', datePublished: '2026-09-13', dateModified: '2026-09-13' })
    expect(buildOrganizationSchema()['@id']).toBe(ORG_ID)
    expect(buildWebSiteSchema().publisher['@id']).toBe(ORG_ID)
    expect(article.author['@id']).toBe(ORG_ID)
    expect(article.publisher['@id']).toBe(ORG_ID)
  })
})

describe('Crawler exclusions', () => {
  it('keeps every explicitly named crawler in the shared exclusion group', () => {
    const robots = readFileSync('public/robots.txt', 'utf8')
    const directives = robots.split('\n').map(line => line.split('#')[0].trim()).filter(Boolean)
    const firstRule = directives.findIndex(line => /^(Allow|Disallow):/i.test(line))
    const agents = directives.slice(0, firstRule).map(line => line.replace(/^User-agent:\s*/i, ''))
    expect(agents).toEqual(expect.arrayContaining(['*', 'OAI-SearchBot', 'GPTBot', 'Claude-SearchBot', 'PerplexityBot', 'Applebot']))
    // A later User-agent would start a new group without inherited wildcard rules.
    expect(directives.slice(firstRule).some(line => /^User-agent:/i.test(line))).toBe(false)
    for (const path of ['/api/', '/admin/', '/private/', '/my-account', '/sign-in', '/provider-login', '/providers', '/forgot-password', '/reset-password', '/demo', '/onboarding-wizard']) {
      expect(directives).toContain(`Disallow: ${path}`)
    }
    expect(directives).toContain('Allow: /')
  })
})
