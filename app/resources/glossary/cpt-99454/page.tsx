import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99454: Definition and RPM Device Supply Requirements | Positive Check Glossary',
  description:
    'CPT 99454 is the Medicare billing code for RPM device supply with daily recordings or programmed alert transmissions. Definition, 16-of-30-day transmission threshold, and how it combines with 99457/99458.',
  alternates: { canonical: '/resources/glossary/cpt-99454' },
  openGraph: {
    title: 'CPT 99454: Definition and RPM Device Supply Requirements',
    description:
      'Medicare billing code for RPM device supply. Definition, 16-of-30-day transmission threshold.',
    url: '/resources/glossary/cpt-99454',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99454: Definition and RPM Device Supply Requirements',
    description: 'Medicare billing code for RPM device supply.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99454', url: 'https://positivecheck.com/resources/glossary/cpt-99454' },
])

const termSchema = buildCPTCodeSchema({
  code: '99454',
  name: 'Remote monitoring of physiologic parameter(s); device(s) supply with daily recording(s) or programmed alert(s) transmission, each 30 days',
  description:
    'CPT 99454 is the Medicare billing code for Remote Patient Monitoring device supply with daily recordings or programmed alert transmissions, billed each 30 days and requiring the patient to transmit data on at least 16 of 30 days.',
  category: 'Remote Patient Monitoring',
})

export default function CPT99454GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99454-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99454-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99454
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99454 is the Medicare billing code for Remote Patient Monitoring device supply
                with daily recordings or programmed alert transmissions, billed each 30 days and
                requiring the patient to transmit data on at least 16 of 30 days.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99454 is the Medicare billing code for Remote Patient Monitoring device supply
                with daily recordings or programmed alert transmissions, billed each 30 days and
                requiring the patient to transmit data on at least 16 of 30 days. It reimburses the
                device rental or supply and the data transmission infrastructure that connects the
                patient\u2019s FDA-cleared device to the clinical team\u2019s monitoring platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 2026 Medicare national average reimbursement for CPT 99454 is approximately
                $47\u2013$56 per 30-day period, with variation by locality. Rates are updated
                annually through the Medicare Physician Fee Schedule; providers should verify
                current figures on CMS.gov before projecting program revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99454 is governed by CMS under the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>
                . The key billing rule is that the patient must transmit physiologic data on at
                least 16 of the 30 days in the billing period. If the 16-of-30-day threshold is
                not met, CPT 99454 cannot be billed for that period regardless of whether the
                device was supplied.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS requires that the device used under CPT 99454 be FDA-cleared and capable of
                automatic data transmission. Manual patient-reported data does not satisfy the
                code\u2019s technical requirements. Annual updates to RPM billing policy are
                published in the Medicare Physician Fee Schedule final rule.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians or qualifying NPPs billing monthly for RPM
                </li>
                <li>
                  Patients with active FDA-cleared RPM devices that automatically transmit
                  physiologic data
                </li>
                <li>
                  Billed each 30 days, starting after the initial setup (CPT 99453)
                </li>
                <li>
                  NOT billable if the 16-of-30-day transmission threshold is missed
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99453"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99453
                  </Link>{' '}
                  \u2014 one-time setup and patient education that precedes 99454
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99457"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99457
                  </Link>{' '}
                  \u2014 the first 20 minutes of interactive communication billed alongside 99454
                </li>
                <li>
                  <Link
                    href="/resources/glossary/remote-patient-monitoring"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Remote Patient Monitoring
                  </Link>{' '}
                  \u2014 the care model 99454 supports
                </li>
                <li>
                  <Link
                    href="/resources/glossary/care-coordination"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Care coordination
                  </Link>{' '}
                  \u2014 the broader function RPM supports
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check\u2019s daily wellness calls reinforce patient engagement, which
                maintains the device-transmission adherence required for 99454 billing. Patients
                who receive a structured daily check-in are more likely to use their devices
                consistently and exceed the 16-of-30-day threshold. See the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Remote Patient Monitoring solution
                </Link>{' '}
                or the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring/patient-selection"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  patient selection guide
                </Link>{' '}
                for criteria on enrolling patients most likely to meet transmission thresholds.
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
