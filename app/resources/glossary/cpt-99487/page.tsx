import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99487: Definition and Complex CCM Billing | Positive Check Glossary',
  description:
    'CPT 99487 is the Medicare billing code for the first 60 minutes of complex Chronic Care Management per calendar month. Definition, when complex CCM applies, and how it differs from non-complex (CPT 99490).',
  alternates: { canonical: '/resources/glossary/cpt-99487' },
  openGraph: {
    title: 'CPT 99487: Definition and Complex CCM Billing',
    description: 'Medicare billing code for the first 60 minutes of complex CCM per month.',
    url: '/resources/glossary/cpt-99487',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99487: Definition and Complex CCM Billing',
    description: 'Medicare billing code for the first 60 minutes of complex CCM per month.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99487', url: 'https://positivecheck.com/resources/glossary/cpt-99487' },
])

const termSchema = buildCPTCodeSchema({
  code: '99487',
  name: 'Complex chronic care management services, with the following required elements: multiple chronic conditions expected to last at least 12 months; moderate or high complexity medical decision making; 60 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month',
  description:
    'CPT 99487 is the Medicare billing code for the first 60 minutes of clinical staff time spent on complex Chronic Care Management for a patient in a calendar month, reimbursed at approximately $144 and requiring substantial care plan revision for patients with moderate-to-high complexity medical decision-making.',
  category: 'Chronic Care Management',
})

export default function CPT99487GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99487-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99487-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99487
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99487 is the Medicare billing code for the first 60 minutes of clinical staff
                time spent on complex Chronic Care Management for a patient in a calendar month,
                reimbursed at approximately $144 and requiring substantial care plan revision for
                patients with moderate-to-high complexity medical decision-making.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99487 is the Medicare billing code for the first 60 minutes of clinical staff
                time spent on complex Chronic Care Management for a patient in a calendar month,
                reimbursed at approximately $144 and requiring substantial care plan revision for
                patients with moderate-to-high complexity medical decision-making. It is the complex
                CCM track {'\u2014'} an alternative to non-complex CCM (CPT 99490) {'\u2014'} and
                cannot be billed in the same month as the non-complex base code.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Like non-complex CCM, 99487 requires two or more chronic conditions expected to last
                at least 12 months and placing the patient at significant risk of death, exacerbation,
                or functional decline. However, complex CCM adds two further clinical requirements:
                moderate-to-high complexity medical decision-making AND substantial care plan revision
                during the billing month. The time threshold is 60 minutes of clinical staff time
                (compared to 20 minutes for CPT 99490). A patient is billed under the non-complex
                or the complex track in a given calendar month {'\u2014'} never both. The 2026
                Medicare national average reimbursement is approximately $144 per patient per month.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99487 is established by CMS under the Medicare Physician Fee Schedule as part of
                the CCM code family (99490, 99439, 99487, 99489). The authoritative guidance is the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN Chronic Care Management Services booklet (MLN 909188)
                </a>
                , which defines documentation requirements, consent standards, and time-tracking
                rules for both complex and non-complex CCM tracks.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The {'\u201c'}moderate or high complexity medical decision-making{'\u201d'} element
                follows CMS{'\u2019'}s Evaluation and Management (E/M) decision-making framework.
                Substantial care plan revision must be documented in the patient chart with specifics
                {'\u2014'} examples include medication changes, new specialist referrals, escalation
                of monitoring frequency, or changes to the care-management protocol driven by a
                worsening or newly identified condition. Annual updates to CCM billing policy are
                published in the Medicare Physician Fee Schedule final rule.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians, non-physician practitioners (NPs, PAs, CNSs, CNMs), or clinical staff
                  under general supervision performing complex CCM activities
                </li>
                <li>
                  Patients meeting non-complex CCM eligibility AND requiring moderate-to-high
                  complexity medical decision-making {'\u2014'} typically those with unstable
                  conditions, recent hospitalization, or significant care plan changes in the month
                </li>
                <li>
                  Billed once per calendar month per patient when cumulative clinical staff time
                  reaches 60 minutes and substantial care plan revision is documented
                </li>
                <li>
                  A patient can shift between the non-complex (99490) and complex (99487) tracks
                  across months as clinical complexity changes {'\u2014'} only one track applies in
                  any given month
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99489"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99489
                  </Link>{' '}
                  {'\u2014'} each additional 30 minutes of complex CCM clinical staff time in the
                  same calendar month
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99490"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99490
                  </Link>{' '}
                  {'\u2014'} alternative non-complex CCM track for lower-complexity patients,
                  requiring 20 minutes per month
                </li>
                <li>
                  <Link
                    href="/resources/glossary/chronic-care-management"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Chronic Care Management
                  </Link>{' '}
                  {'\u2014'} the broader care model CPT 99487 operationalizes for complex patients
                </li>
                <li>
                  <Link
                    href="/resources/glossary/care-coordination"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the function CCM supports through structured patient outreach and
                  care-plan management
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check{'\u2019'}s structured summaries help clinical staff document the
                substantial care-plan revisions and complexity-of-decision-making elements that
                distinguish complex from non-complex CCM, supporting accurate 99487 billing. See the{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management solution
                </Link>{' '}
                for the full workflow, or the{' '}
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99490 billing guide
                </Link>{' '}
                for documentation and time-tracking requirements across the CCM code family.
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
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN CCM Booklet
                </a>
                . Last updated 2026-04-20.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
