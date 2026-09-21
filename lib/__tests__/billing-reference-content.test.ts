import { billingReferenceMetadata } from '@/components/billing-reference-guide'
import { billingReferences, ccmBillingGuide, rpmBillingGuide, tcmBillingGuide, rpmCcmComparison } from '@/lib/billing-reference-content'

describe('source-checked billing references', () => {
  it.each(billingReferences)('preserves the canonical and search title for $id', guide => {
    const metadata = billingReferenceMetadata(guide)
    expect(metadata.alternates?.canonical).toBe(guide.path)
    expect(metadata.title).toBe(guide.seoTitle)
    expect(guide.updated).toBe('2026-09-20')
    expect(new Date(guide.published).getTime()).toBeLessThan(new Date(guide.updated).getTime())
    expect(new Set(guide.sections.map(section => section.id)).size).toBe(guide.sections.length)
    expect(guide.sources.length).toBeGreaterThan(0)
    for (const source of guide.sources) {
      expect(['www.cms.gov', 'med.noridianmedicare.com']).toContain(new URL(source.href).hostname)
    }
    for (const section of guide.sections) {
      for (const row of section.table?.rows ?? []) {
        expect(row).toHaveLength(section.table?.headings.length ?? 0)
      }
    }
  })

  it('distinguishes total RPM time from live call time', () => {
    expect(rpmBillingGuide.summary).toContain('does not require all 20 minutes to be a live conversation')
    const example = rpmBillingGuide.sections.find(section => section.id === 'worked-example')?.table
    expect(example?.rows.reduce((total, row) => total + Number(row[1]), 0)).toBe(20)
    expect(example?.rows[1][1]).toBe('7')
    expect(JSON.stringify(rpmBillingGuide)).toContain('Do not apply a universal 16-day data rule to 99457')
  })

  it('does not present complex CCM as a 99490 add-on', () => {
    expect(ccmBillingGuide.summary).toContain('separate pathway, not an add-on to 99490')
    const example = ccmBillingGuide.sections.find(section => section.id === 'time-record')?.table
    expect(example?.rows.reduce((total, row) => total + Number(row[1]), 0)).toBe(20)
  })

  it('retains TCM exceptions and avoids unconditional claim approval', () => {
    const text = JSON.stringify(tcmBillingGuide)
    expect(text).toContain('two or more separate, timely contact attempts')
    expect(text).toContain('at least moderate-complexity')
    expect(text).toContain('discharge from a skilled nursing facility')
    expect(text).toContain('not an automatic new payable claim')
    expect(text).not.toContain('$178')
  })

  it('keeps program minutes separate and avoids payment guarantees', () => {
    expect(JSON.stringify(rpmCcmComparison)).toContain('does not meet either the 99457 or 99490 threshold')
    for (const guide of billingReferences) {
      expect(JSON.stringify(guide)).not.toMatch(/\$\d|audit-proof|guaranteed reimbursement/i)
    }
  })
})
