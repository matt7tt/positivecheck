import { getDemoBookingUrl } from '@/lib/demo-booking'

describe('operator-configured demo booking URL', () => {
  it('accepts an HTTPS calendar without adding contact details', () => {
    expect(getDemoBookingUrl(' https://example.com/team?duration=15 ')).toBe('https://example.com/team?duration=15')
  })

  it.each([undefined, '', 'not a url', '/calendar', '//example.com', 'javascript:alert(1)', 'http://example.com', 'https://user:password@example.com'])('rejects invalid or unsafe configuration: %s', value => {
    expect(getDemoBookingUrl(value)).toBeUndefined()
  })
})

describe('demo booking URL source tags', () => {
  const at = '2026-11-17T00:00:00.000Z'

  it('booking url carries first-touch utm', () => {
    const url = getDemoBookingUrl('https://example.com/team?duration=15', { utm_source: 'chatgpt', utm_medium: 'cpc', utm_campaign: 'c1', utm_term: 'x', at })
    const parsed = new URL(url!)
    expect(parsed.searchParams.get('duration')).toBe('15')
    expect(parsed.searchParams.get('utm_source')).toBe('chatgpt')
    expect(parsed.searchParams.get('utm_medium')).toBe('cpc')
    expect(parsed.searchParams.get('utm_campaign')).toBe('c1')
    expect(parsed.searchParams.has('utm_term')).toBe(false)
  })

  it('booking url unchanged with no touch', () => {
    expect(getDemoBookingUrl('https://example.com/team?duration=15')).toBe('https://example.com/team?duration=15')
    expect(getDemoBookingUrl('https://example.com/team', { at, landing_path: '/' })).toBe('https://example.com/team')
  })
})

