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

const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/cpt-99490-billing-guide'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CPT 99490 Billing Guide: Chronic Care Management Requirements | Positive Check',
  description:
    'Complete guide to billing CPT 99490: the 20-minute clinical staff time threshold, who can furnish CCM services, care plan and consent documentation, how 99439/99487/99489 stack on top, and the common billing errors that cost practices revenue.',
  alternates: { canonical: '/solutions/chronic-care-management/cpt-99490-billing-guide' },
  openGraph: {
    title: 'CPT 99490 Billing Guide: Chronic Care Management Requirements',
    description:
      'The 20-minute clinical staff time threshold, eligibility, documentation, how 99439/99487/99489 stack, and common billing errors.',
    url: '/solutions/chronic-care-management/cpt-99490-billing-guide',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CPT 99490 billing guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPT 99490 Billing Guide: Chronic Care Management Requirements',
    description:
      'The 20-minute clinical staff time threshold, eligibility, documentation, and common billing errors.',
    images: [HERO_IMAGE],
  },
}

const faqs = [
  {
    question: 'If my clinical staff spend exactly 20 minutes on CCM activities, can I bill 99490?',
    answer:
      '20 minutes exactly meets the threshold. CMS\u2019s rule is \u201cat least 20 minutes\u201d per calendar month. At 20 cumulative minutes of clinical staff time on CCM activities, 99490 is billable. At 19 minutes or less, it is not \u2014 no partial billing is permitted.',
  },
  {
    question: 'Does time spent face-to-face with the patient during an E/M visit count toward the 99490 threshold?',
    answer:
      'No. Time spent during an E/M visit is already captured by the E/M code and cannot also be counted toward the CCM 20-minute threshold. CCM time is specifically non-face-to-face care coordination. Time spent before or after the visit reviewing records, updating care plans, or coordinating specialists does count.',
  },
  {
    question: 'Can two different practices bill CCM for the same patient in the same month?',
    answer:
      'No. CMS permits only one provider to bill CCM codes for a given patient per calendar month, even if multiple practices are involved in that patient\u2019s care. Providers should coordinate with each other to determine who is the primary CCM billing provider, typically documented in the care plan.',
  },
  {
    question: 'What if a patient refuses consent for CCM?',
    answer:
      'CCM requires documented patient consent, so without consent the service cannot be billed. The consent conversation should cover what the program involves, the right to stop at any time, cost-sharing implications (there is a Medicare copay), and the single-provider-per-month rule. If a patient declines, the practice can continue providing care but bill standard E/M codes rather than CCM.',
  },
  {
    question: 'Can CCM be billed for patients in assisted living or independent living?',
    answer:
      'Yes. CMS defines community-dwelling patients as those in their home, assisted living, or similar setting \u2014 all eligible for CCM. Patients in skilled nursing facilities, inpatient rehab, or hospice are not eligible because the facility\u2019s per-diem payment already includes care coordination. See the CMS MLN CCM booklet for the full list of excluded settings.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/solutions/chronic-care-management' },
  { name: 'CPT 99490 Billing Guide', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'CPT 99490 Billing Guide: Chronic Care Management Requirements',
  description: 'Complete guide to billing CPT 99490 for Chronic Care Management: the 20-minute clinical staff time threshold, who can furnish CCM services, care plan and consent documentation, how 99439/99487/99489 stack on top, and common billing errors.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
})

export default function CPT99490BillingGuidePage() {
  return (
    <>
      <StructuredData id="cpt-99490-breadcrumb" data={breadcrumb} />
      <StructuredData id="cpt-99490-article" data={article} />
      <StructuredData id="cpt-99490-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Billing Guide</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99490 Billing Guide: Chronic Care Management Requirements
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                The 20-minute clinical staff time threshold, who can furnish CCM services, documentation standards,
                how 99439/99487/99489 stack on top of 99490, and the common errors that cost practices revenue.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    CPT 99490 reimburses the <strong>first 20 minutes</strong> of clinical staff time per calendar
                    month for non-complex Chronic Care Management (approximately $66 Medicare national average).
                  </li>
                  <li>
                    CCM requires <strong>two or more chronic conditions</strong> expected to last at least 12 months
                    and that place the patient at significant risk of death, exacerbation, or decline.
                  </li>
                  <li>
                    The 20-minute threshold is <strong>clinical staff time</strong>, not just patient-facing time{' '}
                    {'\u2014'} care plan updates, medication management, and care coordination all count.
                  </li>
                  <li>
                    Add-on codes: <strong>99439</strong> (each additional 20 min non-complex, up to 2x/month,
                    approximately $48), <strong>99487</strong> (complex CCM 60 min, approximately $144),{' '}
                    <strong>99489</strong> (each additional 30 min complex, approximately $72).
                  </li>
                  <li>
                    Patient <strong>consent is required</strong> (verbal or written, documented in the chart) and
                    only one provider can bill CCM for a given patient per calendar month.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What CPT 99490 covers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 is the foundational billing code for non-complex{' '}
                <Link href="/solutions/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                  Chronic Care Management
                </Link>{' '}
                (CCM). It reimburses the first 20 cumulative minutes of clinical staff time devoted to CCM activities
                in a single calendar month. The 2026 Medicare national average reimbursement is approximately $66
                per patient per month, though actual payment varies by geographic locality and payer contract. For
                current rates, always consult the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN Chronic Care Management Services booklet
                </a>
                {' '}and the applicable Physician Fee Schedule before finalizing ROI projections, as rates
                update annually.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 sits within the broader CCM billing framework alongside add-on codes 99439 (additional
                non-complex time), 99487 (complex CCM), and 99489 (additional complex time). A practice that
                consistently reaches 60 minutes of non-complex CCM per patient per month can bill 99490 plus two
                units of 99439 for total revenue of approximately $162. Unlike Remote Patient Monitoring, which
                rewards device data transmission, CCM rewards care coordination time {'\u2014'} making consistent
                monthly engagement the primary revenue lever.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 is distinct from CPT 99491, which covers CCM personally furnished by a physician or
                non-physician practitioner (rather than clinical staff) for at least 30 minutes. CPT 99491 carries
                a higher rate but is less commonly billed because it requires the billing provider to personally
                perform the time {'\u2014'} not delegate to clinical staff. Most practices default to 99490 for
                the flexibility of using nurses, medical assistants, and care coordinators to satisfy the threshold.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Eligibility {'\u2014'} the two-chronic-conditions requirement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To qualify for CCM billing, a patient must have two or more chronic conditions expected to last at
                least 12 months or until death. Those conditions must also place the patient at significant risk
                of death, acute exacerbation or decompensation, or functional decline. Both criteria must be
                documented in the medical record before CCM services can be billed. For a comprehensive breakdown
                of which diagnoses qualify and how to document the risk threshold, see the full deep-dive on the{' '}
                <Link
                  href="/solutions/chronic-care-management/2-chronic-conditions-requirement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  two-chronic-conditions requirement
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Common qualifying combinations include hypertension plus diabetes, COPD plus heart failure, diabetes
                plus chronic kidney disease (CKD), and atrial fibrillation plus heart failure. CMS does not publish
                an exhaustive list of qualifying diagnoses; the test is whether the conditions are chronic (expected
                to persist) and whether together they create significant clinical risk. A single serious condition
                does not qualify for 99490 {'\u2014'} if a patient has one complex condition, Principal Care
                Management (PCM) may be more appropriate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The chronic conditions must appear in the medical record with clinical documentation supporting
                both their chronicity and their combined risk. A problem list entry alone is generally insufficient
                for audit defense. Practices that enroll patients in CCM without confirming the two-condition
                threshold create recoupment risk across every month of CCM billing for those patients.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The 20-minute clinical staff time threshold</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS requires at least 20 cumulative minutes of clinical staff time on CCM activities per calendar
                month to bill CPT 99490. The threshold is cumulative across the month {'\u2014'} three 7-minute
                interactions total 21 minutes and are billable; a single 25-minute session also meets the threshold.
                There is no requirement that the 20 minutes occur in a single encounter or a single day. For a
                detailed breakdown of which activities count and how to document them, see the full guide on the{' '}
                <Link
                  href="/solutions/chronic-care-management/20-minutes-monthly-requirement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  20-minute monthly requirement
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 19-minute rule is absolute: if cumulative clinical staff time for the month reaches only 19
                minutes, CPT 99490 is not billable that month. No partial billing is permitted. This hard minimum
                is the single most common source of CCM billing errors because practices that rely on staff
                recollection rather than contemporaneous time logs routinely miss the threshold {'\u2014'} or
                incorrectly assume they have met it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What counts toward the 20-minute threshold: care plan development and updates, medication
                management, patient and caregiver communication, coordination with other treating providers,
                coordination with community resources, and review of test results in the context of CCM activities.
                What does not count: time spent during a face-to-face E/M visit (those minutes are captured by the
                E/M code), time spent on non-CCM tasks, and time that is not documented with date, duration, and
                content of the activity.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who can furnish CCM services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 can be billed by physicians of any specialty and by non-physician practitioners (NPPs)
                including nurse practitioners, physician assistants, clinical nurse specialists, and certified
                nurse-midwives. CMS also permits clinical staff {'\u2014'} registered nurses, licensed practical
                nurses, and medical assistants {'\u2014'} to furnish CCM services under the general supervision of
                the billing provider. This means the billing physician or NPP does not need to be present for every
                patient interaction; they establish care protocols and review outcomes, while clinical staff handles
                care plan updates, phone check-ins, and coordination calls.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Only one billing provider can furnish and bill CCM for a given patient per calendar month. If a
                patient sees both a primary care physician and a cardiologist who both provide CCM-like services
                in the same month, only one of those practices can bill 99490. The billing provider is typically
                whoever has primary responsibility for the patient{'\u2019'}s overall care coordination, and that
                designation should be documented in the care plan. Multiple practice sites can collaborate on
                care, but the billing rights for that month belong to one provider.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI-powered wellness calls can support clinical staff in delivering CCM services, but the AI call
                itself does not constitute clinical staff time under CMS guidance. The value of AI calls in a CCM
                program is that they make the time clinical staff do spend more productive {'\u2014'} generating
                structured summaries that clinical staff review, act on, and document, with that review and action
                time counting toward the 20-minute threshold. See the{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CCM solution overview
                </Link>{' '}
                for how Positive Check structures this workflow.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Required documentation elements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99490 documentation must establish that every component of the billing requirement was met.
                CMS auditors look for specific data points, and a missing element {'\u2014'} most commonly the
                patient consent record or a cumulative time log {'\u2014'} can result in claim denial or
                recoupment. The following elements are required for each billing month:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>Patient consent (verbal or written), including that only one provider bills CCM per month and that there is cost-sharing</li>
                <li>Comprehensive care plan accessible 24/7 to the care team</li>
                <li>Cumulative clinical staff time for the month</li>
                <li>Date, duration, and content of each CCM activity</li>
                <li>Descriptions of medication management, specialist coordination, and patient communication</li>
                <li>Any care plan updates or escalations made during the month</li>
                <li>Staff identifier(s) who performed the work</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                The consent requirement is a prerequisite for all CCM billing, not just 99490. An audit that finds
                missing consent documentation can disqualify all CCM billing for that patient from enrollment
                forward. Verbal consent is acceptable under CMS rules, but the record must reflect that consent
                was obtained, on what date, and in what form. Written consent, while not mandated, significantly
                simplifies audit defense. Practices that inherited CCM patients from a prior vendor or care manager
                should audit consent documentation before assuming prior-period claims are defensible.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How CPT 99439, 99487, and 99489 stack on 99490</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99439 is the add-on code for each additional 20 minutes of non-complex CCM clinical staff time
                in the same calendar month, reimbursing approximately $48 per unit. It can be billed up to twice
                per patient per month, corresponding to minutes 21{'\u2013'}40 (first 99439) and minutes 41{'\u2013'}60
                (second 99439). A practice that consistently reaches 60 cumulative minutes of non-complex CCM
                per patient per month bills 99490 plus two units of 99439, for total revenue of approximately
                $162. Every additional 20 minutes beyond the initial threshold represents a clear, trackable
                billing opportunity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99487 covers complex CCM {'\u2014'} a higher-intensity service requiring at least 60 minutes
                of clinical staff time and substantial revision to the care plan for patients with moderate-to-high
                complexity medical decision-making. The 2026 national average is approximately $144. CPT 99489 is
                the add-on for each additional 30 minutes of complex CCM, at approximately $72. Crucially, a
                patient is billed as either non-complex (99490 framework) or complex (99487 framework) in a given
                month {'\u2014'} not both. The two frameworks are mutually exclusive within a single calendar month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Determining which framework applies in a given month depends on the patient{'\u2019'}s current
                complexity and care needs, not a static designation. A patient enrolled in 99490 who experiences
                an acute exacerbation requiring substantial care plan revision in a given month may legitimately
                be billed under 99487 that month. The decision must be documented with the rationale for the
                complexity designation. For more on which patients qualify for complex CCM, see the{' '}
                <Link
                  href="/solutions/chronic-care-management/2-chronic-conditions-requirement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  two-chronic-conditions requirement deep-dive
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AI-powered calls support CCM billing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI wellness calls generate structured summaries of patient status, medication adherence, symptom
                changes, and care plan compliance. When clinical staff review these summaries, update care plans
                based on the findings, and coordinate escalations for patients who report concerning changes, that
                clinical staff time counts toward the 20-minute CCM threshold. The AI call itself does not count
                as clinical staff time, but it makes the minutes that clinical staff do spend substantially more
                productive: rather than spending time on routine data collection, staff time goes toward analysis,
                care plan updates, and coordination {'\u2014'} exactly the activities CMS intends CCM to support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The practical effect of AI-assisted CCM is that the 20-minute threshold becomes easier to hit
                reliably across a large enrolled population. Manual outreach programs struggle with consistent
                monthly engagement at scale {'\u2014'} staff capacity limits mean some patients are contacted
                less frequently than the program intends, and the 20-minute threshold is missed more often. An
                AI call program ensures every patient is contacted every month, with a structured clinical
                summary produced for clinical staff review regardless of staffing variability. See the{' '}
                <Link
                  href="/solutions/chronic-care-management/vs-in-house-care-coordinators"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CCM AI vs. in-house care coordinators comparison
                </Link>{' '}
                for a direct cost and throughput analysis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Documentation consistency is the other key advantage. AI calls produce a standardized clinical
                summary for every patient interaction, with timestamps and content mapped to the documentation
                fields required for CCM billing. Clinical staff reviewing and acting on these summaries generate
                additional documentation that directly supports the cumulative time log. Practices that use AI
                calls to anchor their CCM workflow consistently report fewer documentation gaps on audit compared
                to programs that rely entirely on manual call notes. For a deployment walkthrough, see the{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management solution overview
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common CPT 99490 billing errors</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CCM claims are increasingly scrutinized in Medicare audits as enrollment grows. CPT 99490 errors
                tend to be systemic {'\u2014'} affecting many patients simultaneously {'\u2014'} because they
                stem from practice-wide documentation or workflow problems rather than isolated case mistakes.
                The following errors account for the majority of denied or recouped 99490 claims:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>Billing when cumulative clinical staff time is below 20 minutes (most common error)</li>
                <li>Counting time spent during an E/M visit toward the CCM threshold (those minutes are already billed under the E/M)</li>
                <li>Missing or undocumented patient consent</li>
                <li>Two providers billing CCM for the same patient in the same month (only one can)</li>
                <li>Mixing non-complex (99490) and complex (99487) billing in the same month for the same patient</li>
                <li>Billing CCM for patients in inpatient, SNF, inpatient rehab, or hospice settings (excluded by CMS)</li>
                <li>Insufficient care plan documentation {'\u2014'} the plan must be comprehensive, not a single diagnosis line</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                The inpatient/facility exclusion catches practices off guard when patients cycle through hospitalizations
                or post-acute care. CCM cannot be billed for months in which a patient is in an inpatient, skilled
                nursing facility, inpatient rehabilitation, or hospice setting, because the facility{'\u2019'}s
                per-diem payment already includes care coordination. Practices that automate CCM billing without
                tracking patient care setting in real time are at elevated audit risk. A brief hospitalization
                mid-month does not automatically disqualify the entire month{'\u2019'}s CCM billing, but the
                practice must be prepared to show that the billed CCM activities occurred while the patient was
                in the community.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Combining CCM with RPM, TCM, and PCM</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS permits CCM to be billed concurrently with Remote Patient Monitoring (RPM), Transitional
                Care Management (TCM), and Principal Care Management (PCM) for the same patient when the services
                are distinct and documented separately. This concurrent billing capability is a meaningful revenue
                opportunity: a patient with multiple chronic conditions who has recently been discharged may
                legitimately receive TCM, CCM, and RPM services simultaneously, each generating its own
                reimbursement. For a deployment example of this multi-program model, see the{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  scaling patient engagement case study
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most important constraint is that the same minute cannot be counted toward two programs.
                A 15-minute call that covers both CCM care coordination and RPM device data review must have
                the time allocated to one program per the primary purpose of the interaction. Practices that
                document a single undifferentiated note crediting the same time to both CCM and RPM create audit
                risk for both programs. The documentation must be clear about what program each block of time
                supports. A common practice pattern is to have CCM calls and RPM interactive communication calls
                scheduled separately with distinct documentation, rather than trying to combine them.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CCM and PCM are generally mutually exclusive for the same patient in the same period. PCM is
                designed for patients with a single complex chronic condition who need intensive management focused
                on that one condition {'\u2014'} it is not appropriate for patients who qualify for CCM{'\u2019'}s
                two-or-more-conditions threshold. TCM and CCM stack well in sequence: TCM covers the 30-day
                post-discharge window with intensive transitional services, and then CCM picks up ongoing
                multi-condition coordination once the patient is stabilized in the community. See the{' '}
                <Link
                  href="/solutions/chronic-care-management/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CCM frequently asked questions
                </Link>{' '}
                for more on how these programs interact.
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
                  <li>CPT 99490 reimburses the first 20 minutes of non-complex CCM clinical staff time per month at approximately $66.</li>
                  <li>Time is cumulative across the calendar month; it must be non-face-to-face and specifically CCM-related.</li>
                  <li>Add-on codes (99439 non-complex, 99487/99489 complex) stack {'\u2014'} up to approximately $162 combined for a high-time non-complex CCM month.</li>
                  <li>Consent, care plan, and single-provider-per-month rules are what separate billable CCM from unbillable time.</li>
                </ul>
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
