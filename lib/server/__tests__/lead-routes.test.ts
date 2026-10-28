import { POST as demo } from '@/app/api/request-demo/route'
import { POST as contact } from '@/app/api/contact/route'
import { forwardLeadToCrm } from '@/lib/server/lead-delivery'

const mockSend = jest.fn()
jest.mock('resend', () => ({ Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })) }))
jest.mock('next/server', () => ({
  NextResponse: { json: (body: unknown, options: { status: number }) => ({ status: options.status, json: async () => body }) },
}))
jest.mock('@/lib/server/lead-delivery', () => ({
  ...jest.requireActual('@/lib/server/lead-delivery'),
  createLeadPayload: (type: string, fields: unknown, attribution: unknown) => ({ id: 'synthetic-lead', type, fields, attribution }),
  forwardLeadToCrm: jest.fn(),
}))

const originalKey = process.env.RESEND_API_KEY
const req = (body: unknown) => ({ json: async () => body } as Request)
const valid = { name: 'Synthetic Test', firstName: 'Synthetic', email: 'synthetic@example.com' }

describe.each([['demo', demo], ['contact', contact]] as const)('%s delivery resilience', (_name, post) => {
  beforeEach(() => {
    jest.clearAllMocks()
    process.env.RESEND_API_KEY = 'test-only'
    mockSend.mockResolvedValue({ error: null })
    jest.mocked(forwardLeadToCrm).mockResolvedValue(false)
    jest.spyOn(console, 'info').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })
  afterEach(() => jest.restoreAllMocks())
  afterAll(() => {
    if (originalKey === undefined) delete process.env.RESEND_API_KEY
    else process.env.RESEND_API_KEY = originalKey
  })

  it('preserves CRM acceptance when email throws', async () => {
    mockSend.mockRejectedValue(new Error('Provider rejected'))
    jest.mocked(forwardLeadToCrm).mockResolvedValue(true)
    const response = await post(req(valid))
    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ crmDelivered: true, emailDelivered: false })
    expect(mockSend).toHaveBeenCalledTimes(1)
    expect(forwardLeadToCrm).toHaveBeenCalledTimes(1)
  })

  it('preserves email acceptance when CRM throws', async () => {
    jest.mocked(forwardLeadToCrm).mockRejectedValue(new Error('Webhook rejected'))
    const response = await post(req(valid))
    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ crmDelivered: false, emailDelivered: true })
  })

  it.each(['exception', 'provider_error'])('returns 502 when neither channel accepts (%s)', async kind => {
    if (kind === 'exception') mockSend.mockRejectedValue(new Error('Provider rejected'))
    else mockSend.mockResolvedValue({ error: { message: 'Rejected' } })
    const response = await post(req(valid))
    expect(response.status).toBe(502)
  })

  it.each([null, [], 'text'])('rejects a malformed body before delivery: %p', async body => {
    expect((await post(req(body))).status).toBe(400)
    expect(mockSend).not.toHaveBeenCalled()
    expect(forwardLeadToCrm).not.toHaveBeenCalled()
  })

  it('rejects invalid JSON before delivery', async () => {
    expect((await post({ json: async () => { throw new SyntaxError() } } as unknown as Request)).status).toBe(400)
    expect(mockSend).not.toHaveBeenCalled()
  })

  it('rejects an overlong email without truncating it into a different address', async () => {
    const email = 'a'.repeat(242) + '@example.com' + '.extra'
    expect((await post(req({ ...valid, email }))).status).toBe(400)
    expect(mockSend).not.toHaveBeenCalled()
  })

  it('logs channel acceptance without visitor details', async () => {
    await post(req(valid))
    expect(console.info).toHaveBeenCalledWith('Lead accepted', expect.objectContaining({ emailDelivered: true }))
    expect(JSON.stringify(jest.mocked(console.info).mock.calls)).not.toContain(valid.email)
  })
})

it('rejects an invalid supplied email even when a contact phone is valid', async () => {
  expect((await contact(req({ ...valid, email: 'invalid', phone: '+12025550100' }))).status).toBe(400)
})
