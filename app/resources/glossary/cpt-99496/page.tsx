import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99496: Definition and Billing Requirements | Positive Check Glossary',
  description:
    'CPT 99496 is the Medicare billing code for Transitional Care Management services with high medical decision-making complexity. Definition, 7-day face-to-face requirement, and how it differs from 99495.',
  alternates: { canonical: '/resources/glossary/cpt-99496' },
  openGraph: {
    title: 'CPT 99496: Definition and Billing Requirements',
    description:
      'Medicare billing code for Transitional Care Management with high complexity. 7-day face-to-face requirement and how it differs from 99495.',
    url: '/resources/glossary/cpt-99496',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99496: Definition and Billing Requirements',
    description: 'Medicare billing code for Transitional Care Management with high complexity.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99496', url: 'https://positivecheck.com/resources/glossary/cpt-99496' },
])

const termSchema = buildCPTCodeSchema({
  code: '99496',
  name: 'Transitional Care Management services with high medical decision-making complexity',
  description:
    'CPT 99496 is a Medicare billing code for Transitional Care Management services with high medical decision-making complexity, requiring a direct patient contact within two business days of discharge and a face-to-face visit within 7 calendar days.',
  category: 'Transitional Care Management',
})

export default function CPT99496GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99496-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99496-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99496
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99496 is a Medicare billing code for Transitional Care Management services
                with high medical decision-making complexity, requiring a direct patient
                contact within two business days of discharge and a face-to-face visit within
                7 calendar days.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99496 is a Medicare billing code for Transitional Care Management services
                with high medical decision-making complexity, requiring a direct patient
                contact within two business days of discharge and a face-to-face visit within
                7 calendar days. It reimburses the 30-day post-discharge care episode for
                patients requiring high-complexity clinical decision-making \u2014 typically
                multi-condition patients with active medication changes, recent exacerbations,
                or significant readmission risk factors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 2026 Medicare reimbursement rate for CPT 99496 exceeds the rate for CPT
                99495, reflecting the greater clinical intensity required. Rates are updated
                annually through the Medicare Physician Fee Schedule; providers should verify
                current figures on CMS.gov before projecting program revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99496 was established by CMS under the Medicare Physician Fee Schedule as
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
                documentation standards for both TCM codes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                \u201cHigh complexity\u201d medical decision-making is assessed per standard Evaluation
                &amp; Management (E/M) guidelines. Key factors include the number and complexity
                of active problems addressed, the amount and complexity of data reviewed and
                analyzed, and the risk of complications or morbidity associated with treatment
                decisions. The shortened 7-day face-to-face window (versus 14 days for CPT
                99495) reflects the greater urgency of close follow-up for high-complexity
                patients.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians and qualifying non-physician practitioners billing for TCM in
                  high-complexity scenarios
                </li>
                <li>
                  Patients discharged with multiple active diagnoses, medication changes
                  requiring close monitoring, or high readmission risk
                </li>
                <li>
                  The 7-day face-to-face window (shorter than 99495\u2019s 14-day window) demands
                  timely in-person assessment to address the elevated clinical risk
                </li>
                <li>
                  Same community-setting discharge eligibility as CPT 99495 \u2014 home, assisted
                  living, or domiciliary; SNF, LTAC, and inpatient rehab discharges are not
                  eligible
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99495"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99495
                  </Link>{' '}
                  \u2014 the moderate-complexity TCM code (14-day face-to-face window)
                </li>
                <li>
                  <Link
                    href="/resources/glossary/transitional-care-management"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Transitional Care Management (TCM)
                  </Link>{' '}
                  \u2014 the CMS care model both codes bill
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
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check automates the 2-business-day patient contact required for CPT
                99496 billing, captures structured documentation, and escalates concerns to
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
                \u2014 which covers both 99495 and 99496 \u2014 for eligibility and documentation details.
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
