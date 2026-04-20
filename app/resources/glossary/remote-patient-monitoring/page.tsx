import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM): Definition and Requirements | Positive Check Glossary',
  description:
    'Remote Patient Monitoring (RPM) is a Medicare-reimbursed care model combining connected-device data transmission with monthly interactive communication. Definition, CPT codes, and requirements.',
  alternates: { canonical: '/resources/glossary/remote-patient-monitoring' },
  openGraph: {
    title: 'Remote Patient Monitoring (RPM): Definition and Requirements',
    description:
      'Medicare-reimbursed care model combining device data transmission with monthly interactive communication.',
    url: '/resources/glossary/remote-patient-monitoring',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Remote Patient Monitoring (RPM): Definition and Requirements',
    description: 'Medicare-reimbursed care model for device + interactive communication.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Remote Patient Monitoring', url: 'https://positivecheck.com/resources/glossary/remote-patient-monitoring' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Remote Patient Monitoring (RPM)',
  definition:
    'Remote Patient Monitoring (RPM) is a Medicare-reimbursed care model where clinical staff review physiologic data (blood pressure, glucose, weight, SpO2, ECG, etc.) transmitted from a patient\u2019s connected medical device and conduct interactive communication with the patient at least monthly, supported by CPT codes 99453, 99454, 99457, and 99458.',
  slug: 'remote-patient-monitoring',
  inDefinedTermSet: 'CMS care programs',
})

export default function RemotePatientMonitoringGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="rpm-term-breadcrumb" />
      <StructuredData data={termSchema} id="rpm-term-definition" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Remote Patient Monitoring (RPM)
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Remote Patient Monitoring (RPM) is a Medicare-reimbursed care model where clinical
                staff review physiologic data (blood pressure, glucose, weight, SpO2, ECG, etc.)
                transmitted from a patient\u2019s connected medical device and conduct interactive
                communication with the patient at least monthly, supported by CPT codes 99453,
                99454, 99457, and 99458.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Remote Patient Monitoring (RPM) is a Medicare-reimbursed care model where clinical
                staff review physiologic data (blood pressure, glucose, weight, SpO2, ECG, etc.)
                transmitted from a patient\u2019s connected medical device and conduct interactive
                communication with the patient at least monthly. RPM covers ongoing monthly care
                for patients with chronic conditions where physiologic data informs clinical
                decisions, enabling proactive intervention before conditions worsen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Four billing codes support the program:{' '}
                <Link href="/resources/glossary/cpt-99453" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99453
                </Link>{' '}
                covers one-time setup and patient education;{' '}
                <Link href="/resources/glossary/cpt-99454" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99454
                </Link>{' '}
                covers device supply billed each 30 days;{' '}
                <Link href="/resources/glossary/cpt-99457" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99457
                </Link>{' '}
                covers the first 20 minutes of interactive communication per month; and{' '}
                <Link href="/resources/glossary/cpt-99458" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99458
                </Link>{' '}
                covers each additional 20 minutes per month. Combined monthly revenue per patient
                can reach \u007e$140\u2013$150 for a full RPM episode.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RPM was established by CMS under the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                . To qualify, a patient must have a chronic condition and use an FDA-cleared
                connected medical device capable of automatic data transmission to clinical staff.
                The device must collect and transmit physiologic data on at least 16 days per
                30-day period for the supply code (CPT 99454) to apply.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike some CMS programs, RPM does not impose a minimum number of chronic
                conditions \u2014 a single qualifying diagnosis is sufficient. The interactive
                communication required by CPT 99457 and 99458 must be with the patient or
                caregiver and must address the device data transmitted; it cannot be a generic
                check-in unrelated to the monitored readings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians and qualifying non-physician practitioners billing for ongoing
                  chronic care under the Medicare Physician Fee Schedule
                </li>
                <li>
                  Patients with one or more chronic conditions (no minimum count, unlike CCM)
                  who have a connected monitoring device
                </li>
                <li>
                  Care coordinators, clinical staff, or AI-powered systems performing the
                  monthly interactive communication under general supervision of the billing
                  practitioner
                </li>
                <li>
                  Most common conditions: hypertension, diabetes, heart failure, COPD, CKD,
                  post-surgical recovery
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/cpt-99453" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99453
                  </Link>{' '}
                  \u2014 one-time setup and patient education
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99454" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99454
                  </Link>{' '}
                  \u2014 device supply billed each 30 days
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99457" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99457
                  </Link>{' '}
                  \u2014 first 20 minutes of interactive communication per month
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99458" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99458
                  </Link>{' '}
                  \u2014 each additional 20 minutes per month
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  \u2014 the broader function RPM operationalizes
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check operationalizes the interactive-communication layer of RPM at scale
                through automated daily wellness calls, structured documentation, and real-time
                escalation to clinical staff. See the{' '}
                <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                  Remote Patient Monitoring solution overview
                </Link>{' '}
                or the{' '}
                <Link href="/solutions/remote-patient-monitoring/cpt-99457-billing-guide" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99457 billing guide
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
