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

const PAGE_URL = 'https://positivecheck.com/solutions/remote-patient-monitoring/patient-selection'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'RPM Patient Selection: Which Patients, Which Conditions, Which Outcomes | Positive Check',
  description:
    'A provider-focused guide to selecting the right patients for Remote Patient Monitoring. CMS eligibility requirements, highest-value chronic conditions, adherence predictors, and which patients NOT to enroll.',
  alternates: { canonical: '/solutions/remote-patient-monitoring/patient-selection' },
  openGraph: {
    title: 'RPM Patient Selection: Which Patients, Which Conditions',
    description: 'CMS eligibility, highest-value chronic conditions, adherence predictors, and which patients NOT to enroll.',
    url: '/solutions/remote-patient-monitoring/patient-selection',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'RPM patient selection' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RPM Patient Selection: Which Patients, Which Conditions',
    description: 'CMS eligibility, highest-value chronic conditions, and adherence predictors.',
    images: [HERO_IMAGE],
  },
}

const faqs = [
  {
    question: 'Does Medicare require a minimum number of chronic conditions for RPM?',
    answer:
      'No. Unlike Chronic Care Management (which requires two or more chronic conditions), RPM requires only one chronic condition whose physiologic data informs care. The provider must document clinical rationale in the chart, but there\u2019s no count threshold.',
  },
  {
    question: 'Can I enroll Medicare Advantage patients in RPM?',
    answer:
      'Yes, though reimbursement rates may differ from traditional Medicare. Most Medicare Advantage plans cover RPM under their contracts, but verify coverage with individual plans. Some plans have additional documentation or pre-authorization requirements.',
  },
  {
    question: 'What patient refusal rate should I expect during RPM enrollment?',
    answer:
      'Industry benchmarks suggest 20\u201340% of eligible patients decline RPM when offered \u2014 reasons include concerns about monitoring, technology discomfort, or cost (if there\u2019s a copay). High-performing programs address these concerns upfront (cost transparency, simplified device walkthroughs, caregiver involvement) and hit 70%+ acceptance rates.',
  },
  {
    question: 'Can I enroll patients with dementia or cognitive impairment in RPM?',
    answer:
      'Yes, when the patient has a consistent caregiver who can assist with device use and engagement. The caregiver can be the designated contact for the 99457 interactive communication. Without caregiver support, enrollment is not recommended \u2014 the patient won\u2019t engage meaningfully with the device or the interactive communication, and RPM won\u2019t improve their care.',
  },
  {
    question: 'How do I transition a TCM patient into an RPM program?',
    answer:
      'TCM covers the 30-day post-discharge window with CPT 99495 or 99496. After the TCM period, patients who would benefit from ongoing monitoring transition into RPM with CPT 99453 (setup), 99454 (device), and 99457/99458 (interactive communication). Document that the TCM episode has concluded and that RPM enrollment is based on the patient\u2019s ongoing chronic condition \u2014 not the recent discharge itself.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Remote Patient Monitoring', url: 'https://positivecheck.com/solutions/remote-patient-monitoring' },
  { name: 'Patient Selection', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'RPM Patient Selection: Which Patients, Which Conditions, Which Outcomes',
  description:
    'A provider-focused guide to selecting the right patients for Remote Patient Monitoring. CMS eligibility requirements, highest-value chronic conditions, adherence predictors, and which patients NOT to enroll.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
})

export default function RPMPatientSelectionPage() {
  return (
    <>
      <StructuredData id="patient-selection-breadcrumb" data={breadcrumb} />
      <StructuredData id="patient-selection-article" data={article} />
      <StructuredData id="patient-selection-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Program design</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                RPM Patient Selection: Which Patients, Which Conditions, Which Outcomes
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Provider guide to selecting the right RPM patients: CMS eligibility, highest-value chronic conditions,
                adherence predictors, and which patients NOT to enroll.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    CMS covers RPM for patients with <strong>one or more chronic conditions</strong> whose physiologic
                    data informs ongoing care \u2014 no minimum number of chronic conditions required (unlike CCM).
                  </li>
                  <li>
                    <strong>Highest-value conditions</strong> for RPM are hypertension, diabetes, heart failure, COPD,
                    and post-surgical recovery \u2014 where actionable daily data changes decisions.
                  </li>
                  <li>
                    <strong>Adherence predictors</strong>: caregiver support, tech comfort, device-friendly environment,
                    and a chronic condition the patient engages with.
                  </li>
                  <li>
                    <strong>Do NOT enroll</strong> patients with severe cognitive impairment (without a caregiver),
                    patients who have declined structured engagement, or patients for whom monitoring would not change
                    clinical decisions.
                  </li>
                  <li>
                    Enrollment is a <strong>clinical decision</strong> backed by documented rationale \u2014 the
                    provider must establish that RPM data improves care for this specific patient.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">CMS eligibility requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS covers{' '}
                <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                  Remote Patient Monitoring
                </Link>{' '}
                for Medicare patients with one or more chronic conditions \u2014 a meaningfully lower bar than the
                two-condition minimum required for Chronic Care Management. This distinction matters: a patient with
                isolated hypertension, a single-diagnosis diabetic, or a post-surgical patient with a known condition
                can all be eligible for RPM under the{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Medicare Physician Fee Schedule
                </a>
                . The provider must document that the patient\u2019s physiologic data \u2014 blood pressure readings,
                glucose values, weight trends, oxygen saturation levels \u2014 will actively inform care management
                decisions. Eligibility is not a checkbox; it is a clinical rationale recorded in the chart.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patient consent is required before RPM services begin. CMS accepts verbal or written consent, but the
                consent must be documented in the medical record with the date it was obtained. The documentation
                should reflect that the patient was informed about what data would be collected, who would have access
                to it, how it would be used in their care, and what communication cadence to expect. Practices that
                enroll patients without documented consent \u2014 or that backfill consent documentation after the
                fact \u2014 are among the most common findings in RPM billing audits.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The patient must also have a connected medical device capable of automatic data transmission.
                Manual self-reporting by the patient \u2014 texting blood pressure numbers or emailing glucose
                readings \u2014 does not satisfy the CPT 99454 device requirement. The device must be capable of
                transmitting data electronically to the clinical system. CPT 99454 further requires at least 16 days
                of device transmission in any 30-day period, so device setup and patient education on consistent use
                are operationally essential, not optional onboarding details.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Highest-value chronic conditions for RPM</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not every chronic condition yields equal clinical or financial value from RPM. The conditions where
                daily physiologic data most directly changes care decisions produce the strongest outcomes and the
                most defensible enrollment rationale. The six highest-value conditions for RPM programs are:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Hypertension</strong> \u2014 daily blood pressure readings drive medication titration
                  decisions between office visits; hypertension is one of the most-billed RPM conditions and among
                  the easiest to justify clinically
                </li>
                <li>
                  <strong>Diabetes</strong> \u2014 glucose trends support insulin and oral-agent adjustments; continuous
                  glucose monitors offer even higher data density for insulin-dependent patients
                </li>
                <li>
                  <strong>Heart failure</strong> \u2014 daily weight and blood pressure changes predict decompensation
                  before the patient becomes symptomatic; RPM-driven early intervention reduces 30-day readmission
                  rates meaningfully
                </li>
                <li>
                  <strong>COPD</strong> \u2014 pulse oximetry trends catch exacerbations early; oxygen saturation
                  thresholds give clinical staff a clear escalation trigger before the patient deteriorates to an
                  emergency level
                </li>
                <li>
                  <strong>Post-surgical recovery</strong> \u2014 short-term monitoring during the high-risk recovery
                  window; combines well with Transitional Care Management and bridges the gap between discharge and
                  stable outpatient follow-up
                </li>
                <li>
                  <strong>Chronic kidney disease</strong> \u2014 blood pressure and weight monitoring support
                  medication adjustments and can inform dialysis timing discussions as the disease progresses
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The strongest RPM programs start with one or two conditions where the care team already has clear
                clinical protocols \u2014 typically hypertension or heart failure \u2014 and expand to additional
                conditions once documentation workflows, device logistics, and patient engagement cadences are
                established. Launching across six conditions simultaneously before the program has proven its
                operational model usually results in inconsistent patient engagement, documentation gaps, and
                under-billing relative to the patient panel enrolled.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Patient characteristics that predict adherence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Physiologic eligibility determines whether a patient can be enrolled; behavioral and situational
                factors determine whether enrollment will produce meaningful outcomes. The characteristics that most
                reliably predict RPM adherence are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>Stable living situation with a consistent place to keep and charge the device</li>
                <li>
                  Caregiver or household member who can assist with initial device setup, troubleshooting, and
                  reminder reinforcement
                </li>
                <li>
                  Some baseline comfort with technology \u2014 even basic smartphone use or experience with
                  automated phone calls predicts better engagement with RPM touchpoints
                </li>
                <li>
                  Patient-expressed interest in monitoring their own condition \u2014 patients who ask questions
                  about their readings, track their own data, or mention checking blood pressure at home are
                  strong candidates
                </li>
                <li>
                  Active engagement with the condition being monitored \u2014 diabetics who already check their
                  glucose, hypertensives who own a home cuff, heart failure patients who weigh themselves daily
                  are primed for the behavior pattern RPM requires
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Demographic predictors are weaker than situational ones. Age alone is a poor predictor of RPM
                adherence. Elderly patients with strong caregiver support and a stable home environment often
                outperform younger patients whose living situations are chaotic, whose engagement with their
                condition is low, or who are managing competing priorities that displace daily device use. Programs
                that screen patients for situational readiness \u2014 rather than using age or diagnosis as the
                only filter \u2014 consistently achieve higher 90-day transmission rates and lower early dropout.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check\u2019s daily wellness calls reinforce adherence by making the device feel connected
                to a real interaction rather than an isolated data collection exercise. Patients who know a call
                is coming that will reference their readings are more likely to take those readings consistently.
                This behavioral link between the interactive communication requirement and device transmission
                compliance is one of the strongest arguments for structured daily outreach in a{' '}
                <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                  Remote Patient Monitoring program
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Patients NOT to enroll in RPM</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appropriate enrollment requires the same clinical judgment as appropriate prescribing. The following
                patient profiles are contraindications for RPM enrollment or require additional safeguards before
                enrollment proceeds:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Severe cognitive impairment without caregiver support</strong> \u2014 device use and data
                  interpretation require patient engagement; a patient who cannot reliably operate the device or
                  respond to interactive communication will not generate useful data, and enrollment creates
                  billing and compliance exposure without clinical benefit
                </li>
                <li>
                  <strong>Patients who decline consent or have voiced reluctance</strong> \u2014 enrolling a
                  reluctant patient creates adversarial engagement; adherence will be poor and the relationship
                  cost exceeds any revenue benefit
                </li>
                <li>
                  <strong>Patients whose physiologic data would not change care decisions</strong> \u2014 document
                  explicitly why RPM is not clinically indicated; the enrollment rationale requirement cuts both ways
                </li>
                <li>
                  <strong>Terminal patients where monitoring adds burden without benefit</strong> \u2014 comfort-focused
                  care goals are better served by palliative or hospice frameworks than daily physiologic tracking
                </li>
                <li>
                  <strong>Patients with recent refusal-of-care histories</strong> \u2014 enrollment in a monitoring
                  program may damage trust with patients who have previously declined clinical interventions or
                  expressed autonomy concerns about surveillance
                </li>
                <li>
                  <strong>Patients already in more intensive monitoring programs</strong> where RPM would add no
                  incremental clinical value \u2014 duplicate enrollment in overlapping programs creates billing
                  complexity without improving care
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The common thread across all contraindications is that RPM enrollment must be a clinical decision,
                not a revenue decision. A patient panel assembled primarily to maximize CPT 99457 billing will
                have poor adherence rates, produce low-quality data, and generate audit risk if the clinical
                rationale does not hold up to scrutiny. Enrollment driven by clinical need and documented
                accordingly produces better outcomes and more defensible billing simultaneously.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Device selection by condition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Device choice should follow the clinical question the RPM program is trying to answer for each
                patient. The standard device-to-condition mappings are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Blood pressure cuff</strong> \u2014 hypertension, congestive heart failure, chronic kidney
                  disease; the most broadly applicable RPM device
                </li>
                <li>
                  <strong>Glucose monitor</strong> \u2014 diabetes; consider continuous glucose monitoring (CGM) for
                  Type 1 and insulin-dependent Type 2 patients where glucose variability is a primary concern
                </li>
                <li>
                  <strong>Pulse oximeter</strong> \u2014 COPD, post-COVID respiratory conditions, pulmonary disease;
                  oxygen saturation trending identifies exacerbations before the patient becomes acutely symptomatic
                </li>
                <li>
                  <strong>Smart scale</strong> \u2014 heart failure, chronic kidney disease; daily weight is the
                  most sensitive early indicator of fluid retention and decompensation
                </li>
                <li>
                  <strong>ECG monitor</strong> \u2014 arrhythmias, post-cardiac event patients; rhythm data
                  supports medication management and reduces unnecessary emergency department visits
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Two non-negotiable device requirements apply regardless of condition. First, the device must be
                FDA-cleared for the physiologic parameter it measures \u2014 consumer wellness devices that have
                not received FDA clearance do not satisfy the CPT 99454 device standard. Second, the device must
                be capable of automatic data transmission to the clinical system; manual entry by the patient
                (logging readings into a portal or texting numbers) does not count. CPT 99454 requires the device
                to transmit data, and it requires at least 16 days of transmission in the 30-day billing period.
                A patient who transmits only 12 days in a given month is not billable under 99454 for that month,
                even if they were adherent the other 18 days.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For more detail on how CPT 99454 and the other RPM billing codes interact with device requirements,
                see the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring/cpt-99457-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99457 billing guide
                </Link>
                {' '}and the{' '}
                <Link
                  href="/solutions/remote-patient-monitoring/interactive-communication-requirement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  interactive communication requirement overview
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Consent and onboarding workflow</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A compliant RPM onboarding workflow moves through five distinct steps, each with a documentation
                requirement. Collapsing or skipping any step creates downstream billing or audit risk.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                First, explain the program to the patient in plain language: what data is collected (blood pressure,
                weight, glucose, etc.), who sees it and when, what the communication cadence will be, and what
                happens when a reading triggers a clinical concern. Patients who understand the program before they
                consent are more likely to remain engaged. Second, document verbal or written consent in the chart
                with the date obtained. If verbal consent is used, note in the record that it was verbal and that
                the patient confirmed understanding of the program.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Third, provide device training. CPT 99453 reimburses this one-time setup and education activity at
                approximately \u007e$19. The training should cover device operation, connectivity confirmation,
                what to do if the device fails to transmit, and who to call for technical issues. Fourth, establish
                the communication cadence with the patient. Positive Check schedules daily wellness calls that
                create consistent touchpoints and reinforce device use \u2014 patients who know a call is coming
                are more likely to have taken their readings beforehand. Fifth, set escalation expectations
                explicitly: who the patient contacts for device issues (technical support), who they contact for
                clinical concerns (practice nursing line or on-call), and what triggers an immediate escalation
                versus a next-business-day follow-up.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Measuring outcomes by patient cohort</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RPM programs that measure outcomes by cohort \u2014 rather than across the entire enrolled panel
                undifferentiated \u2014 can identify which patient archetypes produce the strongest clinical and
                financial return and which require a different intervention model. The most useful cohort-level
                metrics are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Enrollment-to-active ratio</strong> \u2014 percentage of enrolled patients transmitting
                  device data at months 3, 6, and 12; dropout at month 3 is the most common inflection point
                </li>
                <li>
                  <strong>Per-patient revenue captured vs. potential</strong> \u2014 patients who meet eligibility
                  criteria but consistently fall below the 16-day transmission threshold represent unbilled potential;
                  this metric identifies where operational intervention (device replacement, caregiver outreach,
                  education reinforcement) would recover revenue
                </li>
                <li>
                  <strong>Clinical outcomes by cohort</strong> \u2014 blood pressure control rates in hypertension
                  cohort, A1C trends in diabetes cohort, 30-day readmission rates in heart failure cohort; these
                  outcomes are the clinical justification for the program and the most compelling data for payer
                  negotiations and quality reporting
                </li>
                <li>
                  <strong>Caregiver-supported vs. non-supported comparisons</strong> \u2014 programs consistently
                  find that caregiver-supported patients outperform non-supported patients on transmission rates,
                  interactive communication completion, and clinical outcomes; this comparison quantifies the
                  value of caregiver engagement in the enrollment process
                </li>
                <li>
                  <strong>Patient archetypes with strongest RPM ROI</strong> \u2014 combining demographic, situational,
                  and condition data to identify the patient profile that generates the highest combination of
                  adherence, clinical improvement, and revenue per enrolled patient
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cohort-level measurement turns enrollment from a one-time decision into an iterative learning
                process. Programs that track which patient profiles succeed and which do not can refine their
                selection criteria over time, improving both patient outcomes and program economics simultaneously.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Scaling enrollment without losing clinical judgment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The operational challenge of scaling{' '}
                <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                  Remote Patient Monitoring
                </Link>{' '}
                is separating the activities that can be automated from those that require clinical judgment. Device
                setup logistics, daily engagement calls, data transmission monitoring, and documentation generation
                can all be systematized and scaled without clinical involvement at every step. The decision about
                which patients to enroll \u2014 and which not to enroll \u2014 cannot be delegated to automation.
                That decision requires a provider who knows the patient, can assess situational readiness, and can
                document a defensible clinical rationale.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check supports bulk enrollment workflows for practices with large eligible panels, but the
                platform is designed around a per-patient review at onboarding. Automation handles everything that
                happens after enrollment: daily wellness calls, transmission monitoring, documentation, escalation
                routing, and billing support. The clinical gatekeeping role \u2014 deciding who enters the program
                and why \u2014 remains with the provider. This division of labor is what allows programs to scale
                to hundreds of patients without the enrollment quality degradation that occurs when the patient
                selection step is treated as a throughput problem rather than a clinical one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For a real-world illustration of how this model performs at scale, see the{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  scaling patient engagement case study
                </Link>
                . For an overview of the full{' '}
                <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                  RPM solution
                </Link>
                {' '}including how Positive Check integrates with existing EHR and billing workflows, see the
                RPM solution overview.
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
                    CMS requires only one chronic condition for RPM eligibility (unlike CCM\u2019s two-condition
                    minimum).
                  </li>
                  <li>
                    Highest-value conditions are hypertension, diabetes, heart failure, COPD, and post-surgical
                    recovery.
                  </li>
                  <li>
                    Situational factors (caregiver support, stable housing, tech comfort) predict adherence more
                    than demographics.
                  </li>
                  <li>
                    RPM enrollment is a clinical decision \u2014 document rationale; don\u2019t enroll patients where
                    monitoring won\u2019t change care.
                  </li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Back to the RPM solution overview
                </Link>
              </div>
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
