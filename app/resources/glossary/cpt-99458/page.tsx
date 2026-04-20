import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99458: Definition and RPM Additional Interactive Communication | Positive Check Glossary',
  description:
    'CPT 99458 reimburses each additional 20 minutes of interactive communication beyond CPT 99457. Definition, billable up to twice per patient per month, and how it maximizes RPM revenue.',
  alternates: { canonical: '/resources/glossary/cpt-99458' },
  openGraph: {
    title: 'CPT 99458: Definition and RPM Additional Interactive Communication',
    description:
      'Medicare billing code for each additional 20 minutes of RPM interactive communication per month.',
    url: '/resources/glossary/cpt-99458',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99458: Definition and RPM Additional Interactive Communication',
    description: 'Medicare code for each additional 20 minutes of RPM interactive communication.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99458', url: 'https://positivecheck.com/resources/glossary/cpt-99458' },
])

const termSchema = buildCPTCodeSchema({
  code: '99458',
  name: 'Remote physiologic monitoring treatment management; each additional 20 minutes of interactive communication per calendar month',
  description:
    'CPT 99458 is the Medicare billing code for each additional 20 minutes of interactive communication with an RPM patient beyond the first 20 minutes covered by CPT 99457, reimbursed at approximately $41 and billable up to twice per patient per calendar month.',
  category: 'Remote Patient Monitoring',
})

export default function CPT99458GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99458-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99458-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99458
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99458 is the Medicare billing code for each additional 20 minutes of interactive
                communication with an RPM patient beyond the first 20 minutes covered by CPT 99457,
                reimbursed at approximately $41 and billable up to twice per patient per calendar month.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99458 is the Medicare billing code for each additional 20 minutes of interactive
                communication with an RPM patient beyond the first 20 minutes covered by CPT 99457,
                reimbursed at approximately $41 and billable up to twice per patient per calendar
                month. It is an add-on code that ONLY applies when CPT 99457 is also billed for the
                same patient in the same calendar month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99458 can be billed twice, covering minutes 21\u201340 and 41\u201360, bringing
                total monthly interactive-communication revenue to roughly $134 per patient
                (99457 + 2\u00d799458). The 2026 Medicare national average reimbursement for CPT
                99458 is \u007e$41 per 20-minute block. Rates are updated annually through the
                Medicare Physician Fee Schedule.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99458 is governed by CMS under the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>{' '}
                as an add-on to CPT 99457. Each 20-minute block billed under 99458 must meet the
                same real-time, two-way interactive communication criteria as 99457 \u2014
                asynchronous data review does not count, and interactions must address physiologic
                data, symptoms, or the patient\u2019s care plan.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because 99458 is capped at two units per patient per calendar month, providers
                cannot bill for more than 60 total cumulative interactive-communication minutes
                under the 99457 + 99458 code family in a single month. Annual updates are published
                in the Medicare Physician Fee Schedule final rule.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Same provider types as 99457 (physicians, NPPs, clinical staff, AI-powered
                  systems with human escalation)
                </li>
                <li>
                  Patients with active interactive-communication time exceeding the 99457 threshold
                  of 20 cumulative minutes
                </li>
                <li>
                  Billable up to TWICE per calendar month (minutes 21\u201340 and 41\u201360)
                </li>
                <li>
                  Requires CPT 99457 to also be billed for the same patient in the same month
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
                  </Link>{' '}
                  \u2014 the base interactive-communication code that 99458 adds onto
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99454"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99454
                  </Link>{' '}
                  \u2014 the device supply code billed monthly alongside 99457 and 99458
                </li>
                <li>
                  <Link
                    href="/resources/glossary/remote-patient-monitoring"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Remote Patient Monitoring
                  </Link>{' '}
                  \u2014 the broader care model that CPT 99458 helps fully reimburse
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check\u2019s daily wellness calls naturally exceed 20 minutes cumulative
                per patient per month for engaged populations, unlocking 99458 billings and
                maximizing per-patient revenue without requiring additional clinical staff time.
                See the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Remote Patient Monitoring solution
                </Link>{' '}
                or the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring/cpt-99457-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99457 billing guide
                </Link>{' '}
                for time-tracking and documentation practices that support both 99457 and 99458
                claims.
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
