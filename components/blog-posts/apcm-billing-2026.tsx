import Link from 'next/link'
import Image from 'next/image'
import { PostMeta, PostFAQ, type PostFAQItem } from '@/components/blog-posts/post-blocks'
import { APCM_BILLING_POST as post } from '@/lib/blog-posts'

// FAQ text is shared with the page's JSON-LD so visible and structured answers match.
export const APCM_FAQ: PostFAQItem[] = [
  {
    "question": "Does APCM require 20 minutes of staff time per month?",
    "answer": "No. Unlike CCM, APCM has no time-based threshold. Payment is based on completing the required service elements when clinically appropriate, not on logging minutes."
  },
  {
    "question": "Can G0556 be billed for a patient with no chronic conditions?",
    "answer": "Yes. G0556's HCPCS descriptor covers a patient with one qualifying chronic condition or fewer, so a patient with zero qualifying conditions is still eligible at that level."
  },
  {
    "question": "Can APCM and CCM be billed in the same month?",
    "answer": "No. CCM (CPT 99487-99491, 99437, 99439) is one of the services bundled into APCM, so a practice bills one or the other for a given patient in a given month, not both."
  },
  {
    "question": "Can APCM and RPM be billed together?",
    "answer": "Potentially, yes. RPM codes aren't among the services bundled into APCM, but practices should confirm that each service independently meets its billing requirements, avoid double-counting work, and maintain documentation supporting both services."
  },
  {
    "question": "Does APCM require patient consent?",
    "answer": "Yes, once, before services begin, either verbally or in writing, documented in the patient's record. The patient must be told that only one practitioner can bill APCM for them per month, that they can stop at any time, and that Medicare cost-sharing may apply. QMB patients, including those billed under G0558, cannot be billed Medicare Part A or B cost-sharing."
  },
  {
    "question": "Does APCM require an initiating visit?",
    "answer": "For new patients, yes. For existing patients, only if the billing practitioner or another practitioner in the same practice hasn't seen them in the past three years, and the practice hasn't already furnished them APCM, CCM, or PCM in the past year."
  },
  {
    "question": "What changed for APCM in 2026?",
    "answer": "CMS applied new, separate conversion factors for Advanced APM participants ($33.57) and other clinicians ($33.40), and finalized three new add-on codes for behavioral health integration billed alongside an APCM base code."
  },
  {
    "question": "What are G0568, G0569, and G0570?",
    "answer": "They're 2026 add-on codes for behavioral health services billed alongside an APCM base code by the same practitioner in the same month. Per CMS, G0568 and G0569 cover the initial and subsequent months of Psychiatric Collaborative Care Model (CoCM) services, and G0570 covers general Behavioral Health Integration (BHI)."
  }
]

export function ApcmBilling2026Post() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <Link href="/blog" className="text-gray-900 hover:text-[#a21caf] mb-6 inline-block" aria-label="Back to blog">
        ← Back to Blog
      </Link>
      <article className="prose max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <PostMeta datePublished={post.datePublished} displayDate={post.displayDate} readTime={post.readTime} />
        <Image
          src={post.image}
          alt="Three healthcare professionals reviewing a tablet together in a primary care office"
          width={1672}
          height={941}
          sizes="(max-width: 768px) 100vw, 704px"
          priority
          className="w-full h-auto rounded-lg mb-8 border border-gray-200"
        />
        <p className="mb-5 leading-relaxed">Advanced Primary Care Management (APCM) is a Medicare care management billing option introduced in 2025: three HCPCS codes that bundle CCM-style services into a single monthly payment with no time-tracking requirement. Here's what the codes actually require, who can bill them, and what changed for 2026.</p>
        <h2 id="what-apcm-is" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What APCM is</h2>
        <p className="mb-5 leading-relaxed">CMS finalized Advanced Primary Care Management (APCM) in the CY 2025 Medicare Physician Fee Schedule final rule, effective January 1, 2025. APCM combines elements of several existing care management and communication technology-based services into a single monthly HCPCS code, billed once per patient per calendar month.</p>
        <p className="mb-5 leading-relaxed">One of the defining differences from Chronic Care Management (CCM) and Principal Care Management (PCM) is that APCM has no time-based thresholds. Where CCM requires practices to track and document 20, 30, or 60 minutes of staff time per month, APCM is billed based on meeting a defined set of service elements, not a clock. CMS designed it this way specifically to reduce the administrative and documentation burden that has historically limited CCM enrollment.</p>
        <p className="mb-5 leading-relaxed">To bill APCM, the billing practitioner must be responsible for all of the patient's primary care and serve as "the continuing focal point for all needed health care services." Only one practitioner can bill and be paid for APCM for a given patient in a given month.</p>
        <h2 id="the-three-codes-and-who-qualifies" className="text-2xl font-bold text-gray-900 mt-10 mb-4">The three codes and who qualifies</h2>
        <p className="mb-5 leading-relaxed">APCM has three levels, priced by patient complexity rather than time spent. All three share the same service elements; what changes is eligibility.</p>
        <div className="overflow-x-auto my-6" role="region" aria-label="APCM codes and patient eligibility" tabIndex={0}>
          <table className="w-full text-sm border-collapse">
            <caption className="text-left font-semibold text-gray-900 mb-3">APCM codes and patient eligibility</caption>
            <thead><tr className="bg-gray-100 text-left">
              <th scope="col" className="border border-gray-200 p-3 font-semibold">Code</th>
              <th scope="col" className="border border-gray-200 p-3 font-semibold">Level</th>
              <th scope="col" className="border border-gray-200 p-3 font-semibold">Eligibility (per the HCPCS descriptor)</th>
            </tr></thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">G0556</th>
                <td className="border border-gray-200 p-3 text-left">APCM Level 1</td>
                <td className="border border-gray-200 p-3 text-left">0 or 1 qualifying chronic condition</td>
              </tr>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">G0557</th>
                <td className="border border-gray-200 p-3 text-left">APCM Level 2</td>
                <td className="border border-gray-200 p-3 text-left">2 or more qualifying chronic conditions</td>
              </tr>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">G0558</th>
                <td className="border border-gray-200 p-3 text-left">APCM Level 3</td>
                <td className="border border-gray-200 p-3 text-left">2 or more qualifying chronic conditions, plus Qualified Medicare Beneficiary (QMB) status</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-5 leading-relaxed">A "chronic condition" for this purpose is one expected to last at least 12 months, or until the patient's death, and that places the patient at significant risk of death, acute exacerbation or decompensation, or functional decline. This is the same complexity language CMS already uses to define CCM eligibility.</p>
        <p className="mb-5 leading-relaxed">Because G0556 covers patients with zero or one qualifying condition, it's the only one of the three that can apply to a relatively healthy patient. G0557 and G0558 use the same chronic-condition threshold; G0558 provides a higher payment tier for patients who also have QMB status.</p>
        <h2 id="program-requirements" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Program requirements</h2>
        <p className="mb-5 leading-relaxed"><strong>Required service elements.</strong> CMS requires APCM practices to have the capability to provide: patient consent, an initiating visit when one is required, 24/7 access for patients or caregivers with urgent needs to reach the care team, real-time access to the patient's medical information, comprehensive care management, an electronic patient-centered comprehensive care plan that's shared with the patient and available to the care team, management of care transitions, coordination with the patient's other practitioners and community-based care (including documenting the patient's psychosocial strengths, functional deficits, goals, and desired outcomes), enhanced communication, population-level management, and performance measurement. These elements must be furnished when clinically appropriate for the individual patient; not every element has to be used for every patient every month. Practices should maintain documentation supporting the APCM services actually furnished, including the patient's consent and the required care plan.</p>
        <p className="mb-5 leading-relaxed"><strong>The initiating visit.</strong> New patients need an initiating visit before APCM can start. So do existing patients, unless the billing practitioner or another practitioner in the same practice has seen them within the past three years, or the practice has already furnished them APCM, CCM, or PCM services within the past year. A qualifying initiating visit is an evaluation and management visit (levels 2 through 5), a Transitional Care Management face-to-face visit, an Annual Wellness Visit, or an Initial Preventive Physical Exam, provided APCM is discussed during that visit.</p>
        <p className="mb-5 leading-relaxed"><strong>Consent.</strong> The patient must consent once before APCM services begin (CMS allows either verbal or written consent, documented in the medical record). As part of that consent, the practice must tell the patient that only one practitioner can furnish and bill APCM for them in a given month, that they have the right to stop APCM services at any time, and that Medicare cost-sharing may apply. APCM doesn't qualify as a preventive service, so coinsurance generally isn't waived the way it is for some other Medicare services, with one major exception: patients billed under G0558 are Qualified Medicare Beneficiaries by definition, and federal law (Social Security Act sections 1902(n)(3) and 1866(a)(1)(A), among others) prohibits providers from billing QMB patients for Medicare Part A or B deductibles, coinsurance, or copayments at all. A practice billing G0558 should not be collecting cost-sharing from that patient.</p>
        <p className="mb-5 leading-relaxed"><strong>Who can bill, and who can perform the work.</strong> The billing practitioner must be a physician, nurse practitioner, physician assistant, or clinical nurse specialist who functions as the patient's continuing primary care focal point. That role can rotate between practitioners in a practice month to month. The clinical staff time and tasks that make up the service can be performed by auxiliary personnel under the billing practitioner's general supervision, not direct supervision, which is one of the operational advantages of the code.</p>
        <h2 id="what-apcm-cannot-be-billed-with" className="text-2xl font-bold text-gray-900 mt-10 mb-4">What APCM cannot be billed with</h2>
        <p className="mb-5 leading-relaxed">APCM is a bundle: it folds in several services that would otherwise be billed separately, so the practitioner billing APCM for a patient cannot also bill that patient's other overlapping codes in the same calendar month. Per AAFP's compliance guidance on the CY 2025 final rule, the excluded codes are:</p>
        <ul className="list-disc pl-6 space-y-2 my-6">
          <li>Principal Care Management (CPT 99424-99427)</li>
          <li>Chronic Care Management (CPT 99487-99491, 99437, 99439)</li>
          <li>Transitional Care Management (CPT 99495-99496)</li>
          <li>Interprofessional internet consultations (CPT 99446-99449, 99451-99452)</li>
          <li>Remote evaluation of patient-submitted video or images (HCPCS G2250)</li>
          <li>Virtual check-ins (HCPCS G2251-G2252)</li>
          <li>Online digital evaluation and management services (CPT 98970-98972, 99421-99423)</li>
        </ul>
        <h2 id="can-you-bill-apcm-and-rpm-together" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Can you bill APCM and RPM together?</h2>
        <p className="mb-5 leading-relaxed">Potentially, yes. Remote Patient Monitoring (RPM) uses its own separate family of CPT codes and covers distinct activities: physiologic data collection, device supply, monitoring, and treatment management, rather than the care-coordination and communication services APCM bundles. That's a meaningful distinction for practices already running RPM programs, but it isn't a blanket authorization to bill both.</p>
        <p className="mb-5 leading-relaxed">Practices furnishing both should confirm current CMS and Medicare Administrative Contractor guidance, make sure each service independently meets its own billing requirements, ensure the underlying work isn't counted twice toward two different services, and keep documentation that clearly supports both. This exclusion list also changes through annual rulemaking, so what's true this year isn't guaranteed to hold next year.</p>
        <h2 id="apcm-vs-ccm-whats-the-difference" className="text-2xl font-bold text-gray-900 mt-10 mb-4">APCM vs. CCM: what's the difference?</h2>
        <p className="mb-5 leading-relaxed">APCM and CCM both pay practices for ongoing chronic care management, but they're structured differently enough that the choice isn't automatic.</p>
        <div className="overflow-x-auto my-6" role="region" aria-label="APCM and CCM billing comparison" tabIndex={0}>
          <table className="w-full text-sm border-collapse">
            <caption className="text-left font-semibold text-gray-900 mb-3">APCM and CCM billing comparison</caption>
            <thead><tr className="bg-gray-100 text-left">
              <th scope="col" className="border border-gray-200 p-3 font-semibold">Comparison</th>
              <th scope="col" className="border border-gray-200 p-3 font-semibold">APCM</th>
              <th scope="col" className="border border-gray-200 p-3 font-semibold">CCM</th>
            </tr></thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">Billing basis</th>
                <td className="border border-gray-200 p-3 text-left">Monthly, by complexity tier</td>
                <td className="border border-gray-200 p-3 text-left">Monthly, by staff time</td>
              </tr>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">Time tracking required</th>
                <td className="border border-gray-200 p-3 text-left">No</td>
                <td className="border border-gray-200 p-3 text-left">Yes (20, 30, or 60+ minutes depending on the code)</td>
              </tr>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">Chronic condition threshold</th>
                <td className="border border-gray-200 p-3 text-left">0-1 (G0556), 2+ (G0557), 2+ and QMB (G0558)</td>
                <td className="border border-gray-200 p-3 text-left">Generally 2 or more chronic conditions</td>
              </tr>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">Codes</th>
                <td className="border border-gray-200 p-3 text-left">G0556, G0557, G0558</td>
                <td className="border border-gray-200 p-3 text-left">CPT 99487-99491, 99437, 99439</td>
              </tr>
              <tr className="even:bg-gray-50">
                <th scope="row" className="border border-gray-200 p-3 text-left font-semibold">Billable together for the same patient, same month</th>
                <td className="border border-gray-200 p-3 text-left">No</td>
                <td className="border border-gray-200 p-3 text-left">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-5 leading-relaxed">The practical difference is administrative. CCM's value is well established, but its time-based codes require accurate minute-by-minute logging, which is one reason CCM enrollment and billing accuracy have historically lagged behind program potential. APCM trades that tracking burden for a fixed set of service elements, at the cost of giving up the ability to bill PCM, TCM, and the other bundled services for the same patient that month.</p>
        <h2 id="apcm-reimbursement-and-whats-new-for-2026" className="text-2xl font-bold text-gray-900 mt-10 mb-4">APCM reimbursement and what's new for 2026</h2>
        <p className="mb-5 leading-relaxed">Like every code on the Medicare Physician Fee Schedule, G0556, G0557, and G0558 are priced by relative value units (RVUs) multiplied by the annual conversion factor, then adjusted for local practice costs. CMS finalized two separate CY 2026 conversion factors: $33.57 for clinicians who qualify as Advanced Alternative Payment Model (APM) participants, and $33.40 for everyone else, both up from $32.35 in 2025. That split, not just the usual locality adjustment, now affects the payment for every PFS code, APCM included. Because the RVU-to-dollar math still varies by locality and by QP status, the accurate number for a given practice is whatever the CMS Physician Fee Schedule Look-Up Tool returns for that ZIP code, provider type, and year, not a single generic figure.</p>
        <p className="mb-5 leading-relaxed">The more significant 2026 change for APCM specifically is new: CMS finalized three add-on codes that let a practice bill for behavioral health services on top of an APCM base code, when the same practitioner furnishes both in the same month. Per CMS's own billing guidance, G0568 and G0569 are for psychiatric Collaborative Care Model (CoCM) services delivered to APCM patients (G0568 for the initial month, G0569 for subsequent months), and G0570 is for general Behavioral Health Integration (BHI) services delivered to APCM patients. These are optional add-ons, not a replacement for G0556-G0558, and they're aimed at practices that are already coordinating a patient's behavioral health alongside their primary care.</p>
        <PostFAQ items={APCM_FAQ} title="APCM billing FAQ" />
        <h2 id="key-takeaways" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Key takeaways</h2>
        <p className="mb-5 leading-relaxed">APCM trades CCM's time-tracking burden for a defined set of service elements billed once per patient per month, which is why it's drawn attention from practices that have struggled to staff CCM's documentation requirements. The tradeoff is that it's a bundle: once a practice bills APCM for a patient, it gives up billing PCM, CCM, TCM, and several communication-technology codes for that same patient that month. The eligibility tiers are simple to check (chronic condition count, plus QMB status for the top tier), but the operational requirements (24/7 access, a comprehensive care plan, population-level management, performance measurement) still have to be built and run somewhere. APCM removes much of the minute-by-minute tracking that traditional care-management billing requires, but it doesn't remove the operational work. Practices still need reliable patient outreach, continuity of care, care-plan management, escalation workflows, population-level management, and performance measurement. For most practices, the real question isn't simply whether they qualify to bill APCM. It's whether they have the infrastructure to deliver it consistently across a patient population.</p>
        <p className="mb-5 leading-relaxed">Positive Check helps practices run the patient outreach, escalation, and population-level work that programs like APCM, CCM, and RPM depend on. See how the billing side compares on our <Link href="/resources/compare/rpm-vs-ccm-medicare-billing" className="text-[#a21caf] hover:underline">RPM vs. CCM comparison page</Link>.</p>
        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Sources</h2>
        <ul className="list-disc pl-6 space-y-2 my-6">
          <li><a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2025-medicare-physician-fee-schedule-final-rule" className="text-[#a21caf] hover:underline">CY 2025 Medicare Physician Fee Schedule Final Rule fact sheet</a> (CMS)</li>
          <li><a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-medicare-physician-fee-schedule-final-rule-cms-1832-f" className="text-[#a21caf] hover:underline">CY 2026 Medicare Physician Fee Schedule Final Rule fact sheet</a> (CMS)</li>
          <li><a href="https://www.cms.gov/medicare/payment/fee-schedules/physician-fee-schedule/advanced-primary-care-management-services" className="text-[#a21caf] hover:underline">Advanced Primary Care Management Services</a> (CMS)</li>
          <li><a href="https://www.cms.gov/files/document/advanced-primary-care-management-apcm-services-faq.pdf" className="text-[#a21caf] hover:underline">Advanced Primary Care Management (APCM) Services FAQ</a> (CMS)</li>
          <li><a href="https://www.cms.gov/files/document/mm13887-medicare-physician-fee-schedule-final-rule-summary-cy-2025.pdf" className="text-[#a21caf] hover:underline">MLN Matters MM13887: Medicare Physician Fee Schedule Final Rule Summary, CY 2025</a> (CMS)</li>
          <li><a href="https://www.cms.gov/files/document/mm14315-medicare-physician-fee-schedule-final-rule-summary-cy-2026.pdf" className="text-[#a21caf] hover:underline">MLN Matters MM14315: Medicare Physician Fee Schedule Final Rule Summary, CY 2026</a> (CMS)</li>
          <li><a href="https://www.aafp.org/practice-operations/billing-and-coding/advanced-primary-care-management" className="text-[#a21caf] hover:underline">Using Advanced Primary Care Management Services Codes G0556, G0557 and G0558</a> (AAFP)</li>
          <li>HCPCS long descriptors for <a href="https://www.aapc.com/codes/hcpcs-codes/G0556" className="text-[#a21caf] hover:underline">G0556</a>, <a href="https://www.aapc.com/codes/hcpcs-codes/G0557" className="text-[#a21caf] hover:underline">G0557</a>, and <a href="https://www.aapc.com/codes/hcpcs-codes/G0558" className="text-[#a21caf] hover:underline">G0558</a> (AAPC)</li>
          <li><a href="https://www.cms.gov/files/document/mln006397-federally-qualified-health-center.pdf" className="text-[#a21caf] hover:underline">MLN006397: Federally Qualified Health Center</a> (CMS), for the G0568/G0569/G0570 to CoCM/BHI mapping</li>
          <li><a href="https://www.cms.gov/files/document/mln7936176-prohibition-billing-qualified-medicare-beneficiaries.pdf" className="text-[#a21caf] hover:underline">Prohibition on Billing Qualified Medicare Beneficiaries (QMB)</a> (CMS)</li>
          <li>HCPCS long descriptors for <a href="https://www.aapc.com/codes/hcpcs-modifiers/G0568" className="text-[#a21caf] hover:underline">G0568</a> and <a href="https://www.aapc.com/codes/hcpcs-modifiers/G0569" className="text-[#a21caf] hover:underline">G0569</a> (AAPC), for the initial-vs-subsequent CoCM distinction</li>
        </ul>
      </article>
    </div>
  )
}
