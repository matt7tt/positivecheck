import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const rpmCodeDefinitions = {
  '99457': {
    title: 'CPT 99457: Definition and RPM Interactive Communication Requirements | Positive Check Glossary',
    name: 'RPM treatment management: first 20 minutes per calendar month',
    definition: 'CPT 99457 describes the first 20 minutes of qualifying remote physiologic monitoring treatment-management time in a calendar month, including required interactive communication with the patient or caregiver. The total can include qualifying care-management work as well as the live conversation; it is not a requirement for a 20-minute call.',
    pathway: 'At least 20 qualifying minutes are required for 99457, along with the other RPM service requirements. Additional qualifying time may support 99458 under its reporting instructions. A shorter month must not be rounded up; assess the 2026 99470 pathway independently when appropriate.',
  },
  '99458': {
    title: 'CPT 99458: Definition and RPM Additional Interactive Communication | Positive Check Glossary',
    name: 'RPM treatment management: each additional 20 minutes per calendar month',
    definition: 'CPT 99458 is an add-on for each additional 20 minutes of qualifying RPM treatment-management time beyond the initial 99457 service. Qualifying care-management work and required interactive communication contribute to the management total. Automated call duration does not independently establish additional qualifying time.',
    pathway: '99458 is not a standalone service. Check the base service, each additional time increment, current unit limits and payer edits before reporting it. More device readings or more automated calls do not by themselves support additional units. Keep the monthly record attributable to the actual qualifying clinical work.',
  },
  '99470': {
    title: 'CPT 99470: New 2026 RPM Treatment Management Code (First 10 Minutes) | Positive Check Glossary',
    name: 'RPM treatment management: first 10 minutes per calendar month',
    definition: 'CPT 99470 is a 2026 RPM treatment-management pathway for a qualifying monthly total beginning at 10 minutes and below 20 minutes. Required interactive communication is part of the service, but the threshold concerns total qualifying treatment-management work, not only live-call duration.',
    pathway: 'Assess 99470 separately when the month is below the 99457 threshold. Meeting a time threshold alone is not sufficient: communication, medical necessity, personnel, consent, device and other service requirements still apply. Follow current reporting instructions for alternative and add-on codes rather than combining code totals automatically.',
  },
} as const

export type RPMCode = keyof typeof rpmCodeDefinitions
const SITE = 'https://www.positivecheck.com'
const GUIDE = '/solutions/remote-patient-monitoring/cpt-99457-billing-guide'
const TIME_SOURCE = 'https://www.cms.gov/newsroom/fact-sheets/final-policy-payment-and-quality-provisions-changes-medicare-physician-fee-schedule-calendar-year-1'
const CURRENT_SOURCE = 'https://www.cms.gov/files/document/mln901705-telehealth-remote-patient-monitoring.pdf'
const UPDATE_SOURCE = 'https://med.noridianmedicare.com/web/jeb/article-detail/-/view/10525/remote-physiologic-monitoring-rpm-2026-evaluation-and-management-em-updates'

export function rpmCodeMetadata(code: RPMCode): Metadata {
  const data = rpmCodeDefinitions[code]
  const path = `/resources/glossary/cpt-${code}`
  return {
    title: data.title, description: data.definition, alternates: { canonical: path },
    openGraph: { title: data.name, description: data.definition, url: path, type: 'article', siteName: 'Positive Check', locale: 'en_US' },
    twitter: { card: 'summary', title: data.name, description: data.definition },
  }
}

export function RPMCodeGlossary({ code }: { code: RPMCode }) {
  const data = rpmCodeDefinitions[code]
  const breadcrumbs = [
    { name: 'Home', url: SITE }, { name: 'Resources', url: `${SITE}/resources` },
    { name: 'Glossary', url: `${SITE}/resources/glossary` },
    { name: `CPT ${code}`, url: `${SITE}/resources/glossary/cpt-${code}` },
  ]
  return <>
    <StructuredData id={`cpt-${code}-breadcrumb`} data={buildBreadcrumbSchema(breadcrumbs)} />
    <StructuredData id={`cpt-${code}-term`} data={buildCPTCodeSchema({ code, name: data.name, description: data.definition, category: 'Remote Patient Monitoring' })} />
    <PublicHeader currentPage="platform" />
    <main>
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Glossary</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">CPT {code}</h1>
          <p className="text-xl text-purple-100 leading-relaxed">{data.definition}</p>
        </div>
      </section>
      <article className="max-w-3xl mx-auto px-6 py-12 text-gray-700 leading-relaxed space-y-8">
        <section><h2 className="text-2xl font-bold text-gray-900 mb-4">When this pathway applies</h2><p>{data.pathway}</p></section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What belongs in the time record</h2>
          <p>Record the date, eligible staff member, clinical activity, duration, and resulting action. Identify the required real-time patient or caregiver conversation separately from other qualifying treatment-management work. Reviewing and managing physiologic data can contribute when it is part of the covered service; passive data transmission alone is not staff work.</p>
          <p className="mt-4">Do not count software runtime as clinical staff time or use the same time for another billed service. The device collection period and management time have separate requirements. Consent, an established relationship, medical necessity, eligible personnel, and applicable supervision also need review.</p>
          <Link href={GUIDE} className="inline-block mt-4 text-purple-700 underline">See the 99457 activity-log example and complete workflow checks</Link>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Positive Check relates</h2>
          <p>Positive Check supports outreach and staff handoffs. Automated interactions and generated transcripts do not independently establish qualifying clinical work or claim eligibility. The practice retains clinical and billing responsibility; review actual human involvement and documentation before selecting a code.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources and scope</h2>
          <p>Editorial source check: September 20, 2026; not independent clinical or coding sign-off. This educational definition is not a claim approval. Confirm current CPT, CMS, MAC, payer and setting-specific rules. Payment varies by service year, locality, setting and payer; no flat reimbursement amount is promised here.</p>
          <ul className="mt-4 space-y-2 text-purple-700 underline">
            <li><a href={TIME_SOURCE}>CMS clarification: management time and required communication</a></li>
            <li><a href={CURRENT_SOURCE}>CMS Telehealth &amp; Remote Monitoring booklet (December 2025)</a></li>
            <li><a href={UPDATE_SOURCE}>Noridian Medicare: 2026 RPM code updates</a></li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related terms</h2>
          <ul className="space-y-2 text-purple-700 underline">
            {(Object.keys(rpmCodeDefinitions) as RPMCode[]).filter(other => other !== code).map(other => <li key={other}><Link href={`/resources/glossary/cpt-${other}`}>CPT {other}: {rpmCodeDefinitions[other].name}</Link></li>)}
            <li><Link href="/resources/glossary/cpt-99454">CPT 99454: device supply and transmission</Link></li>
            <li><Link href="/resources/glossary/interactive-communication-requirement">Interactive communication requirement</Link></li>
            <li><Link href="/resources/compare/rpm-vs-ccm-medicare-billing">RPM versus CCM</Link></li>
            <li><Link href="/resources/glossary">Back to glossary</Link></li>
          </ul>
        </section>
      </article>
    </main>
    <PublicFooter />
  </>
}
