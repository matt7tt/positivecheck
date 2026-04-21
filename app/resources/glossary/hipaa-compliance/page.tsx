import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'HIPAA Compliance: Definition and Scope | Positive Check Glossary',
  description:
    'HIPAA compliance is adherence to the Health Insurance Portability and Accountability Act and its regulations governing Protected Health Information. Definition, who must comply, key rules, and penalties.',
  alternates: { canonical: '/resources/glossary/hipaa-compliance' },
  openGraph: {
    title: 'HIPAA Compliance: Definition and Scope',
    description:
      'What HIPAA compliance means, who must comply, and the key rules governing PHI handling.',
    url: '/resources/glossary/hipaa-compliance',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'HIPAA Compliance: Definition and Scope',
    description: 'HIPAA compliance is adherence to HIPAA rules governing PHI handling.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'HIPAA Compliance', url: 'https://positivecheck.com/resources/glossary/hipaa-compliance' },
])

const termSchema = buildDefinedTermSchema({
  term: 'HIPAA Compliance',
  definition:
    'HIPAA compliance is adherence to the Health Insurance Portability and Accountability Act of 1996 and its subsequent regulations (Privacy Rule, Security Rule, Breach Notification Rule, Enforcement Rule), which together govern how covered entities and their business associates handle protected health information (PHI).',
  slug: 'hipaa-compliance',
  inDefinedTermSet: 'Healthcare compliance',
})

export default function HIPAAComplianceGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="hipaa-compliance-breadcrumb" />
      <StructuredData data={termSchema} id="hipaa-compliance-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                HIPAA Compliance
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                HIPAA compliance is adherence to the Health Insurance Portability and Accountability
                Act of 1996 and its subsequent regulations (Privacy Rule, Security Rule, Breach
                Notification Rule, Enforcement Rule), which together govern how covered entities and
                their business associates handle protected health information (PHI).
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HIPAA compliance is adherence to the Health Insurance Portability and Accountability
                Act of 1996 and its subsequent regulations, which together establish the national
                standard for protecting sensitive patient health information. The law applies
                nationwide in the U.S. and is enforced by the Department of Health and Human
                Services (HHS) Office for Civil Rights (OCR).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Four principal rules define compliance obligations. The Privacy Rule governs the
                permissible uses and disclosures of PHI, giving patients rights over their health
                information. The Security Rule establishes administrative, physical, and technical
                safeguards specifically for electronic PHI (ePHI). The Breach Notification Rule
                requires covered entities and business associates to notify affected individuals,
                HHS, and in some cases the media, following a breach of unsecured PHI. The
                Enforcement Rule sets out the procedures for investigations and the civil monetary
                penalties that apply when violations are found {'\u2014'} penalties that can reach
                into the millions of dollars per violation category per year.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HIPAA was enacted in 1996, but its compliance framework expanded significantly with
                two subsequent laws. The Health Information Technology for Economic and Clinical
                Health (HITECH) Act of 2009 strengthened enforcement, increased penalty tiers, and
                extended many HIPAA obligations directly to business associates. The Omnibus Rule of
                2013 finalized those HITECH changes and updated the Privacy and Security Rules to
                reflect the modern healthcare technology environment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Compliance is enforced by the Department of Health and Human Services (HHS) Office
                for Civil Rights (OCR), which investigates complaints, conducts audits, and imposes
                penalties. The authoritative guidance is published at{' '}
                <a
                  href="https://www.hhs.gov/hipaa/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  HHS HIPAA for Professionals
                </a>
                , which covers all four rules, enforcement procedures, and frequently updated
                guidance on emerging topics such as telehealth and health app data.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Covered entities: health plans, healthcare clearinghouses, and healthcare
                  providers that transmit PHI electronically {'\u2014'} including hospitals,
                  physician practices, and health insurers
                </li>
                <li>
                  Business associates: third parties that create, receive, maintain, or transmit
                  PHI on behalf of a covered entity; engaging a business associate requires a signed
                  Business Associate Agreement (BAA) before any PHI may be shared
                </li>
                <li>
                  Applies to PHI in any form: paper records, electronic PHI (ePHI), and oral
                  communications that contain individually identifiable health information
                </li>
                <li>
                  Penalties: civil monetary penalties up to $2M{'\u002b'} per violation category
                  per year, tiered by culpability from unknowing violations to willful neglect;
                  criminal charges and personal liability apply in cases of intentional misuse
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/business-associate-agreement" className="text-purple-700 underline hover:text-purple-900">
                    Business Associate Agreement
                  </Link>{' '}
                  {'\u2014'} the contract required between covered entities and business associates
                </li>
                <li>
                  <Link href="/resources/glossary/ephi" className="text-purple-700 underline hover:text-purple-900">
                    ePHI
                  </Link>{' '}
                  {'\u2014'} the electronic subset of PHI covered by the Security Rule
                </li>
                <li>
                  <Link href="/resources/glossary/hitech-act" className="text-purple-700 underline hover:text-purple-900">
                    HITECH Act
                  </Link>{' '}
                  {'\u2014'} the 2009 law expanding HIPAA penalties and breach notification
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} a common workflow requiring HIPAA-compliant PHI handling
                </li>
                <li>
                  <Link href="/resources/glossary/patient-engagement" className="text-purple-700 underline hover:text-purple-900">
                    Patient engagement
                  </Link>{' '}
                  {'\u2014'} digital engagement programs that must operate within HIPAA constraints
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check operates as a HIPAA-compliant business associate: all provider
                engagements include a signed Business Associate Agreement, and the platform
                implements the technical, administrative, and physical safeguards required by the
                Security Rule. Learn more about how the platform is structured on the{' '}
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
                Reviewed against current HHS HIPAA guidance.{' '}
                <a
                  href="https://www.hhs.gov/hipaa/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  HHS HIPAA for Professionals
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
