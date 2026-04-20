import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Transitional Care Management (TCM) FAQ | Positive Check',
  description:
    'Answers about Transitional Care Management: CPT 99495 and 99496 billing, 2-business-day contact requirement, documentation, HIPAA handling, and how AI-powered discharge follow-up calls satisfy CMS rules.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/faq' },
  openGraph: {
    title: 'Transitional Care Management (TCM) FAQ | Positive Check',
    description:
      'Answers about TCM billing, contact requirements, documentation, HIPAA, and AI discharge follow-up.',
    url: '/solutions/post-discharge-follow-up/faq',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check TCM FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transitional Care Management (TCM) FAQ | Positive Check',
    description:
      'Answers about TCM billing, contact requirements, documentation, HIPAA, and AI discharge follow-up.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const faqs = [
  {
    question: 'What is Transitional Care Management (TCM)?',
    answer:
      "Transitional Care Management is a Medicare-reimbursed care model designed to reduce hospital readmissions by ensuring patients receive structured follow-up after discharge. CMS pays providers for delivering two things within a 30-day window: an initial patient contact within two business days of discharge, and a face-to-face visit within 7\u201314 days depending on complexity. The billing codes are CPT 99495 (moderate complexity) and 99496 (high complexity).",
  },
  {
    question: 'Can an AI-powered phone call satisfy the TCM contact requirement?',
    answer:
      'Yes. CMS specifies that the initial contact within two business days must be a "direct contact" that addresses the patient\u2019s discharge care plan \u2014 it can be telephonic, electronic, or face-to-face. An AI wellness call that captures medication understanding, symptom changes, follow-up appointment awareness, and home safety meets the contact requirement as long as the call is documented, escalates concerns to clinical staff, and occurs within the 2-business-day window.',
  },
  {
    question: 'How quickly must post-discharge contact happen?',
    answer:
      'Within two business days of discharge for both CPT 99495 and 99496. Weekends and federal holidays do not count. A patient discharged on a Friday must be contacted by end of business Tuesday. Positive Check schedules calls automatically based on the discharge timestamp from your EHR or discharge list import.',
  },
  {
    question: "What\u2019s the difference between CPT 99495 and 99496?",
    answer:
      'Both require contact within two business days of discharge. CPT 99495 requires moderate medical decision-making complexity and a face-to-face visit within 14 calendar days \u2014 2026 Medicare reimburses it at roughly $178. CPT 99496 requires high medical decision-making complexity and a face-to-face visit within 7 calendar days, reimbursed at a higher rate. See the CMS MLN booklet for current rates.',
  },
  {
    question: 'How does TCM relate to the Hospital Readmissions Reduction Program (HRRP)?',
    answer:
      'HRRP penalizes hospitals for higher-than-expected 30-day readmission rates across six conditions. TCM is the CMS-recognized intervention for reducing avoidable readmissions in the critical 30-day post-discharge window. Effective TCM programs reduce readmissions, which directly reduces HRRP penalty exposure.',
  },
  {
    question: 'Does HIPAA permit automated discharge follow-up calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
  {
    question: 'Who can bill TCM codes?',
    answer:
      'Per CMS, TCM services can be furnished by physicians (any specialty), certain qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs), and licensed clinical staff under direct supervision. The billing provider must meet the documentation and face-to-face visit requirements. Non-face-to-face components (including the initial contact) can be performed by clinical staff under general supervision.',
  },
  {
    question: 'What documentation is required for TCM billing?',
    answer:
      'Documentation must include: the date of discharge, the date and time of the initial contact within two business days, a description of the contact content (medication review, follow-up plan, symptom assessment), the date of the face-to-face visit, the medical decision-making complexity, and a medication reconciliation. Positive Check generates a call transcript and structured summary for every TCM contact that maps to these documentation elements.',
  },
  {
    question: 'Can TCM be billed for patients discharged to skilled nursing facilities?',
    answer:
      'No. TCM is for patients discharged to a community setting \u2014 their home, domiciliary, rest home, or assisted living. Patients discharged to a skilled nursing facility (SNF), inpatient rehabilitation, or long-term care hospital are not eligible for TCM. See the CMS MLN booklet for the full eligibility list.',
  },
  {
    question: 'What happens if the 2-business-day contact is missed?',
    answer:
      'If contact is not made within two business days, the TCM service cannot be billed for that discharge. Some providers track missed-contact rates as a key performance indicator and use automated outreach as a safety net to catch discharges that manual workflows miss. Positive Check\u2019s automation enforces the 2-day window as a hard constraint on scheduling.',
  },
  {
    question: 'Can a family member or caregiver receive the TCM call instead of the patient?',
    answer:
      'Yes. CMS allows the initial contact to be with the patient or the patient\u2019s caregiver when the caregiver is the appropriate recipient (for patients with cognitive impairment, language barriers, or other contact limitations). Positive Check supports designating a caregiver contact when clinically appropriate.',
  },
  {
    question: 'How does TCM fit alongside RPM and CCM?',
    answer:
      'TCM covers the 30-day post-discharge window and is billed once per discharge event. RPM and CCM are ongoing monthly programs. Many providers bill TCM for the initial post-discharge episode, then transition the patient into RPM or CCM for ongoing monitoring. CMS rules allow these programs to be billed for the same patient as long as the services are distinct and documented separately.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
  { name: 'FAQ', url: 'https://positivecheck.com/solutions/post-discharge-follow-up/faq' },
])

export default function TCMFaqPage() {
  return (
    <>
      <StructuredData id="tcm-faq-breadcrumb" data={breadcrumb} />
      <StructuredData id="tcm-faq-schema" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">TCM FAQ</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Transitional Care Management Questions
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99495 and 99496 billing, CMS requirements, documentation, and how AI-powered
                discharge follow-up fits the regulations.
              </p>
            </div>
          </section>

          <section className="px-6 py-16 md:py-20 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                {faqs.map((f) => (
                  <article key={f.question} className="border-b border-gray-200 pb-8 last:border-0">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{f.question}</h2>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-4">
                For the full Transitional Care Management solution overview,{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  return to the TCM pillar page
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
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
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
