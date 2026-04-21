import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Interactive Communication Requirement: CMS Definition | Positive Check Glossary',
  description:
    'The interactive communication requirement is a CMS rule defining real-time two-way clinical engagement for Remote Patient Monitoring billing. Definition, what counts, and what doesn\u2019t.',
  alternates: { canonical: '/resources/glossary/interactive-communication-requirement' },
  openGraph: {
    title: 'Interactive Communication Requirement: CMS Definition',
    description:
      'CMS rule defining real-time two-way clinical engagement for RPM billing.',
    url: '/resources/glossary/interactive-communication-requirement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Interactive Communication Requirement: CMS Definition',
    description: 'CMS rule defining real-time two-way engagement for RPM billing.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Interactive Communication Requirement', url: 'https://positivecheck.com/resources/glossary/interactive-communication-requirement' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Interactive Communication Requirement',
  definition:
    'The interactive communication requirement is a CMS rule under the Medicare Physician Fee Schedule that defines the content and structure of billable clinical engagement for Remote Patient Monitoring (CPT 99457/99458) and related programs \u2014 specifically, real-time two-way engagement between clinical staff and the patient or caregiver discussing physiologic data, symptoms, or the care plan.',
  slug: 'interactive-communication-requirement',
  inDefinedTermSet: 'CMS clinical requirements',
})

export default function InteractiveCommunicationRequirementGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="interactive-communication-requirement-breadcrumb" />
      <StructuredData data={termSchema} id="interactive-communication-requirement-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Interactive Communication Requirement
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                The interactive communication requirement is a CMS rule under the Medicare Physician
                Fee Schedule that defines the content and structure of billable clinical engagement
                for Remote Patient Monitoring (CPT 99457/99458) and related programs {'\u2014'}{' '}
                specifically, real-time two-way engagement between clinical staff and the patient or
                caregiver discussing physiologic data, symptoms, or the care plan.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The interactive communication requirement is a CMS rule under the Medicare Physician
                Fee Schedule that defines the content and structure of billable clinical engagement
                for Remote Patient Monitoring (CPT 99457/99458) and related programs {'\u2014'}{' '}
                specifically, real-time two-way engagement between clinical staff and the patient or
                caregiver discussing physiologic data, symptoms, or the care plan.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The phrase appears in the CMS Medicare Physician Fee Schedule for CPT 99457/99458
                (RPM) but describes a general interaction standard increasingly applied across
                Medicare remote-care codes. The definition is intentionally technology-agnostic{' '}
                {'\u2014'} telephone, live video, live secure messaging all qualify if the exchange
                is real-time and clinically substantive.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The interactive communication requirement was established by CMS through the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>
                . The requirement distinguishes asynchronous data review {'\u2014'} which is not
                billable under CPT 99457/99458 but is billable separately under CPT 99091 {'\u2014'}{' '}
                from synchronous two-way exchange that discusses the patient{'\u2019'}s data,
                symptoms, or care plan. This distinction is central to correct billing under the RPM
                code set and shapes how clinical workflows must be structured to support compliant
                documentation.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What counts as interactive communication</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Live telephone call with patient or authorized caregiver responding
                </li>
                <li>
                  Live video visit (including telehealth platforms)
                </li>
                <li>
                  Secure messaging with real-time two-way exchange
                </li>
                <li>
                  AI-powered calls with structured clinical content and human escalation
                </li>
                <li>
                  NOT counted alone: voicemail without response, one-way alerts/reminders,
                  asynchronous email, asynchronous data review
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                    Remote Patient Monitoring
                  </Link>{' '}
                  {'\u2014'} the care model interactive communication underpins
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99457" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99457
                  </Link>{' '}
                  {'\u2014'} the first 20 minutes of interactive communication per month
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99458" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99458
                  </Link>{' '}
                  {'\u2014'} each additional 20 minutes of interactive communication
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the function interactive communication operationalizes
                </li>
                <li>
                  <Link href="/resources/glossary/patient-engagement" className="text-purple-700 underline hover:text-purple-900">
                    Patient engagement
                  </Link>{' '}
                  {'\u2014'} the broader engagement concept
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check{'\u2019'}s daily wellness calls satisfy the interactive communication
                requirement by capturing real-time two-way patient responses about physiologic data,
                symptoms, and care-plan adherence, with human escalation for concerning responses.
                Learn more about the{' '}
                <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                  Positive Check RPM solution
                </Link>{' '}
                or read the cluster deep-dive on the{' '}
                <Link href="/solutions/remote-patient-monitoring/interactive-communication-requirement" className="text-purple-700 underline hover:text-purple-900">
                  interactive communication requirement for RPM
                </Link>
                .
              </p>

              <div className="text-center mt-12 mb-8">
                <Link
                  href="/resources/glossary"
                  className="text-purple-700 underline hover:text-purple-900 text-sm"
                >
                  &larr; Back to Glossary
                </Link>
              </div>

            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS guidance.{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                . Last updated 2026-04-21.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
