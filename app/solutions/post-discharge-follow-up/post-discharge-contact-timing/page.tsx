import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/structured-data'

const PAGE_PATH = '/solutions/post-discharge-follow-up/post-discharge-contact-timing'
const PAGE_URL = 'https://www.positivecheck.com' + PAGE_PATH
const HERO_IMAGE = 'https://www.positivecheck.com/images/admin-console-dashboard-new.png'
const TITLE = 'TCM Contact Within 2 Business Days: CMS Rule & Examples'
const DESCRIPTION = 'TCM contact deadlines with weekend and holiday examples, the unsuccessful-attempt exception, and a practical documentation checklist for care teams.'
const CMS_SOURCE = 'https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf'
const AAFP_SOURCE = 'https://www.aafp.org/practice-operations/billing-and-coding/transitional-care-management'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: PAGE_PATH,
    siteName: 'Positive Check', locale: 'en_US', type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Post-discharge contact timing guide' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [HERO_IMAGE] },
}

const faqs = [
  {
    question: 'If a patient is discharged on Friday, when is TCM contact due?',
    answer: 'The usual deadline is Tuesday, unless a holiday changes the business-day count. Monday and Tuesday are the two business days after Friday. Plan coverage before the weekend, rather than waiting for the discharge list to be reviewed on Monday. A late notification does not restart the discharge-based clock.',
  },
  {
    question: 'Can TCM still be reported if the patient cannot be reached?',
    answer: 'Sometimes. CMS permits reporting after at least two separate, timely, documented unsuccessful attempts if all other TCM requirements are met, including the timely face-to-face visit. Continue trying to reach the patient. A record with no timely attempts is different from a record showing unsuccessful outreach; send ambiguous cases to the billing reviewer.',
  },
  {
    question: 'Does leaving a voicemail complete the TCM contact requirement?',
    answer: 'A voicemail is an attempt, not a completed interactive contact. Label it that way in the record and assign the next attempt. Keep an unanswered message separate from a conversation about the patient’s status and needs. The documented-attempt exception may apply, but a voicemail alone is not a billing determination.',
  },
  {
    question: 'Does an AI call independently qualify as the required clinical contact?',
    answer: 'Do not assume that it does. CMS describes contact by the practitioner or permitted clinical staff; an automated call log alone does not establish that requirement. Use automation to support outreach and handoffs, and have the practice validate who performs the qualifying interaction, what is documented, and who reviews exceptions before billing.',
  },
  {
    question: 'What should a practice test before automating post-discharge outreach?',
    answer: 'Test a Friday discharge, a holiday, an unanswered call, an incorrect phone number, and a response needing clinical follow-up. For each scenario, check the deadline, attempt history, named staff owner, and next action. Use synthetic patient records during testing and agree how the team will handle failures before expanding the workflow.',
  },
  {
    question: 'How should TCM outreach connect with ongoing CCM work?',
    answer: 'Keep the discharge follow-up record and the monthly CCM activity record distinguishable, even when the same team manages both. Assign each activity to the service it supports and never count the same work twice. Review eligibility and documentation separately; completing an outreach call does not by itself establish either program’s billing requirements.',
  },
]

const examples = [
  ['Monday', 'Tuesday, Wednesday', 'Wednesday'],
  ['Thursday', 'Friday, Monday', 'Monday'],
  ['Friday', 'Monday, Tuesday', 'Tuesday'],
  ['Friday, with a Monday holiday', 'Tuesday, Wednesday', 'Wednesday'],
]

const checklist = [
  ['Discharge and deadlines', 'Record the discharge date, source of notification, calculated contact deadline, and separate visit deadline. Flag a late discharge notification for staff review.'],
  ['Each separate attempt', 'Log the date, time, method, staff member, intended recipient, and outcome. Distinguish no answer, voicemail, wrong number, and completed interaction; do not overwrite earlier attempts.'],
  ['Completed interaction', 'Identify whether the patient or caregiver responded, who performed the interaction, the needs discussed, and the clinical follow-up requested. Keep the record in the practice’s approved clinical system.'],
  ['Next action and ownership', 'Assign a named owner and next action after an unsuccessful attempt or concerning response. Keep the task open until the team resolves it; a scheduled call is not a completed contact.'],
  ['Billing review', 'Make the attempt history, visit record, medication reconciliation, and other supporting documentation available to the billing reviewer. Do not automatically convert a call status into a billable claim.'],
]

export default function PostDischargeContactTimingPage() {
  return (
    <>
      <StructuredData id="contact-timing-breadcrumb" data={buildBreadcrumbSchema([
        { name: 'Home', url: 'https://www.positivecheck.com' },
        { name: 'Solutions', url: 'https://www.positivecheck.com/solutions' },
        { name: 'Post-Discharge Follow-Up', url: 'https://www.positivecheck.com/solutions/post-discharge-follow-up' },
        { name: 'Contact Timing', url: PAGE_URL },
      ])} />
      <StructuredData id="contact-timing-article" data={buildArticleSchema({
        headline: TITLE, description: DESCRIPTION, url: PAGE_URL, image: HERO_IMAGE,
        datePublished: '2026-04-19', dateModified: '2026-09-13',
      })} />
      <StructuredData id="contact-timing-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Workflow</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">TCM Contact Within 2 Business Days: CMS Rule and Examples</h1>
              <p className="text-xl text-purple-100 leading-relaxed">Count the deadline, distinguish contact from attempts, and give your care team a clear follow-up checklist.</p>
            </div>
          </section>
          <section className="px-6 py-12">
            <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
              <p className="text-sm mb-6">Updated September 13, 2026. Educational workflow guidance; not a patient-specific billing determination.</p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <p>TCM calls for interactive contact with the patient or caregiver within <strong>two business days after discharge</strong>. If contact is unsuccessful, at least two separate, timely, documented attempts may support reporting when every other requirement is met. Continue outreach; do not automatically mark an unreached patient as either billable or ineligible.</p>
                <p className="mt-3"><a href={CMS_SOURCE} className="text-purple-700 underline">Source: CMS TCM booklet, interactive contact section</a>.</p>
              </div>
              <nav aria-label="On this page" className="flex flex-wrap gap-x-5 gap-y-2 mb-10 text-purple-700 underline">
                <a href="#deadline-examples">Deadline examples</a>
                <a href="#unsuccessful-attempts">Unsuccessful attempts</a>
                <a href="#contact-checklist">Documentation checklist</a>
                <a href="#common-questions">Common questions</a>
              </nav>

              <h2 id="deadline-examples" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Count business days, not 48 hours</h2>
              <p className="mb-4">Use weekdays excluding applicable holidays, not the hours your practice happens to be open. These examples assume no holidays except where noted. Confirm holiday handling with your billing team and payer guidance.</p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left border-collapse">
                  <caption className="sr-only">Illustrative TCM contact deadlines after discharge</caption>
                  <thead className="bg-purple-50"><tr>{['Discharge', 'Business days after discharge', 'Contact deadline'].map((label) => <th scope="col" key={label} className="p-3 border border-gray-200">{label}</th>)}</tr></thead>
                  <tbody>{examples.map(([discharge, days, deadline]) => <tr key={discharge}><th scope="row" className="p-3 border border-gray-200 font-medium">{discharge}</th><td className="p-3 border border-gray-200">{days}</td><td className="p-3 border border-gray-200">{deadline}</td></tr>)}</tbody>
                </table>
              </div>
              <p><a href={AAFP_SOURCE} className="text-purple-700 underline">AAFP’s business-day explanation</a> uses Monday through Friday except holidays, regardless of practice hours or when the discharge notification arrives.</p>

              <h2 id="unsuccessful-attempts" className="text-2xl font-bold text-gray-900 mt-10 mb-4">An unsuccessful attempt is not a completed contact</h2>
              <p className="mb-4">CMS allows phone, email, or face-to-face contact by the practitioner or clinical staff working under their direction. The interaction must address patient status and needs beyond appointment scheduling. Staff must be permitted to perform the service under applicable law and practice policies.</p>
              <p className="mb-4">For unsuccessful outreach, retain each attempt and continue trying to make contact. The exception does not remove the other service requirements or make late attempts timely. Have a billing reviewer assess an incomplete record rather than backdating or relabelling the activity.</p>
              <p>For example, keep Tuesday’s unanswered call and Wednesday’s unanswered call as two separate entries after a Monday discharge. Set a follow-up task and verify the remaining requirements. Do not change either entry to “patient contacted” just because a later visit is booked.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Track the visit deadline separately</h2>
              <p>For <Link href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide" className="text-purple-700 underline">99495</Link>, the visit is due within 14 calendar days with at least moderate medical decision-making; 99496 requires a visit within 7 calendar days and high complexity. Medication reconciliation is due no later than that visit. A timely call alone does not make the episode billable. <a href={CMS_SOURCE} className="text-purple-700 underline">See CMS’s face-to-face requirements</a>.</p>

              <h2 id="contact-checklist" className="text-2xl font-bold text-gray-900 mt-10 mb-4">A practical contact-attempt documentation checklist</h2>
              <p className="mb-5">Use this suggested operational checklist to prepare a record for review, not as a substitute for the full CMS requirements or your approved clinical documentation template.</p>
              <ol className="list-decimal pl-6 space-y-4">{checklist.map(([label, detail]) => <li key={label}><strong>{label}:</strong> {detail}</li>)}</ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where automation fits—and where staff retain responsibility</h2>
              <p className="mb-4">Evaluate Positive Check as support for outreach, structured responses, and staff handoffs. Do not assume that an AI-only call independently satisfies a clinical contact requirement. Agree who reviews unsuccessful attempts, handles concerning responses, and makes billing decisions before running a pilot.</p>
              <p className="mb-8">Use the <Link href="/resources/implementation-guide" className="text-purple-700 underline">implementation guide</Link> to plan ownership and exception testing. For ongoing chronic care after discharge, review <Link href="/resources/compare/tcm-and-ccm-combined-month-billing" className="text-purple-700 underline">TCM and CCM in the same month</Link> and the <Link href="/blog/ccm-billing-2026-cpt-codes-guide" className="text-purple-700 underline">2026 CCM billing guide</Link>.</p>
              <ContentConversionCta source="tcm_contact_timing_summary" title="Walk through your discharge follow-up workflow" description="Bring your discharge-list process, contact-attempt rules, and staff handoff questions. Explore where Positive Check can support the team while your practice retains clinical and billing responsibility." />

              <h2 id="common-questions" className="text-2xl font-bold text-gray-900 mt-10 mb-6">Common questions</h2>
              <div className="space-y-6">{faqs.map((faq) => <section key={faq.question}><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p>{faq.answer}</p></section>)}</div>
              <p className="mt-10 text-sm">Source check: CMS MLN908628 (August 2025) and AAFP’s TCM guidance, accessed September 13, 2026. Have a qualified billing reviewer validate your workflow against current CMS, CPT, MAC, and payer requirements. This page does not assert clinical reviewer approval.</p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
