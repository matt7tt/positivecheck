import { hasPrivacySignal, isHeatmapVisit, readHeatmapChoice } from '../heatmap-privacy'

const paths = ['/', '/contact', '/solutions', '/privacy']
const visit = (url: string, referrer = '') => isHeatmapVisit(new URL(url), referrer, paths)

describe('heatmap privacy boundaries', () => {
  it.each(['https://positivecheck.com/', 'https://www.positivecheck.com/contact'])('allows public production route %s', url => {
    expect(visit(url)).toBe(true)
  })
  it.each([
    'https://provider.positivecheck.com/', 'https://preview.vercel.app/', 'http://localhost:3000/',
    'https://www.positivecheck.com/sign-in', 'https://www.positivecheck.com/my-account',
    'https://www.positivecheck.com/admin-new', 'https://www.positivecheck.com/api/contact',
    'https://www.positivecheck.com/new-unreviewed-page',
    'https://www.positivecheck.com/?email=test@example.com',
    'https://www.positivecheck.com/?utm_source=email', 'https://www.positivecheck.com/#token',
  ])('excludes %s', url => expect(visit(url)).toBe(false))
  it.each([
    'https://provider.positivecheck.com/admin-new', 'https://www.positivecheck.com/reset-password',
    'https://www.positivecheck.com/?token=secret', 'https://other.example/private/path',
    'https://google.com/?q=private', 'invalid',
  ])('excludes potentially sensitive referrer %s', referrer => {
    expect(visit('https://www.positivecheck.com/', referrer)).toBe(false)
  })
  it.each(['https://www.google.com/', 'https://www.positivecheck.com/solutions'])('allows safe referrer %s', referrer => {
    expect(visit('https://www.positivecheck.com/', referrer)).toBe(true)
  })
  it('requires a current, valid saved choice and fails closed', () => {
    const stored = (value: string | null) => ({ getItem: () => value })
    expect(readHeatmapChoice(stored(null))).toBeNull()
    expect(readHeatmapChoice(stored('broken'))).toBeNull()
    expect(readHeatmapChoice(stored(JSON.stringify({ choice: 'accepted', at: 0 })), 181 * 86400000)).toBeNull()
    expect(readHeatmapChoice(stored(JSON.stringify({ choice: 'accepted', at: 100 })), 50)).toBeNull()
    expect(readHeatmapChoice(stored(JSON.stringify({ choice: 'accepted', at: 100 })), 101)).toBe('accepted')
    expect(readHeatmapChoice({ getItem: () => { throw new Error('blocked') } })).toBeNull()
  })
  it('honors browser privacy signals', () => {
    expect(hasPrivacySignal({ globalPrivacyControl: true })).toBe(true)
    expect(hasPrivacySignal({ doNotTrack: '1' })).toBe(true)
    expect(hasPrivacySignal({ doNotTrack: '0' })).toBe(false)
  })
})
