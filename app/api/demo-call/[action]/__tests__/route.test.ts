import { POST } from '@/app/api/demo-call/[action]/route'
import { demoRequest } from '@/lib/server/demo-booking'

jest.mock('@/lib/server/demo-booking', () => ({ demoRequest: jest.fn() }))
jest.mock('next/server', () => ({ NextResponse: class {
  status: number
  constructor(_body: unknown, options: {status: number}) { this.status = options.status }
  static json(body: unknown, options: {status: number}) { return {status:options.status,json:async()=>body} }
}}))
const upstream = jest.mocked(demoRequest)
const request = (body = '{}', extra = {}) => ({
 url: 'https://www.positivecheck.com/api/demo-call/verify',
 headers: {get:(key:string)=>({origin:'https://www.positivecheck.com', 'x-vercel-forwarded-for':'192.0.2.4', ...extra} as Record<string,string>)[key] ?? null},
 text:async()=>body,
} as Request)
const params = (action='verify') => ({params:Promise.resolve({action})})
beforeEach(()=>{jest.clearAllMocks();upstream.mockResolvedValue({status:200,json:async()=>({ok:true})} as Response)})
it('allows only verification and booking',async()=>{
 expect((await POST(request(),params('admin'))).status).toBe(404)
 expect(upstream).not.toHaveBeenCalled()
})
it('rejects cross-origin submissions before requesting a code',async()=>{
 expect((await POST(request('{}',{origin:'https://attacker.example'}),params())).status).toBe(403)
 expect(upstream).not.toHaveBeenCalled()
})
it('preserves the trusted client IP and consent without forwarding user credentials',async()=>{
 const body={consent:true,consent_text:'Approved text',phone:'+14155550100'}
 await POST(request(JSON.stringify(body),{authorization:'must-not-forward'}),params())
 expect(upstream).toHaveBeenCalledWith('verify',expect.objectContaining({
  body:JSON.stringify(body),headers: {'Content-Type':'application/json','X-Forwarded-For':'192.0.2.4','User-Agent':''},
 }))
})
it('does not expose upstream server errors',async()=>{
 upstream.mockResolvedValue({status:503,json:async()=>({detail:'private backend detail'})} as Response)
 const response=await POST(request(),params());expect(response.status).toBe(503)
 expect(JSON.stringify(await response.json())).not.toContain('private backend detail')
})
it('rejects invalid JSON without contacting the backend',async()=>{
 expect((await POST(request('bad json'),params())).status).toBe(400)
 expect(upstream).not.toHaveBeenCalled()
})
