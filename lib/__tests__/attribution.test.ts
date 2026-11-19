import { captureTouch, readAttribution, isCaptureAllowed } from '@/lib/attribution'

function fakeStorage() {
  const map = new Map<string, string>()
  return {
    getItem: (k: string) => (map.has(k) ? map.get(k)! : null),
    setItem: (k: string, v: string) => { map.set(k, v) },
    map,
  }
}

const DAY = 24 * 60 * 60 * 1000
const T0 = new Date('2026-11-01T12:00:00.000Z')

describe('source capture', () => {
  it('first visit stores first and last', () => {
    const s = fakeStorage()
    captureTouch('https://www.positivecheck.com/pricing?utm_source=google&utm_medium=cpc&utm_campaign=c1&utm_term=t&utm_content=x&gclid=G1', 'https://www.google.com/search?q=a', T0, s)
    const a = readAttribution(s, T0)
    expect(a.first_touch).toEqual({
      utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'c1', utm_term: 't', utm_content: 'x',
      gclid: 'G1', referrer_host: 'www.google.com', landing_path: '/pricing', at: T0.toISOString(),
    })
    expect(a.last_touch).toEqual(a.first_touch)
    expect(JSON.parse(s.map.get('pc_attr')!)).toHaveProperty('first')
  })

  it('second visit with utm updates last only', () => {
    const s = fakeStorage()
    captureTouch('https://www.positivecheck.com/?utm_source=a', '', T0, s)
    const T1 = new Date(T0.getTime() + 5 * DAY)
    captureTouch('https://www.positivecheck.com/blog?utm_source=b', '', T1, s)
    const a = readAttribution(s, T1)
    expect(a.first_touch?.utm_source).toBe('a')
    expect(a.last_touch?.utm_source).toBe('b')
    expect(a.last_touch?.at).toBe(T1.toISOString())
  })

  it('direct return visit changes nothing', () => {
    const s = fakeStorage()
    captureTouch('https://www.positivecheck.com/?utm_source=a', '', T0, s)
    const before = s.map.get('pc_attr')
    captureTouch('https://www.positivecheck.com/about', '', new Date(T0.getTime() + DAY), s)
    expect(s.map.get('pc_attr')).toBe(before)
  })

  it('first touch expires after 90 days', () => {
    const s = fakeStorage()
    captureTouch('https://www.positivecheck.com/?utm_source=old', '', T0, s)
    const late = new Date(T0.getTime() + 91 * DAY)
    expect(readAttribution(s, late).first_touch).toBeUndefined()
    captureTouch('https://www.positivecheck.com/new', '', late, s)
    const a = readAttribution(s, late)
    expect(a.first_touch?.landing_path).toBe('/new')
    expect(a.first_touch?.utm_source).toBeUndefined()
  })

  it('own-site referrer is not a source', () => {
    const s = fakeStorage()
    captureTouch('https://www.positivecheck.com/a', 'https://www.positivecheck.com/', T0, s)
    expect(readAttribution(s, T0).first_touch?.referrer_host).toBeUndefined()
    captureTouch('https://www.positivecheck.com/a', 'https://app.positivecheck.com/x', T0, s)
    expect(readAttribution(s, T0).first_touch?.referrer_host).toBeUndefined()
    const s2 = fakeStorage()
    captureTouch('https://www.positivecheck.com/', 'not a url', T0, s2)
    expect(readAttribution(s2, T0).first_touch?.referrer_host).toBeUndefined()
    // a look-alike host is NOT own site
    const s3 = fakeStorage()
    captureTouch('https://www.positivecheck.com/', 'https://evilpositivecheck.com/', T0, s3)
    expect(readAttribution(s3, T0).first_touch?.referrer_host).toBe('evilpositivecheck.com')
  })

  it('external referrer updates last on a later visit and host is lower-cased', () => {
    const s = fakeStorage()
    captureTouch('https://www.positivecheck.com/', '', T0, s)
    captureTouch('https://www.positivecheck.com/', 'https://News.Example.com/p?x=1', new Date(T0.getTime() + DAY), s)
    expect(readAttribution(s, T0).last_touch?.referrer_host).toBe('news.example.com')
  })

  it('query string is not stored in landing_path', () => {
    const s = fakeStorage()
    captureTouch('https://www.positivecheck.com/demo?email=a@b.com&token=secret&utm_source=x#frag', '', T0, s)
    const raw = s.map.get('pc_attr')!
    expect(raw).not.toContain('a@b.com')
    expect(raw).not.toContain('secret')
    expect(raw).not.toContain('frag')
    expect(readAttribution(s, T0).first_touch?.landing_path).toBe('/demo')
  })

  it('cuts values to 200 characters', () => {
    const s = fakeStorage()
    captureTouch(`https://www.positivecheck.com/?utm_source=${'a'.repeat(500)}`, '', T0, s)
    expect(readAttribution(s, T0).first_touch?.utm_source).toHaveLength(200)
  })

  it('broken storage does not throw', () => {
    const throwing = { getItem: () => { throw new Error('blocked') }, setItem: () => { throw new Error('blocked') } }
    expect(() => captureTouch('https://www.positivecheck.com/', '', T0, throwing)).not.toThrow()
    expect(readAttribution(throwing, T0)).toEqual({})
    const broken = fakeStorage()
    broken.map.set('pc_attr', '{not json')
    expect(readAttribution(broken, T0)).toEqual({})
    expect(() => captureTouch('https://www.positivecheck.com/?utm_source=a', '', T0, broken)).not.toThrow()
    expect(readAttribution(broken, T0).first_touch?.utm_source).toBe('a')
    expect(readAttribution(fakeStorage(), T0)).toEqual({})
  })

  it('blocked paths are not captured', () => {
    for (const p of ['/my-account', '/my-account/billing', '/sign-in', '/forgot-password', '/reset-password/abc']) {
      expect(isCaptureAllowed(p)).toBe(false)
    }
    for (const p of ['/', '/pricing', '/my-accountant', '/sign-insights']) {
      expect(isCaptureAllowed(p)).toBe(true)
    }
  })
})
