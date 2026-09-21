// app/resources/billing-guide/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import {
  StructuredData,
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFAQSchema,
} from '@/components/structured-data'
import { ContentConversionCta } from '@/components/content-conversion-cta'

export const metadata: Metadata = {
  title: '2026 CMS Care Program Billing Guide: RPM, CCM, TCM, PCM | Positive Check',
  description:
    'Comprehensive reference for Medicare care management billing: RPM (99453/99454/99457/99458 plus new 2026 codes 99445 and 99470), CCM (99490/99439/99487/99489), TCM (99495/99496), PCM (99424-99427). Eligibility, code pathways, payment verification, and documentation standards.',
  alternates: { canonical: '/resources/billing-guide' },
  openGraph: {
    title: '2026 CMS Care Program Billing Guide: RPM, CCM, TCM, PCM',
    description:
      'Comprehensive Medicare care management billing reference updated for the 2026 CMS Final Rule. Programs, CPT codes (including new 99445 and 99470), eligibility, concurrent-service checks, and documentation.',
    url: '/resources/billing-guide',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: '2026 CMS Care Program Billing Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 CMS Care Program Billing Guide: RPM, CCM, TCM, PCM',
    description: 'Medicare care management billing reference.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const PAGE_URL = 'https://www.positivecheck.com/resources/billing-guide'
const HERO_IMAGE = 'https://www.positivecheck.com/images/admin-console-dashboard-new.png'

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://www.positivecheck.com' },
  { name: 'Resources', url: 'https://www.positivecheck.com/resources' },
  { name: 'Billing Guide', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: '2026 CMS Care Program Billing Guide: RPM, CCM, TCM, PCM',
  description: 'Comprehensive reference for Medicare care management billing across RPM, CCM, TCM, and PCM programs, updated for the 2026 CMS Final Rule.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-21',
  dateModified: '2026-09-20',
})

const faqs = [
  { question: 'Can RPM and CCM be billed in the same month?', answer: 'Yes, when each service is medically necessary and independently satisfies its requirements. Record the actual activities and time assigned to each program, and never count the same time or effort twice. Concurrent enrollment alone is insufficient; check current payer and reporting restrictions before submitting either claim.' },
  { question: 'What is the main eligibility difference between RPM and CCM?', answer: 'RPM can support an acute or chronic condition when physiologic monitoring informs care. CCM requires two or more qualifying chronic conditions expected to last at least 12 months or until death and creating significant risk. Both programs have additional requirements; diagnosis labels alone do not establish eligibility or claim approval.' },
  { question: 'Does RPM require patient consent?', answer: 'Yes. CMS requires consent for RPM and allows it to be obtained when the service is furnished. Document consent alongside the established relationship, medical necessity, and other service requirements. CCM has its own consent disclosures, including potential cost sharing and the one-practitioner rule; check each program separately.' },
  { question: 'Does 99457 require a 20-minute live conversation?', answer: 'No. The 20-minute threshold is total qualifying RPM treatment-management time, including required interactive communication. Qualifying care-management work may contribute alongside the live conversation. Distinguish staff work from automated activity, retain activity-level records, and verify all other requirements; a call transcript or timer alone does not establish claim eligibility.' },
  { question: 'Can complex CCM be added to non-complex CCM?', answer: 'No. Complex CCM is a separate pathway, not an add-on to 99490. Do not report non-complex and complex CCM for the same patient in the same calendar month. Assess the time, decision-making, and care-plan requirements of the appropriate pathway; additional non-complex clinical staff time uses 99439 when its conditions are met.' },
  { question: 'How should a practice estimate reimbursement before adopting software?', answer: 'Use current payer-specific payment information for the service year, locality, and setting, and count only independently qualifying services. Include retained staff, devices, software, training, and quality-review costs. A national average or vendor revenue projection is not a claim determination; test the workflow and documentation before relying on an estimate.' },
]

const faqSchema = buildFAQSchema(faqs)

export default function BillingGuideIndexPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="billing-guide-breadcrumb" />
      <StructuredData data={article} id="billing-guide-article" />
      <StructuredData data={faqSchema} id="billing-guide-faq" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />

        <main>
          {/* Hero */}
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Billing Guide</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                2026 CMS Care Program Billing Guide
              </h1>
              <p className="text-lg sm:text-xl text-purple-100 leading-relaxed">
                A practical 2026 reference for RPM, CCM, TCM, and PCM codes, eligibility, stacking rules, and documentation.
              </p>
            </div>
          </section>

          {/* Body */}
          <section className="px-6 py-12 bg-white">
            <div className="max-w-4xl mx-auto">

              {/* TL;DR box */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>Four programs cover distinct clinical scenarios.</strong> RPM for physiologic monitoring,
                    CCM for multi-condition coordination, TCM for the 30-day post-discharge window, PCM for a single
                    high-risk condition.
                  </li>
                  <li>
                    <strong>CPT code sets:</strong> RPM 99453/99454/99457/99458 (plus new 2026 codes 99445 and 99470); CCM 99490/99439/99487/99489; TCM
                    99495/99496; PCM 99424{'\u2013'}99427.
                  </li>
                  <li><strong>Verify each service independently.</strong> Time, clinical work, consent and other program requirements must be met; software activity does not establish billable care.</li>
                  <li><strong>Rules to remember:</strong> Do not double-count time or effort. Complex CCM is a separate pathway from non-complex CCM. Check code-specific restrictions and practitioner responsibilities before concurrent billing.</li>
                  <li><strong>Verify payment locally.</strong> Use the applicable service year, payer, locality and setting. This reference does not promise a national reimbursement amount.</li>
                </ul>
              </div>

              <ContentConversionCta
                source="billing_guide_summary"
                title="Model the workflow behind the reimbursement"
                description="Estimate your RPM, CCM, and post-discharge opportunity, then see how Positive Check supports outreach, documentation, and exception routing at scale."
                buttonText="See the care workflow"
              />

              {/* Programs at a glance */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                The 3 CMS care management programs at a glance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                RPM, CCM, and TCM each address a different phase or dimension of chronic-condition care. Used
                together they form a complementary longitudinal strategy: TCM catches patients at the highest-risk
                post-discharge window, CCM provides ongoing multi-condition coordination, and RPM layers in
                continuous physiologic surveillance. Understanding where each program begins and ends is the
                foundation for compliant concurrent billing.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* RPM card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2 font-medium">RPM</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Remote Patient Monitoring</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><span className="font-medium">Criterion:</span> Acute or chronic condition with actionable physiologic data</li>
                    <li><span className="font-medium">Time mechanic:</span> Device collection periods and qualifying management time have separate rules</li>
                    <li><span className="font-medium">Payment:</span> Verify current payer, locality, setting, and service requirements</li>
                  </ul>
                  <Link
                    href="/solutions/remote-patient-monitoring"
                    className="mt-4 inline-block text-sm text-purple-700 underline hover:text-purple-900"
                  >
                    RPM solution overview
                  </Link>
                </div>
                {/* CCM card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2 font-medium">CCM</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Chronic Care Management</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><span className="font-medium">Criterion:</span> 2+ chronic conditions expected to last 12+ months</li>
                    <li><span className="font-medium">Time mechanic:</span> 20+ min (non-complex) or 60+ min (complex) of clinical staff time per month</li>
                    <li><span className="font-medium">Payment:</span> Verify current payer, locality, setting, and service requirements</li>
                  </ul>
                  <Link
                    href="/solutions/chronic-care-management"
                    className="mt-4 inline-block text-sm text-purple-700 underline hover:text-purple-900"
                  >
                    CCM solution overview
                  </Link>
                </div>
                {/* TCM card */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2 font-medium">TCM</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Transitional Care Management</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><span className="font-medium">Criterion:</span> Recently discharged to community setting (home, AL, etc.)</li>
                    <li><span className="font-medium">Time mechanic:</span> 2-business-day contact + 7 or 14 day face-to-face visit</li>
                    <li><span className="font-medium">Payment:</span> Verify current payer, locality, setting, and service requirements</li>
                  </ul>
                  <Link
                    href="/solutions/post-discharge-follow-up"
                    className="mt-4 inline-block text-sm text-purple-700 underline hover:text-purple-900"
                  >
                    TCM solution overview
                  </Link>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-12">
                A fourth program{'\u2014'}{' '}
                <Link href="/resources/glossary/principal-care-management" className="text-purple-700 underline hover:text-purple-900">
                  Principal Care Management (PCM)
                </Link>
                {'\u2014'}covers patients with a single high-risk chronic condition requiring intensive, focused
                management. Check PCM and CCM code-pair restrictions, practitioner roles and service requirements independently; a one-condition focus alone does not resolve concurrent-billing rules.
              </p>

              {/* CPT code reference table */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">CPT code reference</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The table below lists the CPT codes for all four CMS care management programs, their program
                assignment and a short summary. These are not complete code descriptors or claim approvals.
                Check current coding instructions, reporting limits, payer rules and the Medicare Physician Fee
                Schedule before billing or estimating payment.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Program</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { code: '99453', program: 'RPM', desc: 'One-time setup and patient education' },
                      { code: '99454', program: 'RPM', desc: 'Device supply + transmission, each 30 days (\u226516/30 days)' },
                      { code: '99445', program: 'RPM (new 2026)', desc: 'Device supply + transmission, 2\u201315 days within a 30-day period (alternative to 99454)' },
                      { code: '99457', program: 'RPM', desc: 'First 20 min RPM treatment management including required interactive communication per month' },
                      { code: '99458', program: 'RPM', desc: 'Each additional 20 min RPM treatment management including required interactive communication (up to 2x/month)' },
                      { code: '99470', program: 'RPM (new 2026)', desc: 'First 10 min RPM treatment management including required interactive communication per month (alternative to 99457)' },
                      { code: '99091', program: 'RPM (legacy)', desc: 'Clinician collection/interpretation of physiologic data, per 30 days' },
                      { code: '99490', program: 'CCM', desc: 'First 20 min non-complex clinical staff time per month' },
                      { code: '99439', program: 'CCM', desc: 'Each additional 20 min non-complex (up to 2x/month)' },
                      { code: '99487', program: 'CCM', desc: 'First 60 min complex CCM; moderate/high MDM and required care-plan work' },
                      { code: '99489', program: 'CCM', desc: 'Each additional 30 min complex CCM' },
                      { code: '99491', program: 'CCM', desc: '30 min/month furnished personally by a physician or QHP (alternative to 99490)' },
                      { code: '99495', program: 'TCM', desc: 'At least moderate complexity; face-to-face visit within 14 calendar days of discharge' },
                      { code: '99496', program: 'TCM', desc: 'High complexity; face-to-face visit within 7 days of discharge' },
                      { code: '99424', program: 'PCM', desc: 'Physician, first 30 min of care management for single high-risk condition' },
                      { code: '99425', program: 'PCM', desc: 'Physician, each additional 30 min' },
                      { code: '99426', program: 'PCM', desc: 'Clinical staff, first 30 min' },
                      { code: '99427', program: 'PCM', desc: 'Clinical staff, each additional 30 min' },
                    ].map((row) => (
                      <tr key={row.code} className="border-b last:border-b-0">
                        <td className="py-3 px-4 font-medium text-purple-700 whitespace-nowrap">{row.code}</td>
                        <td className="py-3 px-4 text-gray-600 whitespace-nowrap">{row.program}</td>
                        <td className="py-3 px-4 text-gray-700">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mb-12">
                Payment depends on the service year, setting, locality, payer, and services actually furnished.
                Verify applicable payment information in the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>{' '}
                before finalizing program economics.
              </p>

              {/* Program eligibility */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Program eligibility: when to use which
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Eligibility is the first decision in any care management billing setup. The four programs are
                designed to complement rather than overlap, so matching the right program to each patient{'\u2019'}s
                clinical situation is both a compliance requirement and a revenue optimization step.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-6">
                <li>
                  <strong>Acute or chronic condition with actionable device data</strong> {'\u2192'}{' '}
                  <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">RPM</Link>.
                  The condition must generate physiologic data (blood pressure, glucose, weight, SpO2, etc.) that
                  meaningfully informs care decisions.
                </li>
                <li>
                  <strong>Two or more chronic conditions ongoing {'\u2265'}12 months</strong> {'\u2192'}{' '}
                  <Link href="/solutions/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">CCM</Link>{' '}
                  (non-complex unless MDM complexity + substantial care plan revision warrants complex CCM). Common
                  qualifying pairs: hypertension + diabetes, COPD + heart failure, diabetes + CKD.
                </li>
                <li>
                  <strong>Recently discharged to community setting</strong> {'\u2192'}{' '}
                  <Link href="/solutions/post-discharge-follow-up" className="text-purple-700 underline hover:text-purple-900">TCM</Link>{' '}
                  (30-day window from discharge). The 2-business-day contact and face-to-face visit requirements
                  define the program{'\u2019'}s intensity.
                </li>
                <li>
                  <strong>Single high-risk chronic condition requiring intensive focus</strong> {'\u2192'}{' '}
                  <Link href="/resources/glossary/principal-care-management" className="text-purple-700 underline hover:text-purple-900">PCM</Link>{' '}
                  (CPT 99424{'\u2013'}99427). Verify the qualifying condition and all service and concurrent-billing requirements.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-12">
                Many patients qualify for more than one program. Concurrent enrollment is permitted when services
                are distinct and documented separately. The next section explains how to keep concurrent-service records separate.
              </p>

              {/* Concurrent-program review */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Concurrent programs: document services before estimating payment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">RPM and CCM may complement each other when clinically appropriate and independently qualifying. Keep activity-level records with staff identity, clinical purpose, duration, program assignment and resulting action. Do not infer eligibility from enrollment or combine separate program minutes into one threshold.</p>
              <p className="text-gray-700 leading-relaxed mb-6">Synthetic example: 15 qualifying RPM minutes plus 15 distinct CCM minutes do not meet either the 99457 or 99490 threshold. Assess any shorter RPM pathway independently. For TCM and CCM in the same month, verify both service requirements and exclude duplicated time or effort.</p>
              <p className="text-gray-700 leading-relaxed mb-12">Build estimates using current payer and locality information, including retained staffing, device, software and quality-review costs. No per-patient revenue is guaranteed.</p>

              {/* Common pitfalls */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Common pitfalls and double-billing rules
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Review these potential errors before releasing claims. This is an operational checklist, not a claim approval or an estimate of denial frequency.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-12">
                <li>
                  The same minute of clinical staff time cannot count toward two programs. For an interaction
                  involving both programs, document distinct qualifying activities and allocate actual time without duplication.
                </li>
                <li>Check current code-pair restrictions, practitioner roles, and distinct-service requirements before combining PCM with another care-management program. Diagnosis count alone does not determine whether concurrent claims are permissible.</li>
                <li>Only one practitioner may bill CCM for a patient in a calendar month. Other programs have their own practitioner and reporting rules; do not apply this rule indiscriminately across all codes.</li>
                <li>
                  E/M visit time already billed under the E/M code cannot also count toward CCM or PCM time
                  thresholds. CCM and PCM time is specifically non-face-to-face care coordination.
                </li>
                <li>
                  RPM requires at least 16 of 30 days of device transmission for 99454 to be billable. Patients
                  with fewer than 16 transmission days in a month cannot be billed for 99454 that month.
                </li>
                <li>
                  TCM is one-time per discharge episode. Billing for the same patient within 30 days of a separate
                  previous discharge episode requires careful episode tracking.
                </li>
                <li>Review setting-specific payment and overlapping-service restrictions. Do not apply a blanket facility or hospice exclusion without checking the relevant program, services, and payer requirements.</li>
              </ul>

              {/* Documentation standards */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documentation standards</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All four care management programs share a common documentation thread: the care team must be able
                to demonstrate that eligibility was confirmed, services were rendered, time was tracked, and the
                patient was engaged. At audit, missing documentation is treated the same as services not rendered.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-12">
                <li>Patient consent (where required), documented in the chart before billing begins</li>
                <li>Comprehensive care plan accessible 24/7 to the care team</li>
                <li>Cumulative clinical staff time for the month (for time-threshold programs)</li>
                <li>Date, duration, and content of each documented activity</li>
                <li>Staff identifier for each activity</li>
                <li>Any care plan updates, medication changes, or escalations triggered during the month</li>
                <li>
                  Program-specific additions: RPM device transmission logs and interactive communication content;
                  TCM 2-business-day contact date and face-to-face visit date
                </li>
              </ul>

              {/* Common questions / FAQ */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common questions</h2>
              <div className="space-y-8 mb-12">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              {/* Key takeaways */}
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key takeaways</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                  <li>
                    Four programs, four distinct clinical fits. RPM = physiologic monitoring for acute or chronic conditions; CCM =
                    multi-condition coordination; TCM = post-discharge; PCM = single-high-risk focus.
                  </li>
                  <li>Concurrent programs require independently qualifying services, distinct records, and no duplicated time or effort.</li>
                  <li>
                    Verify time, consent, clinical work, practitioner rules and other requirements separately for each program.
                  </li>
                  <li>
                    Rates update annually {'\u2014'} check the Medicare Physician Fee Schedule before locking
                    program ROI.
                  </li>
                </ul>
              </div>

              {/* Further Reading grid */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Further reading</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Solution</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote Patient Monitoring</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    How AI wellness calls and device monitoring support practice-owned RPM communication workflows.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Solution</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Chronic Care Management</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Automating CCM patient engagement for CPT 99490, 99439, 99487, and 99489 billing.
                  </p>
                </Link>
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Solution</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Transitional Care Management</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Meeting the 2-business-day contact and face-to-face visit requirements for TCM billing.
                  </p>
                </Link>
                <Link
                  href="/resources/glossary"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Reference</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Glossary</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Definitions for every CPT code, program, and billing concept referenced in this guide.
                  </p>
                </Link>
                <Link
                  href="/solutions/remote-patient-monitoring/cpt-99457-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Deep dive</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CPT 99457 Billing Guide</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The 20-minute total treatment-management threshold, required live communication, and sample activity log.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Deep dive</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CPT 99490 Billing Guide</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eligibility, monthly documentation, and the distinction between non-complex and complex CCM pathways.
                  </p>
                </Link>
                <Link href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide" className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors">
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Deep dive</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CPT 99495 Billing Guide</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">A discharge-to-claim checklist covering contact attempts, visit timing, and clinical responsibility.</p>
                </Link>
                <Link href="/resources/compare/rpm-vs-ccm-medicare-billing" className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors">
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Comparison</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">RPM vs. CCM Medicare Billing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Choose around clinical need and keep activity records separate when both programs apply.</p>
                </Link>
              </div>

            </div>
          </section>

          {/* Last Reviewed footer */}
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Editorial source check; not independent clinical or coding sign-off.{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                {'. '}Program-specific guidance: CMS MLN{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  TCM
                </a>
                {', '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CCM
                </a>
                . Last updated 2026-09-20.
              </p>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
