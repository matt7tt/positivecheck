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

const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/vs-in-house-care-coordinators'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'AI-Powered CCM vs. In-House Care Coordinators | Positive Check',
  description:
    'Category-level comparison of AI-powered Chronic Care Management engagement versus staffing an in-house care-coordinator team. Staffing cost, throughput, documentation, CPT 99490 time capture, and the hybrid model most practices land on.',
  alternates: { canonical: '/solutions/chronic-care-management/vs-in-house-care-coordinators' },
  openGraph: {
    title: 'AI-Powered CCM vs. In-House Care Coordinators',
    description:
      'How AI-powered CCM engagement compares to staffing an in-house care-coordinator team across six operational dimensions.',
    url: '/solutions/chronic-care-management/vs-in-house-care-coordinators',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CCM engagement approaches compared' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered CCM vs. In-House Care Coordinators',
    description:
      'Category-level comparison of AI-powered CCM engagement versus an in-house care-coordinator team.',
    images: [HERO_IMAGE],
  },
}

const comparisonFaqs = [
  {
    question: 'Can an AI-powered call satisfy the CMS CCM clinical-staff-time requirement by itself?',
    answer:
      'No \u2014 CMS defines the 20-minute threshold as clinical staff time, which means time spent by qualified personnel on CCM activities. An AI call does not itself count as clinical staff time. What it does is produce a structured summary that clinical staff can review and act on quickly, and that review/action time does count. The practical effect is that clinical staff time gets concentrated on care-plan action rather than patient data gathering, making the 20-minute threshold easier to hit reliably.',
  },
  {
    question: 'What\u2019s the typical staffing ratio for CCM with and without automation?',
    answer:
      'Without automation, a full-time care coordinator typically manages 100\u2013200 CCM patients (the range reflects patient complexity and documentation expectations). With AI-powered engagement generating structured summaries, a single coordinator can plausibly oversee 400\u2013600 CCM patients because the per-patient review time drops substantially. Actual ratios vary by practice workflow and patient mix.',
  },
  {
    question: 'Is the hybrid model always more efficient than pure staffing?',
    answer:
      'For most CCM programs, yes \u2014 once enrolled volume passes \u007e150\u2013200 patients, the cost of missed 20-minute thresholds (unbillable CCM encounters) exceeds the cost of adding automation. Below that volume, a well-run in-house team can be sufficient. Above that volume, automation typically becomes the rate-limiting investment, not more coordinator headcount.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/solutions/chronic-care-management' },
  { name: 'vs. In-House Care Coordinators', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'AI-Powered CCM vs. In-House Care Coordinators',
  description:
    'Category-level comparison of AI-powered Chronic Care Management engagement versus staffing an in-house care-coordinator team.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
})

export default function CCMVsInHouseCoordinatorsPage() {
  return (
    <>
      <StructuredData id="ccm-compare-breadcrumb" data={breadcrumb} />
      <StructuredData id="ccm-compare-article" data={article} />
      <StructuredData id="ccm-compare-faq" data={buildFAQSchema(comparisonFaqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Comparison</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                AI-Powered CCM vs. In-House Care Coordinators
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                A category-level look at how automated CCM engagement compares to staffing an in-house care-coordinator team on cost, throughput, documentation, and the 20-minute time threshold.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>Fully loaded coordinator cost.</strong> Roughly $65,000{'\u2013'}$95,000/year per coordinator (salary + benefits + overhead); one coordinator typically manages 100{'\u2013'}200 CCM patients.
                  </li>
                  <li>
                    <strong>The 20-minute threshold is the operational constraint.</strong> Miss it and 99490 is unbillable for that patient that month.
                  </li>
                  <li>
                    <strong>AI captures content, staff capture time.</strong> AI-powered engagement captures patient content; clinical staff time shifts to care-plan action and documentation, making the 20-minute threshold easier to hit reliably.
                  </li>
                  <li>
                    <strong>Documentation discipline is the whole game.</strong> Automation generates structured summaries that reduce note-writing friction.
                  </li>
                  <li>
                    <strong>Hybrid dominates in practice.</strong> AI handles routine touchpoints; coordinators handle complex/escalated patients and face-to-face work.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the two approaches compare</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The table below captures the operational tradeoffs. Not every dimension favors
                automation {'\u2014'} in-house care coordinators still win on nuanced clinical
                conversations, face-to-face visits, and patient relationships that run for years.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Dimension</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">AI-Powered CCM engagement</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">In-House Care Coordinators</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Fully loaded monthly cost</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Low, fixed {'\u2014'} scales with enrolled volume without headcount</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{'\u007e'}$5,400{'\u2013'}$7,900/month per FTE (salary + benefits + overhead)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Patients per FTE</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Not constrained by human throughput {'\u2014'} volume scales with technology</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{'\u007e'}100{'\u2013'}200 patients per care coordinator depending on complexity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">20-minute/month threshold consistency</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Structured call cadence + summaries make the threshold easy to hit for every enrolled patient</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Depends on staff bandwidth; high-volume months see missed thresholds</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Clinical nuance</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Structured prompts cover CCM activities; escalates concerns to human staff</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Unbounded conversation; strong for psychosocial complexity and rapport</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Documentation for 99490/99439 billing</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Structured per-call summaries map to CCM activities + time accrual</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Dependent on note-taking discipline; variable across staff</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Escalation speed</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Real-time alerts the moment a concern surfaces</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Same-shift if staff available; variable otherwise</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When AI-powered CCM engagement wins</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>Practices with enrolled volumes that exceed available coordinator bandwidth.</li>
                <li>Programs targeting full 99490 capture across every enrolled patient (consistency problem).</li>
                <li>Populations with heavy medication regimens where routine check-ins drive adherence.</li>
                <li>Multi-location practices that need standardized documentation across sites.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When in-house care coordinators still make sense</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>Complex patients where a trusted human relationship drives outcomes.</li>
                <li>Face-to-face visits and in-person interventions {'\u2014'} a coordinator must do this.</li>
                <li>Escalations flagged by AI {'\u2014'} human clinical judgment takes over.</li>
                <li>Small enrolled volumes where existing staff reliably hit the 20-minute threshold without automation.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The hybrid model most practices land on</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In practice, most successful CCM programs run a hybrid: AI handles routine
                touchpoints for every enrolled patient {'\u2014'} medication checks, symptom
                surveillance, care-plan follow-up {'\u2014'} generating structured summaries and
                time accrual. Care coordinators focus on complex patients, face-to-face work,
                and escalations flagged by the AI. This maximizes the percentage of enrolled
                patients who hit the 20-minute threshold each month (the key operational
                metric) while keeping clinical judgment in the loop where it matters. For a
                real-world look at this pattern, see{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  our case study on scaling engagement
                </Link>
                .
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
                  <li>Fully loaded care-coordinator cost is the dominant variable cost in CCM programs.</li>
                  <li>The 20-minute/month threshold is what determines billable vs. unbillable {'\u2014'} consistency is more valuable than conversation length.</li>
                  <li>Documentation structure drives billing success; automation reduces note-writing friction.</li>
                  <li>Hybrid AI + human coordinator models are the efficient frontier for most practice sizes.</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Back to the CCM solution overview
                </Link>
              </div>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Related glossary entries:{' '}
                <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">Chronic Care Management</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99490" className="text-purple-700 underline hover:text-purple-900">CPT 99490</Link>
                .
              </p>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN CCM Booklet
                </a>
                . Last updated 2026-04-20.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
