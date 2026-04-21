import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Principal Care Management (PCM): Definition and Requirements | Positive Check Glossary',
  description:
    'Principal Care Management (PCM) is a Medicare-reimbursed care management program for patients with a single high-risk chronic condition. CPT 99424-99427, eligibility, and contrast with CCM.',
  alternates: { canonical: '/resources/glossary/principal-care-management' },
  openGraph: {
    title: 'Principal Care Management (PCM): Definition and Requirements',
    description:
      'Medicare-reimbursed care management for a single high-risk chronic condition.',
    url: '/resources/glossary/principal-care-management',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Principal Care Management (PCM): Definition and Requirements',
    description: 'Medicare-reimbursed care management for a single high-risk chronic condition.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Principal Care Management', url: 'https://positivecheck.com/resources/glossary/principal-care-management' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Principal Care Management (PCM)',
  definition:
    'Principal Care Management (PCM) is a Medicare-reimbursed care management program specifically for patients with a single high-risk chronic condition requiring ongoing clinical focus, supported by CPT codes 99424-99427 and distinguished from Chronic Care Management (CCM, which requires two or more chronic conditions).',
  slug: 'principal-care-management',
  inDefinedTermSet: 'CMS care programs',
})

export default function PrincipalCareManagementGlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="principal-care-management-breadcrumb" />
      <StructuredData data={termSchema} id="principal-care-management-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Principal Care Management (PCM)
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Principal Care Management (PCM) is a Medicare-reimbursed care management program
                specifically for patients with a single high-risk chronic condition requiring ongoing
                clinical focus, supported by CPT codes 99424{'\u2013'}99427 and distinguished from
                Chronic Care Management (CCM, which requires two or more chronic conditions).
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Principal Care Management (PCM) is a Medicare care management program introduced by
                the Centers for Medicare {'\u0026'} Medicaid Services (CMS) for patients who have a
                single high-risk chronic condition that dominates their clinical management needs.
                PCM is CMS{'\u2019'}s third care management program alongside Chronic Care Management
                (CCM, which addresses multiple chronic conditions) and Transitional Care Management
                (TCM, which covers the 30-day window following a qualifying hospital discharge).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PCM is billed using four CPT codes based on who furnishes the time and how many
                30-minute increments are reached in a calendar month: 99424 covers the first 30
                minutes of physician or qualified non-physician practitioner time; 99425 covers each
                additional 30-minute increment of practitioner time; 99426 covers the first 30
                minutes of clinical staff time under general supervision; and 99427 covers each
                additional 30-minute increment of clinical staff time. Medicare reimbursement rates
                for 2026 vary by locality and are updated annually in the Medicare Physician Fee
                Schedule.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PCM was established by CMS under the Medicare Physician Fee Schedule, finalized in
                the Calendar Year 2022 Physician Fee Schedule final rule. It is distinct from CCM in
                a critical way: PCM requires only ONE qualifying chronic condition, not two or more.
                However, that single condition must place the patient at significant risk of acute
                exacerbation, hospitalization, or clinical decompensation over the next 3{'\u2013'}12
                months {'\u2014'} a higher individual-condition severity threshold than CCM.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Authoritative billing guidance and annual rate updates are published by CMS at the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>
                , which covers all care management codes, documentation requirements, and applicable
                supervision rules for each CPT code.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Patients with a single complex, high-risk chronic condition {'\u2014'} examples
                  include newly diagnosed cancer in active treatment, heart failure with a recent
                  decompensation episode, or severe uncontrolled diabetes with complications
                </li>
                <li>
                  Physicians and qualifying non-physician practitioners (nurse practitioners, physician
                  assistants, clinical nurse specialists, certified nurse midwives) for CPT 99424 and
                  99425, when they personally furnish the required management time
                </li>
                <li>
                  Clinical staff under general supervision for CPT 99426 and 99427, which expands the
                  program{'\u2019'}s practical reach to care managers and care coordinators working
                  under a supervising practitioner
                </li>
                <li>
                  Billed once per calendar month per patient when cumulative time thresholds are met
                  within that month {'\u2014'} time must be documented to support the claimed code
                </li>
                <li>
                  Generally mutually exclusive with CCM for the same patient in the same calendar
                  month: PCM focuses on managing one high-risk condition, while CCM addresses patients
                  with two or more chronic conditions; practices should select the appropriate program
                  based on each patient{'\u2019'}s clinical profile
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Chronic Care Management
                  </Link>{' '}
                  {'\u2014'} the multi-condition analog to PCM, requiring two or more chronic
                  conditions and billed under CPT 99490{'\u2013'}99491 and 99439
                </li>
                <li>
                  <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                    Transitional Care Management
                  </Link>{' '}
                  {'\u2014'} the 30-day post-discharge program that addresses patients transitioning
                  from inpatient or other facility settings back to the community
                </li>
                <li>
                  <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                    Remote Patient Monitoring
                  </Link>{' '}
                  {'\u2014'} the device-based monitoring program often layered with PCM to track
                  physiological data for the single qualifying condition between office visits
                </li>
                <li>
                  <Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the clinical function that PCM operationalizes through structured monthly
                  management activities
                </li>
                <li>
                  <Link href="/resources/glossary/patient-engagement" className="text-purple-700 underline hover:text-purple-900">
                    Patient engagement
                  </Link>{' '}
                  {'\u2014'} the engagement layer that supports PCM outcomes by keeping patients
                  connected to their care plan between clinical contacts
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check{'\u2019'}s daily wellness calls support PCM programs by providing
                structured touchpoints focused on the single qualifying condition, generating
                documentation that clinical staff can review efficiently to meet the 30-minute monthly
                threshold. Learn more on the{' '}
                <Link href="/solutions/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                  chronic care management solutions page
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
