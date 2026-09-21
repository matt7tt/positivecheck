import { readFileSync } from 'fs'
import { join } from 'path'

describe('custom form-start event naming', () => {
  it.each([
    ['app/contact/page.tsx', 'contact_page'],
    ['app/page.tsx', 'homepage_contact'],
    ['components/lola-call-modal.tsx', 'lola_call'],
    ['components/demo.tsx', 'demo_page'],
    ['components/request-demo-modal.tsx', 'demo_request'],
    ['components/contact-form.tsx', 'contact_form'],
  ])('%s uses the custom event without colliding with GA4 enhanced measurement', (file, formName) => {
    const source = readFileSync(join(process.cwd(), file), 'utf8')
    expect(source).toMatch(new RegExp(`trackEvent\\(['"]lead_form_start['"],\\s*\\{\\s*form_name:\\s*['"]${formName}['"]`))
    expect(source).not.toMatch(/trackEvent\(['"]form_start['"]/)
  })
})
