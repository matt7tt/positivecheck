import { POST } from '@/app/api/lola-call/route'

jest.mock('next/server', () => ({
  NextResponse: { json: (body: unknown, options: { status: number }) => ({ status: options.status, json: async () => body }) },
}))
const originalFetch = global.fetch
const originalUrl = process.env.LOLA_BACKEND_URL
const originalKey = process.env.LOLA_BACKEND_API_KEY
const valid = { firstName: ' Synthetic ', lastName: ' Test ', email: 'TEST@example.com', phone: '+14155550100', consent: true }
const request = (body: unknown = valid) => ({ json: async () => body } as Request)

describe('Lola callback request boundary', () => {
  beforeEach(() => {
    process.env.LOLA_BACKEND_URL = 'https://callback.example.com/'
    process.env.LOLA_BACKEND_API_KEY = 'synthetic-test-key'
    global.fetch = jest.fn().mockResolvedValue({ ok: true })
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })
  afterEach(() => jest.restoreAllMocks())
  afterAll(() => {
    global.fetch = originalFetch
    if (originalUrl === undefined) delete process.env.LOLA_BACKEND_URL
    else process.env.LOLA_BACKEND_URL = originalUrl
    if (originalKey === undefined) delete process.env.LOLA_BACKEND_API_KEY
    else process.env.LOLA_BACKEND_API_KEY = originalKey
  })
  it.each([false, undefined, 'true'])('rejects missing or non-boolean consent (%s) without delivery', async consent => {
    expect((await POST(request({ ...valid, consent }))).status).toBe(400)
    expect(fetch).not.toHaveBeenCalled()
  })
  it.each([{ phone: '4155550100' }, { phone: '+141555501009999999' }, { email: 'invalid' }, { email: `${'x'.repeat(250)}@example.com` }, { firstName: '' }])('rejects invalid contact details %j', async changes => {
    expect((await POST(request({ ...valid, ...changes }))).status).toBe(400)
    expect(fetch).not.toHaveBeenCalled()
  })
  it('rejects malformed JSON', async () => {
    expect((await POST({ json: async () => { throw new SyntaxError('bad JSON') } } as unknown as Request)).status).toBe(400)
  })
  it('returns a safe unavailable message without configuration', async () => {
    delete process.env.LOLA_BACKEND_API_KEY
    const result = await POST(request())
    expect(result.status).toBe(503)
    expect(JSON.stringify(await result.json())).not.toContain('API_KEY')
    expect(fetch).not.toHaveBeenCalled()
  })
  it('normalizes details and submits exactly once to the existing backend contract', async () => {
    const result = await POST(request())
    expect(result.status).toBe(200)
    expect(await result.json()).toEqual({ ok: true })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://callback.example.com/api/leads', expect.objectContaining({
      body: JSON.stringify({ first_name: 'Synthetic', last_name: 'Test', email: 'test@example.com', phone_e164: '+14155550100' }),
      signal: expect.anything(),
    }))
  })
  it.each([[409, 409], [429, 429], [422, 400], [401, 502], [500, 502]])('maps upstream %s safely to %s', async (upstreamStatus, expected) => {
    jest.mocked(fetch).mockResolvedValue({ ok: false, status: upstreamStatus, text: async () => 'private contact details' } as Response)
    const result = await POST(request())
    expect(result.status).toBe(expected)
    expect(JSON.stringify(await result.json())).not.toContain('private contact details')
  })
  it('does not retry ambiguous network failures', async () => {
    jest.mocked(fetch).mockRejectedValue(new Error('private upstream error'))
    const result = await POST(request())
    expect(result.status).toBe(502)
    expect(await result.json()).toEqual({ error: expect.stringContaining('Check your inbox before trying again') })
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
