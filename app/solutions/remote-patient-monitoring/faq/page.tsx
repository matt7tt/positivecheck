import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM) FAQ | Positive Check',
  description:
    'Answers about Remote Patient Monitoring: CPT 99453/99454/99457/99458 billing, interactive communication, patient eligibility, documentation, HIPAA, and how AI-powered outreach supports practice workflows.',
  alternates: { canonical: '/solutions/remote-patient-monitoring/faq' },
  openGraph: {
    title: 'Remote Patient Monitoring (RPM) FAQ | Positive Check',
    description:
      'Answers about RPM billing, interactive communication, patient eligibility, documentation, HIPAA, and AI wellness calls.',
    url: '/solutions/remote-patient-monitoring/faq',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check RPM FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Patient Monitoring (RPM) FAQ | Positive Check',
    description:
      'Answers about RPM billing, interactive communication, patient eligibility, documentation, HIPAA, and AI wellness calls.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const faqs = [
  {
    question: 'What is Remote Patient Monitoring (RPM)?',
    answer:
      "RPM uses automatically transmitted physiologic data to support management of an acute or chronic condition. Its codes distinguish device setup and collection periods from treatment-management work. In 2026, shorter collection and management pathways are also available. Check each code independently; qualifying management includes required communication rather than only call duration.",
  },
  {
    question: 'What does the CMS interactive communication requirement mean?',
    answer:
      "RPM management requires a real-time, two-way conversation with the patient or caregiver under applicable personnel and service requirements. Video or other data may enhance the conversation. Do not assume every responsive text chat or automated call qualifies. The communication component and total qualifying management time are separate checks.",
  },
  {
    question: 'Do AI-powered wellness calls independently satisfy the interactive communication requirement?',
    answer:
      'CMS has not established that a fully automated AI interaction independently satisfies the requirement. AI outreach can collect structured responses, document attempts, and surface patients for clinical-staff follow-up, but the billing practice must determine which interactions and staff activities meet current CPT, CMS, MAC, and payer requirements.',
  },
  {
    question: 'What\u2019s the typical monthly revenue from an RPM patient?',
    answer:
      "There is no guaranteed monthly revenue per enrolled patient. Payment depends on the actual qualifying services, service year, payer, locality, and setting. Verify current fee-schedule information and include retained staffing, device, software and quality-review costs. Neither call volume nor a vendor projection determines whether an individual claim qualifies.",
  },
  {
    question: 'Which patients are eligible for RPM?',
    answer:
      "RPM can be medically necessary for an acute or chronic condition when transmitted physiologic measurements inform management. CMS also requires an established relationship and consent, alongside the applicable device, personnel, supervision and service requirements. A diagnosis or connected device alone does not establish that a particular claim qualifies.",
  },
  {
    question: 'Does HIPAA permit AI-powered RPM wellness calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
  {
    question: 'What\u2019s the difference between CPT 99457 and 99458?',
    answer:
      "99457 covers the first 20 qualifying treatment-management minutes in a calendar month; 99458 is an add-on for additional qualifying 20-minute increments. These totals include qualifying care-management work as well as required communication. Check current reporting limits and other service requirements rather than treating every minute of automated outreach as clinical work.",
  },
  {
    question: 'Can I bill CPT 99457 if my clinical staff only spend 10 minutes this month?',
    answer:
      "No. Ten qualifying minutes do not meet the 99457 threshold of at least 20 minutes. For 2026, assess the shorter 99470 pathway independently, including required communication and all other criteria. Do not round up or assume software runtime supplies missing staff time; document the actual qualifying treatment-management work.",
  },
  {
    question: 'Who can perform the interactive communication?',
    answer:
      'Applicable CPT and Medicare requirements identify physicians, non-physician practitioners, or clinical staff under the required supervision. The communication must meet the current real-time, two-way and content requirements. Automated outreach can support those staff workflows but should not be treated as a substitute for required qualified-personnel time without confirmation from the practice\u2019s billing and compliance advisers.',
  },
  {
    question: 'Do I need a specific type of device for RPM billing?',
    answer:
      'The device must be a medical device as defined by the FDA, and it must automatically transmit physiologic data (not just allow manual entry). Common examples include connected blood pressure cuffs, glucose monitors, scales, pulse oximeters, and ECG devices. CPT 99454 reimburses device supply and data transmission, and the patient must record or have the device transmit data at least 16 of 30 days for 99454 billing each 30-day period.',
  },
  {
    question: 'Can RPM be billed alongside CCM or TCM for the same patient?',
    answer:
      "Concurrent RPM and another care-management service may be appropriate when each is medically necessary and independently satisfies current requirements. Do not count the same time or effort twice. Keep the clinical activities distinguishable, check code-pair and payer restrictions, and review the actual services before submitting claims for the same patient.",
  },
  {
    question: 'What documentation does CMS expect for RPM services?',
    answer:
      "Document consent, medical necessity, the device and transmitted data, eligible personnel, and actual qualifying treatment-management activities. Record the live patient or caregiver conversation separately, with its content and resulting action. Reconcile monthly totals and exclude duplicated time. An automated transcript can support a handoff but does not establish the complete service.",
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://www.positivecheck.com' },
  { name: 'Solutions', url: 'https://www.positivecheck.com/solutions' },
  { name: 'Remote Patient Monitoring', url: 'https://www.positivecheck.com/solutions/remote-patient-monitoring' },
  { name: 'FAQ', url: 'https://www.positivecheck.com/solutions/remote-patient-monitoring/faq' },
])

export default function RPMFaqPage() {
  return (
    <>
      <StructuredData id="rpm-faq-breadcrumb" data={breadcrumb} />
      <StructuredData id="rpm-faq-schema" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">RPM FAQ</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Remote Patient Monitoring Questions
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99453/99454/99457/99458 billing, the interactive communication rule, patient eligibility,
                documentation, and how AI-powered engagement fits the regulations.
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

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Related glossary entries:{' '}
                <Link href="/resources/glossary/cpt-99457" className="text-purple-700 underline hover:text-purple-900">CPT 99457</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99458" className="text-purple-700 underline hover:text-purple-900">CPT 99458</Link>
                {', '}
                <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">Remote Patient Monitoring</Link>
                .
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-4">
                For the full Remote Patient Monitoring solution overview,{' '}
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  return to the RPM pillar page
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
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                . Last updated 2026-09-20.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
