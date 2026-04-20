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

const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/cpt-99495-billing-guide'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CPT 99495 Billing Guide: TCM Requirements & Documentation | Positive Check',
  description:
    'Complete guide to billing CPT 99495 for Transitional Care Management: eligibility, the 2-business-day contact rule, 14-day face-to-face visit, moderate medical decision-making complexity, documentation, and common billing errors.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/cpt-99495-billing-guide' },
  openGraph: {
    title: 'CPT 99495 Billing Guide: TCM Requirements & Documentation',
    description:
      'Eligibility, the 2-business-day contact rule, face-to-face visit, documentation, and common billing errors for CPT 99495.',
    url: '/solutions/post-discharge-follow-up/cpt-99495-billing-guide',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CPT 99495 billing guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPT 99495 Billing Guide: TCM Requirements & Documentation',
    description:
      'Eligibility, the 2-business-day contact rule, face-to-face visit, documentation, and common billing errors for CPT 99495.',
    images: [HERO_IMAGE],
  },
}

const faqs = [
  {
    question: 'Can I bill CPT 99495 if the patient is discharged home on a Friday?',
    answer:
      'Yes. The 2-business-day contact window starts on the first business day after discharge. A Friday discharge means contact must happen by end of business Tuesday (Saturday and Sunday are not business days, and federal holidays are excluded). If Monday is a federal holiday, the deadline pushes to end of business Wednesday.',
  },
  {
    question: 'What\u2019s the difference between the 2-business-day contact and the 14-day face-to-face visit?',
    answer:
      'Both are requirements for billing CPT 99495 but they serve different purposes. The 2-business-day contact is a brief check-in addressing the discharge care plan (medication, symptoms, follow-up awareness) and can be performed by clinical staff under general supervision. The 14-day face-to-face visit is a comprehensive encounter performed by the billing provider (physician or NPP) and typically includes medication reconciliation and complete post-discharge assessment.',
  },
  {
    question: 'Does an AI-powered phone call satisfy the 2-business-day contact rule?',
    answer:
      'Yes, when properly documented. CMS defines the contact as \u201cdirect contact\u201d that addresses the discharge care plan \u2014 it can be telephonic, electronic, or face-to-face. An AI call that captures medication understanding, symptom status, and follow-up awareness, documents the encounter with a structured summary, and escalates concerns to clinical staff satisfies the CMS requirement.',
  },
  {
    question: 'Can I bill CPT 99495 and an office visit E/M code separately?',
    answer:
      'The 14-day face-to-face visit is bundled into the TCM payment and cannot be billed separately. Other E/M services provided after the face-to-face TCM visit (during the 30-day TCM period) can be billed separately if they are distinct services. Preventive and other non-TCM services are also billable separately.',
  },
  {
    question: 'What happens if the patient is readmitted during the 30-day TCM period?',
    answer:
      'Readmission does not automatically disqualify TCM billing, but the service must have been initiated before readmission and the face-to-face visit must occur within the 14-day window as originally planned. If the readmission interrupts care plan delivery, documentation should clearly capture which TCM elements were completed before readmission. Starting a new TCM episode after the second discharge is permissible.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
  { name: 'CPT 99495 Billing Guide', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'CPT 99495 Billing Guide: Transitional Care Management Requirements',
  description: 'Complete guide to billing CPT 99495 for Transitional Care Management: eligibility, the 2-business-day contact rule, 14-day face-to-face visit, moderate medical decision-making complexity, documentation, and common billing errors.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
})

export default function CPT99495BillingGuidePage() {
  return (
    <>
      <StructuredData id="cpt-99495-breadcrumb" data={breadcrumb} />
      <StructuredData id="cpt-99495-article" data={article} />
      <StructuredData id="cpt-99495-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Billing Guide</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99495 Billing Guide: Transitional Care Management Requirements
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Eligibility, the 2-business-day contact rule, the 14-day face-to-face visit,
                documentation standards, and common billing errors for Transitional Care Management.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    CPT 99495 reimburses providers for Transitional Care Management services with{' '}
                    <strong>moderate</strong> medical decision-making complexity \u2014 2026 Medicare national
                    average is approximately $178 per patient per discharge.
                  </li>
                  <li>
                    Two requirements drive billing: a{' '}
                    <strong>direct patient contact within two business days</strong> of discharge, and a{' '}
                    <strong>face-to-face visit within 14 calendar days</strong>.
                  </li>
                  <li>
                    Patient must be discharged to a <strong>community setting</strong> \u2014 home, domiciliary,
                    assisted living. SNF, LTAC, and inpatient rehab discharges are not eligible.
                  </li>
                  <li>
                    Documentation must capture: discharge date, contact date/time, content of contact
                    (medication review, follow-up plan, symptom assessment), face-to-face visit date, and
                    medication reconciliation.
                  </li>
                  <li>
                    AI-powered wellness calls can satisfy the 2-business-day contact requirement as long as
                    the contact is documented, addresses the discharge care plan, and escalates concerns to
                    clinical staff.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What CPT 99495 covers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99495 is the billing code for Transitional Care Management services delivered to patients
                with moderate medical decision-making complexity following a qualifying discharge. It
                bundles together the initial post-discharge contact, care coordination activities, and a
                face-to-face visit into a single billable episode, and it is billed exactly once per
                discharge event. The{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN TCM booklet specifies the 2026 Medicare national average reimbursement at
                  approximately $178 per patient per discharge
                </a>
                , though actual reimbursement varies by geographic locality and payer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 30-day TCM period begins on the discharge date itself. During that window the billing
                provider is responsible for managing the patient\u2019s transition back to the community,
                coordinating follow-up services, and ensuring medication safety. CPT 99495 cannot be billed
                twice for the same discharge, even if the patient is seen multiple times during the 30-day
                window.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99496 is the companion code for high medical decision-making complexity \u2014 it carries
                a higher reimbursement rate and requires a face-to-face visit within 7 calendar days rather
                than 14. Both codes share the same 2-business-day initial contact requirement. CMS updates
                TCM reimbursement rates annually through the Physician Fee Schedule, so practices should
                verify current rates each plan year rather than relying on prior-year figures. For a broader
                look at how TCM fits alongside RPM and CCM, see the{' '}
                <Link href="/solutions/post-discharge-follow-up" className="text-purple-700 underline hover:text-purple-900">post-discharge follow-up solution overview</Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who can bill CPT 99495</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any physician, regardless of specialty, is eligible to bill CPT 99495 as long as the
                patient\u2019s care meets the eligibility requirements. Non-physician practitioners
                \u2014 nurse practitioners, physician assistants, clinical nurse specialists, and certified
                nurse-midwives \u2014 are also authorized to bill TCM services under their own provider
                numbers. The{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN booklet confirms that clinical staff may perform non-face-to-face TCM components
                  under the general supervision of the billing provider
                </a>
                . This means the initial 2-business-day contact can be completed by an RN, MA, or other
                clinical staff member \u2014 it does not have to be the billing physician or NPP.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The billing provider retains overall responsibility for the quality and accuracy of
                documentation and must personally perform the face-to-face visit within the required
                timeframe. When clinical staff perform the initial contact, the billing provider\u2019s
                documentation should reflect that the contact occurred and that they reviewed the
                findings as part of ongoing care coordination. Incident-to billing rules do not apply
                to TCM; each eligible provider bills under their own NPI.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Patient eligibility requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99495 applies to both new and established patients, so a practice does not need
                an existing relationship with the patient prior to the discharge. The qualifying discharge
                settings include: inpatient hospital (acute care), inpatient psychiatric facility,
                inpatient rehabilitation facility, observation status, and partial hospitalization. The
                critical requirement is not where the patient came from but where they are going.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The discharge destination must be a community setting: home, domiciliary, rest home, or
                assisted living facility. Discharge to a skilled nursing facility, long-term acute care
                hospital, inpatient rehabilitation facility, or another inpatient stay does not qualify
                for TCM billing. If a patient is transferred to a SNF following an acute hospital stay,
                TCM cannot be initiated until the patient is subsequently discharged to a community setting
                \u2014 at which point the SNF discharge becomes the qualifying event.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patient consent is required for TCM services but formal written consent is not mandated
                by CMS. Verbal or implied consent through engagement with the care team\u2014such as
                participating in the initial contact call or showing up for the face-to-face visit\u2014is
                acceptable. Practices should document the form of consent obtained, as this may be
                scrutinized during audits.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The 2-business-day contact requirement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The initial contact must occur within two business days of discharge \u2014 this is the
                single hardest requirement to meet consistently at scale, and missing it disqualifies
                the entire TCM episode. The clock starts on the first business day after the discharge
                date; the discharge day itself is not counted. Saturdays, Sundays, and federal holidays
                are excluded from the business-day calculation. For a detailed walkthrough of how to
                count the window across common discharge scenarios, see our guide on{' '}
                <Link
                  href="/solutions/post-discharge-follow-up/post-discharge-contact-timing"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  post-discharge contact timing
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS defines the contact as \u201cdirect contact\u201d that addresses the discharge care
                plan. It can be telephonic, electronic (secure portal message, secure text), or
                face-to-face. The content of the contact matters: it must address the patient\u2019s
                understanding of their medications, awareness of follow-up appointments, and any
                symptom changes since discharge. A purely administrative call to confirm an appointment
                does not satisfy the requirement; the clinical content elements must be present and
                documented. The{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN booklet confirms that clinical staff under general supervision may perform
                  the initial contact
                </a>
                , giving practices flexibility to delegate this touchpoint without involving the billing
                provider directly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The 14-day face-to-face visit requirement</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The face-to-face visit must occur within 14 calendar days of discharge \u2014 not business
                days. Unlike the initial contact, there is no exclusion for weekends or holidays; the
                14-day window runs continuously from the discharge date. The visit must be performed by
                the billing provider \u2014 the physician or NPP who will submit the TCM claim \u2014 and
                it can take place in the office, in the patient\u2019s home, or via telehealth with an
                appropriate billing modifier applied.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The face-to-face visit is a separate and distinct requirement from the 2-business-day
                contact. However, if the billing provider personally performs the initial patient contact
                within two business days as a face-to-face encounter, that visit can satisfy both
                requirements simultaneously \u2014 a useful option for practices with small discharge
                volumes where the provider is directly available. The visit must include a complete
                post-discharge assessment and medication reconciliation; a brief check-in call does not
                meet the threshold.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Readmission during the 30-day TCM period is a common complication. If a patient is
                readmitted to a SNF during the 30-day window, this does not automatically disqualify
                the TCM claim, but documentation must clearly establish that the face-to-face visit
                occurred within the 14-day window prior to any readmission. When a patient is
                readmitted to an acute hospital setting, the original TCM episode effectively ends and
                a new episode may begin following the second discharge.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Moderate medical decision-making complexity</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99495 specifically requires moderate medical decision-making (MDM) complexity;
                its companion code, CPT 99496, requires high complexity and carries a higher
                reimbursement rate along with the tighter 7-day face-to-face window. MDM complexity
                for TCM is assessed using the same framework as standard Evaluation and Management
                (E/M) services, and the 2026 AMA/CMS E/M guideline updates apply. Three factors
                determine complexity: the number and acuity of presenting problems, the amount and
                complexity of data reviewed (labs, records, imaging), and the risk of complications
                or morbidity from management decisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moderate MDM typically applies to patients with two or more chronic conditions,
                undiagnosed new problems requiring additional workup, or prescription drug management
                involving a new or adjusted medication. A patient discharged following an acute MI with
                a new beta-blocker regimen and follow-up echocardiogram ordered meets moderate
                complexity; an elective cholecystectomy patient discharged in stable condition with no
                new medications and a single follow-up appointment may not. When in doubt, document
                the specific factors that support the MDM level \u2014 an auditor cannot infer complexity
                from a diagnosis code alone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Practices sometimes upcode to 99496 when 99495 is the correct code because the higher
                reimbursement is attractive. This is a significant audit risk: if the documentation
                does not clearly support high-complexity MDM, the claim may be downcoded or denied on
                review. Conversely, some straightforward cases genuinely do not rise to moderate
                complexity and should be billed as standard E/M services rather than TCM.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Required documentation elements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Complete, contemporaneous documentation is what separates a billable TCM encounter
                from a denied claim. CMS auditors look for specific data points; missing even one
                \u2014 most commonly the date and time of the initial contact or the specific content
                of that contact \u2014 can result in recoupment. The following elements are required:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>Discharge date and discharging facility</li>
                <li>Date and time of the initial 2-business-day contact</li>
                <li>Description of the contact content: medication review, symptom check, follow-up plan discussion</li>
                <li>Date of the face-to-face visit</li>
                <li>Assessment of medical decision-making complexity</li>
                <li>Medication reconciliation (required before or during the face-to-face visit)</li>
                <li>Any escalations or care plan modifications made during the TCM period</li>
                <li>Identifier or name of the staff member who performed the initial contact</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                The medication reconciliation element catches many practices off guard because it must
                be completed \u2014 not merely initiated \u2014 before or during the face-to-face visit.
                A note that reads \u201cmedication list reviewed\u201d is insufficient; the documentation
                should reflect a comparison of the discharge medication list against the patient\u2019s
                pre-admission regimen and any changes made, with rationale.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AI wellness calls satisfy CMS contact requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS allows telephonic contact to satisfy the 2-business-day requirement, and the
                regulation does not specify that the call must be conducted by a human. What matters
                is that the contact is \u201cdirect,\u201d addresses the discharge care plan, and is
                documented. An AI-powered wellness call that systematically covers medication
                understanding, symptom status, and follow-up appointment awareness meets this
                standard when the encounter is properly recorded. See the full{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  post-discharge follow-up solution overview
                </Link>{' '}
                for how Positive Check structures these calls to capture every required element.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The documentation advantage is significant. Manual calls depend on the staff member
                taking accurate notes during or immediately after the encounter; call quality and
                documentation completeness vary. An AI call produces a structured transcript and a
                summary mapped to CMS-required fields \u2014 discharge date, contact date/time,
                medication topics covered, symptom report, follow-up awareness confirmation \u2014
                automatically. For a direct operational comparison, see our analysis of{' '}
                <Link
                  href="/solutions/post-discharge-follow-up/vs-manual-discharge-outreach"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  AI-powered TCM calls vs. manual discharge outreach
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Real-time escalation is the other operational advantage. When a patient reports a
                concerning symptom or indicates they have not filled a critical prescription, the AI
                call flags the response immediately and alerts the care team. This is faster than
                waiting for a staff member to review call notes at the end of the shift. At high
                discharge volume, automation guarantees that every discharge receives a contact
                attempt within the 2-business-day window \u2014 eliminating the staffing bottleneck
                that is the most common cause of missed TCM opportunities. Providers scaling TCM at
                volume often struggle with documentation consistency; see our case study on{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  scaling patient engagement
                </Link>{' '}
                for a deployment walkthrough.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common CPT 99495 billing errors</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TCM claims are a frequent target in Medicare audits because the documentation
                requirements are specific and the 2-business-day window creates a hard deadline that
                is easy to miss. The following errors account for the majority of denied or recouped
                TCM claims:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>Billing 99495 for a SNF discharge \u2014 only community-setting discharges are eligible</li>
                <li>Missing the 2-business-day window due to weekend/holiday confusion about business-day counting</li>
                <li>Insufficient documentation of the contact content (noting only that a call occurred, not what was discussed)</li>
                <li>Billing 99495 when the case is actually high complexity and should be coded as 99496</li>
                <li>Duplicate TCM billing: submitting more than one TCM claim during the same 30-day period for the same discharge</li>
                <li>Missing the medication reconciliation element or documenting it as \u201cpending\u201d at the time of claim submission</li>
                <li>Billing without a face-to-face visit occurring within 14 calendar days</li>
                <li>Failing to document the specific staff member who performed the initial contact</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When to use CPT 99496 instead</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99496 applies when the patient\u2019s post-discharge care requires high medical
                decision-making complexity. The reimbursement rate is higher than 99495, but so is
                the documentation burden: the face-to-face visit must occur within 7 calendar days
                of discharge rather than 14, and the complexity assessment must clearly support the
                \u201chigh\u201d threshold. Both codes still require the 2-business-day initial
                contact, as the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN booklet confirms
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                High complexity is appropriate when the patient has multiple active, unstable chronic
                diagnoses, medication changes that require close monitoring for adverse effects or
                interactions, or documented high readmission risk factors (prior readmission within
                90 days, poor social support, active substance use, psychiatric comorbidity). A
                patient discharged with newly initiated anticoagulation following a PE, with a prior
                hospital admission in the past six months and limited caregiver support, is a
                reasonable candidate for 99496. An otherwise stable COPD patient with a minor
                exacerbation and no medication changes is not.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When in doubt, code to the level that your documentation actually supports rather
                than the level that yields the higher reimbursement. Auditors apply the same E/M
                complexity framework whether reviewing 99495 or 99496; underdocumented high-complexity
                claims are among the most common TCM audit findings. A well-documented 99495 claim
                is far safer than a thinly documented 99496.
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
                  <li>CPT 99495 reimburses moderate-complexity TCM at approximately $178 per patient per discharge.</li>
                  <li>Two hard requirements: 2-business-day contact and 14-day face-to-face visit.</li>
                  <li>Discharge destination matters \u2014 SNF/LTAC/rehab discharges are not eligible.</li>
                  <li>Documentation of contact content, timing, and medication reconciliation is what makes TCM billable.</li>
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
