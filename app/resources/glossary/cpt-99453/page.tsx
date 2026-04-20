import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99453: Definition and RPM Setup Requirements | Positive Check Glossary',
  description:
    'CPT 99453 is the Medicare billing code for the one-time Remote Patient Monitoring setup and patient education service. Definition, what it reimburses, and how it relates to 99454/99457.',
  alternates: { canonical: '/resources/glossary/cpt-99453' },
  openGraph: {
    title: 'CPT 99453: Definition and RPM Setup Requirements',
    description:
      'Medicare billing code for Remote Patient Monitoring setup and patient education. Definition and requirements.',
    url: '/resources/glossary/cpt-99453',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99453: Definition and RPM Setup Requirements',
    description: 'Medicare billing code for Remote Patient Monitoring setup and patient education.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99453', url: 'https://positivecheck.com/resources/glossary/cpt-99453' },
])

const termSchema = buildCPTCodeSchema({
  code: '99453',
  name: 'Remote monitoring of physiologic parameter(s); initial set-up and patient education on use of equipment',
  description:
    'CPT 99453 is the Medicare billing code for the one-time setup and patient education component of a Remote Patient Monitoring program, reimbursed at approximately $19 per patient when the device is delivered and the patient is trained.',
  category: 'Remote Patient Monitoring',
})

export default function CPT99453GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99453-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99453-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99453
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99453 is the Medicare billing code for the one-time setup and patient education
                component of a Remote Patient Monitoring program \u2014 reimbursed at approximately
                $19 per patient when the device is delivered and the patient is trained.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99453 is the Medicare billing code for the one-time setup and patient education
                component of a Remote Patient Monitoring program, reimbursed at approximately $19
                per patient when the device is delivered and the patient is trained. It is billed
                ONCE per patient per RPM episode and covers initial setup, device fitting, and
                patient education on how to use the connected device and respond to prompts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 2026 Medicare national average reimbursement for CPT 99453 is approximately
                $19 per patient. Rates are updated annually through the Medicare Physician Fee
                Schedule; providers should verify current figures on CMS.gov before projecting
                program revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99453 was established by CMS under the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>{' '}
                as the foundational setup code in the RPM billing family. It belongs to a family of
                RPM codes \u2014 99453, 99454, 99457, and 99458 \u2014 that together reimburse
                the full lifecycle of a Remote Patient Monitoring program from initial onboarding
                through ongoing interactive communication.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because 99453 is a one-time code, it establishes the episode and cannot be rebilled
                for the same patient unless there is a documented break in the RPM episode and a
                new enrollment is initiated. CMS guidance on the RPM code family is maintained
                in the Medicare Physician Fee Schedule final rules published annually.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians or qualifying non-physician practitioners enrolling a new RPM patient
                </li>
                <li>
                  Clinical staff performing device setup and patient education under general supervision
                </li>
                <li>
                  Billed when the patient receives the device and completes initial training
                </li>
                <li>
                  Not billable more than once per patient per RPM episode
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
                  </Link>{' '}
                  \u2014 the device supply code billed monthly after setup
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99457"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99457
                  </Link>{' '}
                  \u2014 the first 20 minutes of interactive communication per month
                </li>
                <li>
                  <Link
                    href="/resources/glossary/remote-patient-monitoring"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Remote Patient Monitoring
                  </Link>{' '}
                  \u2014 the broader care model CPT 99453 initiates
                </li>
                <li>
                  <Link
                    href="/resources/glossary/30-day-readmission"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    30-day readmission
                  </Link>{' '}
                  \u2014 a clinical outcome RPM programs aim to reduce
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check supports RPM onboarding by scheduling the first wellness call
                immediately after setup, creating a predictable start to the engagement cycle
                that reinforces the patient education initiated under CPT 99453. See the{' '}
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
                for interactive-communication documentation details.
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
