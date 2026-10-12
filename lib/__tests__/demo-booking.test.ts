import { getDemoBookingUrl } from '@/lib/demo-booking'

describe('operator-configured demo booking URL', () => {
  it('accepts an HTTPS calendar without adding contact details', () => {
    expect(getDemoBookingUrl(' https://example.com/team?duration=15 ')).toBe('https://example.com/team?duration=15')
  })

  it.each([undefined, '', 'not a url', '/calendar', '//example.com', 'javascript:alert(1)', 'http://example.com', 'https://user:password@example.com'])('rejects invalid or unsafe configuration: %s', value => {
    expect(getDemoBookingUrl(value)).toBeUndefined()
  })
})
