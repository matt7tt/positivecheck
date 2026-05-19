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

const PAGE_URL = 'https://www.positivecheck.com/resources/compare/tcm-and-ccm-combined-month-billing'
const HERO_IMAGE = 'https://www.positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'TCM + CCM Combined-Month Billing: How the Two Stack | Positive Check',
  description:
    'How Transitional Care Management (TCM CPT 99495/99496) and Chronic Care Management (CCM CPT 99490) can be billed concurrently in the same month for the same patient. CMS rules, timing windows, documentation, and combined revenue.',
  alternates: { canonical: '/resources/compare/tcm-and-ccm-combined-month-billing' },
  openGraph: {
    title: 'TCM + CCM Combined-Month Billing: How the Two Stack',
    description:
      'CMS rules for billing TCM and CCM concurrently in the same month. Timing, documentation, and revenue stacking.',
    url: '/resources/compare/tcm-and-ccm-combined-month-billing',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'TCM + CCM combined billing comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCM + CCM Combined-Month Billing: How the Two Stack',
    description:
      'How TCM (99495/99496) and CCM (99490) can be billed concurrently in the same month.',
    images: [HERO_IMAGE],
  },
}

const comparisonFaqs = [
  {
    question: 'Can you bill TCM and CCM in the same calendar month for the same patient?',
    answer:
      'Yes. Current CMS guidance (per MLN 909188 and the CY 2022 Medicare Physician Fee Schedule onward) explicitly permits CCM codes 99490, 99439, 99487, 99489, and 99491 to be reported during the 30-day TCM service period (CPT 99495 or 99496). The two programs were historically mutually exclusive but are now stackable when documentation supports both independently. Clinical staff time cannot be double-counted between programs.',
  },
  {
    question: 'How do the TCM 30-day period and the CCM calendar month interact?',
    answer:
      'TCM is billed once for a 30-day post-discharge period that begins on the date of discharge. CCM is billed per calendar month. These two windows can overlap. The TCM 30-day window can span two calendar months (e.g., discharge January 20 \u2192 TCM period ends February 18). CCM is billable in either January or February (or both, if eligibility and time thresholds are met in each calendar month) provided the CCM time is separate from time logged toward TCM.',
  },
  {
    question: 'What CMS code combinations are NOT allowed in the same month?',
    answer:
      'Non-complex CCM (99490/99439) and complex CCM (99487/99489) cannot be reported together for the same patient in the same calendar month\u2014providers must choose one tier based on medical decision-making complexity. Practitioner-only CCM (99491/99437) cannot be reported in a month when 99487, 99489, 99490, or 99439 is used. Complex CCM (99487) cannot be reported with prolonged E/M services in the same calendar month. TCM does not have a "complex" tier conflict with CCM, so TCM + non-complex CCM is fully stackable.',
  },
  {
    question: 'What does the combined revenue look like for a discharged patient with two chronic conditions?',
    answer:
      'For a patient discharged with moderate-complexity medical decision-making and two qualifying chronic conditions, the typical combined claim is TCM 99495 (~$178) + CCM 99490 (~$66) = approximately $244 for the discharge month, assuming both eligibility and time requirements are independently met. High-complexity discharges (99496, ~$237) raise the combined total to approximately $303. RPM (CPT 99454/99457 or the new 2026 codes 99445/99470) can stack on top when the patient also uses a connected device, pushing combined revenue past $400 for the discharge month.',
  },
  {
    question: 'What documentation pattern proves TCM and CCM are separate services?',
    answer:
      'The cleanest pattern is to keep distinct time logs and activity types. TCM time covers the discharge transition: the 2-business-day interactive contact, medication reconciliation tied to discharge, the face-to-face visit within 7 or 14 days, and coordination of post-discharge services. CCM time covers ongoing chronic disease management unrelated to the discharge event: care plan revision for the chronic conditions, coordination with non-discharge specialists, medication management for long-term meds, and patient education on chronic disease self-management. If the same activity could plausibly serve either program, document it under one and only one\u2014never both.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://www.positivecheck.com' },
  { name: 'Resources', url: 'https://www.positivecheck.com/resources' },
  { name: 'Compare', url: 'https://www.positivecheck.com/resources/compare' },
  { name: 'TCM + CCM Combined-Month Billing', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'TCM + CCM Combined-Month Billing: How the Two Stack',
  description:
    'How Transitional Care Management (TCM CPT 99495/99496) and Chronic Care Management (CCM CPT 99490) can be billed concurrently in the same month, including CMS timing rules, documentation requirements, and combined revenue scenarios.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-05-19',
  dateModified: '2026-05-19',
})

export default function TCMandCCMCombinedPage() {
  return (
    <>
      <StructuredData id="tcm-ccm-breadcrumb" data={breadcrumb} />
      <StructuredData id="tcm-ccm-article" data={article} />
      <StructuredData id="tcm-ccm-faq" data={buildFAQSchema(comparisonFaqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="resources" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Comparison</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                TCM + CCM Combined-Month Billing
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                How{' '}
                <Link href="/solutions/post-discharge-follow-up" className="text-purple-200 underline hover:text-white">
                  Transitional Care Management
                </Link>{' '}
                and{' '}
                <Link href="/solutions/chronic-care-management" className="text-purple-200 underline hover:text-white">
                  Chronic Care Management
                </Link>{' '}
                stack in the same month for a single patient{'\u2014'}what CMS allows, how the
                30-day TCM window interacts with the CCM calendar month, and how to document
                both programs cleanly.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>TCM and CCM can be billed concurrently</strong> for the same patient
                    in the same calendar month. Historically restricted, this combination has
                    been allowed under CMS guidance since the CY 2022 Medicare Physician Fee
                    Schedule.
                  </li>
                  <li>
                    The TCM service period is{' '}
                    <strong>30 days from the date of discharge</strong>, which can span two
                    calendar months. CCM is billed{' '}
                    <strong>per calendar month</strong>{' '}{'\u2014'} the two windows overlap
                    but are not the same.
                  </li>
                  <li>
                    Clinical staff time{' '}
                    <strong>cannot be double-counted</strong> between the two programs. TCM time
                    covers the discharge transition; CCM time covers ongoing chronic disease
                    management.
                  </li>
                  <li>
                    Typical combined claim for a moderate-complexity discharge with two chronic
                    conditions: TCM 99495 ({'~'}$178) + CCM 99490 ({'~'}$66) ={' '}
                    <strong>approximately $244 for the discharge month</strong>.
                  </li>
                  <li>
                    <strong>RPM can stack on top</strong> of both, pushing combined revenue
                    above $400/month for eligible patients using a connected device.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When does combined billing apply?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The combined-billing scenario applies when a single patient is independently
                eligible for both programs in the same month. The most common case: a Medicare
                patient discharged from inpatient care (qualifying for TCM) who also has two or
                more chronic conditions expected to last 12 months or longer (qualifying for
                CCM). Examples include CHF patients hospitalized for an acute exacerbation,
                diabetic patients admitted for hyperglycemia, or COPD patients post-discharge
                from a respiratory event.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before CY 2022, CMS treated TCM as comprehensive enough to preclude CCM during
                the same period. The current rule explicitly allows the two programs to coexist
                when documentation supports both independently. The change reflects CMS{'\u2019'}s
                recognition that discharge-transition work (TCM) and ongoing chronic-care
                coordination (CCM) are clinically distinct activities even when performed for
                the same patient.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the timing windows interact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The TCM service period is 30 days starting from the date of discharge. The CCM
                billing window is the calendar month. These do not align{'\u2014'}understanding
                the interaction is essential for correct billing.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Discharge date</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">TCM service period</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">CCM billing months covered</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">January 3</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Jan 3 {'\u2013'} Feb 2</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">CCM billable in January (and February if time threshold separately met)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">January 20</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Jan 20 {'\u2013'} Feb 18</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">TCM straddles two calendar months; CCM billable in both Jan and Feb independently</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">January 28</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Jan 28 {'\u2013'} Feb 26</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Most TCM activity occurs in February; CCM billable in Feb (and Jan if separate criteria met)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                A practical implication: when a discharge lands late in a calendar month, the
                bulk of TCM activity may fall in the following month. CCM eligibility and
                timing are tracked per calendar month, independent of the TCM 30-day window.
                Both can be billed in the same calendar month when documentation supports both.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documentation that proves both are separate</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS auditors look for distinct documentation per program. The cleanest pattern:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6">
                <li>
                  <strong>TCM time</strong> covers discharge-transition activities: the{' '}
                  <Link href="/solutions/post-discharge-follow-up/post-discharge-contact-timing" className="text-purple-700 underline hover:text-purple-900">
                    2-business-day interactive contact
                  </Link>
                  , medication reconciliation tied to the discharge event, the face-to-face
                  visit within 7 days (99496) or 14 days (99495), and coordination of
                  immediate post-discharge services (home health, DME, follow-up specialist
                  appointments tied to the admission).
                </li>
                <li>
                  <strong>CCM time</strong> covers ongoing chronic-disease management not tied
                  to the discharge: revision of the comprehensive care plan for the chronic
                  conditions, coordination with non-discharge specialists, long-term medication
                  management, patient education on chronic disease self-management, and the
                  24/7 patient access channel required for CCM.
                </li>
                <li>
                  <strong>Borderline activities</strong> (e.g., a single medication discussion
                  that touches both discharge meds and chronic-care meds) should be documented
                  under one program only. Pick the dominant clinical purpose and stick with it.
                </li>
                <li>
                  <strong>Time logs must show distinct minutes per program</strong>{'\u2014'}a
                  single combined timer is an audit risk. Most platforms support per-program
                  time allocation; if yours does not, log separately in a structured note.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Revenue stacking math</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Combined revenue for a typical discharge month, using 2026 Medicare national
                averages:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Patient scenario</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">CPT codes billed</th>
                      <th className="border border-gray-200 px-4 py-3 text-right font-semibold text-gray-900">Approximate revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Moderate-complexity discharge, 2+ chronic conditions
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        99495 + 99490
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right text-gray-900">
                        {'~'}$244
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        High-complexity discharge, 2+ chronic conditions
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        99496 + 99490
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right text-gray-900">
                        {'~'}$303
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Moderate-complexity, 2+ chronic conditions, 40+ min CCM time
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        99495 + 99490 + 99439
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right text-gray-900">
                        {'~'}$292
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Above + RPM device-based monitoring
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Above + 99454 + 99457
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right text-gray-900">
                        {'~'}$391
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        High-complexity discharge + complex CCM + RPM
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        99496 + 99487 + 99454 + 99457
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-right text-gray-900">
                        {'~'}$481+
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rates are illustrative 2026 Medicare national averages. Actual reimbursement
                varies by locality. Verify current rates in the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What CMS does not allow in the same month</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-6">
                <li>
                  Non-complex CCM (99490/99439) and complex CCM (99487/99489) cannot be reported
                  together for the same patient in the same calendar month{'\u2014'}providers
                  pick one tier based on medical decision-making complexity.
                </li>
                <li>
                  Practitioner-only CCM (99491/99437) cannot be reported in a calendar month
                  when 99487, 99489, 99490, or 99439 is used for the same patient.
                </li>
                <li>
                  Complex CCM (99487) cannot be reported with prolonged E/M services in the
                  same calendar month.
                </li>
                <li>
                  Time spent on TCM activities cannot also count toward CCM time thresholds
                  (or vice versa). Each program{'\u2019'}s time threshold must be met
                  independently.
                </li>
                <li>
                  RPM and RTM are mutually exclusive{'\u2014'}a patient cannot be billed for
                  both in the same month{'\u2014'}but either can stack with CCM/TCM.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AI-powered wellness calls fit both programs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Structured AI-driven engagement supports both programs without double-counting
                when the call workflow segments time by clinical purpose. A 30-minute monthly
                touchpoint can be split into 12 minutes covering discharge transition items
                (post-discharge symptoms, medication adherence for discharge meds, follow-up
                scheduling) logged toward TCM, and 18 minutes covering chronic-condition
                management (care plan review, long-term medication adherence, lifestyle
                coordination) logged toward CCM. Positive Check{'\u2019'}s platform supports
                per-program time allocation and structured documentation at the call level.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common questions</h2>
              <div className="space-y-6">
                {comparisonFaqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key takeaways</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    TCM and CCM are independently billable in the same calendar month when
                    eligibility is met for each and time is documented separately.
                  </li>
                  <li>
                    The 30-day TCM service period can straddle two calendar months; CCM is
                    tracked per calendar month, independent of the TCM window.
                  </li>
                  <li>
                    Combined revenue typically reaches $244{'\u2013'}$303 for a discharge month,
                    rising past $400 when RPM is also billable.
                  </li>
                  <li>
                    Non-complex CCM and complex CCM are mutually exclusive within a month{'\u2014'}as
                    are 99491 and 99490 for the same patient.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">References</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed text-sm">
                <li>
                  Centers for Medicare {'&'} Medicaid Services.{' '}
                  <a
                    href="https://www.cms.gov/files/document/chroniccaremanagement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    MLN 909188: Chronic Care Management Services (PDF)
                  </a>
                  . Updated June 2025. cms.gov.
                </li>
                <li>
                  Centers for Medicare {'&'} Medicaid Services.{' '}
                  <a
                    href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    MLN 908628: Transitional Care Management Services (PDF)
                  </a>
                  . cms.gov.
                </li>
                <li>
                  Centers for Medicare {'&'} Medicaid Services.{' '}
                  <a
                    href="https://www.cms.gov/medicare/payment/fee-schedules/physician/pfs-federal-regulation-notices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Medicare Physician Fee Schedule Final Rules
                  </a>
                  . Concurrent CCM + TCM billing finalized in CY 2022 PFS.
                </li>
              </ul>

              <div className="mt-12 text-center space-y-2">
                <p>
                  <Link
                    href="/solutions/post-discharge-follow-up"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Back to the TCM solution overview
                  </Link>
                </p>
                <p>
                  <Link
                    href="/solutions/chronic-care-management"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Back to the CCM solution overview
                  </Link>
                </p>
                <p>
                  <Link
                    href="/resources/compare/rpm-vs-ccm-medicare-billing"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Related: RPM vs. CCM Medicare Billing
                  </Link>
                </p>
                <p>
                  <Link
                    href="/resources/compare"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    All comparisons
                  </Link>
                </p>
              </div>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/chroniccaremanagement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  MLN 909188
                </a>
                {' '}and{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  MLN 908628
                </a>
                . Last updated 2026-05-19.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
