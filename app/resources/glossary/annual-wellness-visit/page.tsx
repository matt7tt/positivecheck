import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Annual Wellness Visit (AWV): Definition and Medicare Coverage | Positive Check Glossary',
  description:
    'The Annual Wellness Visit (AWV) is a Medicare-covered yearly preventive visit that develops a personalized prevention plan. Definition, HCPCS G0438/G0439 codes, and how it differs from IPPE and annual physicals.',
  alternates: { canonical: '/resources/glossary/annual-wellness-visit' },
  openGraph: {
    title: 'Annual Wellness Visit (AWV): Definition and Medicare Coverage',
    description:
      'Medicare-covered yearly preventive visit for personalized prevention planning.',
    url: '/resources/glossary/annual-wellness-visit',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Annual Wellness Visit (AWV): Definition and Medicare Coverage',
    description: 'Medicare-covered yearly preventive visit for prevention planning.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Annual Wellness Visit', url: 'https://positivecheck.com/resources/glossary/annual-wellness-visit' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Annual Wellness Visit (AWV)',
  definition:
    'The Annual Wellness Visit (AWV) is a Medicare-covered yearly preventive visit that develops or updates a personalized prevention plan for beneficiaries, distinct from the Initial Preventive Physical Examination (IPPE) and from annual physical exams; billed under HCPCS G0438 (initial AWV) and G0439 (subsequent AWV).',
  slug: 'annual-wellness-visit',
  inDefinedTermSet: 'CMS care programs',
})

export default function AnnualWellnessVisitGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="annual-wellness-visit-breadcrumb" />
      <StructuredData data={termSchema} id="annual-wellness-visit-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Annual Wellness Visit (AWV)
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                The Annual Wellness Visit (AWV) is a Medicare-covered yearly preventive visit that
                develops or updates a personalized prevention plan for beneficiaries, distinct from
                the Initial Preventive Physical Examination (IPPE) and from annual physical exams;
                billed under HCPCS G0438 (initial AWV) and G0439 (subsequent AWV).
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Annual Wellness Visit (AWV) is a Medicare-covered yearly preventive visit that
                develops or updates a personalized prevention plan for beneficiaries, distinct from
                the Initial Preventive Physical Examination (IPPE) and from annual physical exams.
                The AWV is a face-to-face encounter focused on prevention, not problem-based care.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Required elements of the AWV include a health risk assessment, a list of current
                providers and suppliers, a review of the beneficiary{'\u2019'}s medical and family
                history, cognitive impairment screening, depression screening, a review of
                functional ability and safety, and a personalized prevention plan with recommended
                screenings and preventive services. The visit is covered at no cost to the
                beneficiary when the provider accepts Medicare assignment.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The AWV was established by the Affordable Care Act of 2010 (section 4103) and is
                covered under Medicare Part B. Two HCPCS codes govern billing: G0438 applies to
                the initial AWV {'\u2014'} the first AWV a beneficiary receives after 12 or more
                months of Medicare Part B enrollment, and is generally billed approximately once
                per lifetime for a given beneficiary {'\u2014'} while G0439 applies to each
                subsequent AWV, which may be billed every 12 months thereafter.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Authoritative billing and coverage guidance is published by CMS in the{' '}
                <a
                  href="https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/awv_chart_icn905706.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN AWV chart
                </a>
                , which summarizes covered elements, documentation requirements, and coding
                guidance for both G0438 and G0439.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Medicare Part B beneficiaries who have been enrolled for 12 or more months {'\u2014'} the
                  IPPE (Welcome to Medicare) covers the first 12 months, after which the AWV applies
                </li>
                <li>
                  Physicians and qualifying non-physician practitioners who perform or direct the AWV
                  encounter
                </li>
                <li>
                  A beneficiary may receive ONE AWV per year, measured on a rolling 12-month basis
                  from the date of the previous AWV
                </li>
                <li>
                  The AWV is not the same as a routine annual physical exam {'\u2014'} Medicare does
                  NOT cover traditional annual physicals; the AWV is a distinct preventive framework
                  that is separately defined and separately reimbursed
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Chronic Care Management
                  </Link>{' '}
                  {'\u2014'} often billed alongside the AWV for beneficiaries with multiple chronic
                  conditions
                </li>
                <li>
                  <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Transitional Care Management
                  </Link>{' '}
                  {'\u2014'} a post-discharge program distinct from the AWV preventive framework
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the broader function that the AWV{'\u2019'}s personalized prevention
                  plan supports
                </li>
                <li>
                  <Link href="/resources/glossary/patient-engagement" className="text-purple-700 underline hover:text-purple-900">
                    Patient engagement
                  </Link>{' '}
                  {'\u2014'} the engagement framework that makes the AWV{'\u2019'}s prevention plan
                  actionable between annual visits
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check supports post-AWV prevention-plan execution: daily wellness calls
                can reinforce the screenings, lifestyle changes, and follow-up appointments
                documented in the AWV{'\u2019'}s personalized prevention plan, keeping patients
                engaged year-round rather than only at the annual visit. Learn more about how
                Positive Check complements care programs on the{' '}
                <Link href="/solutions/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                  chronic care management solutions page
                </Link>
                .
              </p>

              <div className="text-center mt-12 mb-8">
                <Link
                  href="/resources/glossary"
                  className="text-purple-700 underline hover:text-purple-900 text-sm"
                >
                  &larr; Back to Glossary
                </Link>
              </div>

            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS guidance.{' '}
                <a
                  href="https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/awv_chart_icn905706.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN AWV chart
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
