import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Chronic Care Management (CCM) FAQ | Positive Check',
  description:
    'Answers about Chronic Care Management: CPT 99490, 99439, 99487, and 99489 billing, the 2-chronic-conditions requirement, the 20-minute monthly time threshold, documentation, HIPAA, and how AI-powered wellness calls fit CMS rules.',
  alternates: { canonical: '/solutions/chronic-care-management/faq' },
  openGraph: {
    title: 'Chronic Care Management (CCM) FAQ | Positive Check',
    description:
      'Answers about CCM billing, eligibility, time thresholds, documentation, HIPAA, and AI wellness calls.',
    url: '/solutions/chronic-care-management/faq',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check CCM FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chronic Care Management (CCM) FAQ | Positive Check',
    description:
      'Answers about CCM billing, eligibility, time thresholds, documentation, HIPAA, and AI wellness calls.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const faqs = [
  {
    question: 'What is Chronic Care Management (CCM)?',
    answer:
      "Chronic Care Management is a Medicare-reimbursed care coordination program for patients with two or more chronic conditions expected to last at least 12 months (or until death) and that place the patient at significant risk of death, acute exacerbation, or functional decline. Clinical staff deliver non-face-to-face care coordination \u2014 medication management, care plan updates, patient communication \u2014 and bill CPT 99490 (first 20 minutes non-complex), 99439 (each additional 20 minutes), 99487 (first 60 minutes complex), and 99489 (each additional 30 minutes complex).",
  },
  {
    question: 'What is the two-chronic-conditions requirement?',
    answer:
      'To qualify for CCM, a patient must have two or more chronic conditions. This distinguishes CCM from RPM (which requires only one chronic condition) and from Principal Care Management (PCM, which is specifically for a single high-risk condition). The chronic conditions must be documented in the patient\u2019s medical record and must be expected to last at least 12 months or until death. Common qualifying combinations include hypertension + diabetes, COPD + heart failure, and diabetes + chronic kidney disease.',
  },
  {
    question: 'What is the 20-minute monthly clinical staff time requirement?',
    answer:
      'CPT 99490 requires at least 20 minutes of clinical staff time per calendar month spent on CCM activities for a given patient. The time can be cumulative across multiple touchpoints in the month \u2014 a 5-minute medication check call, a 10-minute care plan update, and a 5-minute specialist-coordination task all count toward the threshold. If the cumulative time reaches the 20-minute mark, 99490 is billable. If it does not, no CCM code can be billed for that patient that month. Each additional 20 minutes may be billed under 99439 (up to twice per month for non-complex CCM).',
  },
  {
    question: 'Can AI-powered wellness calls count toward the 20-minute CCM time requirement?',
    answer:
      'AI calls themselves do not count as "clinical staff time" under the CMS definition, but clinical staff time spent reviewing AI call summaries, updating care plans based on flagged concerns, coordinating escalations, and documenting the interaction does count. In practice, AI calls generate structured summaries that make the 20-minute clinical review highly efficient \u2014 the call captures the patient content, clinical staff spend their time on care-plan action rather than data gathering.',
  },
  {
    question: "What's the difference between non-complex (99490) and complex (99487) CCM?",
    answer:
      'Non-complex CCM (CPT 99490, \u007e$66/month) requires 20 minutes of clinical staff time and at least one moderate-complexity medical decision-making element per month. Complex CCM (CPT 99487, \u007e$144/month) requires 60 minutes of clinical staff time and substantial revision of the care plan for patients with moderate-to-high complexity medical decision-making. Complex CCM applies to patients with unstable conditions, recent hospitalizations, or significant care-plan changes. A patient can only be billed under one track per month \u2014 either non-complex or complex, not both.',
  },
  {
    question: 'Does HIPAA permit AI-powered CCM wellness calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
  {
    question: 'Who can furnish CCM services?',
    answer:
      'CCM services can be furnished by physicians, non-physician practitioners (NPs, PAs, CNSs, CNMs), and clinical staff under the general supervision of the billing provider. "Clinical staff" includes RNs, LPNs, medical assistants, and other licensed personnel acting within their scope of practice. Only one billing provider can bill CCM codes for a given patient per calendar month, even if multiple practices are involved in that patient\u2019s care.',
  },
  {
    question: 'What about CPT 99439 and 99489 \u2014 the add-on codes?',
    answer:
      'CPT 99439 is the non-complex CCM add-on for each additional 20 minutes beyond the initial 99490 threshold, billable up to 2x per month (so a non-complex CCM patient with 60 minutes of clinical staff time in a month could bill 99490 + 99439 + 99439). CPT 99489 is the complex CCM add-on for each additional 30 minutes beyond the 99487 60-minute threshold. Both require the same documentation discipline as the base codes: time tracking, care plan updates, and CMS-recognized activities.',
  },
  {
    question: 'How does CCM interact with RPM, TCM, and PCM for the same patient?',
    answer:
      'CMS permits CCM to be billed concurrently with RPM (Remote Patient Monitoring), TCM (Transitional Care Management), and PCM (Principal Care Management) for the same patient, as long as the services are distinct and documented separately. Many practices use TCM during the 30-day post-discharge window, then transition stable patients into CCM (for multi-condition coordination) or PCM (for single-condition focus). RPM layers on top of CCM when remote device data is part of the care plan.',
  },
  {
    question: 'Does the patient need to give consent for CCM?',
    answer:
      'Yes. CMS requires that the patient be informed about CCM services, their right to stop services at any time, the cost-sharing (CCM has a copay), and the fact that only one provider can bill CCM for them in a given month. Consent can be verbal or written but must be documented in the medical record. The consent conversation typically happens during a face-to-face visit (E/M, AWV, IPPE, or initial CCM visit) before CCM is first billed.',
  },
  {
    question: 'What documentation does CMS expect for CCM services?',
    answer:
      'Documentation must include: patient consent, a comprehensive care plan accessible 24/7 to the care team, cumulative clinical staff time for the month, descriptions of the care coordination activities (medication management, specialist coordination, patient communication), and any care plan updates. Positive Check generates structured summaries of each wellness call that help clinical staff quickly document care-plan-relevant changes and keep time tracking complete.',
  },
  {
    question: 'Can CCM be billed for patients in skilled nursing facilities or hospice?',
    answer:
      'Generally no. CMS excludes patients in an inpatient hospital, skilled nursing facility, inpatient rehab facility, or hospice from CCM billing. CCM is for community-dwelling patients \u2014 their home, assisted living, or similar setting. Patients receiving care in a facility-based setting are typically covered by the facility\u2019s per-diem payment, which already includes care coordination. See the CMS MLN CCM booklet for the full list of excluded settings.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/solutions/chronic-care-management' },
  { name: 'FAQ', url: 'https://positivecheck.com/solutions/chronic-care-management/faq' },
])

export default function CCMFaqPage() {
  return (
    <>
      <StructuredData id="ccm-faq-breadcrumb" data={breadcrumb} />
      <StructuredData id="ccm-faq-schema" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">CCM FAQ</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Chronic Care Management Questions
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99490/99439/99487/99489 billing, the 2-chronic-conditions requirement, the
                20-minute monthly time threshold, documentation, and how AI-powered engagement
                fits the regulations.
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
                <Link href="/resources/glossary/cpt-99490" className="text-purple-700 underline hover:text-purple-900">CPT 99490</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99487" className="text-purple-700 underline hover:text-purple-900">CPT 99487</Link>
                {', '}
                <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">Chronic Care Management</Link>
                .
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-4">
                For the full Chronic Care Management solution overview,{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  return to the CCM pillar page
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
