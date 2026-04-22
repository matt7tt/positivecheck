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

const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/30-day-readmission-reduction'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'Reducing 30-Day Readmissions: What Works and Where TCM Fits | Positive Check',
  description:
    'A provider-focused guide to reducing 30-day hospital readmissions. Which discharge scenarios carry the highest risk, root causes of avoidable readmissions, evidence-based interventions, and how Transitional Care Management fits a readmission reduction strategy.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/30-day-readmission-reduction' },
  openGraph: {
    title: 'Reducing 30-Day Readmissions: What Works and Where TCM Fits',
    description:
      'Root causes of avoidable readmissions, evidence-based interventions, and how TCM fits a readmission reduction strategy.',
    url: '/solutions/post-discharge-follow-up/30-day-readmission-reduction',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: '30-day readmission reduction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reducing 30-Day Readmissions: What Works and Where TCM Fits',
    description:
      'Root causes, evidence-based interventions, and how TCM fits a readmission reduction strategy.',
    images: [HERO_IMAGE],
  },
}

const faqs = [
  {
    question: 'What\u2019s the current average 30-day readmission rate for Medicare patients?',
    answer:
      'The national all-cause 30-day readmission rate for Medicare fee-for-service patients is approximately 15%, though this varies by condition. Heart failure carries the highest condition-specific rate at roughly 22%. CMS publishes risk-adjusted readmission data in its Hospital Readmissions Reduction Program datasets, which are updated annually.',
  },
  {
    question: 'Which HRRP target conditions have the highest readmission rates?',
    answer:
      'Heart failure consistently shows the highest 30-day readmission rate among HRRP-targeted conditions, followed by pneumonia and COPD. Elective hip/knee arthroplasty (THA/TKA) has the lowest. CMS adjusts for patient risk factors when calculating excess readmission ratios, so hospitals serving sicker populations are not penalized for that alone.',
  },
  {
    question: 'How much financial impact does HRRP have on a typical hospital?',
    answer:
      'HRRP penalties apply to all base Medicare DRG payments \u2014 not just the six targeted conditions \u2014 and can reach 3% of Medicare fee-for-service payments. For a mid-sized hospital with $100M in Medicare payments, a 2% penalty equals $2M annually. Approximately 75% of hospitals receive some penalty in any given year, with the average penalty around 0.7%.',
  },
  {
    question: 'Is TCM the only CMS-reimbursed intervention for readmission reduction?',
    answer:
      "No. TCM covers the 30-day post-discharge episode, but other CMS programs complement it. Chronic Care Management (CCM) provides ongoing monthly care coordination for patients with two or more chronic conditions. Remote Patient Monitoring (RPM) supports devices and daily engagement. Principal Care Management (PCM) covers single-condition management. For the highest-risk patients, a combination often delivers the best outcomes.",
  },
  {
    question: 'What\u2019s the evidence that post-discharge phone calls reduce readmissions?',
    answer:
      'Multiple studies in JAMA, Annals of Internal Medicine, and other peer-reviewed journals show that structured post-discharge contact within 48 hours reduces 30-day readmission rates by 15\u201330% depending on patient population and intervention design. Effect sizes are largest for heart failure and COPD. The critical ingredients are: timing (within 48 hours), structure (medication + symptoms + follow-up check), and documented escalation to clinical staff when concerns surface.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
  { name: 'Reducing 30-Day Readmissions', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'Reducing 30-Day Readmissions: What Works and Where TCM Fits',
  description:
    'A provider-focused guide to reducing 30-day hospital readmissions. Which discharge scenarios carry the highest risk, root causes of avoidable readmissions, evidence-based interventions, and how Transitional Care Management fits a readmission reduction strategy.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
})

export default function ReadmissionReductionPage() {
  return (
    <>
      <StructuredData id="readmission-breadcrumb" data={breadcrumb} />
      <StructuredData id="readmission-article" data={article} />
      <StructuredData id="readmission-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Clinical</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Reducing 30-Day Readmissions: What Works and Where TCM Fits
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Which discharge scenarios carry the highest readmission risk, what drives avoidable
                readmissions, evidence-based interventions, and where Transitional Care Management fits
                a reduction strategy.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    The 30-day post-discharge window is when patients are most vulnerable {'\u2014'} roughly{' '}
                    <strong>15% of Medicare discharges</strong> result in a readmission within 30 days.
                  </li>
                  <li>
                    The{' '}
                    <strong>Hospital Readmissions Reduction Program (HRRP)</strong> penalizes hospitals
                    with higher-than-expected readmission rates across six target conditions {'\u2014'} up to a{' '}
                    <strong>3% reduction in Medicare payments</strong>.
                  </li>
                  <li>
                    Avoidable readmissions most commonly trace to{' '}
                    <strong>medication errors, missed follow-up appointments, and unrecognized clinical
                    deterioration</strong> {'\u2014'} all addressable in the 30-day window.
                  </li>
                  <li>
                    Evidence-based interventions include medication reconciliation, structured follow-up,
                    transitional care management, and proactive patient engagement.
                  </li>
                  <li>
                    <Link href="/resources/glossary/transitional-care-management" className="text-gray-800 underline hover:text-purple-900"><strong>Transitional Care Management (TCM)</strong></Link> is the CMS-reimbursed framework
                    for delivering the 30-day post-discharge intervention at scale.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why 30-day readmissions matter</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A hospital readmission within 30 days is one of the most reliable signals that a care
                transition went wrong. Clinically, readmissions often indicate incomplete discharge
                planning, medication confusion, or a complication that a structured follow-up call could
                have caught in the first critical days at home. The patient who returns to the ED three
                days after discharge with uncontrolled heart failure typically missed a critical window
                for medication adjustment or symptom escalation {'\u2014'} a window that targeted post-discharge
                contact is designed to capture.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The financial stakes for hospitals are equally concrete. The{' '}
                <a
                  href="https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Hospital Readmissions Reduction Program
                </a>{' '}
                reduces base Medicare payments for hospitals with higher-than-expected readmission
                rates {'\u2014'} up to 3% across all Medicare DRG payments, not just those tied to the six
                target conditions. For a hospital receiving $150M in annual Medicare fee-for-service
                payments, a penalty at the 2% level costs $3M per year. Even a modest reduction in
                excess readmissions {'\u2014'} two percentage points at a mid-volume hospital {'\u2014'} can
                translate to seven figures in avoided penalties.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For patients, readmissions compound care disruption, increase out-of-pocket costs, and
                carry real psychological costs: the return to the hospital setting after an already
                difficult acute episode can undermine confidence in recovery and increase caregiver
                burden. Reducing readmissions is not an administrative priority {'\u2014'} it is a direct
                patient outcome.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                The Hospital Readmissions Reduction Program (HRRP)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The HRRP was established by the Affordable Care Act in 2010 and implemented for fiscal
                year 2013. It is one of CMS{'\u2019'}s primary value-based payment mechanisms targeting
                acute care hospitals. The program uses an Excess Readmission Ratio (ERR) for each of
                six target conditions: the ratio of actual readmissions to expected readmissions,
                adjusted for patient risk factors including age, comorbidities, and clinical severity.
                A ratio above 1.0 means the hospital has more readmissions than expected for its
                patient population.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The six conditions currently targeted by the{' '}
                <a
                  href="https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  HRRP program
                </a>{' '}
                are:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 leading-relaxed mb-4">
                <li>Heart attack (AMI)</li>
                <li>Heart failure (HF)</li>
                <li>Pneumonia (PN)</li>
                <li>Chronic obstructive pulmonary disease (COPD)</li>
                <li>Coronary artery bypass graft surgery (CABG)</li>
                <li>Elective total hip/total knee arthroplasty (THA/TKA)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The penalty structure is what makes HRRP financially significant: reductions apply to
                all base Medicare DRG payments {'\u2014'} not just payments associated with the six target
                conditions. A hospital penalized for excess heart failure readmissions sees a payment
                reduction on every Medicare discharge it bills, regardless of diagnosis. The maximum
                penalty is 3%, and approximately 75% of eligible hospitals receive some penalty
                in a typical program year.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Which discharge scenarios carry the highest readmission risk
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not all discharges carry equal risk, and effective readmission reduction programs
                focus resources on the patients most likely to return. Risk stratification at discharge
                is the foundation of any efficient post-discharge follow-up program.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>High-risk primary diagnoses</strong> are the most straightforward risk signal.
                Heart failure carries a <Link href="/resources/glossary/30-day-readmission" className="text-purple-700 underline hover:text-purple-900">30-day readmission</Link> rate exceeding 22% nationally {'\u2014'} the
                highest among HRRP-targeted conditions. COPD, sepsis, and pneumonia also carry
                elevated rates. Patients with these diagnoses should be prioritized for the earliest
                post-discharge contact.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Demographic and social factors</strong> add meaningful risk beyond the
                primary diagnosis. Patients aged 65 and older face higher baseline readmission risk,
                as do dual-eligible patients (Medicare and Medicaid), and patients in Black and
                Hispanic populations where systemic care disparities create gaps in post-discharge
                support. CMS risk-adjusts for most clinical factors in the ERR calculation but does
                not fully account for social determinants of health {'\u2014'} meaning hospitals serving
                high-social-risk populations face structural disadvantages in the penalty calculation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Clinical complexity factors</strong> that predict readmission include multiple
                chronic conditions, polypharmacy (five or more active medications), a prior
                hospitalization within the last 90 days, and low functional status at discharge.
                Patients who required ICU-level care or had a hospital stay longer than seven days
                also carry elevated risk. Mental health comorbidities {'\u2014'} depression, cognitive
                impairment, and active substance use disorders {'\u2014'} are among the most under-recognized
                readmission risk factors; a patient who cannot follow a discharge care plan because
                of cognitive impairment is high risk regardless of the primary diagnosis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Social determinants</strong> drive a meaningful share of readmissions that
                clinical intervention alone cannot prevent. Lack of stable housing, transportation
                barriers to follow-up appointments, food insecurity (particularly relevant for
                diabetic and cardiac patients), and the absence of a caregiver at home all
                independently increase the likelihood of an avoidable return to the hospital.
                Identifying these factors at discharge {'\u2014'} and connecting patients to community
                resources before they leave {'\u2014'} is part of a complete{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  post-discharge follow-up strategy
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                The 30-day post-discharge critical window
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Peak readmission risk is concentrated in the first seven days after discharge, with
                days one through three representing the highest-vulnerability period. This is when
                patients are navigating new medications, recovering from the physical and cognitive
                burden of an acute hospital stay, and often without the monitoring infrastructure
                that existed during their inpatient episode. Understanding the specific risks in each
                part of this window informs how to sequence interventions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                On <strong>day one</strong>, medication confusion is the primary risk. Discharge
                prescriptions are filled (or not), instructions are reviewed without the clinical
                context that made them make sense in the hospital, and patients who felt well enough
                to go home may overestimate their stability. Generic substitutions, dose changes,
                and new medications all create opportunities for error. Logistics also go wrong on
                day one: home health services not set up, equipment not delivered, caregiver
                schedules not confirmed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In <strong>days two through seven</strong>, early complications emerge. Wound issues,
                fluid overload in cardiac patients, early signs of infection, and exacerbation of
                underlying conditions all surface in this window. Missed follow-up appointments
                are also a critical risk: a patient who was supposed to see their PCP on day five
                and did not has lost the clinical touchpoint most likely to catch a deteriorating
                trajectory. CMS{'\u2019'}s 2-business-day contact requirement for Transitional Care
                Management (TCM) is specifically designed to target this highest-risk window. For a
                detailed walkthrough of how to count this window across common discharge scenarios,
                see our guide on{' '}
                <Link
                  href="/solutions/post-discharge-follow-up/post-discharge-contact-timing"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  post-discharge contact timing
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In <strong>days eight through thirty</strong>, the primary driver shifts to disease
                progression in underlying chronic conditions. Patients who have not established
                outpatient follow-up by this point, who have run out of a medication, or who
                developed a complication they attributed to normal recovery are the ones most likely
                to present to the ED rather than calling their care team. The 14-day face-to-face
                visit required for TCM billing is timed to catch this risk before it escalates.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Root causes of avoidable readmissions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most avoidable readmissions can be attributed to a handful of root cause categories.
                Effective reduction programs address all of them rather than optimizing for a single
                intervention.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Medication-related causes</strong> are the most common single driver of
                avoidable readmissions. New medications started at discharge, dose changes to
                existing medications, adherence gaps due to cost or confusion, drug{'\u2013'}drug
                interactions in polypharmacy patients, and generic substitutions that patients do
                not recognize as equivalent {'\u2014'} all are frequent culprits. A patient discharged
                on a new ACE inhibitor who stops taking it after two days because of a cough has
                a preventable decompensation risk.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Follow-up gaps</strong> represent the care coordination failure most directly
                addressable by TCM. A missed post-discharge PCP appointment removes the clinical
                touchpoint most likely to catch early deterioration. A specialist referral that was
                noted in the discharge summary but never scheduled leaves a high-risk patient without
                the monitoring they need. No contact during the highest-risk window {'\u2014'} the first
                48 hours after discharge {'\u2014'} means problems identified by the patient or caregiver
                have nowhere to go.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Unrecognized clinical deterioration</strong> occurs when patients and
                caregivers do not know which symptoms warrant contacting the care team. Heart failure
                patients who gain three pounds overnight and attribute it to what they ate, COPD
                patients who interpret increased shortness of breath as normal fatigue, surgical
                patients who dismiss early wound changes as expected {'\u2014'} all are at elevated risk
                of readmission because they lack the clinical literacy to trigger an escalation.
                Structured post-discharge contact that explicitly asks about red-flag symptoms
                addresses this root cause directly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Care transition errors</strong> compound all other risks. A discharge summary
                not transmitted to the primary care physician means the follow-up visit happens
                without context. A medication list that does not match what the patient was actually
                sent home with creates confusion at the first outpatient encounter. Discrepancies
                in the care plan communicated to the patient versus what the receiving provider sees
                generate conflicting instructions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Social and behavioral factors</strong> close the list. Inability to afford
                medications is a readmission driver that no amount of clinical follow-up can
                compensate for if the prescription is never filled. Lack of transportation makes
                follow-up appointments aspirational rather than actual. Depression after
                hospitalization {'\u2014'} particularly after cardiac events {'\u2014'} reduces adherence to
                care plans and increases the likelihood of symptom underreporting. Cognitive
                impairment, when not identified and accommodated in the discharge plan, makes
                self-management impossible.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Evidence-based interventions for readmission reduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The evidence base for readmission reduction is substantial, but no single
                intervention is sufficient on its own. The most effective programs layer multiple
                evidence-based components, targeting them to the specific risk profile of each
                patient. The following interventions have the strongest evidence in the
                peer-reviewed literature and within CMS program frameworks:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <strong>Medication reconciliation</strong> before discharge and again at the
                  face-to-face follow-up visit, comparing the pre-admission regimen against discharge
                  prescriptions and identifying discrepancies
                </li>
                <li>
                  <strong>Structured post-discharge contact within 48 hours</strong> covering
                  medications, symptoms, and follow-up appointment status {'\u2014'} studies show
                  15{'\u2013'}30% readmission rate reductions when this contact is well-structured
                </li>
                <li>
                  <strong>Early follow-up appointment scheduling</strong>, ideally confirmed before
                  the patient leaves the hospital rather than left to self-scheduling post-discharge
                </li>
                <li>
                  <strong>Patient education with teach-back method</strong> to verify understanding
                  of discharge instructions, medication regimens, and symptom escalation criteria
                  before the patient leaves
                </li>
                <li>
                  <strong>Transitional Care Management (TCM)</strong> with a dedicated care
                  coordinator managing the 30-day post-discharge episode, including both the
                  initial contact and the face-to-face visit
                </li>
                <li>
                  <strong>Remote patient monitoring</strong> for high-risk conditions such as heart
                  failure, where daily weight and blood pressure tracking enables early intervention
                  before clinical deterioration becomes acute
                </li>
                <li>
                  <strong>Home health services</strong> for patients with functional or nursing
                  needs that cannot be managed through outpatient follow-up alone
                </li>
                <li>
                  <strong>Pharmacist-led post-discharge medication review</strong> for
                  complex polypharmacy patients, to identify interactions and adherence barriers
                  that clinical staff may not have time to fully evaluate
                </li>
                <li>
                  <strong>Community health worker outreach</strong> to address social determinants:
                  medication assistance programs, transportation coordination, food access, and
                  caregiver support connections
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Transitional Care Management fits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transitional Care Management is the CMS-reimbursed framework that operationalizes
                the two interventions with the strongest evidence for reducing readmissions:
                structured contact within 48 hours of discharge and a comprehensive face-to-face
                visit within 14 days. TCM reimburses care coordination activities that were
                previously performed but unbilled {'\u2014'} making it both a clinical quality mechanism
                and a revenue opportunity for practices that implement it at scale. See the full{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  post-discharge follow-up solution overview
                </Link>{' '}
                for how Positive Check supports TCM delivery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99495 (moderate medical decision-making complexity) and CPT 99496 (high
                complexity) are the two TCM billing codes. Both require the 2-business-day contact
                and a face-to-face visit; 99496 requires the face-to-face within 7 days rather than
                14, and carries a higher reimbursement rate. For a detailed billing walkthrough,
                see the{' '}
                <Link
                  href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99495 billing guide
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check automates the 2-business-day contact at scale. Rather than relying on
                care coordinators to manually call every patient within the tight business-day
                window, Positive Check{'\u2019'}s AI-powered calls ensure every discharge receives a
                structured contact attempt on time {'\u2014'} covering medications, symptoms, and
                follow-up appointment status, with real-time escalation to clinical staff when
                concerns surface. This eliminates the staffing bottleneck that causes most missed
                TCM opportunities. Providers who have deployed this at volume describe the
                operational shift in our case study on{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  scaling patient engagement
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Measuring readmission reduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The primary metric for readmission reduction programs is the all-cause 30-day
                readmission rate {'\u2014'} what percentage of discharges result in any inpatient
                readmission within 30 days, regardless of diagnosis. This is the most practical
                measure for internal quality improvement purposes because it captures the full
                scope of the problem, not just HRRP-targeted conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For regulatory purposes, the formal CMS measure is the Excess Readmission Ratio
                (ERR) {'\u2014'} actual readmissions divided by expected readmissions, risk-adjusted for
                patient characteristics. The ERR is what drives HRRP penalties. Benchmark data is
                published by CMS through Hospital Compare (now Care Compare), updated annually with
                three-year rolling averages. State hospital associations also publish condition-specific
                readmission benchmarks that are useful for peer comparison.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Secondary metrics that provide operational insight include time-to-readmission
                (earlier readmissions often indicate missed clinical deterioration; later ones
                may reflect inadequate follow-up care), ED visit rates in the 30-day window
                (an ED visit that converts to admission was often preventable), and patient-reported
                outcomes such as symptom burden and care plan confidence at the first follow-up
                contact. One important attribution challenge: TCM and structured follow-up programs
                reduce readmissions in aggregate across a population, but they cannot guarantee a
                readmission-free outcome for any individual patient. The goal is population-level
                improvement, measured over rolling cohorts with adequate sample size to distinguish
                signal from noise. For practices using Positive Check to{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  manage post-discharge follow-up
                </Link>
                , structured call data provides a direct link between contact completion rates and
                readmission outcomes across discharge cohorts.
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
                    30-day readmission reduction is both clinical quality and financial imperative {'\u2014'}
                    HRRP penalties apply to all Medicare DRG payments.
                  </li>
                  <li>
                    The highest-risk window is the first 7 days post-discharge; targeted intervention
                    matters most there.
                  </li>
                  <li>
                    Evidence-based interventions include structured contact within 48 hours, medication
                    reconciliation, early follow-up, and TCM.
                  </li>
                  <li>
                    Transitional Care Management (CPT 99495/99496) is the CMS-reimbursed framework
                    for operationalizing this at scale.
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
