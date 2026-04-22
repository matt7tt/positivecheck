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

export const metadata: Metadata = {
  title: 'CMS Care Program Billing Guide: RPM, CCM, TCM | Positive Check',
  description:
    'Comprehensive reference for Medicare care management billing: RPM (99453/99454/99457/99458), CCM (99490/99439/99487/99489), TCM (99495/99496), PCM (99424-99427). Eligibility, rates, stacking rules, and documentation standards.',
  alternates: { canonical: '/resources/billing-guide' },
  openGraph: {
    title: 'CMS Care Program Billing Guide: RPM, CCM, TCM',
    description:
      'Comprehensive Medicare care management billing reference. Programs, CPT codes, eligibility, combined revenue math, and documentation.',
    url: '/resources/billing-guide',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'CMS Care Program Billing Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CMS Care Program Billing Guide: RPM, CCM, TCM',
    description: 'Medicare care management billing reference.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const PAGE_URL = 'https://positivecheck.com/resources/billing-guide'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Billing Guide', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'CMS Care Program Billing Guide: RPM, CCM, TCM',
  description: 'Comprehensive reference for Medicare care management billing across RPM, CCM, TCM, and PCM programs.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
})

const faqs = [
  {
    question: 'Can the same patient be billed for multiple CMS care programs in the same month?',
    answer:
      'Yes, in specific combinations. RPM and CCM can be billed concurrently when services are distinct and documented separately. TCM is billed for the 30-day post-discharge window and typically transitions into CCM or RPM afterward. PCM and CCM are generally mutually exclusive in a given month because PCM focuses on one condition while CCM manages multiple. The key rule: the same minute of clinical staff time cannot be counted toward two programs.',
  },
  {
    question: "What\u2019s the biggest eligibility difference between RPM and CCM?",
    answer:
      "RPM requires just one chronic condition whose physiologic data informs care; CCM requires two or more chronic conditions expected to last at least 12 months. Many patients qualify for both and are enrolled in both concurrently. PCM is the third alternative \u2014 it\u2019s designed for a single high-risk chronic condition requiring intensive focus (CPT 99424\u201399427).",
  },
  {
    question: 'Do I need patient consent to bill these care management codes?',
    answer:
      'Yes for CCM and PCM (verbal or written, documented in the chart before billing begins). RPM does not have an explicit consent requirement in CMS rules, but documented clinical rationale for monitoring is required, and best practice is to obtain and document patient consent anyway. TCM consent is effectively implicit in the discharge workflow but the patient must agree to the follow-up contact.',
  },
  {
    question: 'What documentation does CMS expect at audit?',
    answer:
      'Common elements across all four programs: patient consent (where required), comprehensive care plan accessible to the care team, cumulative clinical staff time for the month, descriptions of the care activities performed, staff identifier for each activity, and any care plan updates or escalations. Program-specific elements layer on top: RPM adds device transmission logs and interactive communication content; TCM adds the 2-business-day contact and face-to-face visit dates.',
  },
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
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CMS Care Program Billing Guide
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Provider reference for Medicare{'\u2019'}s four care management programs {'\u2014'} Remote Patient
                Monitoring (RPM), Chronic Care Management (CCM), Transitional Care Management (TCM), and Principal
                Care Management (PCM). CPT codes, approximate rates, eligibility rules, stacking rules, and
                documentation standards.
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
                    <strong>CPT code sets:</strong> RPM 99453/99454/99457/99458; CCM 99490/99439/99487/99489; TCM
                    99495/99496; PCM 99424{'\u2013'}99427.
                  </li>
                  <li>
                    <strong>Per-patient monthly revenue ranges</strong> from {'\u007e'}$66 (non-complex CCM only) to{' '}
                    {'\u007e'}$250+ (full RPM + CCM stack) depending on program mix and clinical complexity.
                  </li>
                  <li>
                    <strong>Rules to remember:</strong> Only one provider can bill CCM/PCM per patient per month.
                    The same minute of clinical staff time cannot count toward two programs. RPM and CCM can stack;
                    PCM and CCM are mutually exclusive.
                  </li>
                  <li>
                    <strong>Rates update annually.</strong> The figures in this guide are 2026 Medicare national
                    averages; verify current rates in the Medicare Physician Fee Schedule before finalizing program
                    economics.
                  </li>
                </ul>
              </div>

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
                    <li><span className="font-medium">Criterion:</span> 1+ chronic condition with actionable physiologic data</li>
                    <li><span className="font-medium">Time mechanic:</span> {'\u2265'}16 of 30 days device transmission + interactive communication</li>
                    <li><span className="font-medium">Monthly revenue:</span> {'\u007e'}$140{'\u2013'}150 per engaged patient</li>
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
                    <li><span className="font-medium">Monthly revenue:</span> {'\u007e'}$66{'\u2013'}162 non-complex, {'\u007e'}$144{'\u2013'}216+ complex</li>
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
                    <li><span className="font-medium">Monthly revenue:</span> One-time {'\u007e'}$178 (99495) or higher (99496) per discharge episode</li>
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
                management. PCM (CPT 99424{'\u2013'}99427) is generally mutually exclusive with CCM in a given
                month and is the appropriate framework when the clinical focus is one condition rather than
                multi-condition coordination.
              </p>

              {/* CPT code reference table */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">CPT code reference</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The table below lists the CPT codes for all four CMS care management programs, their program
                assignment, a one-line description, and 2026 Medicare national average rates. Use this as a
                quick-reference for billing setup; always confirm current rates against the Medicare Physician Fee
                Schedule before locking in program economics.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Program</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700">2026 Medicare avg (approx)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { code: '99453', program: 'RPM', desc: 'One-time setup and patient education', rate: '\u007e$19' },
                      { code: '99454', program: 'RPM', desc: 'Device supply + transmission, each 30 days (\u226516/30 days)', rate: '\u007e$47\u2013$56' },
                      { code: '99457', program: 'RPM', desc: 'First 20 min interactive communication per month', rate: '\u007e$52' },
                      { code: '99458', program: 'RPM', desc: 'Each additional 20 min interactive communication (up to 2x/month)', rate: '\u007e$41' },
                      { code: '99091', program: 'RPM (legacy)', desc: 'Clinician collection/interpretation of physiologic data, per 30 days', rate: '\u007e$54' },
                      { code: '99490', program: 'CCM', desc: 'First 20 min non-complex clinical staff time per month', rate: '\u007e$66' },
                      { code: '99439', program: 'CCM', desc: 'Each additional 20 min non-complex (up to 2x/month)', rate: '\u007e$48' },
                      { code: '99487', program: 'CCM', desc: 'First 60 min complex CCM per month', rate: '\u007e$144' },
                      { code: '99489', program: 'CCM', desc: 'Each additional 30 min complex CCM', rate: '\u007e$72' },
                      { code: '99491', program: 'CCM', desc: '30 min/month furnished personally by a physician or QHP (alternative to 99490)', rate: '\u007e$83' },
                      { code: '99495', program: 'TCM', desc: 'Moderate complexity; face-to-face visit within 14 days of discharge', rate: '\u007e$178' },
                      { code: '99496', program: 'TCM', desc: 'High complexity; face-to-face visit within 7 days of discharge', rate: '\u007e$237' },
                      { code: '99424', program: 'PCM', desc: 'Physician, first 30 min of care management for single high-risk condition', rate: '(varies)' },
                      { code: '99425', program: 'PCM', desc: 'Physician, each additional 30 min', rate: '(varies)' },
                      { code: '99426', program: 'PCM', desc: 'Clinical staff, first 30 min', rate: '(varies)' },
                      { code: '99427', program: 'PCM', desc: 'Clinical staff, each additional 30 min', rate: '(varies)' },
                    ].map((row) => (
                      <tr key={row.code} className="border-b last:border-b-0">
                        <td className="py-3 px-4 font-medium text-purple-700 whitespace-nowrap">{row.code}</td>
                        <td className="py-3 px-4 text-gray-600 whitespace-nowrap">{row.program}</td>
                        <td className="py-3 px-4 text-gray-700">{row.desc}</td>
                        <td className="py-3 px-4 text-right text-gray-900 whitespace-nowrap">{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mb-12">
                Rates are illustrative 2026 Medicare national averages. Actual reimbursement varies by geographic
                locality and payer mix. Verify current rates in the{' '}
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
                  <strong>Single chronic condition with actionable device data</strong> {'\u2192'}{' '}
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
                  (CPT 99424{'\u2013'}99427), not fitting CCM{'\u2019'}s multi-condition threshold. PCM and CCM are
                  generally mutually exclusive in a given month.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-12">
                Many patients qualify for more than one program. Concurrent enrollment is permitted when services
                are distinct and documented separately. The combined-program revenue math in the next section
                illustrates the most common stacking scenarios.
              </p>

              {/* Combined program revenue math */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Combined-program revenue math
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                RPM + CCM is the highest-value combination for patients with chronic conditions. When a patient
                qualifies for both{'\u2014'}one or more conditions with device data, plus two or more conditions
                total{'\u2014'}both programs can be billed concurrently as long as the services are documented
                separately and no minute of clinical staff time is double-counted. The scenarios below illustrate
                representative monthly revenue using 2026 Medicare national averages.
              </p>

              <div className="space-y-8 mb-12">
                {/* Scenario 1 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Scenario 1: Hypertension + Diabetes, RPM + non-complex CCM
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    <li>99453 (one-time setup) {'\u007e'}$19</li>
                    <li>99454 (device supply + transmission) {'\u007e'}$56/month</li>
                    <li>99457 (first 20 min interactive communication) {'\u007e'}$52/month</li>
                    <li>99458 {'\u00d7'} 2 (60 min total interactive communication) {'\u007e'}$82/month combined</li>
                    <li>99490 (first 20 min non-complex CCM) {'\u007e'}$66/month</li>
                    <li>99439 {'\u00d7'} 2 (full 60 min CCM) {'\u007e'}$96/month combined</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-900">
                    Monthly total: {'\u007e'}$352 per patient (after the one-time setup month)
                  </p>
                </div>

                {/* Scenario 2 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Scenario 2: Post-discharge CHF patient, TCM followed by CCM
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    <li>Month of discharge: 99495 (TCM, moderate complexity) {'\u007e'}$178 one-time</li>
                    <li>Month 2 onward: transition to RPM + CCM as appropriate</li>
                    <li>Ongoing combined: similar to Scenario 1 ({'\u007e'}$250{'\u2013'}$352/month)</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-900">
                    TCM bridges the high-risk discharge window; ongoing programs capture longitudinal revenue.
                  </p>
                </div>

                {/* Scenario 3 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Scenario 3: Complex oncology patient, complex CCM only
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    <li>99487 (first 60 min complex CCM) {'\u007e'}$144/month</li>
                    <li>99489 (each additional 30 min complex CCM) {'\u007e'}$72 additional</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-900">
                    Monthly total: {'\u007e'}$216+ per patient
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-12">
                These are per-patient illustrative figures using 2026 Medicare national averages. Actual
                reimbursement varies by locality and payer mix.
              </p>

              {/* Common pitfalls */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Common pitfalls and double-billing rules
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS audits of care management programs have intensified as enrollment grows. The following pitfalls
                account for the majority of denied or recouped claims across all four programs.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-12">
                <li>
                  The same minute of clinical staff time cannot count toward two programs. A 15-minute interaction
                  covering both RPM review and CCM coordination must be allocated to one program.
                </li>
                <li>
                  CCM and PCM are generally mutually exclusive in a given month. CCM applies to multi-condition
                  patients; PCM applies to single-high-risk-condition focus. Billing both for the same patient in
                  the same month is not permitted.
                </li>
                <li>
                  Only ONE provider can bill CCM or PCM for a given patient per month, even when multiple practices
                  are involved in that patient{'\u2019'}s care.
                </li>
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
                <li>
                  Patients in inpatient, SNF, inpatient rehab, or hospice settings are NOT eligible for CCM
                  because the facility per-diem already includes care coordination. See individual program MLN
                  booklets for exact exclusions.
                </li>
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
                    Four programs, four distinct clinical fits. RPM = device-driven single-condition; CCM =
                    multi-condition coordination; TCM = post-discharge; PCM = single-high-risk focus.
                  </li>
                  <li>
                    Combined RPM + CCM is the highest-revenue stack for chronic-condition patients ({'\u007e'}$250+
                    /patient/month typical).
                  </li>
                  <li>
                    Time + consent + one-provider-per-month rules govern everything. Document or lose it.
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
                    How AI wellness calls and device monitoring satisfy RPM interactive communication requirements.
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
                    The 20-minute interactive communication requirement, what counts, and how to document it.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Deep dive</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CPT 99490 Billing Guide</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eligibility, the 20-minute requirement, documentation, and how 99439/99487/99489 stack.
                  </p>
                </Link>
              </div>

            </div>
          </section>

          {/* Last Reviewed footer */}
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
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
                . Last updated 2026-04-21.
              </p>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
