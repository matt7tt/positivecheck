import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99470: New 2026 RPM Treatment Management Code (First 10 Minutes) | Positive Check Glossary',
  description:
    'CPT 99470 is the new 2026 Medicare billing code for the first 10 minutes of Remote Patient Monitoring treatment management per calendar month. Definition, threshold, and how it differs from CPT 99457.',
  alternates: { canonical: '/resources/glossary/cpt-99470' },
  openGraph: {
    title: 'CPT 99470: New 2026 RPM Treatment Management Code (First 10 Minutes)',
    description:
      'Medicare billing code for the first 10 minutes of RPM treatment management per month. Effective January 1, 2026.',
    url: '/resources/glossary/cpt-99470',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99470: New 2026 RPM Treatment Management Code (First 10 Minutes)',
    description: 'Medicare billing code for the first 10 minutes of RPM treatment management per month.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://www.positivecheck.com' },
  { name: 'Resources', url: 'https://www.positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://www.positivecheck.com/resources/glossary' },
  { name: 'CPT 99470', url: 'https://www.positivecheck.com/resources/glossary/cpt-99470' },
])

const termSchema = buildCPTCodeSchema({
  code: '99470',
  name: 'Remote physiologic monitoring treatment management; first 10 minutes of interactive communication per calendar month',
  description:
    'CPT 99470 is the new 2026 Medicare billing code for the first 10 minutes of Remote Patient Monitoring treatment management per calendar month, effective January 1, 2026 and reimbursed at approximately $26 national average. Requires at least one real-time interactive communication with the patient or caregiver.',
  category: 'Remote Patient Monitoring',
})

export default function CPT99470GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99470-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99470-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99470
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99470 is the new 2026 Medicare billing code for the first 10 minutes of
                Remote Patient Monitoring treatment management per calendar month, requiring at
                least one real-time interactive communication with the patient or caregiver.
                Effective January 1, 2026.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <div className="bg-purple-50 border-l-4 border-purple-600 px-5 py-4 mb-8 rounded">
                <p className="text-sm text-purple-900 font-medium mb-1">
                  New for 2026
                </p>
                <p className="text-sm text-purple-900 leading-relaxed">
                  CPT 99470 was introduced in the CY 2026 Medicare Physician Fee Schedule Final
                  Rule (published November 5, 2025) and became effective January 1, 2026. It
                  lowers the time threshold for billable RPM treatment management from 20
                  minutes (under CPT 99457) to 10 minutes for providers who do not reach the
                  full 20-minute mark.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99470 reimburses the first 10 minutes of clinical staff or physician time
                spent on Remote Patient Monitoring treatment management within a calendar month.
                The 2026 Medicare national average reimbursement is approximately $26, finalized
                at 0.31 RVUs (half of CPT 99457{'\u2019'}s 0.61 RVUs). At least one real-time
                interactive communication with the patient or caregiver is required within the
                billing month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 10-minute threshold is cumulative across the calendar month{'\u2014'}multiple
                short interactions can combine to satisfy the requirement. Asynchronous data
                review time does not count toward the 10-minute threshold; the time must
                represent active clinical engagement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99470 is governed by CMS under the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>
                . The code was approved by the AMA CPT Editorial Panel in September 2024 and
                adopted by CMS in the CY 2026 Physician Fee Schedule Final Rule.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99470 and CPT 99457 are mutually exclusive in the same calendar month for
                the same patient. Providers must select the code that matches actual cumulative
                time: 10{'\u2013'}19 minutes bills as 99470; 20 minutes or more bills as 99457
                with additional 20-minute increments under 99458. The interactive-communication
                requirement is the same as under 99457: real-time, two-way engagement that
                addresses physiologic data, symptoms, or care plan.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians, NPPs, or clinical staff under general supervision performing RPM
                  treatment management
                </li>
                <li>
                  Months where cumulative clinical time totals 10{'\u2013'}19 minutes (below the
                  20-minute threshold for CPT 99457)
                </li>
                <li>
                  Common scenarios: stable patients requiring less monthly engagement, mid-month
                  enrollments, months with no clinical events requiring extended review
                </li>
                <li>
                  NOT additive with CPT 99457 in the same calendar month{'\u2014'}choose one
                  based on actual cumulative time
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99457"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99457
                  </Link>
                  {' '}{'\u2014'} the companion treatment-management code for the first 20
                  minutes of interactive communication
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99458"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99458
                  </Link>
                  {' '}{'\u2014'} each additional 20 minutes after the 99457 threshold is met
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99445"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99445
                  </Link>
                  {' '}{'\u2014'} the new 2026 device-supply code for 2{'\u2013'}15 days of
                  transmission
                </li>
                <li>
                  <Link
                    href="/resources/glossary/interactive-communication-requirement"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Interactive communication requirement
                  </Link>
                  {' '}{'\u2014'} the underlying CMS rule that 99470 implements
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check structures daily wellness calls so that cumulative interactive-
                communication minutes can reliably reach either the 10-minute (99470) or
                20-minute (99457) threshold, depending on patient acuity and provider workflow.
                For stable patients where 20 minutes of monthly clinical time is not clinically
                necessary, 99470 captures revenue that previously required either reaching the
                full 20 minutes or forgoing the bill entirely. See the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Remote Patient Monitoring solution
                </Link>{' '}
                for the full workflow, or the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring/cpt-99457-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99457 billing guide
                </Link>{' '}
                for documentation patterns shared with 99470.
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

            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
