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

const PAGE_URL = 'https://www.positivecheck.com/resources/compare/rpm-vs-ccm-medicare-billing'
const HERO_IMAGE = 'https://www.positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'RPM vs. CCM: Medicare Billing Comparison | Positive Check',
  description:
    'Side-by-side comparison of Remote Patient Monitoring (RPM) and Chronic Care Management (CCM) Medicare billing: eligibility, CPT codes, time thresholds, interactive communication, and how the two programs combine for the same patient.',
  alternates: { canonical: '/resources/compare/rpm-vs-ccm-medicare-billing' },
  openGraph: {
    title: 'RPM vs. CCM: Medicare Billing Comparison',
    description:
      'Side-by-side comparison of Medicare RPM and CCM: eligibility, CPT codes, time, communication, and combined billing.',
    url: '/resources/compare/rpm-vs-ccm-medicare-billing',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'RPM vs. CCM Medicare billing comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RPM vs. CCM: Medicare Billing Comparison',
    description:
      'Side-by-side comparison of Medicare RPM and CCM: eligibility, CPT codes, time, communication, combined billing.',
    images: [HERO_IMAGE],
  },
}

const comparisonFaqs = [
  {
    question: 'Can you bill RPM and CCM for the same patient in the same calendar month?',
    answer:
      'Yes. CMS explicitly allows concurrent billing of RPM and CCM for the same patient in the same calendar month, provided the patient meets eligibility for each program independently. The only restriction is that clinical staff time cannot be double-counted: minutes spent on RPM treatment management (CPT 99457, 99458, or the new 99470) cannot also count toward the CCM time threshold (CPT 99490, 99439, 99487, or 99489), and vice versa. Documentation must clearly separate time logged for each program.',
  },
  {
    question: 'Which program pays more per patient per month?',
    answer:
      'RPM typically generates more total revenue per patient per month than CCM because of the device-supply component. Full RPM (99453 setup + 99454 device supply + 99457 first 20 minutes + 99458 each additional 20 minutes) reaches roughly $140\u2013$150 per patient per month, while non-complex CCM (99490 + 99439) reaches roughly $109 per patient per month. Combined RPM + CCM billing for an eligible patient can exceed $200 per month.',
  },
  {
    question: 'Does RPM require chronic conditions like CCM does?',
    answer:
      'No. RPM has no chronic-condition eligibility requirement. It applies to any Medicare patient with a clinical indication that warrants physiologic monitoring via FDA-cleared device (post-surgical recovery, acute conditions, chronic disease management, or other clinically justified scenarios). CCM, in contrast, requires the patient to have at least two chronic conditions expected to last at least 12 months that pose significant risk of decline. Many patients qualify for both.',
  },
  {
    question: 'Can the same clinical staff member work on both RPM and CCM for the same patient?',
    answer:
      'Yes. The same clinical staff, NPP, or physician can provide services under both RPM and CCM for the same patient. CMS does not require separate staff. The requirement is that time is documented separately and not double-counted between programs. A patient who receives a 30-minute monthly call where 15 minutes covers physiologic data review (RPM) and 15 minutes covers chronic-care coordination (CCM) generates billable time for both programs, as long as the documentation makes the allocation clear.',
  },
  {
    question: 'Which program should a practice start with if they can only run one?',
    answer:
      'Start with the program that matches the larger eligible patient population. Practices with high chronic-disease prevalence (cardiology, endocrinology, primary care with elderly panels) often start with CCM because eligibility is broader and infrastructure is lighter (no devices required). Practices with patients already using connected devices (post-surgical, pulmonology, heart failure) often start with RPM. The 2026 CMS Final Rule lowered RPM thresholds (new codes 99445 and 99470), making RPM viable for shorter monitoring periods and reducing the operational lift for adoption.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://www.positivecheck.com' },
  { name: 'Resources', url: 'https://www.positivecheck.com/resources' },
  { name: 'Compare', url: 'https://www.positivecheck.com/resources/compare' },
  { name: 'RPM vs. CCM Medicare Billing', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'RPM vs. CCM: Medicare Billing Comparison',
  description:
    'Side-by-side comparison of Remote Patient Monitoring and Chronic Care Management Medicare billing: eligibility, CPT codes, time thresholds, interactive communication, and combined billing rules.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-05-17',
  dateModified: '2026-05-17',
})

export default function RPMvsCCMComparePage() {
  return (
    <>
      <StructuredData id="rpm-vs-ccm-breadcrumb" data={breadcrumb} />
      <StructuredData id="rpm-vs-ccm-article" data={article} />
      <StructuredData id="rpm-vs-ccm-faq" data={buildFAQSchema(comparisonFaqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Comparison</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                RPM vs. CCM: Medicare Billing Comparison
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                How{' '}
                <Link href="/solutions/remote-patient-monitoring" className="text-purple-200 underline hover:text-white">
                  Remote Patient Monitoring
                </Link>{' '}
                and{' '}
                <Link href="/solutions/chronic-care-management" className="text-purple-200 underline hover:text-white">
                  Chronic Care Management
                </Link>{' '}
                differ across eligibility, CPT codes, time thresholds, and combined-billing
                rules{'\u2014'}and how to decide which one a patient (or both) qualifies for.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>RPM</strong> bills CPT 99453/99454/99457/99458 (plus new 2026 codes{' '}
                    <Link href="/resources/glossary/cpt-99445" className="text-purple-700 underline hover:text-purple-900">
                      99445
                    </Link>
                    {' '}and{' '}
                    <Link href="/resources/glossary/cpt-99470" className="text-purple-700 underline hover:text-purple-900">
                      99470
                    </Link>
                    ) for physiologic monitoring via FDA-cleared device. Roughly $140{'\u2013'}$150/month per patient.
                  </li>
                  <li>
                    <strong>CCM</strong> bills CPT 99490/99439/99487/99489 for non-complex or complex
                    care coordination for patients with two or more chronic conditions. Roughly
                    $62{'\u2013'}$109/month per patient.
                  </li>
                  <li>
                    Eligibility is different: RPM requires a device-trackable clinical indication;
                    CCM requires two or more chronic conditions and a comprehensive care plan.
                  </li>
                  <li>
                    <strong>Both can be billed in the same calendar month for the same
                    patient</strong> when eligibility is met for each program independently. Time
                    cannot be double-counted between programs.
                  </li>
                  <li>
                    Combined RPM + CCM billing for an eligible patient typically generates $200+
                    per patient per month, capturing a population that single-program practices
                    leave on the table.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How RPM and CCM compare</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Both programs are CMS-reimbursed care models that reward providers for proactive,
                non-face-to-face engagement{'\u2014'}but they target different clinical scenarios
                and operate under different documentation requirements. The table below summarizes
                the dimensions that most often determine which program (or combination) fits a
                given patient.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Dimension</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Remote Patient Monitoring (RPM)</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Chronic Care Management (CCM)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Patient eligibility</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Clinically indicated for physiologic monitoring; no chronic-condition minimum
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Two or more chronic conditions expected to last 12+ months with significant decline risk
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Required infrastructure</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        FDA-cleared device with automatic transmission; data review platform
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Comprehensive electronic care plan; 24/7 patient access channel
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">CPT codes</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        99453 (setup), 99454 or 99445 (device supply), 99457 or 99470 (treatment management), 99458 (additional 20 min)
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        99490 (first 20 min), 99439 (each additional 20 min, up to 2x), 99487 (complex, 60 min), 99489 (complex additional 30 min)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Clinical staff time threshold</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        10 min (99470) or 20 min (99457) of interactive communication per month
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        20 min (99490) of clinical staff time per month; 60 min for complex CCM (99487)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Interactive communication requirement</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        At least one real-time two-way communication per month required for 99457/99470
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Patient access required 24/7; structured communication encouraged but not minute-counted
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Approximate monthly revenue per patient</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        {'~'}$140{'\u2013'}$150 (full code stack)
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        {'~'}$62 (99490) to {'~'}$109 (99490 + 99439)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Combinable with the other program</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Yes, when patient meets CCM eligibility; time cannot be double-counted
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Yes, when patient meets RPM eligibility; time cannot be double-counted
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When RPM is the right fit</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Patients whose primary clinical concern is a physiologic parameter that an
                  FDA-cleared device can transmit (blood pressure, glucose, weight, SpO2, ECG).
                </li>
                <li>
                  Acute or post-surgical scenarios where short-term monitoring is clinically
                  indicated{'\u2014'}now more economically viable under the 2026 codes (CPT 99445
                  covers 2{'\u2013'}15 day windows).
                </li>
                <li>
                  Single-condition patients (e.g., uncontrolled hypertension) who do not meet
                  CCM{'\u2019'}s two-condition minimum.
                </li>
                <li>
                  Practices already operating connected-device infrastructure where the device
                  supply revenue (99454) underwrites the program.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When CCM is the right fit</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Patients with two or more chronic conditions{'\u2014'}common in primary care,
                  geriatrics, and multi-specialty practices.
                </li>
                <li>
                  Care models centered on coordination and care-plan adherence rather than
                  device-driven data review.
                </li>
                <li>
                  Practices without bandwidth to deploy and support connected devices; CCM has
                  lighter infrastructure requirements.
                </li>
                <li>
                  Complex patients requiring 60+ minutes of monthly clinical staff time
                  (CPT 99487/99489 reimburse at higher rates than non-complex CCM).
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When to bill both RPM and CCM in the same month</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Combined billing applies when a single patient independently qualifies for both
                programs{'\u2014'}for example, a patient with diabetes plus hypertension (two
                chronic conditions, qualifying for CCM) who also uses a connected glucometer or
                BP cuff (qualifying for RPM). CMS explicitly permits concurrent billing of RPM and
                CCM for the same patient, recognizing that the two programs address different
                aspects of care.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The operational requirement is documentation discipline: minutes spent on RPM
                treatment management cannot also count toward the CCM time threshold. A 30-minute
                monthly engagement that splits cleanly into 15 minutes of physiologic-data review
                (RPM) and 15 minutes of chronic-care coordination (CCM) is reportable for both
                programs if the documentation supports the allocation. See the{' '}
                <Link href="/resources/billing-guide" className="text-purple-700 underline hover:text-purple-900">
                  CMS care program billing guide
                </Link>{' '}
                for combined-program revenue scenarios and documentation patterns.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AI-powered wellness calls fit either program</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Both RPM and CCM benefit from structured monthly engagement that reaches the
                applicable time threshold while capturing documented clinical content. AI-powered
                calls that conduct real-time two-way communication, log structured responses, and
                escalate concerns to clinical staff can satisfy the interactive-communication
                requirement under RPM (CPT 99457/99470) and accumulate qualifying time toward the
                CCM threshold (CPT 99490). The same call workflow can serve both programs when the
                documentation separates time appropriately. Positive Check{'\u2019'}s platform is
                designed to support this dual-program use case at scale.
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
                    RPM and CCM target different eligibility populations and operate under
                    different code families{'\u2014'}each is a standalone Medicare program.
                  </li>
                  <li>
                    Combined billing is explicitly permitted; the limit is on time double-counting,
                    not on program co-occurrence.
                  </li>
                  <li>
                    Combined RPM + CCM patients generate $200+ per patient per month{'\u2014'}a
                    revenue tier that single-program practices miss.
                  </li>
                  <li>
                    The 2026 CMS Final Rule (new codes{' '}
                    <Link href="/resources/glossary/cpt-99445" className="text-purple-700 underline hover:text-purple-900">
                      99445
                    </Link>
                    {' '}and{' '}
                    <Link href="/resources/glossary/cpt-99470" className="text-purple-700 underline hover:text-purple-900">
                      99470
                    </Link>
                    ) lowered RPM thresholds, making RPM viable for shorter monitoring windows
                    where it previously was not.
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center space-y-2">
                <p>
                  <Link
                    href="/solutions/remote-patient-monitoring"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Back to the RPM solution overview
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
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                . Last updated 2026-05-17.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
