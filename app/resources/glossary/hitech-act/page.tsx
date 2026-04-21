import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'HITECH Act: Definition, Scope, and HIPAA Expansion | Positive Check Glossary',
  description:
    'The HITECH Act (2009) expanded HIPAA enforcement, created breach notification requirements, extended direct liability to business associates, and funded EHR adoption.',
  alternates: { canonical: '/resources/glossary/hitech-act' },
  openGraph: {
    title: 'HITECH Act: Definition, Scope, and HIPAA Expansion',
    description:
      'The 2009 law that expanded HIPAA enforcement and created breach notification requirements.',
    url: '/resources/glossary/hitech-act',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'HITECH Act: Definition, Scope, and HIPAA Expansion',
    description: '2009 law expanding HIPAA enforcement and breach notification.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'HITECH Act', url: 'https://positivecheck.com/resources/glossary/hitech-act' },
])

const termSchema = buildDefinedTermSchema({
  term: 'HITECH Act',
  definition:
    'The Health Information Technology for Economic and Clinical Health (HITECH) Act, enacted in 2009, expanded HIPAA enforcement by establishing tiered civil monetary penalties up to $1.5M per violation category per year, extending direct liability to business associates, creating mandatory breach notification requirements, and funding the adoption of electronic health records.',
  slug: 'hitech-act',
  inDefinedTermSet: 'Healthcare compliance',
})

export default function HITECHActGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="hitech-act-breadcrumb" />
      <StructuredData data={termSchema} id="hitech-act-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                HITECH Act
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                The Health Information Technology for Economic and Clinical Health (HITECH) Act,
                enacted in 2009, expanded HIPAA enforcement by establishing tiered civil monetary
                penalties up to $1.5M per violation category per year, extending direct liability
                to business associates, creating mandatory breach notification requirements, and
                funding the adoption of electronic health records.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Health Information Technology for Economic and Clinical Health (HITECH) Act,
                enacted in 2009, expanded HIPAA enforcement by establishing tiered civil monetary
                penalties up to $1.5M per violation category per year, extending direct liability
                to business associates, creating mandatory breach notification requirements, and
                funding the adoption of electronic health records.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                HITECH was enacted as part of the American Recovery and Reinvestment Act of 2009.
                It fundamentally changed healthcare technology compliance by tying federal funding
                to EHR adoption (Meaningful Use), increasing HIPAA enforcement rigor, and giving
                patients new rights around electronic access to their records.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HITECH is codified as Public Law 111-5 (Division A, Title XIII and Division B,
                Title IV). Its enforcement provisions were implemented primarily through the HHS
                Omnibus Rule of 2013, which finalized HITECH{'\u2019'}s changes to HIPAA and
                extended direct obligations to business associates. Enforcement is carried out by
                the HHS Office for Civil Rights. Authoritative guidance is available at{' '}
                <a
                  href="https://www.hhs.gov/hipaa/for-professionals/special-topics/hitech-act-enforcement-interim-final-rule/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  HHS HITECH Act enforcement
                </a>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  All covered entities and business associates under HIPAA are now directly subject
                  to HITECH{'\u2019'}s expanded enforcement
                </li>
                <li>
                  Breach Notification: breaches affecting 500{'\u002b'} individuals must be
                  reported to HHS and the media within 60 days; smaller breaches are logged and
                  submitted annually
                </li>
                <li>
                  Business associate direct liability: BAs are now directly accountable to HHS for
                  Security Rule compliance {'\u2014'} pre-HITECH, only covered entities faced
                  direct enforcement
                </li>
                <li>
                  EHR incentives: HITECH established the Meaningful Use program (now Promoting
                  Interoperability) tying Medicare/Medicaid payments to certified EHR use
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/hipaa-compliance" className="text-purple-700 underline hover:text-purple-900">
                    HIPAA Compliance
                  </Link>{' '}
                  {'\u2014'} the broader framework HITECH expanded
                </li>
                <li>
                  <Link href="/resources/glossary/business-associate-agreement" className="text-purple-700 underline hover:text-purple-900">
                    Business Associate Agreement
                  </Link>{' '}
                  {'\u2014'} the contract vehicle HITECH made directly enforceable
                </li>
                <li>
                  <Link href="/resources/glossary/ephi" className="text-purple-700 underline hover:text-purple-900">
                    ePHI
                  </Link>{' '}
                  {'\u2014'} the electronic subset whose protection HITECH strengthened
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} a workflow HITECH{'\u2019'}s EHR incentives accelerated
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                HITECH makes Positive Check, as a business associate, directly liable to HHS for
                Security Rule compliance. The platform{'\u2019'}s audit logging, access controls,
                and breach notification workflow are designed to meet HITECH{'\u2019'}s post-2009
                enforcement standards. Learn more on the{' '}
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
                Reviewed against current HHS HITECH guidance.{' '}
                <a
                  href="https://www.hhs.gov/hipaa/for-professionals/special-topics/hitech-act-enforcement-interim-final-rule/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  HHS HITECH Act enforcement
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
