import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Patient Engagement: Definition and Why It Matters | Positive Check Glossary',
  description:
    'Patient engagement is the active involvement of patients in their own care. Definition, why it drives outcomes in CCM/RPM/TCM, and how care teams operationalize it.',
  alternates: { canonical: '/resources/glossary/patient-engagement' },
  openGraph: {
    title: 'Patient Engagement: Definition and Why It Matters',
    description:
      'The active involvement of patients in their own care, across CCM, RPM, and TCM programs.',
    url: '/resources/glossary/patient-engagement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Patient Engagement: Definition and Why It Matters',
    description: 'Active involvement of patients in their own care.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Patient Engagement', url: 'https://positivecheck.com/resources/glossary/patient-engagement' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Patient Engagement',
  definition:
    'Patient engagement is the active, structured involvement of patients in their own care \u2014 including understanding their conditions, participating in decisions, adhering to care plans, and communicating with the care team \u2014 a core quality and outcomes lever in chronic care management, remote patient monitoring, and transitional care programs.',
  slug: 'patient-engagement',
  inDefinedTermSet: 'Clinical operations',
})

export default function PatientEngagementGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="patient-engagement-breadcrumb" />
      <StructuredData data={termSchema} id="patient-engagement-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Patient Engagement
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Patient engagement is the active, structured involvement of patients in their own
                care {'\u2014'} including understanding their conditions, participating in decisions,
                adhering to care plans, and communicating with the care team {'\u2014'} a core
                quality and outcomes lever in chronic care management, remote patient monitoring,
                and transitional care programs.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patient engagement is the active, structured involvement of patients in their own
                care {'\u2014'} including understanding their conditions, participating in decisions,
                adhering to care plans, and communicating with the care team {'\u2014'} a core
                quality and outcomes lever in chronic care management, remote patient monitoring,
                and transitional care programs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patient engagement is not a single activity but a set of behaviors and systems that
                keep patients connected to their care between visits. It spans medication adherence,
                symptom reporting, lifestyle modifications, appointment attendance, and bidirectional
                communication with the clinical team.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why it matters (regulatory and outcomes basis)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patient engagement is embedded implicitly in CMS programs: Chronic Care Management,
                Remote Patient Monitoring, Transitional Care Management, and Principal Care
                Management all reimburse sustained engagement, not episodic care. The structure of
                these codes {'\u2014'} with monthly time requirements, contact frequency thresholds,
                and care-plan documentation mandates {'\u2014'} is itself an engagement framework.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Peer-reviewed literature consistently correlates higher patient engagement with
                reduced hospitalizations, better medication adherence, higher patient satisfaction,
                and reduced per-capita cost of care. These outcomes are central to the value-based
                care frameworks administered through the{' '}
                <a
                  href="https://qpp.cms.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS Quality Payment Program
                </a>
                , which ties reimbursement to quality measures that depend directly on whether
                patients are actively participating in their care.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Healthcare providers running chronic care, post-discharge, or remote-monitoring
                  programs
                </li>
                <li>
                  Care coordinators, population-health managers, and clinical-operations teams
                  measuring engagement-to-outcome relationships
                </li>
                <li>
                  Quality-improvement initiatives tracking patient-reported outcomes (PROs) and
                  engagement metrics
                </li>
                <li>
                  Health systems under value-based care contracts (ACO, bundled payment, capitated
                  arrangements) where engagement directly affects financial performance
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the broader function patient engagement supports
                </li>
                <li>
                  <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Chronic Care Management
                  </Link>{' '}
                  {'\u2014'} a CMS program engagement is core to
                </li>
                <li>
                  <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                    Remote Patient Monitoring
                  </Link>{' '}
                  {'\u2014'} another engagement-intensive program
                </li>
                <li>
                  <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Transitional Care Management
                  </Link>{' '}
                  {'\u2014'} the 30-day post-discharge engagement window
                </li>
                <li>
                  <Link href="/resources/glossary/interactive-communication-requirement" className="text-purple-700 underline hover:text-purple-900">
                    Interactive communication requirement
                  </Link>{' '}
                  {'\u2014'} the CMS definition of billable engagement for RPM
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check operationalizes patient engagement at scale through automated daily
                wellness calls that maintain consistent clinical touchpoints without adding staffing
                overhead. Structured summaries and real-time escalation mean engagement translates
                directly into care-plan action, closing the engagement-to-outcome loop. Learn more
                on the{' '}
                <Link href="/platform" className="text-purple-700 underline hover:text-purple-900">
                  Positive Check platform overview
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
                Reviewed against current CMS program guidance.{' '}
                <a
                  href="https://qpp.cms.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS Quality Payment Program
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
