import { sendMarketingLead, readFirstTouch } from '@/lib/marketing-lead'

const mockFetch = jest.mocked(global.fetch)
const stored = {
  first: { utm_source: 'chatgpt', utm_medium: 'cpc', utm_campaign: 'c1', at: new Date().toISOString() },
  last: { utm_source: 'google', at: new Date().toISOString() },
}

describe('sendMarketingLead', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    window.localStorage.clear()
    mockFetch.mockResolvedValue({ ok: true } as Response)
  })

  it('posts lead with attribution to the same-origin route, without a key', () => {
    window.localStorage.setItem('pc_attr', JSON.stringify(stored))
    sendMarketingLead({ kind: 'contact', name: 'Jane Doe', email: 'j@example.com', phone: '', self_reported_source: 'google' })
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const [url, init] = mockFetch.mock.calls[0]
    expect(url).toBe('/api/marketing-lead')
    expect(init).toMatchObject({ method: 'POST', keepalive: true })
    expect((init as RequestInit).headers).toEqual({ 'Content-Type': 'application/json' })
    expect(JSON.parse((init as RequestInit).body as string)).toEqual({
      kind: 'contact', name: 'Jane Doe', email: 'j@example.com', self_reported_source: 'google',
      first_touch: stored.first, last_touch: stored.last,
    })
  })

  it('sends even when no platform settings are in the browser build', () => {
    delete process.env.NEXT_PUBLIC_API_BASE_URL
    delete process.env.NEXT_PUBLIC_API_KEY
    sendMarketingLead({ kind: 'contact', email: 'j@example.com' })
    expect(mockFetch).toHaveBeenCalledWith('/api/marketing-lead', expect.anything())
  })

  it('does not throw when fetch rejects', async () => {
    mockFetch.mockRejectedValue(new Error('network'))
    expect(() => sendMarketingLead({ kind: 'demo_call', email: 'j@example.com' })).not.toThrow()
    await Promise.resolve()
  })

  it('does not throw when fetch throws synchronously', () => {
    mockFetch.mockImplementation(() => { throw new Error('boom') })
    expect(() => sendMarketingLead({ kind: 'demo_call', email: 'j@example.com' })).not.toThrow()
  })

  it('does not throw when storage is blocked', () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked') })
    expect(() => sendMarketingLead({ kind: 'demo_request', email: 'j@example.com' })).not.toThrow()
    expect(readFirstTouch()).toBeUndefined()
    spy.mockRestore()
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(JSON.parse(mockFetch.mock.calls[0][1]!.body as string)).toEqual({ kind: 'demo_request', email: 'j@example.com' })
  })
})
