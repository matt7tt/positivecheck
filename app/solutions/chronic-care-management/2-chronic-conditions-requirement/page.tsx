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

const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/2-chronic-conditions-requirement'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CCM\u2019s 2-Chronic-Conditions Requirement: Eligibility and Documentation | Positive Check',
  description:
    'Exact CMS rules for the two-chronic-conditions eligibility requirement that underpins Chronic Care Management billing. What qualifies, how CCM differs from RPM (1 condition) and PCM (1 condition), common qualifying combinations, and documentation expectations.',
  alternates: { canonical: '/solutions/chronic-care-management/2-chronic-conditions-requirement' },
  openGraph: {
    title: 'CCM 2-Chronic-Conditions Requirement: Eligibility and Documentation',
    description:
      'What qualifies, how CCM differs from RPM and PCM, common qualifying combinations, and documentation expectations.',
    url: '/solutions/chronic-care-management/2-chronic-conditions-requirement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CCM 2-chronic-conditions requirement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCM 2-Chronic-Conditions Requirement: Eligibility and Documentation',
    description:
      'What qualifies, how CCM differs from RPM and PCM, and documentation expectations.',
    images: [HERO_IMAGE],
  },
}

const faqs = [
  {
    question: 'Does a single worsening chronic condition count as two for CCM eligibility?',
    answer:
      'No. CMS requires two distinct chronic conditions, not two stages or complications of the same condition. For example, Type 2 diabetes with neuropathy is still one condition for CCM purposes \u2014 the diabetes and its complication are part of the same clinical entity. Adding a separate qualifying condition (hypertension, depression, CKD, etc.) is what creates CCM eligibility.',
  },
  {
    question: 'Can a behavioral health condition serve as one of the two chronic conditions?',
    answer:
      'Yes. CMS explicitly permits mental health conditions (major depression, anxiety disorders, bipolar disorder, substance use disorders, etc.) to count toward CCM eligibility when they meet the 12-month-duration and significant-risk criteria. Many high-value CCM programs pair behavioral health with a medical chronic condition to support whole-person care.',
  },
  {
    question: 'What if a patient\u2019s second chronic condition is newly diagnosed?',
    answer:
      'A newly diagnosed condition qualifies when the clinician documents it as expected to last 12+ months \u2014 which is true of most chronic conditions at diagnosis (diabetes, hypertension, COPD, CHF, depression). The patient becomes CCM-eligible once the second qualifying diagnosis is documented in the record along with clinical rationale for ongoing care coordination.',
  },
  {
    question: 'Can a patient be enrolled in both RPM and CCM based on overlapping conditions?',
    answer:
      'Yes. CMS permits RPM and CCM concurrently for the same patient when the services are distinct and documented separately. A common pattern: a patient with hypertension and diabetes has RPM covering their home BP readings and glucose transmissions, while CCM covers broader care plan coordination, specialist communication, and medication management beyond what RPM captures.',
  },
  {
    question: 'Does the diagnosis coding need to match specific ICD-10 codes for CCM?',
    answer:
      'CMS does not publish a closed list of qualifying ICD-10 codes. The clinical determination rests on the physician: does this condition meet the duration (12+ months) and risk (death, exacerbation, or functional decline) criteria? Document the clinical reasoning in the CCM care plan and support it with problem-list entries, recent notes, labs, or specialist correspondence as appropriate.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/solutions/chronic-care-management' },
  { name: 'The 2-Chronic-Conditions Requirement', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: "CCM's 2-Chronic-Conditions Requirement: Eligibility and Documentation",
  description: 'Exact CMS rules for the two-chronic-conditions eligibility requirement that underpins Chronic Care Management billing.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
})

export default function CCMTwoChronicConditionsPage() {
  return (
    <>
      <StructuredData id="ccm-conditions-breadcrumb" data={breadcrumb} />
      <StructuredData id="ccm-conditions-article" data={article} />
      <StructuredData id="ccm-conditions-faq" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Eligibility</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CCM{'\u2019'}s 2-Chronic-Conditions Requirement: Eligibility and Documentation
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                The CMS rule that defines Chronic Care Management eligibility: two or more chronic conditions
                expected to last at least 12 months. What qualifies, how CCM differs from RPM and PCM, and what
                documentation a practice needs at audit.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    CCM requires <strong>two or more chronic conditions</strong> expected to last at least 12 months
                    (or until death) and placing the patient at significant risk of death, exacerbation, or functional
                    decline.
                  </li>
                  <li>
                    This is the single biggest eligibility distinction between CCM and other CMS programs:{' '}
                    <strong>RPM requires only one chronic condition</strong>, and{' '}
                    <strong>PCM is specifically for a single high-risk condition</strong>.
                  </li>
                  <li>
                    {'\u201c'}Chronic condition{'\u201d'} is broadly defined {'\u2014'} diabetes, hypertension, COPD,
                    heart failure, CKD, cancer, dementia, depression, and more all qualify.
                  </li>
                  <li>
                    Documentation must establish both the <strong>two-condition count</strong> and the{' '}
                    <strong>clinical rationale</strong> for ongoing care coordination.
                  </li>
                  <li>
                    Patients with only one qualifying chronic condition should be evaluated for{' '}
                    <strong>RPM or PCM</strong> rather than CCM.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The exact CMS rule</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS requires two or more chronic conditions expected to last at least 12 months, or until the death
                of the patient, that place the patient at significant risk of death, acute
                exacerbation/decompensation, or functional decline. Both the duration threshold and the risk
                criterion must be met simultaneously {'\u2014'} a long-lasting but clinically stable condition
                that poses no significant risk does not satisfy the rule on its own. The definition comes directly
                from the CMS Medicare Physician Fee Schedule and is explained in detail in the{' '}
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
                Two conditions must be documented in the medical record with supporting clinical notes. Diagnosis
                codes alone are insufficient without accompanying documentation that demonstrates the nature,
                chronicity, and risk profile of each condition. A problem list entry that simply lists
                {'\u201c'}hypertension{'\u201d'} without any supporting clinical context provides weak audit
                protection. The record must tell the story of why this patient requires ongoing, coordinated
                management across multiple conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The risk language {'\u2014'} significant risk of death, exacerbation, or functional decline {'\u2014'}
                is intentionally broad. CMS does not require a patient to be at imminent risk. Rather, the
                combination of chronic conditions must create a clinical picture where, without coordinated
                management, the patient is at meaningful risk of a negative health outcome. For most patients with
                two or more well-established chronic conditions (hypertension plus diabetes, COPD plus heart
                failure), this threshold is readily met and documented in routine clinical notes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What counts as a {'\u201c'}chronic condition{'\u201d'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CMS does not publish a closed enumerated list of qualifying conditions. The determination is
                clinical: does this condition meet the duration criterion (expected to last 12+ months or until
                death) and contribute to the patient{'\u2019'}s significant risk profile? In practice, the
                following categories and examples are routinely accepted across{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management
                </Link>{' '}
                programs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Cardiovascular:</strong> hypertension, heart failure, coronary artery disease, atrial
                  fibrillation
                </li>
                <li>
                  <strong>Endocrine/metabolic:</strong> diabetes (Type 1 or Type 2), obesity (when medically
                  managed), thyroid disease
                </li>
                <li>
                  <strong>Pulmonary:</strong> COPD, asthma, pulmonary fibrosis, sleep apnea
                </li>
                <li>
                  <strong>Renal:</strong> chronic kidney disease (any stage), end-stage renal disease
                </li>
                <li>
                  <strong>Oncology:</strong> cancer (during active treatment or survivorship follow-up)
                </li>
                <li>
                  <strong>Neurological/cognitive:</strong> dementia, Parkinson{'\u2019'}s disease, multiple
                  sclerosis, stroke history
                </li>
                <li>
                  <strong>Behavioral health:</strong> major depression, anxiety disorders, bipolar disorder
                </li>
                <li>
                  <strong>Gastrointestinal:</strong> inflammatory bowel disease, cirrhosis, chronic pancreatitis
                </li>
                <li>
                  <strong>Musculoskeletal:</strong> rheumatoid arthritis, osteoporosis with fracture history
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because CMS does not publish a closed list, physicians make the clinical determination based on the
                duration and risk criteria. This gives practices meaningful flexibility {'\u2014'} a patient with
                chronic fatigue syndrome or fibromyalgia that is well-documented, expected to persist, and creating
                significant functional risk can qualify, provided the clinical record supports that determination.
                The documentation burden is on the practice to establish that criteria were met, not on CMS to
                confirm that a specific condition appears on an approved list.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                How CCM differs from RPM and PCM on eligibility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The two-condition requirement is the most important way CCM differs from the other major CMS
                care management programs. Understanding the distinction helps practices route patients to the
                right program and avoid billing errors that arise from applying CCM criteria to patients who
                qualify only for a different program.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>CCM (CPT 99490/99439/99487/99489):</strong> Two or more chronic conditions, ongoing
                  coordination, either non-complex or complex tracks based on time and care plan complexity.
                </li>
                <li>
                  <strong>RPM (CPT 99453/99454/99457/99458):</strong> One or more chronic conditions where
                  physiologic data collected by a device informs ongoing care. See the full{' '}
                  <Link
                    href="/solutions/remote-patient-monitoring"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Remote Patient Monitoring overview
                  </Link>{' '}
                  for eligibility details.
                </li>
                <li>
                  <strong>PCM (CPT 99424{'\u2013'}99427):</strong> One high-risk chronic condition requiring
                  intensive, focused management. PCM is specifically designed for a single complex condition,
                  not multi-condition coordination.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The same patient can be enrolled in both RPM and CCM concurrently, provided the services are
                distinct and documented separately. A patient with hypertension and diabetes might have RPM
                covering their home blood pressure and glucose device transmissions, while CCM covers broader
                care plan coordination, specialist communication, and medication management across both
                conditions. The key constraint is that the same minute of clinical staff time cannot be counted
                toward both programs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PCM and CCM are generally mutually exclusive for the same patient in the same month. PCM{'\u2019'}s
                design intent is intensive focus on one condition {'\u2014'} if a patient has two or more qualifying
                chronic conditions, CCM is the more appropriate program. Billing both PCM and CCM for the same
                patient in the same month raises audit flags and should be avoided unless there is a clearly
                documented clinical rationale for why each service is distinct.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common qualifying combinations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While the qualifying conditions list is open-ended, a handful of combination patterns account
                for the majority of CCM enrollment across primary care and multispecialty practices. Understanding
                these high-volume combinations helps practices identify their existing patient panel{'\u2019'}s
                CCM eligibility efficiently.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Hypertension + Diabetes</strong> {'\u2014'} the most common CCM combination in primary
                  care; highly manageable with structured monthly touchpoints and medication adherence monitoring.
                </li>
                <li>
                  <strong>COPD + Heart Failure</strong> {'\u2014'} both are exacerbation-prone; structured
                  monitoring and early symptom detection can prevent costly hospitalizations.
                </li>
                <li>
                  <strong>Diabetes + CKD</strong> {'\u2014'} medication management is complex given renal dosing
                  adjustments; coordination across endocrinology and nephrology is clinically critical.
                </li>
                <li>
                  <strong>Dementia + Any Medical Chronic Condition</strong> {'\u2014'} caregiver coordination,
                  medication management, and safety planning drive significant value in this population.
                </li>
                <li>
                  <strong>Depression + Chronic Pain</strong> {'\u2014'} behavioral health integration with medical
                  care is a documented gap; CCM provides structured coordination across these domains.
                </li>
                <li>
                  <strong>Heart Failure + Diabetes</strong> {'\u2014'} fluid management and glycemic control are
                  clinically intertwined; medication adjustments for one condition often affect the other.
                </li>
                <li>
                  <strong>Any Cancer + Metabolic or Cardiovascular Comorbidity</strong> {'\u2014'} treatment
                  side-effect management frequently requires close coordination with the primary care team.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Practices reviewing their panel for CCM eligibility should start with patients who have two or
                more of these conditions already documented in their problem list and who have had recent
                specialist involvement or medication changes. These patients typically have the highest care
                coordination burden and the clearest CCM eligibility documentation.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Documentation that establishes eligibility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CCM eligibility is established in the medical record before the first billable month of service.
                CMS auditors look for a coherent evidentiary chain that confirms both the qualifying conditions
                and the clinical rationale for ongoing care coordination. The following elements are required
                at enrollment and should be maintained throughout the CCM program:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  Current problem list includes at least two qualifying chronic conditions with ICD-10 codes and
                  supporting clinical context.
                </li>
                <li>
                  Each condition has supporting clinical documentation {'\u2014'} recent visit notes, lab results,
                  imaging, or specialist correspondence that corroborates the diagnosis and its chronicity.
                </li>
                <li>
                  Expected duration clearly implies 12+ months, either by the nature of the condition (most
                  diagnoses of diabetes, hypertension, COPD, or CKD are understood to be permanent) or by
                  documented progression that makes short-term resolution implausible.
                </li>
                <li>
                  Risk statement in the CCM care plan: a clinical narrative explaining why ongoing coordination
                  is necessary for this specific patient given their combination of conditions.
                </li>
                <li>
                  Patient consent to CCM services documented before the first billing month, including
                  acknowledgment of cost-sharing and the single-provider-per-month rule.
                </li>
                <li>
                  Care plan explicitly references the qualifying conditions and describes the coordination
                  activities that CCM will provide for each.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                A common audit vulnerability is care plans that are generic rather than patient-specific.
                A plan that reads {'\u201c'}patient has hypertension and diabetes; will monitor and coordinate
                care{'\u201d'} without specifying what monitoring activities, what coordination across which
                providers, or what the clinical goals are is insufficient. The care plan must be comprehensive
                enough that a different clinician reviewing it would understand exactly what ongoing coordination
                looks like for this patient.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Edge cases and gray zones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most patients with two well-established chronic conditions present straightforward eligibility
                determinations. A smaller subset of patients require more careful clinical judgment about whether
                the two-condition threshold is genuinely met.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>One active condition + one resolved or controlled condition:</strong> A patient whose
                  second condition is truly quiescent {'\u2014'} controlled to the point where it poses no
                  meaningful ongoing risk {'\u2014'} may not satisfy the significant-risk criterion. The clinical
                  documentation should address this explicitly if the condition appears well-controlled.
                </li>
                <li>
                  <strong>Newly diagnosed condition:</strong> CCM eligibility begins when the expected-to-last-12-months
                  criterion is met {'\u2014'} typically immediately at diagnosis for conditions like diabetes,
                  hypertension, CHF, or COPD. The practice does not need to wait 12 months after diagnosis.
                </li>
                <li>
                  <strong>Functional decline without a specific chronic condition label:</strong> Frailty or
                  generalized functional decline alone is insufficient. The risk must be tied to documented
                  chronic diagnoses. The chronic conditions are the anchor for CCM eligibility.
                </li>
                <li>
                  <strong>Mental health conditions as one of the two:</strong> CMS permits this explicitly when
                  the behavioral health condition is appropriately documented with duration and risk criteria.
                  Practices should ensure the behavioral health documentation is as robust as the medical
                  condition documentation.
                </li>
                <li>
                  <strong>Substance use disorders:</strong> Qualify when ongoing management is clinically indicated
                  and the condition meets the duration and risk thresholds. Medication-assisted treatment programs
                  (for opioid use disorder, for example) typically meet the standard when combined with a
                  second chronic condition.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                In gray-zone cases, the standard practice recommendation is to document the clinical reasoning
                explicitly in the care plan and in the enrollment note. An auditor reviewing a borderline case
                is looking for evidence that a clinician made a thoughtful determination {'\u2014'} not that
                the condition appears on a preapproved list. The documentation of reasoning is as important
                as the documentation of the conditions themselves.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                When the patient doesn{'\u2019'}t meet the 2-condition threshold
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A patient with one qualifying chronic condition is not eligible for CCM, but may be a strong
                candidate for other CMS care management programs. Practices that evaluate patients for CCM
                and find they fall short of the two-condition requirement should not simply forgo care
                management revenue {'\u2014'} they should route the patient to the appropriate alternative.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed mb-4">
                <li>
                  <strong>Single chronic condition with actionable physiologic data</strong> {'\u2014'} consider{' '}
                  Remote Patient Monitoring (CPT 99453/99454/99457/99458) as the primary program.
                </li>
                <li>
                  <strong>Single high-risk chronic condition requiring intensive focused management</strong>{' '}
                  {'\u2014'} consider Principal Care Management (CPT 99424{'\u2013'}99427), which is designed
                  specifically for this scenario.
                </li>
                <li>
                  <strong>Neither CCM nor RPM nor PCM appropriate</strong> {'\u2014'} standard E/M care
                  coordination remains available; document the clinical rationale for the program choice.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Documentation of the routing decision protects the practice if the billing choice is later
                reviewed. A note in the patient record explaining that CCM was considered and not selected
                because the patient has only one qualifying condition, and that PCM was initiated instead,
                provides clear audit trail. For a full walkthrough of CCM billing codes and stacking rules,
                see the{' '}
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99490 billing guide
                </Link>
                . For additional eligibility questions, see the{' '}
                <Link
                  href="/solutions/chronic-care-management/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CCM frequently asked questions
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                How AI-powered engagement supports 2-condition CCM patients
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Patients who meet the two-condition threshold typically have 3{'\u2013'}7 medications and multiple
                specialist touchpoints per year. Their care coordination needs span at least two distinct clinical
                domains, and the interactions between conditions {'\u2014'} glycemic control affecting kidney
                function, fluid management affecting blood pressure, medication side effects overlapping across
                conditions {'\u2014'} require active monitoring rather than passive follow-up. This is exactly
                the patient population where structured monthly engagement delivers the most clinical and
                financial value under{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI wellness calls monitor medication adherence across conditions, catch symptom changes that
                could indicate exacerbation, and flag potential interactions in a way that is difficult to
                sustain at scale with manual outreach. Structured summaries produced by each call help clinical
                staff update care plans efficiently, covering both conditions without siloing the documentation
                into two separate workflows. A diabetes plus hypertension patient whose AI call flags a missed
                metformin dose and a home BP reading above 150/95 triggers a single care-plan update that
                addresses both issues simultaneously {'\u2014'} exactly the coordinated, multi-condition
                oversight that CCM is designed to support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For practices scaling a CCM program to a large patient panel, AI-assisted engagement ensures
                every enrolled patient receives a monthly contact regardless of staffing variability. This
                consistency is what separates CCM programs that hit the{' '}
                <Link
                  href="/solutions/chronic-care-management/20-minutes-monthly-requirement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  20-minute monthly billing threshold
                </Link>{' '}
                reliably from those that miss it for a significant fraction of their panel. The comparison
                between AI-assisted coordination and in-house manual programs is covered in depth in the{' '}
                <Link
                  href="/solutions/chronic-care-management/vs-in-house-care-coordinators"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CCM AI vs. in-house care coordinators comparison
                </Link>
                , and a real-world deployment example is available in the{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  scaling patient engagement case study
                </Link>
                .
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
                    CCM requires two or more chronic conditions lasting 12+ months and placing the patient at
                    significant risk.
                  </li>
                  <li>
                    The criteria are clinical {'\u2014'} CMS does not publish a closed list of qualifying
                    conditions.
                  </li>
                  <li>
                    RPM needs only one chronic condition; PCM focuses on a single high-risk condition; CCM is
                    for multi-condition coordination.
                  </li>
                  <li>
                    Documentation of both the conditions and the clinical rationale is what makes CCM billable
                    at audit.
                  </li>
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
                  CMS MLN 909188
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
