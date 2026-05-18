import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99445: New 2026 RPM Device Supply Code (2\u201315 Days) | Positive Check Glossary',
  description:
    'CPT 99445 is the new 2026 Medicare billing code for Remote Patient Monitoring device supply when data is collected on 2\u201315 days within a 30-day period. Definition, threshold, and how it differs from CPT 99454.',
  alternates: { canonical: '/resources/glossary/cpt-99445' },
  openGraph: {
    title: 'CPT 99445: New 2026 RPM Device Supply Code (2\u201315 Days)',
    description:
      'Medicare billing code for RPM device supply with shorter monitoring periods. Effective January 1, 2026.',
    url: '/resources/glossary/cpt-99445',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99445: New 2026 RPM Device Supply Code (2\u201315 Days)',
    description: 'Medicare billing code for RPM device supply with shorter monitoring periods.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://www.positivecheck.com' },
  { name: 'Resources', url: 'https://www.positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://www.positivecheck.com/resources/glossary' },
  { name: 'CPT 99445', url: 'https://www.positivecheck.com/resources/glossary/cpt-99445' },
])

const termSchema = buildCPTCodeSchema({
  code: '99445',
  name: 'Remote monitoring of physiologic parameter(s); device(s) supply with daily recording(s) or programmed alert(s) transmission, 2\u201315 days within a 30-day period',
  description:
    'CPT 99445 is the new 2026 Medicare billing code for Remote Patient Monitoring device supply when physiologic data is collected on 2 to 15 days within a 30-day period, effective January 1, 2026 and reimbursed at approximately $47 national average.',
  category: 'Remote Patient Monitoring',
})

export default function CPT99445GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99445-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99445-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99445
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99445 is the new 2026 Medicare billing code for Remote Patient Monitoring
                device supply when physiologic data is collected on 2{'\u2013'}15 days within a
                30-day period. Effective January 1, 2026.
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
                  CPT 99445 was introduced in the CY 2026 Medicare Physician Fee Schedule Final
                  Rule (published November 5, 2025) and became effective January 1, 2026. It
                  pairs with CPT 99454 to cover the full range of RPM device-supply scenarios.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99445 reimburses the supply of an FDA-cleared physiologic monitoring device
                with daily recordings or programmed alert transmissions when the patient
                transmits data on 2 to 15 days within a 30-day period. The 2026 Medicare
                national average reimbursement is approximately $47, matched to{' '}
                <Link
                  href="/resources/glossary/cpt-99454"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99454
                </Link>{' '}
                because CMS values the practice-expense cost the same regardless of monitoring
                duration. Rates are updated annually through the Medicare Physician Fee Schedule.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 2{'\u2013'}15-day window is a billing threshold, not a clinical requirement;
                providers should choose the code that matches actual device-transmission days in
                the 30-day period. Manual patient-reported data does not satisfy the
                automatic-transmission requirement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99445 is governed by CMS under the{' '}
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
                The key billing rule is that CPT 99445 and CPT 99454 are mutually exclusive in
                the same 30-day period for the same patient. Providers must select the code that
                matches actual data-transmission days: 2{'\u2013'}15 days bills as 99445;
                16{'\u2013'}30 days bills as 99454. If the patient transmits data on fewer than
                2 days, neither code is billable.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians or qualifying NPPs billing monthly RPM device supply where the
                  patient transmits data on 2{'\u2013'}15 days of a 30-day period
                </li>
                <li>
                  Patients with active FDA-cleared RPM devices that automatically transmit
                  physiologic data
                </li>
                <li>
                  Common scenarios: acute conditions monitored for a limited window, stable
                  patients with intermittent transmissions, mid-period device returns or
                  enrollments
                </li>
                <li>
                  NOT additive with CPT 99454 in the same 30-day period{'\u2014'}choose one
                  based on actual transmission days
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99454"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99454
                  </Link>
                  {' '}{'\u2014'} the companion device-supply code covering 16{'\u2013'}30 days
                  of transmission
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99453"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99453
                  </Link>
                  {' '}{'\u2014'} one-time setup and patient education that precedes 99445
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99470"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99470
                  </Link>
                  {' '}{'\u2014'} the new 2026 treatment-management code for the first 10
                  minutes of interactive communication
                </li>
                <li>
                  <Link
                    href="/resources/glossary/remote-patient-monitoring"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Remote Patient Monitoring
                  </Link>
                  {' '}{'\u2014'} the care model 99445 supports
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check{'\u2019'}s daily wellness calls reinforce patient engagement,
                which sustains the device-transmission consistency that determines whether a
                provider bills 99445 (shorter window) or 99454 (full 16{'\u2013'}30 day
                window). For patients who naturally transmit fewer days due to lifestyle or
                clinical status, 99445 captures revenue that would previously have been forgone
                when the 16-day threshold was missed. See the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Remote Patient Monitoring solution
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
