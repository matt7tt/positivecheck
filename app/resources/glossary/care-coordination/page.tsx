import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Care Coordination: Definition and CMS Context | Positive Check Glossary',
  description:
    'Care coordination is the deliberate organization of patient care activities. Definition, CMS context (TCM, CCM, PCM), and measurement.',
  alternates: { canonical: '/resources/glossary/care-coordination' },
  openGraph: {
    title: 'Care Coordination: Definition and CMS Context',
    description:
      'Definition and CMS context for care coordination, including TCM, CCM, and PCM.',
    url: '/resources/glossary/care-coordination',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Care Coordination: Definition and CMS Context',
    description: 'Definition and CMS context for care coordination.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Care coordination', url: 'https://positivecheck.com/resources/glossary/care-coordination' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Care coordination',
  definition:
    'Care coordination is the deliberate organization of patient care activities between two or more participants (including the patient) to facilitate appropriate delivery of health care services, often measured and reimbursed through CMS programs like Transitional Care Management, Chronic Care Management, and Principal Care Management.',
  slug: 'care-coordination',
  inDefinedTermSet: 'Clinical operations',
})

export default function CareCoordinationGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="care-coordination-breadcrumb" />
      <StructuredData data={termSchema} id="care-coordination-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Care coordination
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Care coordination is the deliberate organization of patient care activities
                between two or more participants (including the patient) to facilitate
                appropriate delivery of health care services, often measured and reimbursed
                through CMS programs like Transitional Care Management, Chronic Care Management,
                and Principal Care Management.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Care coordination is the deliberate organization of patient care activities
                between two or more participants (including the patient) to facilitate
                appropriate delivery of health care services. This commonly-used US healthcare
                policy definition is drawn from the Agency for Healthcare Research and Quality
                (AHRQ), which has been a primary source for the national definition and
                measurement framework.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In practice, care coordination spans inpatient-to-outpatient transitions,
                ongoing chronic care management, medication reconciliation, specialist referral
                and follow-up scheduling, patient and caregiver education, and cross-specialty
                communication. It is both a clinical function and an organizational capability
                \u2014 one that CMS has progressively built reimbursement frameworks around to
                incentivize structured coordination activities in outpatient and community settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AHRQ has been the primary source for the US definition and measurement framework
                for care coordination, publishing evidence reviews and toolkits used by CMS,
                payers, and health systems. CMS has translated these frameworks into reimbursable
                programs under the Medicare Physician Fee Schedule: Transitional Care Management
                (TCM) for the post-discharge transition, Chronic Care Management (CCM) for
                patients with two or more chronic conditions, and Principal Care Management (PCM)
                for single-condition management. Details on TCM reimbursement specifics \u2014
                including contact requirements, billing codes, and documentation standards \u2014
                are available in the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS Medicare Learning Network TCM fact sheet
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Together, TCM, CCM, and PCM give providers a reimbursement pathway for
                structured care coordination work that has historically been uncompensated.
                Quality measurement programs \u2014 including HEDIS, CMS Star Ratings, and
                value-based contract metrics \u2014 further reinforce care coordination by tying
                it to financial performance across payer types.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Primary care physicians and specialist groups managing patients with chronic
                  conditions or recent hospital discharges
                </li>
                <li>
                  Accountable Care Organizations (ACOs) whose shared savings programs depend on
                  reducing fragmented, duplicative, or poorly timed care
                </li>
                <li>
                  Care coordinators, care managers, and clinical staff performing non-face-to-face
                  services under general or direct supervision
                </li>
                <li>
                  Quality leadership measuring patient experience and care transition metrics
                  for CMS, NCQA, or commercial payer reporting
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Transitional Care Management (TCM)
                  </Link>{' '}
                  \u2014 the CMS-reimbursed post-discharge coordination program
                </li>
                <li>
                  <Link href="/resources/glossary/30-day-readmission" className="text-purple-700 underline hover:text-purple-900">
                    30-day readmission
                  </Link>{' '}
                  \u2014 a clinical outcome care coordination aims to reduce
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99495
                  </Link>{' '}
                  \u2014 a billing code enabling reimbursed care coordination
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check automates the patient-engagement layer of care coordination \u2014
                consistent daily or weekly wellness check-ins, structured data capture, and
                real-time escalation to clinical staff. See the{' '}
                <Link href="/solutions/post-discharge-follow-up" className="text-purple-700 underline hover:text-purple-900">
                  Post-Discharge Follow-Up solution
                </Link>{' '}
                for how automated wellness calls fit a care coordination workflow.
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
                    href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-700"
                  >
                    CMS MLN TCM Booklet
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
