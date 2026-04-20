import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Transitional Care Management (TCM): Definition and Requirements | Positive Check Glossary',
  description:
    'Transitional Care Management (TCM) is a CMS-reimbursed care model for patients transitioning from inpatient to community settings. Definition, CPT codes, and requirements.',
  alternates: { canonical: '/resources/glossary/transitional-care-management' },
  openGraph: {
    title: 'Transitional Care Management (TCM): Definition and Requirements',
    description:
      'CMS-reimbursed care model for post-discharge care transitions. Definition, CPT codes (99495/99496), and requirements.',
    url: '/resources/glossary/transitional-care-management',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Transitional Care Management (TCM): Definition and Requirements',
    description: 'CMS-reimbursed care model for post-discharge care transitions.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Transitional Care Management', url: 'https://positivecheck.com/resources/glossary/transitional-care-management' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Transitional Care Management (TCM)',
  definition:
    'Transitional Care Management (TCM) is a CMS-reimbursed care model for patients transitioning from an inpatient stay back to a community setting, comprising an initial direct patient contact within two business days of discharge and a face-to-face visit within 7 or 14 days depending on complexity.',
  slug: 'transitional-care-management',
  inDefinedTermSet: 'CMS care programs',
})

export default function TransitionalCareManagementGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="tcm-breadcrumb" />
      <StructuredData data={termSchema} id="tcm-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Transitional Care Management (TCM)
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Transitional Care Management (TCM) is a CMS-reimbursed care model for patients
                transitioning from an inpatient stay back to a community setting, comprising an
                initial direct patient contact within two business days of discharge and a
                face-to-face visit within 7 or 14 days depending on complexity.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transitional Care Management (TCM) is a CMS-reimbursed care model for patients
                transitioning from an inpatient stay back to a community setting, comprising an
                initial direct patient contact within two business days of discharge and a
                face-to-face visit within 7 or 14 days depending on complexity. TCM covers the
                full 30-day post-discharge care episode with defined documentation and contact
                requirements, bundling ongoing care coordination activities into a single
                reimbursed service period.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Two billing codes represent the program: CPT{' '}
                <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">
                  99495
                </Link>{' '}
                covers moderate-complexity cases and requires a face-to-face visit within 14
                calendar days of discharge; CPT{' '}
                <Link href="/resources/glossary/cpt-99496" className="text-purple-700 underline hover:text-purple-900">
                  99496
                </Link>{' '}
                covers high-complexity cases and requires a face-to-face visit within 7 calendar
                days. Both codes share the same 2-business-day initial contact requirement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TCM was established by CMS under the Medicare Physician Fee Schedule and is
                formally defined in the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS Medicare Learning Network TCM fact sheet
                </a>
                , which specifies eligible discharge settings, required service components,
                billing and documentation standards, and exclusions. The program is designed to
                bridge the care gap between the inpatient stay and stable community-based care.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                TCM requires coordination between inpatient discharge planning and outpatient
                primary or specialty care. Non-face-to-face services \u2014 medication
                reconciliation, care plan development, referral coordination, and patient
                education \u2014 can be performed by clinical staff under general supervision of
                the billing practitioner, making TCM operationally scalable across practice types.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians and qualifying non-physician practitioners billing for
                  post-discharge care under the Medicare Physician Fee Schedule
                </li>
                <li>
                  Patients discharged from inpatient stays (acute, psychiatric, or
                  long-term acute care hospital), observation, or partial hospitalization
                </li>
                <li>
                  Patients discharged to community settings (home, assisted living, domiciliary)
                  \u2014 not to a skilled nursing facility (SNF), long-term acute care (LTAC), or
                  inpatient rehabilitation facility
                </li>
                <li>
                  Care coordinators and clinical staff performing non-face-to-face contact
                  under general supervision of the billing practitioner
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99495
                  </Link>{' '}
                  \u2014 the moderate-complexity TCM billing code
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99496" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99496
                  </Link>{' '}
                  \u2014 the high-complexity TCM billing code
                </li>
                <li>
                  <Link href="/resources/glossary/30-day-readmission" className="text-purple-700 underline hover:text-purple-900">
                    30-day readmission
                  </Link>{' '}
                  \u2014 the clinical outcome TCM aims to reduce
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  \u2014 the broader function TCM operationalizes
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check operationalizes the 2-business-day contact requirement for TCM at
                scale via automated wellness calls. See the{' '}
                <Link href="/solutions/post-discharge-follow-up" className="text-purple-700 underline hover:text-purple-900">
                  Post-Discharge Follow-Up solution overview
                </Link>{' '}
                or the{' '}
                <Link href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99495 billing guide
                </Link>{' '}
                for the full workflow.
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
