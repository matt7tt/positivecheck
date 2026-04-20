import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: '30-Day Readmission: Definition and HRRP Context | Positive Check Glossary',
  description:
    'A 30-day readmission is an unplanned inpatient admission within 30 days of a prior discharge. Definition, HRRP penalty context, and which conditions CMS tracks.',
  alternates: { canonical: '/resources/glossary/30-day-readmission' },
  openGraph: {
    title: '30-Day Readmission: Definition and HRRP Context',
    description:
      'Definition, HRRP penalty context, and which conditions CMS tracks for readmission penalties.',
    url: '/resources/glossary/30-day-readmission',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: '30-Day Readmission: Definition and HRRP Context',
    description: 'Definition and HRRP penalty context for 30-day hospital readmissions.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: '30-day readmission', url: 'https://positivecheck.com/resources/glossary/30-day-readmission' },
])

const termSchema = buildDefinedTermSchema({
  term: '30-day readmission',
  definition:
    'A 30-day readmission is an unplanned hospital admission occurring within 30 days of a prior inpatient discharge \u2014 a key clinical quality and financial metric tracked by CMS under the Hospital Readmissions Reduction Program (HRRP).',
  slug: '30-day-readmission',
  inDefinedTermSet: 'Clinical outcomes',
})

export default function ThirtyDayReadmissionGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="readmission-breadcrumb" />
      <StructuredData data={termSchema} id="readmission-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                30-day readmission
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                A 30-day readmission is an unplanned hospital admission occurring within 30 days
                of a prior inpatient discharge \u2014 a key clinical quality and financial metric
                tracked by CMS under the Hospital Readmissions Reduction Program (HRRP).
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A 30-day readmission is an unplanned hospital admission occurring within 30 days
                of a prior inpatient discharge \u2014 a key clinical quality and financial metric
                tracked by CMS under the Hospital Readmissions Reduction Program (HRRP). The
                30-day window begins on the day of discharge; readmission to the same hospital
                or any other acute-care hospital counts toward the measure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Planned readmissions \u2014 such as scheduled chemotherapy or elective procedures
                \u2014 are excluded from HRRP measures. The national Medicare fee-for-service
                all-cause 30-day readmission rate is approximately 15%, though condition-specific
                rates vary widely; heart failure alone carries a readmission rate of roughly 22%,
                making it a primary HRRP target.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Hospital Readmissions Reduction Program (HRRP) was established by the
                Affordable Care Act (2010) and implemented beginning in fiscal year 2013. CMS
                assesses hospitals against an excess readmission ratio \u2014 comparing actual to
                expected readmission rates \u2014 across six target conditions: acute myocardial
                infarction (AMI), heart failure (HF), pneumonia (PN), chronic obstructive
                pulmonary disease (COPD), coronary artery bypass graft surgery (CABG), and
                elective total hip arthroplasty and total knee arthroplasty (THA/TKA).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hospitals with excess readmissions face payment reductions on all Medicare
                inpatient discharges, up to a maximum of 3% of base DRG payments. Full program
                details are available from the{' '}
                <a
                  href="https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Hospital Readmissions Reduction Program
                </a>{' '}
                page on CMS.gov.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Hospital quality and financial leadership tracking HRRP penalty exposure
                  (up to 3% of Medicare DRG payments)
                </li>
                <li>
                  Clinical leadership measuring post-discharge outcomes across service lines
                </li>
                <li>
                  Care transition teams evaluating TCM, RPM, and CCM programs for
                  readmission reduction effectiveness
                </li>
                <li>
                  Regulators and payers \u2014 CMS under HRRP, and commercial insurers adopting
                  similar readmission measures in value-based contracts
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Transitional Care Management (TCM)
                  </Link>{' '}
                  \u2014 the CMS-reimbursed framework for 30-day readmission reduction
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99495
                  </Link>{' '}
                  \u2014 the moderate-complexity TCM billing code
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  \u2014 the broader function that spans the 30-day window
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check\u2019s automated post-discharge wellness calls target the 30-day window
                \u2014 especially the highest-risk first 7 days. See the{' '}
                <Link href="/solutions/post-discharge-follow-up" className="text-purple-700 underline hover:text-purple-900">
                  Post-Discharge Follow-Up solution
                </Link>{' '}
                or the{' '}
                <Link href="/solutions/post-discharge-follow-up/30-day-readmission-reduction" className="text-purple-700 underline hover:text-purple-900">
                  30-day readmission reduction guide
                </Link>{' '}
                for strategy and evidence.
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
