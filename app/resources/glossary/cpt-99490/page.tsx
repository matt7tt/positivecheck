import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99490: Definition and CCM Billing Requirements | Positive Check Glossary',
  description:
    'CPT 99490 is the Medicare billing code for the first 20 minutes of non-complex Chronic Care Management clinical staff time per calendar month. Definition, eligibility, documentation, and how 99439/99487/99489 stack on top.',
  alternates: { canonical: '/resources/glossary/cpt-99490' },
  openGraph: {
    title: 'CPT 99490: Definition and CCM Billing Requirements',
    description:
      'Medicare billing code for the first 20 minutes of non-complex CCM clinical staff time per month.',
    url: '/resources/glossary/cpt-99490',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99490: Definition and CCM Billing Requirements',
    description: 'Medicare billing code for the first 20 minutes of non-complex CCM per month.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99490', url: 'https://positivecheck.com/resources/glossary/cpt-99490' },
])

const termSchema = buildCPTCodeSchema({
  code: '99490',
  name: 'Chronic care management services with the following required elements: multiple chronic conditions expected to last at least 12 months; first 20 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month',
  description:
    'CPT 99490 is the Medicare billing code for the first 20 minutes of clinical staff time spent on non-complex Chronic Care Management activities for a patient in a calendar month, reimbursed at approximately $66 and requiring two or more chronic conditions plus documented patient consent.',
  category: 'Chronic Care Management',
})

export default function CPT99490GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99490-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99490-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99490
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99490 is the Medicare billing code for the first 20 minutes of clinical staff
                time spent on non-complex Chronic Care Management activities for a patient in a
                calendar month, reimbursed at approximately $66 and requiring two or more chronic
                conditions plus documented patient consent.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 is the Medicare billing code for the first 20 minutes of clinical staff
                time spent on non-complex Chronic Care Management activities for a patient in a
                calendar month, reimbursed at approximately $66 and requiring two or more chronic
                conditions plus documented patient consent. It is the base code in the CCM billing
                family and must be billed before any add-on codes apply.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 is billed once per calendar month per patient when at least 20 minutes of
                clinical staff time on CCM activities have been documented. Time must be
                non-face-to-face {'\u2014'} minutes spent during evaluation and management visits do
                not count toward the 20-minute threshold. The 2026 Medicare national average
                reimbursement is approximately $66 per patient per month; rates are updated annually
                and providers should verify current figures on CMS.gov before projecting program
                revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 was established by CMS under the Medicare Physician Fee Schedule as part
                of the CCM code family (99490, 99439, 99487, 99489). CMS policy requires a
                comprehensive care plan, 24/7 patient access to care, and documented patient consent
                before billing. The authoritative guidance is the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN Chronic Care Management Services booklet
                </a>
                , which details documentation requirements, consent standards, and time-tracking
                rules.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Annual updates to CCM billing policy are published in the Medicare Physician Fee
                Schedule final rule. The non-complex designation distinguishes 99490 from the
                complex CCM codes (99487/99489), which require higher-complexity medical decision
                making and physician-directed time rather than clinical staff time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians or qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs)
                  billing CCM for their panel patients
                </li>
                <li>
                  Clinical staff (RNs, LPNs, medical assistants) under general supervision
                  performing CCM activities that count toward the monthly time requirement
                </li>
                <li>
                  Patients with two or more chronic conditions expected to last at least 12 months
                  and placing the patient at significant risk of death, exacerbation, or functional
                  decline
                </li>
                <li>
                  Billed once per calendar month per patient when cumulative clinical staff time
                  reaches 20 minutes and documented patient consent is on file
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99439"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99439
                  </Link>{' '}
                  {'\u2014'} each additional 20 minutes of non-complex CCM clinical staff time in
                  the same calendar month
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99487"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99487
                  </Link>{' '}
                  {'\u2014'} complex CCM 60 minutes, an alternative track for higher-complexity
                  patients requiring physician-directed time
                </li>
                <li>
                  <Link
                    href="/resources/glossary/chronic-care-management"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Chronic Care Management
                  </Link>{' '}
                  {'\u2014'} the broader care model CPT 99490 operationalizes
                </li>
                <li>
                  <Link
                    href="/resources/glossary/care-coordination"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the function CCM supports through structured patient outreach and
                  care-plan management
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check supports CCM by generating structured wellness call summaries that
                make the 20-minute clinical staff review productive {'\u2014'} concentrating time on
                care plan action and documentation rather than data gathering. See the{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management solution
                </Link>{' '}
                for the full workflow, or the{' '}
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99490 billing guide
                </Link>{' '}
                for documentation and time-tracking requirements.
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
