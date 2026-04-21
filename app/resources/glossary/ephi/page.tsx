import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Electronic Protected Health Information (ePHI): Definition | Positive Check Glossary',
  description:
    'Electronic Protected Health Information (ePHI) is the subset of PHI in electronic form, governed by the HIPAA Security Rule. Definition, what counts, and required safeguards.',
  alternates: { canonical: '/resources/glossary/ephi' },
  openGraph: {
    title: 'Electronic Protected Health Information (ePHI): Definition',
    description:
      'The subset of PHI in electronic form, governed by the HIPAA Security Rule.',
    url: '/resources/glossary/ephi',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Electronic Protected Health Information (ePHI): Definition',
    description: 'Electronic PHI governed by the HIPAA Security Rule.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Electronic Protected Health Information (ePHI)', url: 'https://positivecheck.com/resources/glossary/ephi' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Electronic Protected Health Information (ePHI)',
  definition:
    'Electronic Protected Health Information (ePHI) is Protected Health Information (PHI) that is created, stored, transmitted, or received in electronic form \u2014 the subset of PHI specifically covered by the HIPAA Security Rule, which mandates administrative, physical, and technical safeguards.',
  slug: 'ephi',
  inDefinedTermSet: 'Healthcare compliance',
})

export default function ePHIGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="ephi-breadcrumb" />
      <StructuredData data={termSchema} id="ephi-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Electronic Protected Health Information (ePHI)
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Electronic Protected Health Information (ePHI) is Protected Health Information
                (PHI) that is created, stored, transmitted, or received in electronic form{' '}
                {'\u2014'} the subset of PHI specifically covered by the HIPAA Security Rule,
                which mandates administrative, physical, and technical safeguards.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Electronic Protected Health Information (ePHI) is Protected Health Information
                (PHI) that is created, stored, transmitted, or received in electronic form{' '}
                {'\u2014'} the subset of PHI specifically covered by the HIPAA Security Rule,
                which mandates administrative, physical, and technical safeguards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                ePHI includes any of the 18 HIPAA identifiers {'\u2014'} such as names, dates,
                geographic data, phone numbers, addresses, medical record numbers (MRNs), and
                account numbers {'\u2014'} when they appear in electronic form combined with
                health-related information. Practical examples include: electronic health record
                (EHR) records, secure patient messages, voice recordings of clinical calls,
                cloud-stored lab or imaging results, and billing transactions that include
                diagnosis codes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ePHI is covered specifically by the HIPAA Security Rule (45 CFR 164.302{'\u2013'}318),
                which applies only to PHI in electronic form (unlike the Privacy Rule, which
                covers PHI in all formats). The Security Rule requires three categories of
                safeguards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Administrative safeguards</strong> {'\u2014'} policies and procedures,
                  workforce training, access management, and risk analysis
                </li>
                <li>
                  <strong>Physical safeguards</strong> {'\u2014'} facility access controls,
                  workstation use policies, and device and media controls
                </li>
                <li>
                  <strong>Technical safeguards</strong> {'\u2014'} access controls, audit logs,
                  integrity controls, and transmission security
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The authoritative source is the{' '}
                <a
                  href="https://www.hhs.gov/hipaa/for-professionals/security/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  HHS HIPAA Security Rule
                </a>
                , which publishes the full regulatory text plus guidance on implementation
                specifications for covered entities and business associates.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Applies to all covered entities and business associates that handle PHI in any
                  electronic form {'\u2014'} regardless of whether that form is a database, a
                  file, an email, or a streaming audio recording
                </li>
                <li>
                  Encompasses ePHI both at rest (storage on servers, hard drives, or cloud
                  infrastructure) and in transit (transmission over networks or the internet)
                </li>
                <li>
                  Encryption is classified as {'\u201c'}addressable{'\u201d'} rather than strictly
                  required {'\u2014'} but de-facto expected and strongly recommended for any ePHI
                  at rest or in transit; failure to encrypt without documented justification is
                  treated as a compliance gap in OCR audits
                </li>
                <li>
                  Loss, theft, or unauthorized access to ePHI triggers Breach Notification Rule
                  obligations: affected individuals, HHS, and (for large breaches) media outlets
                  must be notified within specified timeframes
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/hipaa-compliance" className="text-purple-700 underline hover:text-purple-900">
                    HIPAA Compliance
                  </Link>{' '}
                  {'\u2014'} the broader regulatory framework within which the ePHI Security Rule
                  sits
                </li>
                <li>
                  <Link href="/resources/glossary/business-associate-agreement" className="text-purple-700 underline hover:text-purple-900">
                    Business Associate Agreement
                  </Link>{' '}
                  {'\u2014'} the contract framework required when vendors handle ePHI on behalf
                  of a covered entity
                </li>
                <li>
                  <Link href="/resources/glossary/hitech-act" className="text-purple-700 underline hover:text-purple-900">
                    HITECH Act
                  </Link>{' '}
                  {'\u2014'} the 2009 law that tightened ePHI breach notification requirements
                  and expanded enforcement
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} a workflow that routinely generates and transmits ePHI across care
                  teams
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check handles ePHI end-to-end: call transcripts, structured summaries,
                patient identifiers, and clinical flag data all qualify as ePHI under the HIPAA
                Security Rule. The platform implements Security Rule safeguards {'\u2014'}{' '}
                encryption in transit (TLS) and at rest, role-based access controls, comprehensive
                audit logging, and minimum-necessary data handling. Learn more about the platform
                architecture on the{' '}
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
                Reviewed against current HHS HIPAA Security Rule guidance.{' '}
                <a
                  href="https://www.hhs.gov/hipaa/for-professionals/security/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  HHS HIPAA Security Rule
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
