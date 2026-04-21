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

const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/20-minutes-monthly-requirement'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CCM\u2019s 20-Minutes-Per-Month Requirement: What Counts and How to Track It | Positive Check',
  description:
    'Exact CMS rules for the 20-minute clinical staff time requirement underpinning CPT 99490. What activities count, what doesn\u2019t, who can perform the work, documentation standards, and common pitfalls that make billed time unbillable at audit.',
  alternates: { canonical: '/solutions/chronic-care-management/20-minutes-monthly-requirement' },
  openGraph: {
    title: 'CCM 20-Minutes-Per-Month Requirement: What Counts and How to Track It',
    description:
      'What activities count toward the CCM time threshold, what doesn\u2019t, documentation standards, and common billing pitfalls.',
    url: '/solutions/chronic-care-management/20-minutes-monthly-requirement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CCM 20-minute monthly requirement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCM 20-Minutes-Per-Month Requirement: What Counts and How to Track It',
    description:
      'What activities count toward CCM time, what doesn\u2019t, documentation standards, and common pitfalls.',
    images: [HERO_IMAGE],
  },
}

const faqs = [
  {
    question: 'Does time spent writing a CCM progress note count toward the 20-minute threshold?',
    answer:
      'Yes. Documentation of CCM activities is itself part of CCM work. Writing the monthly CCM note that captures care plan updates, medication changes, and coordination activities counts toward the 20-minute threshold. What doesn\u2019t count is documentation of non-CCM activities (E/M visit notes, general chart maintenance, etc.).',
  },
  {
    question: 'If I spend 15 minutes on CCM and 10 minutes on an E/M visit for the same patient in the same month, can I bill 99490?',
    answer:
      'No. The 10 minutes of E/M time is captured by the E/M code and cannot be double-counted. Only the 15 CCM-specific minutes apply, which is below the 99490 threshold. To bill 99490 that month, you\u2019d need at least 5 more non-face-to-face CCM minutes on that patient.',
  },
  {
    question: 'Can time spent on a single patient be split across multiple staff members in the same month?',
    answer:
      'Yes. Cumulative time across multiple clinical staff members under the billing provider\u2019s supervision all counts toward the 20-minute threshold. An RN spending 8 minutes on medication reconciliation, an LPN spending 6 minutes on a caregiver call, and a medical assistant spending 7 minutes on specialist coordination together equal 21 minutes \u2014 billable as 99490.',
  },
  {
    question: 'Does coordination with the patient\u2019s pharmacy count toward CCM time?',
    answer:
      'Yes, when the coordination is clinically relevant to the patient\u2019s care plan. Calling the pharmacy to reconcile an insulin refill, verify a new prescription was received, or clarify a dosing question all count as medication management activities. Routine administrative tasks (pharmacy billing inquiries, benefits verification) do not.',
  },
  {
    question: 'How do I handle months where the patient needed less than 20 minutes of coordination?',
    answer:
      'If cumulative CCM time for a patient is below 20 minutes in a calendar month, 99490 is not billable that month. This is a normal part of running a CCM program \u2014 some months a patient is stable and needs little coordination. Do not force time-tracking to reach 20 minutes; document what actually happened. Over time, the enrolled population averages well above 20 minutes across the month because most CCM-eligible patients have active coordination needs.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/solutions/chronic-care-management' },
  { name: 'The 20-Minute Monthly Requirement', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: "CCM's 20-Minutes-Per-Month Requirement: What Counts and How to Track It",
  description: 'Exact CMS rules for the 20-minute clinical staff time requirement underpinning CPT 99490 billing.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
})

export default function CCMTwentyMinutesPage() {
  return (
    <>
      <StructuredData id="ccm-20min-breadcrumb" data={breadcrumb} />
      <StructuredData id="ccm-20min-article" data={article} />
      <StructuredData id="ccm-20min-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Workflow</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CCM{'\u2019'}s 20-Minutes-Per-Month Requirement: What Counts and How to Track It
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                The CMS rule that turns clinical staff effort into billable CCM encounters: what activities count
                toward the 20-minute threshold, what doesn{'\u2019'}t, and the documentation discipline that
                protects the bill at audit.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    CPT 99490 requires at least <strong>20 cumulative minutes of clinical staff time</strong> on
                    CCM activities per calendar month {'\u2014'} it{'\u2019'}s a time threshold, not an encounter
                    threshold.
                  </li>
                  <li>
                    Time is <strong>non-face-to-face</strong> {'\u2014'} minutes during an E/M visit are billed
                    under the E/M code, not CCM.
                  </li>
                  <li>
                    Activities that count:{' '}
                    <strong>
                      care plan development/updates, medication management, patient and caregiver communication,
                      specialist coordination, review of test results, community resource coordination.
                    </strong>
                  </li>
                  <li>
                    Activities that do NOT count:{' '}
                    <strong>
                      E/M visit time, time not documented, time on non-CCM tasks (general office work, training),
                      work performed by staff not under the billing provider{'\u2019'}s general supervision.
                    </strong>
                  </li>
                  <li>
                    The threshold is <strong>cumulative across the month</strong> {'\u2014'} multiple 5-minute
                    interactions can combine; there{'\u2019'}s no minimum per-encounter duration.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the 20-minute rule actually says</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 reimburses at least 20 minutes of clinical staff time per calendar month dedicated to{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management
                </Link>{' '}
                activities. Clinical staff means RNs, LPNs, medical assistants, or other qualifying clinical
                personnel operating under the general supervision of the billing physician or non-physician
                practitioner. The time standard is defined by CMS and explained in detail in the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN Chronic Care Management Services booklet
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 20-minute figure is cumulative across the entire calendar month, not a minimum per encounter.
                A patient who receives five 4-minute coordination calls throughout April has met the threshold
                just as validly as a patient who receives a single 22-minute care planning session. There is no
                CMS rule specifying a minimum per-interaction duration {'\u2014'} the month-end total is what
                determines billability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Time must be documented with the date of service, duration of the activity, the nature of the
                CCM work performed, and a staff identifier (name or unique EHR identifier). Documentation that
                lacks any of these elements creates audit vulnerability. The rule is simple in concept but
                requires discipline to execute correctly across a large enrolled patient panel: every minute
                claimed must have a corresponding documentation entry that a reviewer could trace back to a
                specific patient-specific clinical activity.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What counts as CCM activity time</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS defines CCM activity broadly as time spent on coordinating and managing the care of
                a patient with two or more chronic conditions. The following categories and examples are
                explicitly recognized as qualifying CCM activities under{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management
                </Link>{' '}
                program rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  Developing, implementing, or updating the patient{'\u2019'}s comprehensive care plan, including
                  documenting changes to goals, medications, or coordination workflows
                </li>
                <li>
                  Medication management and reconciliation: reviewing medication lists, checking for interactions,
                  adjusting doses, coordinating refills with pharmacies and specialists
                </li>
                <li>
                  Communication with the patient or caregiver about care plan adherence, symptom changes, or
                  upcoming appointments
                </li>
                <li>
                  Communication with other providers involved in the patient{'\u2019'}s care, including specialists,
                  home health agencies, pharmacies, and behavioral health providers
                </li>
                <li>
                  Review of test results, imaging reports, or specialist notes when the review is relevant to
                  ongoing care coordination rather than the E/M visit
                </li>
                <li>
                  Coordination with community resources such as meal delivery programs, transportation services,
                  or social work referrals that support the patient{'\u2019'}s care plan
                </li>
                <li>
                  Documentation of the CCM activities performed during the month {'\u2014'} writing the note that
                  captures the care coordination work is itself part of the work
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The thread connecting all qualifying activities is patient-specific clinical purpose: the staff
                member is doing something that directly advances this particular patient{'\u2019'}s care plan.
                General work that happens to touch a patient{'\u2019'}s chart but is not oriented toward their
                chronic condition management does not qualify. When in doubt, the question is: would a reviewer
                be able to look at this time entry and identify a specific clinical action that benefited this
                patient{'\u2019'}s coordinated care?
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What doesn{'\u2019'}t count
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS is equally explicit about time that does not qualify toward the 20-minute threshold. The
                most common sources of non-qualifying time are activities that are captured by other billing
                codes or that lack the patient-specific clinical purpose that defines CCM:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  Time during an E/M visit: face-to-face encounter minutes are already captured by the E/M code
                  and cannot be double-counted toward CCM
                </li>
                <li>
                  Time spent on non-CCM tasks such as general office administrative work, staff training,
                  scheduling (that is not care-plan-driven), or patient registration
                </li>
                <li>
                  Time by staff who do not meet CMS{'\u2019'}s clinical staff definition or who are not under
                  the billing provider{'\u2019'}s general supervision
                </li>
                <li>
                  Time not documented: if the activity is not recorded in the medical record with a date,
                  duration, and description, it is not billable regardless of whether it occurred
                </li>
                <li>
                  Time spent on a patient who does not meet CCM eligibility: no documented consent, fewer than
                  two qualifying chronic conditions, or enrollment not properly established
                </li>
                <li>
                  Time billed under a different CMS program: RPM minutes (CPT 99457) are separate and cannot
                  be double-counted toward the CCM threshold for the same patient in the same month
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The E/M exclusion deserves special emphasis. A busy practice might be tempted to count a
                lengthy office visit toward the CCM monthly total, particularly if that visit included extensive
                medication review and care planning. This is not permitted. The E/M code covers the encounter;
                the 20 CCM minutes must come from non-face-to-face coordination work that happens outside that
                visit. Practices that train staff to document CCM time separately from visit time avoid this
                category of audit error entirely.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Whose time can count
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The billing physician or non-physician practitioner (NP, PA, CNS, or CNM) can perform CCM
                activities and count that time toward the threshold. More commonly, the work is performed by
                clinical staff {'\u2014'} RNs, LPNs, and in some cases medical assistants {'\u2014'} under the
                general supervision of the billing provider. General supervision means the physician or NPP
                does not need to be physically present when the clinical staff performs CCM work, but must
                be available by phone and must have reviewed and approved the care plan and coordination
                approach.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Incident-to rules apply to CCM clinical staff time. The clinical staff performing CCM work
                must be employed by or contracted with the billing provider{'\u2019'}s practice. Staff at an
                unaffiliated facility, a separate practice entity, or a third-party vendor that does not have
                a qualifying contractual relationship with the billing practice generally cannot have their
                time counted toward the 20-minute threshold. Practices that outsource CCM coordination to
                a third-party service should verify the contractual structure meets CMS incident-to requirements
                before billing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every time entry must identify the staff member who performed the CCM activity. The documentation
                can use a name, an EHR user ID, or any unique identifier that an auditor could trace back to
                a specific credentialed individual. Generic entries such as {'\u201c'}staff called patient{'\u201d'}
                without a staff identifier are audit liabilities and should be corrected in documentation
                protocols before they accumulate at scale.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tracking time accurately</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accurate time tracking is the operational foundation of a defensible CCM program. The mechanics
                can be simple {'\u2014'} a paper log, an EHR template, or a dedicated CCM workflow module {'\u2014'}
                but the discipline must be consistent across every enrolled patient. Time should be recorded
                to the nearest minute. Rounding to 5- or 15-minute blocks is not required by CMS and introduces
                systematic overstatement risk that stands out in an audit. Start and stop times per activity
                are ideal but not always operationally feasible; at minimum, total elapsed time per activity
                and the date must be captured. For more on how this interacts with{' '}
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99490 billing mechanics
                </Link>
                , including add-on codes for additional time increments, see the full billing guide.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The cumulative monthly total is what matters for billing. Time tracking tools should surface
                a running total per patient so clinical staff can see at a glance whether the threshold has
                been reached before month end. Practices that discover most of their enrolled patients are
                at 15 minutes with two days left in the month can intervene with a care plan check-in call
                to reach 20 minutes; practices that lack visibility can only discover the shortfall after
                they have missed the billing window.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Separate patient-specific CCM time from non-patient-specific administrative time. Staff
                meetings about the CCM program, training sessions on documentation, or time spent on
                quality improvement activities for the practice do not count toward any individual patient{'\u2019'}s
                threshold. EHR workflows that attach time entries directly to a patient chart help enforce
                this separation at the point of documentation rather than through after-the-fact review.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                How AI-powered calls interact with the 20-minute rule
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI wellness calls do not themselves count as clinical staff time {'\u2014'} no human clinician
                is conducting the call, so no human minutes are accumulating. What the call produces is a
                structured summary of the patient{'\u2019'}s reported status, medication adherence, and any
                flagged concerns. The clinical value for CCM billing comes in what happens next. Clinical
                staff time spent reviewing the AI call summary counts toward the 20-minute threshold. Time
                spent acting on flagged concerns {'\u2014'} contacting the patient, updating the care plan,
                coordinating with a specialist {'\u2014'} counts. Time spent documenting the outcome of that
                review counts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The practical effect is a redistribution of clinical labor. Without AI calls, a clinical
                staff member must spend time both gathering information (asking the patient how they{'\u2019'}re
                doing, what medications they took, what symptoms they noticed) and then deciding what to do
                with that information. With an AI call generating a pre-structured summary, the clinical
                staff member arrives at the review with the data already organized. Their 20 minutes are
                concentrated on clinical decision-making, care plan updates, and coordination actions rather
                than on data collection. This concentration is what makes it feasible to keep large enrolled
                populations above the monthly threshold consistently. For a comparison of AI-assisted
                coordination against manual in-house approaches, see the{' '}
                <Link
                  href="/solutions/chronic-care-management/vs-in-house-care-coordinators"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CCM AI vs. in-house care coordinators comparison
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Enrolled CCM patients at scale become much easier to maintain at or above the 20-minute
                threshold when every patient receives a monthly AI call that generates a reviewable summary.
                Rather than hoping that clinical staff will initiate outreach across a 200-patient panel,
                the AI call ensures that every patient produces a structured interaction that a staff member
                can review and document efficiently. This systematic coverage is what separates high-performing{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management
                </Link>{' '}
                programs from those that chronically miss the threshold for a significant fraction of their
                enrolled population.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common documentation pitfalls</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most common CCM billing errors at audit are not errors of commission {'\u2014'} they are
                errors of documentation discipline. Practices that train staff carefully and build structured
                workflows can avoid virtually all of the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  Tracking time by activity type but not by patient: CCM time must be patient-specific; a log
                  that records {'\u201c'}medication reconciliation: 45 minutes{'\u201d'} without attributing
                  time to individual patients is unbillable
                </li>
                <li>
                  Rolling up time in 15-minute blocks and rounding inconsistently, creating implausible
                  patterns (every patient at exactly 20, 35, or 50 minutes) that flag statistical review
                </li>
                <li>
                  Documenting {'\u201c'}reviewed chart{'\u201d'} without specifying what was reviewed, what
                  clinical conclusion was reached, or how it relates to the patient{'\u2019'}s ongoing care
                  coordination
                </li>
                <li>
                  Failing to capture the staff identifier for each time entry, making it impossible to verify
                  that the work was performed by qualifying clinical personnel
                </li>
                <li>
                  Including E/M visit time in the CCM monthly total, either by accident or by design
                </li>
                <li>
                  Billing CCM for a month with less than 20 documented minutes {'\u2014'} the most common
                  error, typically caused by missing documentation of activities that did occur
                </li>
                <li>
                  Not reconciling time tracking entries with care plan updates: if the record shows 22 minutes
                  of CCM activity but the care plan has not been touched in 90 days, the documentation is
                  internally inconsistent
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Scaling time discipline across a population
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The operational challenge of the 20-minute requirement changes significantly as enrolled
                patient populations grow. For practices with fewer than 50 CCM-enrolled patients, manual
                tracking {'\u2014'} a spreadsheet or basic EHR template {'\u2014'} is usually sufficient.
                Each clinical staff member knows their patients and can monitor monthly totals informally.
                The risk of threshold misses is low because the practice has enough bandwidth to handle
                each patient individually.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At 50{'\u2013'}200 enrolled patients, EHR dashboard visibility and structured workflow templates
                become essential. Without a real-time view of each patient{'\u2019'}s monthly CCM time
                accumulation, clinical staff cannot prioritize outreach to patients approaching month end
                below the threshold. High-performing CCM programs at this scale build month-end workflows
                that systematically identify patients below 15 minutes with 5{'\u2013'}7 days remaining
                and trigger proactive care plan review calls for those patients specifically.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At 200+ enrolled patients, manual population management breaks down without automation.
                AI-generated call summaries create structured review tasks that scale with the population:
                each patient{'\u2019'}s monthly call produces a summary that takes 2{'\u2013'}5 minutes
                to review, act on, and document. This per-patient efficiency is what enables large CCM
                programs to consistently bill 99490 for 80{'\u2014'}90% of their enrolled panel each month.
                Programs without this systematic coverage routinely miss 30{'\u2013'}50% of enrolled
                patients, leaving substantial reimbursement on the table while still carrying the overhead
                of running the program. See the{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  scaling patient engagement case study
                </Link>{' '}
                for a real-world example of how this plays out across a growing enrolled population.
              </p>

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
                    The 20-minute threshold is cumulative clinical staff time per calendar month {'\u2014'}{' '}
                    non-face-to-face, patient-specific, documented.
                  </li>
                  <li>
                    What counts: care plan work, medication management, patient/caregiver/specialist
                    communication, results review, resource coordination, documentation of the above.
                  </li>
                  <li>
                    What doesn{'\u2019'}t count: E/M visit time, undocumented time, non-CCM tasks, time
                    by staff outside the billing provider{'\u2019'}s supervision.
                  </li>
                  <li>
                    AI-powered calls don{'\u2019'}t count directly but concentrate clinical staff time on
                    decisions and documentation, making the threshold easier to hit reliably.
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-gray-700 leading-relaxed">
                <p>
                  For a complete walkthrough of CCM billing codes and add-on time increments, see the{' '}
                  <Link
                    href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99490 billing guide
                  </Link>
                  . For eligibility questions including the two-condition requirement, see the{' '}
                  <Link
                    href="/solutions/chronic-care-management/2-chronic-conditions-requirement"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CCM 2-chronic-conditions requirement
                  </Link>{' '}
                  and the{' '}
                  <Link
                    href="/solutions/chronic-care-management/faq"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CCM frequently asked questions
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Back to the CCM solution overview
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
