import { POST } from '@/app/api/marketing-lead/route'

jest.mock('next/server', () => ({
  NextResponse: class {
    status: number
    body: unknown
    constructor(body: unknown, init: { status: number }) { this.body = body; this.status = init.status }
  },
}))

const originalFetch = global.fetch
const originalUrl = process.env.PLATFORM_API_URL
const originalKey = process.env.PLATFORM_LEAD_KEY
const LEAD = {
  kind: 'contact', name: 'Synthetic Test', email: 'synthetic@example.com', phone: '+14155550100',
  practice: 'Synthetic Clinic', self_reported_source: 'a friend',
  first_touch: { utm_source: 'chatgpt', utm_medium: 'cpc' }, last_touch: { utm_source: 'google' },
}

function request(body: unknown, headers: Record<string, string> = { 'x-forwarded-for': '198.51.100.7, 10.0.0.1' }) {
  const raw = typeof body === 'string' ? body : JSON.stringify(body)
  const lower = Object.fromEntries(Object.entries(headers).map(([k, v]) => [k.toLowerCase(), v]))
  return { text: async () => raw, headers: { get: (name: string) => lower[name.toLowerCase()] ?? null } } as unknown as Request
}

const forwarded = () => jest.mocked(fetch).mock.calls

describe('marketing lead server route', () => {
  beforeEach(() => {
    process.env.PLATFORM_API_URL = 'https://platform.example.com/'
    process.env.PLATFORM_LEAD_KEY = 'synthetic-lead-key'
    global.fetch = jest.fn().mockResolvedValue({ ok: true, status: 200 })
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest.spyOn(console, 'log').mockImplementation(() => {})
  })
  afterEach(() => { jest.restoreAllMocks(); jest.useRealTimers() })
  afterAll(() => {
    global.fetch = originalFetch
    if (originalUrl === undefined) delete process.env.PLATFORM_API_URL
    else process.env.PLATFORM_API_URL = originalUrl
    if (originalKey === undefined) delete process.env.PLATFORM_LEAD_KEY
    else process.env.PLATFORM_LEAD_KEY = originalKey
  })

  it('forwards whitelisted fields with key and client ip', async () => {
    const result = await POST(request(LEAD))
    expect(result.status).toBe(204)
    expect(forwarded()).toHaveLength(1)
    const [url, init] = forwarded()[0]
    expect(url).toBe('https://platform.example.com/api/marketing/lead')
    expect(init).toMatchObject({ method: 'POST', signal: expect.anything() })
    expect(init!.headers).toEqual({
      'Content-Type': 'application/json', 'X-API-Key': 'synthetic-lead-key', 'X-Lead-Client-IP': '198.51.100.7',
    })
    expect(JSON.parse(init!.body as string)).toEqual(LEAD)
  })

  it('falls back to x-real-ip, then sends no client ip', async () => {
    await POST(request(LEAD, { 'x-real-ip': '203.0.113.5' }))
    expect((forwarded()[0][1]!.headers as Record<string, string>)['X-Lead-Client-IP']).toBe('203.0.113.5')
    await POST(request(LEAD, {}))
    expect(forwarded()[1][1]!.headers).not.toHaveProperty('X-Lead-Client-IP')
  })

  it('drops unknown fields', async () => {
    await POST(request({ ...LEAD, message: 'private message', is_admin: true }))
    expect(JSON.parse(forwarded()[0][1]!.body as string)).toEqual(LEAD)
  })

  it('204 and no forward when env is unset', async () => {
    delete process.env.PLATFORM_API_URL
    expect((await POST(request(LEAD))).status).toBe(204)
    process.env.PLATFORM_API_URL = 'https://platform.example.com'
    delete process.env.PLATFORM_LEAD_KEY
    expect((await POST(request(LEAD))).status).toBe(204)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('204 and no forward for a body that is not an object', async () => {
    for (const body of ['not json', '[1,2]', 'null', '"text"']) {
      expect((await POST(request(body))).status).toBe(204)
    }
    expect(fetch).not.toHaveBeenCalled()
  })

  it('204 when upstream fails or times out', async () => {
    jest.mocked(fetch).mockResolvedValueOnce({ ok: false, status: 403, text: async () => 'private' } as Response)
    expect((await POST(request(LEAD))).status).toBe(204)
    jest.mocked(fetch).mockRejectedValueOnce(new Error('network down'))
    expect((await POST(request(LEAD))).status).toBe(204)

    jest.useFakeTimers()
    jest.mocked(fetch).mockImplementationOnce((_url, init) => new Promise((_resolve, reject) => {
      init!.signal!.addEventListener('abort', () => reject(new Error('aborted')))
    }))
    const pending = POST(request(LEAD))
    await jest.advanceTimersByTimeAsync(5000)
    expect((await pending).status).toBe(204)
    expect(forwarded()[2][1]!.signal!.aborted).toBe(true)
  })

  it('204 and no forward for a body over 16 KB', async () => {
    expect((await POST(request({ ...LEAD, practice: 'x'.repeat(16 * 1024) }))).status).toBe(204)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('never logs the body', async () => {
    jest.mocked(fetch).mockResolvedValueOnce({ ok: false, status: 500 } as Response)
    await POST(request(LEAD))
    const logged = JSON.stringify([...jest.mocked(console.error).mock.calls, ...jest.mocked(console.log).mock.calls])
    expect(logged).not.toContain('synthetic@example.com')
    expect(logged).not.toContain('Synthetic Test')
  })
})
