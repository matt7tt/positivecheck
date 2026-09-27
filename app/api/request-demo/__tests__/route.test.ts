import { POST } from '@/app/api/request-demo/route'
import { forwardLeadToCrm } from '@/lib/server/lead-delivery'
import { BILLING_WORKFLOW_OFFER as offer } from '@/lib/demo-offers'

const mockSend = jest.fn()
jest.mock('resend', () => ({ Resend: jest.fn().mockImplementation(() => ({ emails: { send: mockSend } })) }))
jest.mock('next/server', () => ({
  NextResponse: { json: (body: unknown, options: { status: number }) => ({ status: options.status, json: async () => body }) },
}))
jest.mock('@/lib/server/lead-delivery', () => ({
  ...jest.requireActual('@/lib/server/lead-delivery'),
  createLeadPayload: (type: string, fields: unknown, attribution: unknown) => ({ id: 'test-lead-id', type, fields, attribution }),
  forwardLeadToCrm: jest.fn(),
}))

const originalKey = process.env.RESEND_API_KEY
const request = (body: Record<string, unknown> = { name: 'Synthetic Test', email: 'synthetic@example.com' }) => ({ json: async () => body } as Request)

describe('demo request delivery contract', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    delete process.env.RESEND_API_KEY
    jest.mocked(forwardLeadToCrm).mockResolvedValue(false)
  })
  afterAll(() => {
    if (originalKey === undefined) delete process.env.RESEND_API_KEY
    else process.env.RESEND_API_KEY = originalKey
  })

  it('rejects invalid input before attempting delivery', async () => {
    expect((await POST(request({ name: '', email: 'invalid' }))).status).toBe(400)
    expect(mockSend).not.toHaveBeenCalled()
    expect(forwardLeadToCrm).not.toHaveBeenCalled()
  })

  it('returns failure when no delivery channel accepts the lead', async () => {
    expect((await POST(request())).status).toBe(502)
  })

  it('returns success when the CRM accepts the lead without email', async () => {
    jest.mocked(forwardLeadToCrm).mockResolvedValue(true)
    const response = await POST(request())
    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ leadId: 'test-lead-id', crmDelivered: true, emailDelivered: false })
  })

  it('returns success when email accepts the lead without a CRM', async () => {
    process.env.RESEND_API_KEY = 'test-only-not-a-real-key'
    mockSend.mockResolvedValue({ error: null })
    const response = await POST(request())
    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ crmDelivered: false, emailDelivered: true })
    expect(mockSend).toHaveBeenCalledWith(expect.objectContaining({ replyTo: 'synthetic@example.com' }))
  })

  it('includes the allowlisted offer in both the CRM payload and notification', async () => {
    process.env.RESEND_API_KEY = 'test-only-not-a-real-key'
    mockSend.mockResolvedValue({ error: null })
    const response = await POST(request({ name: 'Synthetic Test', email: 'synthetic@example.com', offer_id: offer.id }))
    expect(response.status).toBe(200)
    expect(forwardLeadToCrm).toHaveBeenCalledWith(expect.objectContaining({
      fields: { name: 'Synthetic Test', email: 'synthetic@example.com', organization: '', offer_id: offer.id },
    }))
    expect(mockSend.mock.calls[0][0].html).toContain(offer.id)
    expect(mockSend.mock.calls[0][0].html).toContain(offer.modalTitle)
  })

  it('ignores unknown offer values rather than forwarding arbitrary content', async () => {
    process.env.RESEND_API_KEY = 'test-only-not-a-real-key'
    mockSend.mockResolvedValue({ error: null })
    await POST(request({ name: 'Synthetic Test', email: 'synthetic@example.com', offer_id: '<script>untrusted</script>' }))
    expect(jest.mocked(forwardLeadToCrm).mock.calls[0][0].fields).not.toHaveProperty('offer_id')
    expect(mockSend.mock.calls[0][0].html).not.toContain('untrusted')
  })
})
