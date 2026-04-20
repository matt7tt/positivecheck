import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99495: Definition and Billing Requirements | Positive Check Glossary',
  description:
    'CPT 99495 is the Medicare billing code for Transitional Care Management services with moderate medical decision-making complexity. Definition, requirements, and how it relates to RPM and CCM.',
  alternates: { canonical: '/resources/glossary/cpt-99495' },
  openGraph: {
    title: 'CPT 99495: Definition and Billing Requirements',
    description:
      'Medicare billing code for Transitional Care Management with moderate complexity. Definition and requirements.',
    url: '/resources/glossary/cpt-99495',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99495: Definition and Billing Requirements',
    description: 'Medicare billing code for Transitional Care Management with moderate complexity.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99495', url: 'https://positivecheck.com/resources/glossary/cpt-99495' },
])

const termSchema = buildCPTCodeSchema({
  code: '99495',
  name: 'Transitional Care Management services with moderate medical decision-making complexity',
  description:
    'CPT 99495 is a Medicare billing code for Transitional Care Management services with moderate medical decision-making complexity, requiring a direct patient contact within two business days of discharge and a face-to-face visit within 14 calendar days.',
  category: 'Transitional Care Management',
})

export default function CPT99495GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99495-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99495-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99495
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99495 is a Medicare billing code for Transitional Care Management services
                with moderate medical decision-making complexity, requiring a direct patient
                contact within two business days of discharge and a face-to-face visit within
                14 calendar days.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99495 is a Medicare billing code for Transitional Care Management services
                with moderate medical decision-making complexity, requiring a direct patient
                contact within two business days of discharge and a face-to-face visit within
                14 calendar days. It reimburses the 30-day post-discharge care episode as a
                single bundled payment, encompassing the initial contact, care coordination
                activities conducted during the month, and the in-person visit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 2026 Medicare national average reimbursement for CPT 99495 is approximately
                $178 per patient per discharge event. Rates are updated annually through the
                Medicare Physician Fee Schedule; providers should verify current figures on
                CMS.gov before projecting program revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99495 was established by CMS under the Medicare Physician Fee Schedule as
                part of the Transitional Care Management framework. The authoritative billing
                reference is the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS Medicare Learning Network TCM fact sheet
                </a>
                , which defines eligible discharge settings, required service components, and
                documentation standards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The \u201cmoderate\u201d medical decision-making complexity designation is assessed per
                standard Evaluation &amp; Management (E/M) guidelines. In practice, moderate
                complexity is the most common post-discharge scenario and covers the majority
                of patients transitioning from an acute hospital stay to a community setting.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians and qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs)
                  billing for TCM services
                </li>
                <li>
                  Patients discharged from inpatient hospital stays (acute, psychiatric, rehab),
                  observation, or partial hospitalization
                </li>
                <li>
                  Patients discharged to a community setting (home, assisted living,
                  domiciliary) \u2014 NOT to SNF, LTAC, or inpatient rehab
                </li>
                <li>
                  Cases where medical decision-making complexity is moderate (most common
                  post-discharge scenario)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99496"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99496
                  </Link>{' '}
                  \u2014 the high-complexity TCM code (7-day face-to-face window)
                </li>
                <li>
                  <Link
                    href="/resources/glossary/transitional-care-management"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Transitional Care Management (TCM)
                  </Link>{' '}
                  \u2014 the CMS care model CPT 99495 bills
                </li>
                <li>
                  <Link
                    href="/resources/glossary/30-day-readmission"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    30-day readmission
                  </Link>{' '}
                  \u2014 the clinical outcome TCM aims to reduce
                </li>
                <li>
                  <Link
                    href="/resources/glossary/care-coordination"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Care coordination
                  </Link>{' '}
                  \u2014 the broader function TCM operationalizes
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check automates the 2-business-day patient contact required for CPT
                99495 billing, generates structured documentation, and escalates concerns to
                clinical staff in real time. See the{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Post-Discharge Follow-Up solution
                </Link>{' '}
                for the full workflow, or the{' '}
                <Link
                  href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99495 billing guide
                </Link>{' '}
                for eligibility and documentation details.
              </p>

              <div className="text-center mt-12 mb-8">
                <Link
                  href="/resources/glossary"
                  className="text-purple-700 underline hover:text-purple-900 text-sm"
                >
                  &larr; Back to Glossary
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-8">
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

            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
