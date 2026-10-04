import { readFileSync } from 'fs'
import { join } from 'path'

describe('billing search titles', () => {
  it.each([
    ['app/blog/2026-rpm-cpt-codes/page.tsx', ['2026', 'RPM', '99445', '99454', '99457', '99458', '99470']],
    ['app/blog/ccm-billing-2026-cpt-codes-guide/page.tsx', ['2026', 'CCM', '99490', '99439', '99487', '99489']],
    ['app/resources/billing-guide/page.tsx', ['2026', 'CMS', 'Billing Guide', 'RPM', 'CCM', 'TCM', 'PCM']],
  ])('%s keeps the key topic terms in a concise title', (file, terms) => {
    const source = readFileSync(join(process.cwd(), file), 'utf8')
    const title = source.match(/export const metadata: Metadata = \{\s*title: '([^']+)'/)?.[1]
    expect(title).toBeDefined()
    expect(title!.length).toBeLessThan(70)
    for (const term of terms) expect(title).toContain(term)
    expect(title).toContain('Positive Check')
  })
})
