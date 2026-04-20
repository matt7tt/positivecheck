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

const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/vs-manual-discharge-outreach'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'AI-Powered TCM Calls vs. Manual Discharge Outreach | Positive Check',
  description:
    'Category-level comparison of automated AI-powered post-discharge follow-up versus manual nurse- or staff-driven discharge outreach. Consistency, time-to-contact, scalability, and CPT 99495 documentation.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/vs-manual-discharge-outreach' },
  openGraph: {
    title: 'AI-Powered TCM Calls vs. Manual Discharge Outreach',
    description:
      'Compare automated discharge follow-up to manual nurse-led outreach across six operational dimensions.',
    url: '/solutions/post-discharge-follow-up/vs-manual-discharge-outreach',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Comparison of TCM outreach approaches' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered TCM Calls vs. Manual Discharge Outreach',
    description:
      'Compare automated discharge follow-up to manual nurse-led outreach across six operational dimensions.',
    images: [HERO_IMAGE],
  },
}

const comparisonFaqs = [
  {
    question: 'Is an AI-powered call legally equivalent to a nurse call for TCM billing?',
    answer:
      'CMS does not require a specific staff role for the initial 2-business-day contact \u2014 it must be a "direct contact" that addresses the discharge care plan and is documented. An AI call that captures the required elements and escalates concerns to clinical staff satisfies the CMS requirement. The face-to-face visit that follows (within 7 or 14 days) still requires a qualified clinician.',
  },
  {
    question: 'When does manual outreach still make sense?',
    answer:
      'Manual outreach is the right choice for the face-to-face visit requirement and for patients with complex psychosocial needs where a human conversation is clinically indicated. Many providers use a hybrid model: AI handles the 2-business-day contact for all discharges, and clinical staff handle the face-to-face visit and any escalations flagged by the AI.',
  },
  {
    question: "What\u2019s the typical cost comparison?",
    answer:
      'Manual outreach runs roughly $3\u2013$8 per call in labor cost depending on staff type and call length. Automated AI calls are a small fraction of that per call. The larger cost driver is missed contacts: every missed 2-business-day window means an unbilled $178 TCM encounter.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
  { name: 'vs. Manual Discharge Outreach', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'AI-Powered TCM Calls vs. Manual Discharge Outreach',
  description:
    'Category-level comparison of automated AI-powered post-discharge follow-up versus manual nurse- or staff-driven discharge outreach.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
})

export default function TCMVsManualPage() {
  return (
    <>
      <StructuredData id="tcm-compare-breadcrumb" data={breadcrumb} />
      <StructuredData id="tcm-compare-article" data={article} />
      <StructuredData id="tcm-compare-faq" data={buildFAQSchema(comparisonFaqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Comparison</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                AI-Powered TCM Calls vs. Manual Discharge Outreach
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                A category-level look at how automated post-discharge follow-up compares to
                nurse- or care-coordinator-driven manual outreach for{' '}
                <Link href="/resources/glossary/transitional-care-management" className="text-purple-200 underline hover:text-white">Transitional Care Management</Link>.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>Consistency wins with automation.</strong> Manual outreach misses the
                    2-business-day window on high-discharge days; automated calls don\u2019t.
                  </li>
                  <li>
                    <strong>Face-to-face is still human.</strong> AI handles the initial contact; the
                    7- or 14-day face-to-face visit required for TCM billing remains clinical staff work.
                  </li>
                  <li>
                    <strong>Cost per missed TCM is $178.</strong> Any discharge that slips the 2-day
                    contact window becomes an unbilled encounter.
                  </li>
                  <li>
                    <strong>Hybrid models work well.</strong> AI handles every discharge for the initial
                    contact; clinical staff pick up escalations and face-to-face visits.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the two approaches compare</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The table below captures the operational tradeoffs. Not every dimension favors
                automation \u2014 manual outreach still wins on nuanced clinical conversations and
                relationship continuity.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Dimension</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">AI-Powered Calls</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Manual Outreach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">2-business-day contact rate</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Near 100% \u2014 scheduling is automatic from discharge timestamp</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Varies with staffing; drops on high-discharge days and holiday weekends</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Per-call cost</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Low, fixed \u2014 scales with discharge volume without headcount</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">~$3\u2013$8 labor per call; scales linearly with discharge volume</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Scalability</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Handles volume spikes without bottlenecks</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Hard cap on throughput per FTE</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Clinical nuance</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Structured prompts cover the required TCM elements; human escalation for concerns</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Unbounded conversation; strong for psychosocial complexity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Escalation speed</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Real-time alerts to care team the moment a concern surfaces</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Same-day if staff are available; variable otherwise</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Documentation for <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">CPT 99495</Link> billing</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Auto-generated call transcript + structured summary mapped to CMS requirements</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Dependent on note-taking discipline during or after the call</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When AI-powered calls are the better choice</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>High daily discharge volume that exceeds available clinical staff bandwidth.</li>
                <li>Weekend and holiday discharges where the 2-business-day window is tight.</li>
                <li>Organizations under HRRP penalty pressure seeking consistent readmission mitigation.</li>
                <li>Programs that need standardized, auditable documentation for every TCM encounter.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When manual outreach still makes sense</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>The 7- or 14-day face-to-face visit required for TCM billing \u2014 a clinician must do this.</li>
                <li>Patients with complex psychosocial needs where human conversation is clinically indicated.</li>
                <li>Escalations triggered by the AI contact \u2014 human clinical judgment takes over.</li>
                <li>Small discharge volumes where existing staff can reliably hit the 2-business-day window.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The hybrid model most providers land on</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In practice, most successful TCM programs run a hybrid: AI handles the 2-business-day
                contact for every discharge, generating a structured summary and flagging concerns.
                Clinical staff handle the 7- or 14-day face-to-face visit, follow up on any AI-flagged
                escalations, and manage ongoing complex patients. This eliminates missed contacts
                (the single largest source of unbilled TCM encounters) while keeping clinical
                judgment in the loop where it matters.
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
                  <li>The 2-business-day contact is where automation delivers the most value.</li>
                  <li>Hybrid models dominate in practice; this isn\u2019t an either/or choice.</li>
                  <li>Documentation quality is the difference between a billable TCM and a missed one.</li>
                  <li>Face-to-face visits remain human work and always will.</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Back to the TCM solution overview
                </Link>
              </div>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN TCM Booklet
                </a>
                . Last updated 2026-04-19.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
