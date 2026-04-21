import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Business Associate Agreement (BAA): Definition and Requirements | Positive Check Glossary',
  description:
    'A Business Associate Agreement (BAA) is the HIPAA-required contract between covered entities and vendors handling Protected Health Information. Definition, required provisions, and when it applies.',
  alternates: { canonical: '/resources/glossary/business-associate-agreement' },
  openGraph: {
    title: 'Business Associate Agreement (BAA): Definition and Requirements',
    description:
      'The HIPAA-required contract between covered entities and vendors handling PHI.',
    url: '/resources/glossary/business-associate-agreement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Business Associate Agreement (BAA): Definition and Requirements',
    description: 'HIPAA-required contract for vendors handling PHI on behalf of covered entities.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Business Associate Agreement', url: 'https://positivecheck.com/resources/glossary/business-associate-agreement' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Business Associate Agreement (BAA)',
  definition:
    "A Business Associate Agreement (BAA) is a HIPAA-required contract between a covered entity (healthcare provider, health plan, or clearinghouse) and a business associate (vendor that creates, receives, maintains, or transmits Protected Health Information on behalf of the covered entity) that specifies the business associate's obligations for safeguarding PHI.",
  slug: 'business-associate-agreement',
  inDefinedTermSet: 'Healthcare compliance',
})

export default function BusinessAssociateAgreementGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="business-associate-agreement-breadcrumb" />
      <StructuredData data={termSchema} id="business-associate-agreement-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Business Associate Agreement (BAA)
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                A Business Associate Agreement (BAA) is a HIPAA-required contract between a covered
                entity (healthcare provider, health plan, or clearinghouse) and a business associate
                (vendor that creates, receives, maintains, or transmits Protected Health Information
                on behalf of the covered entity) that specifies the business associate{'\u2019'}s
                obligations for safeguarding PHI.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Business Associate Agreement (BAA) is the formal, legally binding contract that
                HIPAA requires a covered entity to execute with any business associate before
                disclosing Protected Health Information. The covered entity may be a healthcare
                provider, health plan, or healthcare clearinghouse. The business associate is any
                vendor, contractor, or subcontractor that creates, receives, maintains, or transmits
                PHI on the covered entity{'\u2019'}s behalf {'\u2014'} a broad category that
                encompasses cloud software platforms, EHR integration partners, medical transcription
                services, billing companies, AI call platforms, and analytics vendors, among others.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Without a signed BAA, a covered entity cannot lawfully disclose PHI to a business
                associate under HIPAA{'\u2019'}s Privacy Rule. The BAA is therefore a core
                compliance artifact that every healthcare provider must execute with any cloud
                software, call platform, EHR integration partner, medical transcription service, or
                other vendor that handles PHI. Failure to obtain a BAA before sharing PHI constitutes
                a Privacy Rule violation regardless of whether a breach occurs.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The BAA requirement is codified at 45 CFR 164.502(e) and 45 CFR 164.504(e) of the
                HIPAA Privacy Rule, which govern permissible uses and disclosures of PHI by covered
                entities. Security Rule obligations for business associates are addressed at 45 CFR
                164.308(b), requiring that covered entities obtain satisfactory assurances that their
                business associates will implement appropriate administrative, physical, and technical
                safeguards to protect ePHI. The HITECH Act of 2009 further strengthened this
                framework by extending direct HIPAA liability to business associates, making them
                independently responsible for Security Rule compliance even absent a contract.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                HHS publishes{' '}
                <a
                  href="https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  HHS sample BAA provisions
                </a>{' '}
                that covered entities and business associates can use as a drafting starting point.
                These sample provisions are not mandatory templates, but they illustrate the minimum
                elements that satisfy the regulatory requirements and are widely used in practice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Required between any covered entity and any business associate before PHI is
                  disclosed {'\u2014'} the BAA must be in place prior to, not after, the first
                  disclosure
                </li>
                <li>
                  Business associates include: EHR vendors, billing services, transcription services,
                  cloud storage providers, AI and call platforms handling PHI, analytics vendors, and
                  consultants with PHI access
                </li>
                <li>
                  Subcontractor BAAs: business associates must also execute BAAs with their own
                  subcontractors that handle PHI, creating a chain of contractual accountability
                  down to each entity that touches the data
                </li>
                <li>
                  Required provisions under 45 CFR 164.504(e): permitted uses and disclosures of
                  PHI, safeguards commitment, breach notification obligations to the covered entity,
                  subcontractor BAA requirements, termination conditions for material breach, and
                  return or destruction of PHI at contract termination
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/hipaa-compliance" className="text-purple-700 underline hover:text-purple-900">
                    HIPAA Compliance
                  </Link>{' '}
                  {'\u2014'} the broader regulatory framework that mandates the BAA requirement
                </li>
                <li>
                  <Link href="/resources/glossary/ephi" className="text-purple-700 underline hover:text-purple-900">
                    ePHI
                  </Link>{' '}
                  {'\u2014'} the electronic PHI most commonly in scope for vendor BAAs
                </li>
                <li>
                  <Link href="/resources/glossary/hitech-act" className="text-purple-700 underline hover:text-purple-900">
                    HITECH Act
                  </Link>{' '}
                  {'\u2014'} the law that extended direct HIPAA liability to business associates
                </li>
                <li>
                  <Link href="/resources/glossary/patient-engagement" className="text-purple-700 underline hover:text-purple-900">
                    Patient engagement
                  </Link>{' '}
                  {'\u2014'} programs that typically require vendor BAAs before deploying digital
                  touchpoints involving PHI
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check executes a Business Associate Agreement with every provider partner
                before any PHI is handled. The BAA covers Security Rule safeguards, breach
                notification SLAs, subcontractor provisions, and PHI destruction at termination.
                Learn more about how the platform is structured on the{' '}
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
                  href="https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  HHS sample BAA provisions
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
