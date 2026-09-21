import { render, screen } from '@testing-library/react'
import fs from 'node:fs'
import path from 'node:path'
import { RPMCodeGlossary, rpmCodeDefinitions, rpmCodeMetadata, type RPMCode } from '@/components/rpm-code-glossary'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))

describe('billing consistency', () => {
  it.each(Object.keys(rpmCodeDefinitions) as RPMCode[])('%s keeps the visible definition and structured data identical', code => {
    const { container } = render(<RPMCodeGlossary code={code} />)
    const data = rpmCodeDefinitions[code]
    expect(screen.getByText(data.definition)).toBeVisible()
    const schemas = Array.from(container.querySelectorAll('script[type="application/ld+json"]')).map(node => JSON.parse(node.textContent || '{}'))
    expect(schemas.some(schema => JSON.stringify(schema).includes(data.definition))).toBe(true)
    expect(rpmCodeMetadata(code).alternates?.canonical).toBe(`/resources/glossary/cpt-${code}`)
    expect(rpmCodeMetadata(code).title).toBe(data.title)
    expect(container.textContent).not.toMatch(/\$\d|asynchronous data review does not count|without requiring additional clinical staff time/)
  })

  it('does not reintroduce the known time, consent, AI or CCM errors in published source', () => {
    const roots = ['app', 'components', 'lib']
    const banned = [
      /(?:first|additional|minimum of) (?:10|20) minutes of (?:RPM )?interactive communication/i,
      /asynchronous data review (?:time )?does not count/i,
      /RPM does not have an explicit consent requirement/i,
      /how 99439\/99487\/99489 stack/i,
      /An AI call that captures the required elements[^.]*satisfies the CMS requirement/i,
      /unlocking 99458 billings/i,
      /per-call durations into monthly summaries that correspond directly to the time-threshold/i,
    ]
    for (const root of roots) {
      const files = fs.readdirSync(path.join(process.cwd(), root), { recursive: true }) as string[]
      for (const file of files.filter(file => /\.(tsx|ts)$/.test(file) && !file.includes('__tests__'))) {
        const source = fs.readFileSync(path.join(process.cwd(), root, file), 'utf8').replace(/\s+/g, ' ')
        for (const pattern of banned) expect({ file, match: source.match(pattern)?.[0] }).toEqual({ file, match: undefined })
      }
    }
  })
})
