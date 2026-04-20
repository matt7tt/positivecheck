import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import {
  StructuredData,
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFAQSchema,
} from '@/components/structured-data'

const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/post-discharge-contact-timing'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'Post-Discharge Contact Timing: The 2-Business-Day Rule Explained | Positive Check',
  description:
    'Exact CMS rules for the 2-business-day post-discharge contact requirement: what counts as a business day, weekend and holiday handling, acceptable contact methods, documentation standards, and how automation enforces the window.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/post-discharge-contact-timing' },
  openGraph: {
    title: 'Post-Discharge Contact Timing: The 2-Business-Day Rule Explained',
    description:
      'Exact CMS rules for the 2-business-day post-discharge contact: business day definition, weekend/holiday handling, contact methods, documentation.',
    url: '/solutions/post-discharge-follow-up/post-discharge-contact-timing',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Post-discharge contact timing guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Discharge Contact Timing: The 2-Business-Day Rule Explained',
    description:
      'Exact CMS rules for the 2-business-day post-discharge contact requirement.',
    images: [HERO_IMAGE],
  },
}

const faqs = [
  {
    question: 'If a patient is discharged on a Friday, when must contact happen?',
    answer:
      'By end of business Tuesday. Friday counts as business day 0 (discharge day itself doesn\u2019t count). Saturday and Sunday are excluded. Monday is business day 1 and Tuesday is business day 2 \u2014 the deadline. If Monday is a federal holiday (e.g., Memorial Day), the deadline extends to Wednesday.',
  },
  {
    question: 'Does the 2-business-day window start from the discharge time or the next calendar day?',
    answer:
      'Per CMS, the window starts the next business day after discharge. A 3 AM Monday discharge and a 9 PM Monday discharge both have the same deadline \u2014 end of business Wednesday. The clock runs on business days, not hours.',
  },
  {
    question: 'Does a voicemail count as contact?',
    answer:
      'A voicemail alone does not count. CMS requires \u201cdirect contact\u201d that addresses the discharge care plan \u2014 this implies two-way engagement with the patient or their authorized caregiver. A voicemail left with no subsequent patient response does not satisfy the requirement, even if the message content would have met the CMS criteria if received.',
  },
  {
    question: 'What if I reach the patient\u2019s family member instead of the patient?',
    answer:
      'Contact with a caregiver or authorized representative is acceptable when the caregiver is the appropriate recipient \u2014 for patients with cognitive impairment, language barriers, or similar contact limitations. CMS permits this in the MLN TCM guidance. The contact must still address the discharge care plan and be documented.',
  },
  {
    question: 'Can I catch up later if the 2-business-day window is missed?',
    answer:
      'No. Missing the 2-business-day window means CPT 99495 or 99496 cannot be billed for that discharge. Providers may still continue post-discharge care (and bill ordinary E/M services), but the TCM code specifically requires the timely contact. This is why automation as a safety net matters \u2014 every missed window is an unbilled TCM encounter worth roughly $178.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
  { name: 'Contact Timing', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'Post-Discharge Contact Timing: The 2-Business-Day Rule Explained',
  description:
    'Exact CMS rules for the 2-business-day post-discharge contact requirement: what counts as a business day, weekend and holiday handling, acceptable contact methods, documentation standards, and how automation enforces the window.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
})

export default function PostDischargeContactTimingPage() {
  return (
    <>
      <StructuredData id="contact-timing-breadcrumb" data={breadcrumb} />
      <StructuredData id="contact-timing-article" data={article} />
      <StructuredData id="contact-timing-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Workflow</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Post-Discharge Contact Timing: The 2-Business-Day Rule Explained
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                What CMS actually requires for the initial post-discharge contact \u2014 business day
                counting, weekend and holiday handling, what counts as valid contact, and how automation
                enforces the window.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    CPT 99495 and 99496 both require direct patient contact within{' '}
                    <strong>two business days</strong> of discharge.
                  </li>
                  <li>
                    Business days <strong>exclude weekends and federal holidays</strong> \u2014 a Friday
                    discharge means contact must happen by end of business Tuesday.
                  </li>
                  <li>
                    Acceptable contact forms: telephonic, electronic (portal message, secure text), or
                    face-to-face.
                  </li>
                  <li>
                    Missed contacts cannot be billed \u2014 every miss is a lost ~$178 TCM encounter.
                  </li>
                  <li>
                    Automated outreach enforces the window as a scheduling constraint and documents the
                    contact for billing.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The CMS 2-business-day rule</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 2-business-day contact requirement is one of two hard gates that determine whether a
                TCM claim is billable. Both CPT 99495 (moderate medical decision-making complexity) and
                CPT 99496 (high complexity) require a direct patient contact within two business days of
                discharge \u2014 there is no exception for staffing shortfalls, patient unavailability on
                the first attempt, or administrative delays. The{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN TCM booklet specifies that the contact must address the discharge care plan
                </a>
                , which means it must cover at minimum: the patient\u2019s understanding of their
                discharge medications, awareness of scheduled follow-up appointments, and any symptom
                changes since leaving the hospital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The contact does not have to be performed by the billing physician or non-physician
                practitioner (NPP). CMS permits clinical staff to perform the initial contact under the
                general supervision of the billing provider \u2014 meaning an RN, LPN, or medical
                assistant can make the call as long as the billing provider has reviewed the encounter as
                part of ongoing care coordination. This flexibility is what makes scale possible: a
                practice or hospital system with dozens of daily discharges can staff the contact function
                separately from the billing provider\u2019s schedule. For a full overview of{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  post-discharge follow-up as a care delivery framework
                </Link>
                , see the TCM solution overview.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Missing the 2-business-day window is not recoverable through retroactive documentation or
                a late contact. The window is a hard billing condition: if the contact does not occur
                within two business days of discharge, the TCM codes cannot be billed for that discharge
                episode, regardless of how complete the subsequent care coordination and face-to-face
                visit documentation is. This makes deadline accuracy \u2014 knowing precisely when the
                window opens and closes \u2014 the most operationally critical element of a TCM program.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What counts as a &ldquo;business day&rdquo;</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A business day, for TCM purposes, is Monday through Friday, excluding federal holidays.
                This is the definition that governs the 2-business-day contact window \u2014 it is
                distinct from the 14-day face-to-face visit requirement, which runs on calendar days with
                no weekend or holiday exclusions. Treating the face-to-face window as a business-day
                window (or vice versa) is a common source of calculation errors that leads to either missed
                billing opportunities or incorrect claims.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The federal holiday calendar that governs the exclusions is defined by the{' '}
                <a
                  href="https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Office of Personnel Management (OPM) federal holiday schedule
                </a>
                . The eleven currently designated federal holidays are: New Year\u2019s Day (January 1),
                Martin Luther King Jr. Day (third Monday in January), Presidents\u2019 Day (third Monday
                in February), Memorial Day (last Monday in May), Juneteenth National Independence Day
                (June 19), Independence Day (July 4), Labor Day (first Monday in September), Columbus Day
                (second Monday in October), Veterans Day (November 11), Thanksgiving Day (fourth Thursday
                in November), and Christmas Day (December 25). When a holiday falls on a Saturday, the
                preceding Friday is the observed holiday; when it falls on a Sunday, the following Monday
                is observed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                One additional rule that trips up many practices: the discharge day itself does not count
                toward the 2-business-day window. The clock starts on the first business day after the
                patient leaves the facility. A patient discharged on a Monday means the window opens
                Tuesday (business day 1) and closes at end of business Wednesday (business day 2). Any
                contact that occurs on the discharge day itself does not satisfy the requirement because
                the TCM framework is designed to capture the patient\u2019s post-discharge experience,
                not a pre-discharge check-in.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timing examples across discharge scenarios</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Business-day counting becomes unintuitive when discharges fall near weekends or federal
                holidays. The following examples cover the most common scenarios that generate errors in
                manual workflows:
              </p>
              <ul className="list-none pl-0 space-y-3 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Monday morning discharge</strong> \u2014 <em>contact by end of business Wednesday.</em>{' '}
                  Monday is the discharge day (day 0). Tuesday is business day 1. Wednesday is business day 2.
                </li>
                <li>
                  <strong>Friday afternoon discharge</strong> \u2014{' '}
                  <em>contact by end of business Tuesday.</em>{' '}
                  Friday is day 0. Saturday and Sunday are excluded. Monday is business day 1. Tuesday is
                  business day 2.
                </li>
                <li>
                  <strong>Wednesday before Thanksgiving discharge</strong> \u2014 contact by end of business Monday (Thanksgiving and the weekend don\u2019t count).{' '}
                  Wednesday is day 0. Thursday (Thanksgiving) is excluded. Friday is business day 1. Saturday and Sunday are excluded. Monday is business day 2.
                </li>
                <li>
                  <strong>Day before Christmas (weekday) discharge</strong> \u2014 Christmas and New
                  Year\u2019s Day are both federal holidays. If Christmas falls on a Thursday and New
                  Year\u2019s Day falls on the following Thursday,{' '}
                  <em>the deadline is end of business Tuesday after New Year\u2019s.</em>{' '}
                  Christmas Eve (Wednesday) is day 0. Christmas Day (Thursday) is excluded. Friday is
                  business day 1. The following Monday is business day 2, unless that Monday is a
                  New Year\u2019s observed holiday, in which case Tuesday is business day 2.
                </li>
                <li>
                  <strong>Saturday discharge</strong> \u2014{' '}
                  <em>contact by end of business Tuesday.</em>{' '}
                  Saturday is not a business day and does not count as day 0. The window starts Monday
                  (business day 1). Tuesday is business day 2.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The practical implication is that holiday-adjacent discharge patterns \u2014 discharges
                the Wednesday before Thanksgiving, or discharges in the days surrounding Christmas and
                New Year\u2019s \u2014 require explicit deadline calculation rather than a simple
                \u201cadd two\u201d rule. Manual workflows that rely on staff remembering holiday
                exclusions are unreliable during high-discharge-volume holiday periods.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What counts as a valid &ldquo;contact&rdquo;</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS defines the required contact as \u201cdirect contact\u201d that addresses the
                discharge care plan. Three contact modalities satisfy the requirement, each with its own
                operational considerations:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Telephonic contact</strong> is the most common form. A live phone call \u2014
                whether answered by the patient directly or by an authorized caregiver speaking on the
                patient\u2019s behalf \u2014 satisfies the requirement when the content of the call
                addresses medications, follow-up appointments, and symptoms. The key word is
                \u201clive\u201d: the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN booklet makes clear that direct contact implies two-way engagement
                </a>
                . A voicemail left with no subsequent patient response does not satisfy the requirement,
                even if the voicemail message was comprehensive and clinically appropriate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Electronic contact</strong> is permitted when the patient engages with the
                message. A secure patient portal message that the patient responds to, a secure text
                message exchange, or an email exchange through a HIPAA-compliant channel can all satisfy
                the contact requirement. The operative condition is patient response: a message sent but
                not responded to does not establish the two-way engagement CMS requires. Practices using
                portal messaging for TCM contacts should configure their systems to flag unanswered
                messages and trigger a follow-up contact attempt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Face-to-face contact</strong> \u2014 an in-office visit, home visit, or
                telehealth video visit \u2014 satisfies both the initial contact requirement and,
                if performed by the billing provider within 14 days, the face-to-face visit requirement
                simultaneously. However, none of the following alone constitutes valid contact: a
                voicemail with no engagement, a text message or email sent but not responded to, or
                general mass communications such as post-discharge care instruction letters sent to
                all patients.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who can perform the contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The billing provider\u2019s personal involvement is not required for the initial contact.
                CMS explicitly allows the 2-business-day contact to be performed by clinical staff under
                the general supervision of the billing physician or NPP. This category includes registered
                nurses, licensed practical nurses, and medical assistants operating within their scope
                of practice. The billing provider does not need to be present or immediately available
                during the call \u2014 general supervision means the provider has authorized the contact
                and is available to review the encounter as part of ongoing care coordination.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI-powered wellness calls also satisfy the contact requirement when the platform is
                configured to capture the CMS-required content elements and supports real-time escalation
                to clinical staff. The determining factor is not whether the contact is human or automated,
                but whether the contact is direct, addresses the discharge care plan, and is documented.
                An AI call that systematically covers medication understanding, follow-up appointment
                awareness, and symptom status \u2014 and routes concerning responses immediately to the
                care team \u2014 meets the CMS standard. For a complete breakdown of billing provider
                eligibility and supervision requirements, see the{' '}
                <Link
                  href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99495 billing guide
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What is not permitted is delegating the contact to a non-clinical administrative staff
                member without clinical oversight. A scheduling coordinator confirming a follow-up
                appointment does not satisfy the TCM contact requirement, even if the call occurs within
                the 2-business-day window. The contact must have clinical content \u2014 addressing the
                care plan, not just logistics \u2014 and must be performed by someone with the clinical
                competency to recognize and escalate concerning patient responses.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documenting the contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Documentation of the initial contact is what transforms a clinical interaction into a
                billable TCM encounter. CMS auditors reviewing TCM claims during post-pay review look for
                specific data points in the contact record; missing any one of them can result in claim
                denial or recoupment. The documentation should capture:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>Date and time of the contact (use 24-hour format or specify AM/PM unambiguously)</li>
                <li>Contact method: phone, patient portal, secure text, in-person, or telehealth</li>
                <li>Medication review: what medications were discussed, whether the patient confirmed filling and taking them, and any concerns raised</li>
                <li>Symptom check: what symptoms the patient reported, whether any red-flag symptoms were present or absent</li>
                <li>Follow-up appointment awareness: whether the patient has a scheduled post-discharge appointment and whether they understand how to access care if needed before then</li>
                <li>Any care plan modifications or escalations resulting from the contact</li>
                <li>Identifier of the staff member or system that performed the contact</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                A documentation entry that reads only \u201cpatient called, doing well\u201d does not
                satisfy the CMS standard. The record must reflect that the specific care plan elements
                were addressed. Practices that use structured call scripts or AI-generated contact
                summaries have a significant documentation compliance advantage: each content domain is
                captured systematically, and the resulting record maps directly to the fields CMS
                auditors look for.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The contact record should be placed in the patient\u2019s chart in a location accessible
                to the billing provider, who will need to review it as part of the overall TCM episode
                documentation before the claim is submitted. The billing provider\u2019s attestation of
                review \u2014 even if the contact itself was performed by clinical staff \u2014 closes
                the supervision loop that makes the delegation permissible under CMS rules.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Handling unreachable patients</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patient unreachability is one of the most operationally common challenges in TCM programs.
                Patients may not answer an unfamiliar number, be in the hospital for post-discharge
                procedures, have given an incorrect contact number, or simply be unavailable during
                business hours. The CMS framework requires good-faith effort to make contact, and that
                effort must be documented even when it does not succeed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A common practice is to make two contact attempts on different modalities within the
                2-business-day window \u2014 for example, a phone call on the morning of business day 1
                and a portal message later that day if the call is unanswered. Documenting each attempt
                (date, time, method, and outcome \u2014 no answer, voicemail left, portal message sent)
                establishes the good-faith record. If the patient remains unreachable after documented
                attempts within the window, TCM may not be billable for that discharge episode.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                An important fallback: contact with an authorized representative or caregiver is
                acceptable when that caregiver is the appropriate recipient of the care plan information.
                For patients with cognitive impairment, significant language barriers, or other contact
                limitations, reaching the designated caregiver and covering the care plan content with
                them satisfies the CMS requirement. For more on caregiver contacts and what CMS permits,
                see the{' '}
                <Link
                  href="/solutions/post-discharge-follow-up/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  TCM frequently asked questions
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How automation enforces the window</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Manual workflows fail the 2-business-day window in predictable ways: high discharge
                volume on Friday afternoons overwhelms the care coordination team on Monday morning, a
                single staff absence during a holiday week delays all pending contacts, and holiday
                deadline calculation errors send teams to work on the wrong day. Automation addresses
                each of these failure modes structurally rather than relying on individuals to remember
                the rules. The{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Positive Check post-discharge follow-up platform
                </Link>{' '}
                computes the 2-business-day deadline from the discharge timestamp at the moment of
                discharge, using the full federal holiday calendar \u2014 including observed holiday
                shifts when a federal holiday falls on a weekend.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When a first contact attempt does not result in a completed engagement, the system
                schedules automatic retry attempts within the remaining window. Rather than placing the
                burden on a care coordinator to track which patients are still pending contact, the
                platform surfaces an escalation alert as the deadline approaches. Clinical staff can
                step in for any patient where automated contact has not succeeded, with the specific
                deadline and patient context pre-populated. Real-time escalation is triggered
                immediately when a patient\u2019s responses indicate a concerning symptom or a gap in
                care plan follow-through \u2014 not at the end of the shift when notes are reviewed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Documentation is generated automatically: a structured summary of each contact, covering
                every field that CMS auditors look for, is ready for the billing provider\u2019s review
                as soon as the call concludes. This removes the documentation burden from the person
                performing the contact and eliminates the \u201cpatient called, doing well\u201d
                note problem. For providers looking to understand how this scales across a high-discharge-volume
                operation, the case study on{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  scaling patient engagement
                </Link>{' '}
                walks through a deployment scenario. For the full{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  post-discharge follow-up solution
                </Link>
                , including how the contact integrates with the 14-day face-to-face visit workflow, see
                the TCM solution overview.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Workflow best practices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Even with automation in place, the operational setup of the discharge-to-contact pipeline
                determines how reliably the 2-business-day window is met. The following practices reflect
                what high-performing TCM programs have in common:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Capture the discharge timestamp in the EHR at the discharge disposition step</strong>
                  \u2014 not from a daily census report pulled the next morning. Every hour of lag
                  increases the risk of a missed window on high-volume discharge days.
                </li>
                <li>
                  <strong>Integrate the discharge list to the outreach platform within one hour of discharge</strong>
                  \u2014 ideally via automated HL7 ADT feed rather than manual CSV upload. Manual uploads
                  create gaps when staff are unavailable.
                </li>
                <li>
                  <strong>Schedule the automated contact for the morning of the first business day post-discharge</strong>
                  \u2014 earlier in the day preserves time for retry attempts if the first contact is
                  unsuccessful.
                </li>
                <li>
                  <strong>Set escalation rules calibrated to clinical priority</strong> \u2014 for example,
                  a new symptom warranting same-day clinical call-back within four hours; a missed
                  follow-up appointment escalated within 24 hours.
                </li>
                <li>
                  <strong>Track missed-contact rate as a program KPI</strong> \u2014 the percentage of
                  discharges where no valid contact was completed within the 2-business-day window is
                  a direct measure of TCM revenue leakage and a quality signal.
                </li>
                <li>
                  <strong>Report TCM revenue captured vs. missed to leadership quarterly</strong>
                  \u2014 attaching a dollar figure to each missed contact window makes the operational
                  investment in automation and workflow improvement concrete.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common questions</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key takeaways</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    The 2-business-day rule applies to both CPT 99495 and 99496 \u2014 weekends and
                    federal holidays do not count.
                  </li>
                  <li>
                    Acceptable contact forms: telephonic, electronic, or face-to-face \u2014 two-way
                    engagement required (voicemail alone does not count).
                  </li>
                  <li>
                    Documentation must capture date/time, method, content, and any escalations \u2014
                    CMS auditors may request this.
                  </li>
                  <li>
                    Automation enforces the window reliably across high-volume discharge days when
                    manual workflows miss.
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Back to the TCM solution overview
                </Link>
              </div>
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
