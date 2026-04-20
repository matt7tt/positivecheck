import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM) FAQ | Positive Check',
  description:
    'Answers about Remote Patient Monitoring: CPT 99453/99454/99457/99458 billing, interactive communication requirement, patient eligibility, documentation, HIPAA, and how AI-powered wellness calls satisfy CMS rules.',
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
      "Remote Patient Monitoring is a Medicare-reimbursed care program where clinical staff review physiologic data (blood pressure, glucose, weight, SpO2, etc.) transmitted from a patient\u2019s connected device and conduct interactive communication with the patient at least monthly. CMS reimburses four codes: CPT 99453 (setup), 99454 (device supply), 99457 (first 20 minutes of interactive communication per calendar month), and 99458 (each additional 20 minutes).",
  },
  {
    question: 'What does the CMS interactive communication requirement mean?',
    answer:
      'CMS requires that clinical staff (or the physician) have at least one interactive communication with the patient or caregiver each calendar month in which CPT 99457 or 99458 is billed. The interaction can be telephonic, secure messaging, or video \u2014 and it must be real-time, two-way engagement that discusses the patient\u2019s physiologic data, symptoms, or care plan. A one-way notification or unresponded message does not satisfy the requirement.',
  },
  {
    question: 'Can AI-powered wellness calls satisfy the interactive communication requirement?',
    answer:
      'Yes, when the call includes real-time two-way engagement, captures structured clinical content, and supports human escalation. CMS defines \u201cinteractive communication\u201d by its content and two-way nature, not by who initiates it. An AI call that asks about symptoms, captures responses, and flags concerns to clinical staff meets the requirement as long as the interaction is documented.',
  },
  {
    question: 'What\u2019s the typical monthly revenue from an RPM patient?',
    answer:
      'Combined, CPT 99457 (\u007e$52 for first 20 minutes) and 99458 (\u007e$41 for each additional 20 minutes) generate roughly $93 per patient per month in the typical case. Adding CPT 99454 for device supply ($47\u2013$56/month) brings the total per-patient monthly revenue to approximately $140\u2013$150 for a full RPM episode. CPT 99453 is a one-time \u007e$19 setup fee. Rates vary by locality and update annually.',
  },
  {
    question: 'Which patients are eligible for RPM?',
    answer:
      'Medicare covers RPM for patients with one or more chronic conditions whose physiologic data informs ongoing care decisions \u2014 hypertension, diabetes, heart failure, COPD, and post-surgical monitoring are the most common. The patient must have a connected device capable of transmitting data to the provider, and the provider must document a clinical rationale for monitoring.',
  },
  {
    question: 'Does HIPAA permit AI-powered RPM wellness calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
  {
    question: 'What\u2019s the difference between CPT 99457 and 99458?',
    answer:
      'CPT 99457 covers the first 20 minutes of interactive communication per calendar month; CPT 99458 covers each additional 20 minutes in the same month. Both require the same content \u2014 real-time two-way patient engagement discussing physiologic data, symptoms, or the care plan. 99458 can be billed up to twice per patient per month (covering minutes 21\u201340 and 41\u201360), giving typical combined monthly revenue of roughly $93 per patient.',
  },
  {
    question: 'Can I bill CPT 99457 if my clinical staff only spend 10 minutes this month?',
    answer:
      'No. CPT 99457 requires a minimum of 20 minutes of interactive communication in a calendar month. If the time threshold is not met, the service is not billable. Providers should track cumulative interactive-communication time per patient per month and bill 99457 only when the 20-minute threshold is reached.',
  },
  {
    question: 'Who can perform the interactive communication \u2014 physicians, clinical staff, or AI?',
    answer:
      'CMS permits physicians, non-physician practitioners (NPs, PAs, CNSs, CNMs), or clinical staff under general supervision to perform the interactive communication. The communication must be real-time and two-way. AI-powered calls can satisfy the requirement when structured to capture clinical content and escalate concerns to human staff, since CMS defines the requirement by content and interaction type, not staff role.',
  },
  {
    question: 'Do I need a specific type of device for RPM billing?',
    answer:
      'The device must be a medical device as defined by the FDA, and it must automatically transmit physiologic data (not just allow manual entry). Common examples include connected blood pressure cuffs, glucose monitors, scales, pulse oximeters, and ECG devices. CPT 99454 reimburses device supply and data transmission, and the patient must record or have the device transmit data at least 16 of 30 days for 99454 billing each 30-day period.',
  },
  {
    question: 'Can RPM be billed alongside CCM or TCM for the same patient?',
    answer:
      'Yes. CMS permits RPM to be billed concurrently with Chronic Care Management (CCM), Transitional Care Management (TCM), and Principal Care Management (PCM) for the same patient, as long as the services are distinct and documented separately. Many providers use TCM during the 30-day post-discharge window, then transition stable patients into ongoing RPM.',
  },
  {
    question: 'What documentation does CMS expect for RPM services?',
    answer:
      'Documentation must include: patient consent to receive RPM (verbal or written, documented in the chart), the device type and data transmitted, cumulative interactive-communication time for the month, dates and content of the interactive communications, and any care plan changes or escalations. Positive Check generates a structured summary of each interactive communication that maps to these documentation elements.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Remote Patient Monitoring', url: 'https://positivecheck.com/solutions/remote-patient-monitoring' },
  { name: 'FAQ', url: 'https://positivecheck.com/solutions/remote-patient-monitoring/faq' },
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
