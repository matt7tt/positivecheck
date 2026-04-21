import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Chronic Care Management (CCM): Definition and Requirements | Positive Check Glossary',
  description:
    'Chronic Care Management (CCM) is a Medicare-reimbursed care coordination program for patients with 2+ chronic conditions. Definition, CPT codes (99490/99439/99487/99489), and eligibility.',
  alternates: { canonical: '/resources/glossary/chronic-care-management' },
  openGraph: {
    title: 'Chronic Care Management (CCM): Definition and Requirements',
    description:
      'Medicare-reimbursed care coordination program for patients with 2+ chronic conditions.',
    url: '/resources/glossary/chronic-care-management',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Chronic Care Management (CCM): Definition and Requirements',
    description: 'Medicare-reimbursed care coordination for patients with 2+ chronic conditions.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/resources/glossary/chronic-care-management' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Chronic Care Management (CCM)',
  definition:
    'Chronic Care Management (CCM) is a Medicare-reimbursed care coordination program where clinical staff deliver non-face-to-face care management for patients with two or more chronic conditions expected to last at least 12 months, supported by CPT codes 99490, 99439, 99487, and 99489.',
  slug: 'chronic-care-management',
  inDefinedTermSet: 'CMS care programs',
})

export default function ChronicCareManagementGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="ccm-term-breadcrumb" />
      <StructuredData data={termSchema} id="ccm-term-definition" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Chronic Care Management (CCM)
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Chronic Care Management (CCM) is a Medicare-reimbursed care coordination program
                where clinical staff deliver non-face-to-face care management for patients with two
                or more chronic conditions expected to last at least 12 months, supported by CPT
                codes 99490, 99439, 99487, and 99489.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chronic Care Management (CCM) is a Medicare-reimbursed care coordination program
                where clinical staff deliver non-face-to-face care management for patients with two
                or more chronic conditions expected to last at least 12 months. CCM covers ongoing
                monthly care where care coordination, medication management, and patient
                communication drive outcomes {'\u2014'} enabling providers to proactively manage
                complex patients between face-to-face visits.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Four billing codes support the program:{' '}
                <Link href="/resources/glossary/cpt-99490" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99490
                </Link>{' '}
                covers the first 20 minutes of non-complex CCM clinical staff time per month;{' '}
                <Link href="/resources/glossary/cpt-99439" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99439
                </Link>{' '}
                covers each additional 20 minutes of non-complex CCM (billable up to twice per
                month);{' '}
                <Link href="/resources/glossary/cpt-99487" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99487
                </Link>{' '}
                covers the first 60 minutes of complex CCM; and{' '}
                <Link href="/resources/glossary/cpt-99489" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99489
                </Link>{' '}
                covers each additional 30 minutes of complex CCM. Combined monthly revenue per
                patient can reach approximately $162 for a high-time non-complex CCM month or
                $216{'\u002b'} for a complex CCM month with multiple add-on units.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CCM was established by CMS under the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                . To qualify, a patient must have two or more chronic conditions expected to last at
                least 12 months (or until death) and that place the patient at significant risk of
                death, exacerbation, or functional decline. Patient consent {'\u2014'} verbal or
                written {'\u2014'} must be documented before CCM services begin.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Only one provider can bill CCM for a given patient per calendar month; patients
                must be informed of this restriction at the time of consent. The authoritative
                guidance is the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN 909188 Chronic Care Management Services booklet
                </a>
                , which details documentation requirements, consent standards, and the care-plan
                elements that must be in place before billing begins.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Physicians and qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs)
                  billing for ongoing chronic care coordination under the Medicare Physician Fee
                  Schedule
                </li>
                <li>
                  Patients with two or more chronic conditions (distinct from RPM, which requires
                  only one qualifying condition) where conditions are expected to last at least 12
                  months and create significant clinical risk
                </li>
                <li>
                  Clinical staff (RNs, LPNs, certain medical assistants) under general supervision
                  of the billing practitioner performing CCM activities that count toward the
                  monthly time thresholds
                </li>
                <li>
                  Most common qualifying condition combinations: hypertension{' '}
                  {'\u002b'} diabetes, COPD{' '}
                  {'\u002b'} heart failure, diabetes{' '}
                  {'\u002b'} CKD, depression{' '}
                  {'\u002b'} chronic pain, dementia{' '}
                  {'\u002b'} medical chronic condition
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/cpt-99490" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99490
                  </Link>{' '}
                  {'\u2014'} first 20 minutes of non-complex CCM clinical staff time per month
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99439" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99439
                  </Link>{' '}
                  {'\u2014'} each additional 20 minutes of non-complex CCM (up to 2x per month)
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99487" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99487
                  </Link>{' '}
                  {'\u2014'} first 60 minutes of complex CCM
                </li>
                <li>
                  <Link href="/resources/glossary/cpt-99489" className="text-purple-700 underline hover:text-purple-900">
                    CPT 99489
                  </Link>{' '}
                  {'\u2014'} each additional 30 minutes of complex CCM
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the broader function CCM operationalizes
                </li>
                <li>
                  <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                    Remote Patient Monitoring
                  </Link>{' '}
                  {'\u2014'} the analogous CMS program for single-condition patients with device
                  data
                </li>
                <li>
                  <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Transitional Care Management
                  </Link>{' '}
                  {'\u2014'} the 30-day post-discharge program that often transitions patients into
                  CCM
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check operationalizes CCM at scale through automated daily wellness calls,
                structured per-call summaries that map to CMS documentation expectations, and
                real-time escalation to clinical staff. The structured summaries concentrate
                clinical staff time on care-plan action rather than data gathering, making the
                20-minute (or 60-minute complex) threshold easier to hit reliably across an enrolled
                population. See the{' '}
                <Link href="/solutions/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                  Chronic Care Management solution overview
                </Link>{' '}
                or the{' '}
                <Link href="/solutions/chronic-care-management/cpt-99490-billing-guide" className="text-purple-700 underline hover:text-purple-900">
                  CPT 99490 billing guide
                </Link>{' '}
                for the full workflow.
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
