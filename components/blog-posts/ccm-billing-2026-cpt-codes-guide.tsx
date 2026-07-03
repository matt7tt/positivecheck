'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function CcmBilling2026CptCodesGuidePost() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <Link
        href="/blog"
        className="text-gray-900 hover:text-[#d946ef] mb-6 inline-block"
        aria-label="Back to blog"
      >
        ← Back to Blog
      </Link>

      <article className="prose max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489
        </h1>

        <Image
          src="/images/ccm-billing-2026-guide.png"
          alt="Healthcare practice administrator reviewing chronic care management billing on a laptop"
          width={800}
          height={400}
          priority
          className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-md border border-gray-200"
        />

        <p className="lead-paragraph">
          Chronic Care Management is the most consistent monthly billable in Medicare care coordination, and the CY 2026 Physician Fee Schedule final rule brought meaningful rate increases across all four staff-directed codes. This guide walks through what each code covers, how to choose between non-complex and complex CCM, what makes documentation audit-defensible, and where most practices leave money on the table.
        </p>

        <p>
          There are four core staff-directed Chronic Care Management codes that determine the revenue picture for almost every CCM program. CPT 99490 is the foundation. CPT 99439 is the upside on a non-complex patient. CPT 99487 and 99489 are the complex tier, used when a patient's monthly care requires moderate or high complexity medical decision-making by the billing practitioner.
        </p>

        <p>
          Programs that understand the four codes well bill them confidently every month for most enrolled patients. Programs that don't tend to bill 99490 reliably, miss 99439 entirely, never identify complex CCM patients, and run into trouble at audit because the tier rules were not respected. This guide is for the second group.
        </p>

        <p>
          This guide is written for primary care practices, telehealth groups, RPM/CCM operators, ACOs, MSOs, and care management teams trying to scale Medicare CCM while staying audit-defensible.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          The quick summary
        </h2>
        <p>
          Here is what each code covers, what each pays at 2026 national rates, and when each applies. The rates below are approximate 2026 Medicare non-facility national averages reported in industry analyses of the CY 2026 Physician Fee Schedule final rule. Actual reimbursement varies by locality, setting, payer, MAC, and applicable Medicare payment rules. Practices should verify amounts in the CMS Physician Fee Schedule Look-Up Tool or with their Medicare Administrative Contractor.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 p-3 font-semibold">Code</th>
                <th className="border border-gray-200 p-3 font-semibold">Tier / type</th>
                <th className="border border-gray-200 p-3 font-semibold">What it covers</th>
                <th className="border border-gray-200 p-3 font-semibold">2026 national avg (non-facility)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">99490</td>
                <td className="border border-gray-200 p-3">Non-complex (staff)</td>
                <td className="border border-gray-200 p-3">At least 20 minutes of clinical staff time per calendar month, directed by a physician or QHP, on care coordination for a patient with two or more chronic conditions.</td>
                <td className="border border-gray-200 p-3">Approximately $66.30</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-semibold">99439</td>
                <td className="border border-gray-200 p-3">Non-complex add-on</td>
                <td className="border border-gray-200 p-3">Each additional 20 minutes of clinical staff time in the same calendar month. Add-on to 99490. Commonly reported as billable up to 2 times per month (40 and 60 total minutes); verify current CPT, MUE, payer, and MAC guidance.</td>
                <td className="border border-gray-200 p-3">Approximately $50.56 each</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">99487</td>
                <td className="border border-gray-200 p-3">Complex (staff)</td>
                <td className="border border-gray-200 p-3">First 60 minutes of clinical staff time per calendar month. Requires moderate or high complexity medical decision-making by the billing practitioner.</td>
                <td className="border border-gray-200 p-3">Approximately $144</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-semibold">99489</td>
                <td className="border border-gray-200 p-3">Complex add-on</td>
                <td className="border border-gray-200 p-3">Each additional 30 minutes of clinical staff time in the same calendar month. Add-on to 99487. No standard monthly CPT unit cap is commonly cited; verify current CPT, MUE, payer, and MAC guidance.</td>
                <td className="border border-gray-200 p-3">Approximately $78 each</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          There are also two physician-personal CCM codes that some practices use: <strong>CPT 99491</strong> (at least 30 minutes of physician or QHP time, approximately $89) and <strong>CPT 99437</strong> (each additional 30 minutes, approximately $65). These are billed when the billing practitioner personally furnishes the care management work rather than delegating it to clinical staff under general supervision. The four staff-directed codes are far more common because they scale; this guide focuses there.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What CCM actually requires
        </h2>
        <p>
          Before any of the codes are billable, four conditions must be met. Per the{' '}
          <a
            href="https://www.cms.gov/files/document/chronic-care-management-faqs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d946ef] hover:underline"
          >
            CMS Frequently Asked Questions About Practitioner Billing for Chronic Care Management Services
          </a>{' '}
          (Division of Practitioner Services, last updated August 2022; rules referenced remain in force as of the CY 2026 PFS), all are non-optional.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          1. Two or more chronic conditions
        </h3>
        <p>
          The patient must have at least two chronic conditions expected to last at least 12 months (or until the death of the patient) that place the patient at significant risk of death, acute exacerbation or decompensation, or functional decline. Two or more chronic conditions must be documented and are typically reflected as two or more ICD-10 codes on the claim. A patient with only one chronic condition is not eligible for CCM and should be considered for Principal Care Management (PCM) instead.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          2. Patient consent (once, then it sticks)
        </h3>
        <p>
          Patient consent must be obtained once prior to the start of CCM. It does not need to be renewed monthly or annually. Consent must be obtained again only if the patient changes billing practitioners. As of the CY 2017 PFS, verbal consent is acceptable, but it must be documented in the chart.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          3. An initiating visit (for new patients)
        </h3>
        <p>
          For new patients, or patients not seen by the billing practitioner in the year prior, CCM must be initiated during a comprehensive E/M visit (CPT 99212 through 99215), an Annual Wellness Visit, or an Initial Preventive Physical Exam. The initiating visit is not part of CCM and can be separately billed. The billing practitioner must discuss CCM with the patient at this visit; if CCM is not discussed, the visit does not count as the initiating visit.
        </p>
        <p>
          HCPCS code G0506 (approximately $63) may be billed once per patient as an add-on to the initiating visit when the billing practitioner personally performs extensive assessment and care planning beyond the usual effort described by the E/M, AWV, or IPPE code. The same time and effort used for G0506 should not also be counted toward monthly CCM time thresholds.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          4. A comprehensive care plan
        </h3>
        <p>
          CMS lists typical care plan elements: problem list, expected outcome and prognosis, measurable treatment goals, cognitive and functional assessment, symptom management, planned interventions, medical management, environmental evaluation, caregiver assessment, and coordination with outside resources and providers. The care plan does not have to include every element for every patient (CMS notes these are typical, not required), but it has to be comprehensive and updated as conditions change.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Non-complex vs. complex CCM: the biggest billing decision
        </h2>
        <p>
          This is the most consequential choice in CCM billing, and the one most often misrouted. The two tiers are mutually exclusive in any given calendar month.
        </p>

        <blockquote className="border-l-4 border-[#d946ef] bg-purple-50 pl-4 pr-4 py-3 my-6 italic text-gray-700">
          A billing practitioner cannot report both complex (99487) and non-complex (99490 or 99491) CCM for the same patient in the same calendar month. Choose one tier per patient per month based on the actual clinical complexity that month.
        </blockquote>

        <p>
          The clinical bright line is medical decision-making. From the CMS CCM FAQ:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Non-complex CCM (99490, 99439):</strong> standard care coordination time, with the medical decision-making valued at the level typical for chronic care management. No specific MDM complexity threshold required.</li>
          <li><strong>Complex CCM (99487, 99489):</strong> requires moderate or high complexity medical decision-making by the billing practitioner personally during the service period. This MDM work cannot be subcontracted to any other individual.</li>
        </ul>

        <p>Two practical consequences flow from this:</p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Complex CCM is reserved for patients whose care that month actually involved meaningful clinical reasoning by the practitioner, not just more clinical staff time. A patient with five chronic conditions whose month was uneventful is billed under non-complex CCM if there was no moderate-or-high MDM. A patient with three chronic conditions who had an acute decompensation requiring care plan revisions, medication changes, and coordination across specialists may be billed under complex CCM.</li>
          <li>Complex CCM is harder to delegate because the MDM has to be the billing practitioner's. The clinical staff time portion can still be performed by auxiliary staff under general supervision, but the practitioner cannot offload the moderate-or-high MDM to anyone else.</li>
        </ul>

        <p>
          Practices that default every patient to non-complex CCM leave revenue uncaptured when complex months occur. Practices that bill complex CCM without documenting practitioner MDM expose themselves at audit. The right approach is monthly: assess the patient's care that month against the MDM criteria, then bill the tier that matches.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Time tracking that survives an audit
        </h2>
        <p>
          All four staff-directed CCM codes are time-based and billed per calendar month. The documentation has to be specific enough that an auditor can trace billed minutes to billed activity. The following is operational best practice aligned with CMS audit expectations, not a CMS-prescribed format.
        </p>
        <p>Five elements every defensible time log should include, per entry:</p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Date and duration.</strong> Either start/stop times or total minutes for that date.</li>
          <li><strong>Who performed the work.</strong> Name and credential of the clinical staff member or practitioner.</li>
          <li><strong>What was done.</strong> Care plan review, patient or caregiver contact, medication reconciliation, coordination with specialty, education, and so on.</li>
          <li><strong>For complex CCM: documented MDM.</strong> If billing 99487 or 99489, the billing practitioner's moderate-or-high MDM must appear in the record, not just the clinical staff activity.</li>
          <li><strong>What changed (or didn't).</strong> Decisions made, care plan updates, escalations, or explicit no-change documentation.</li>
        </ul>

        <p>
          A particular CMS rule worth noting on multi-patient activities: if clinical staff perform a CCM activity that benefits multiple patients (for example, a care coordinator spends 30 minutes preparing materials that go to three different patients), the time must be split among those patients, not counted in full for each. Ten minutes per patient in that example, not 30 each.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          When 99439 should be billed
        </h3>
        <p>
          99439 is often under-billed in CCM programs. It is commonly reported as billable up to two times per calendar month as an add-on to 99490, meaning a patient with 60 documented minutes of clinical staff CCM time may support 99490 plus two units of 99439: approximately $167 of monthly revenue at 2026 national non-facility planning rates. Practices should verify current CPT, NCCI/MUE, payer, and MAC guidance before billing. Programs that never bill 99439 are usually not under-serving their patients; they are under-documenting the time.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Stacking CCM with RPM and TCM
        </h2>
        <p>
          CCM may be billed concurrently with Remote Patient Monitoring (RPM) and Transitional Care Management (TCM) when both programs are clinically appropriate, <strong>provided time and effort are not counted twice</strong>. This is confirmed in the CY 2020 and CY 2021 PFS final rules and reiterated in the CMS CCM FAQ.
        </p>
        <p>
          That last clause is where most stacking programs get into trouble. The same minute cannot be billed against both CCM and RPM. Reviewing RPM device data does not count toward the 20 minutes required for 99490, and a CCM care coordination call about an unrelated condition does not count toward RPM treatment management. The two programs share patients, not minutes.
        </p>
        <p>
          For more on how RPM and CCM compare and when each is the right fit, see our{' '}
          <Link href="/resources/compare/rpm-vs-ccm-medicare-billing" className="text-[#d946ef] hover:underline">
            RPM vs. CCM Medicare Billing Comparison
          </Link>.
        </p>

        <p>Several CCM-incompatible billings worth knowing about, per the CMS FAQ:</p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>CCM cannot be billed during the same month as home health care supervision (HCPCS G0181) or hospice care supervision (HCPCS G0182).</li>
          <li>CCM cannot be billed during the same month as certain ESRD-related services (CPT 90951 through 90970).</li>
          <li>Non-complex CCM (99490/99439) and complex CCM (99487/99489) cannot be billed for the same patient in the same calendar month.</li>
          <li>CCM and Principal Care Management (PCM) cannot be billed by the same practitioner for the same patient in the same month, but a primary care practitioner can bill CCM while a specialist bills PCM for different conditions.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What changed for CCM in the 2026 Medicare Physician Fee Schedule
        </h2>
        <p>
          CMS released the CY 2026 Medicare Physician Fee Schedule final rule (CMS-1832-F) on October 31, 2025, with policies effective January 1, 2026. The official CMS summary appears in{' '}
          <a
            href="https://www.cms.gov/files/document/mm14315-medicare-physician-fee-schedule-final-rule-summary-cy-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d946ef] hover:underline"
          >
            MLN Matters MM14315
          </a>. The rule did not introduce new CCM codes. The CCM rate increase comes from three interacting mechanics in the rule itself:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Two separate conversion factors took effect in CY 2026 as required by statute: $33.5675 for qualifying Alternative Payment Model (QP) participants (a 3.77% increase over CY 2025) and $33.4009 for non-QPs (a 3.26% increase).</li>
          <li>CMS finalized an efficiency adjustment of -2.5% for non-time-based work RVUs. Time-based codes (which include CCM), telehealth, and maternity care codes are exempt from this cut.</li>
          <li>The combination means CCM codes received the conversion factor increase without taking the offsetting efficiency-adjustment cut that many other codes did.</li>
        </ul>

        <p>
          Based on those mechanics, secondary analyses of the rule report the following CCM rate changes (national non-facility averages):
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>99490 rising from approximately $60.49 (CY 2025) to approximately $66.30 (CY 2026), a 9.6% increase.</li>
          <li>99439 rising from approximately $45.93 to approximately $50.56, a 10.1% increase.</li>
          <li>99487 and 99489 with comparable percentage increases on their existing base rates.</li>
        </ul>

        <p>
          These figures are widely reported across industry analyses of the final rule and are consistent with the rule's published mechanics. For locality-specific rates, the CMS Physician Fee Schedule Look-Up Tool is the authoritative source.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Common audit failures (frequently observed in CCM billing)
        </h2>
        <p>
          These are the patterns we and others see most often in CCM audits. The ordering reflects our operational observation, not published CMS audit statistics; each individual failure traces back to a specific CMS rule.
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Both tiers billed in the same month for the same patient.</strong> Choose one tier per patient per month based on documented MDM and clinical staff time, not on what produces the higher reimbursement.</li>
          <li><strong>Complex CCM billed without documented practitioner MDM.</strong> 99487 and 99489 require moderate-or-high MDM by the billing practitioner personally. The clinical staff log alone is not sufficient.</li>
          <li><strong>Patient consent missing or not documented.</strong> Consent only needs to be obtained once, but it must be documented in the chart. Verbal consent is acceptable; an undocumented verbal consent is not.</li>
          <li><strong>99439 billing not checked against current unit limits.</strong> 99439 is commonly treated as reportable up to two units per calendar month with 99490, but practices should verify current CPT, NCCI/MUE, payer, and MAC guidance before billing. Beyond 60 total minutes of non-complex CCM time, the patient may warrant assessment for complex CCM in an appropriate month if the clinical facts support it.</li>
          <li><strong>Time aggregated rather than itemized.</strong> "30 minutes of CCM time this month" is not enough. Each entry should be attributable to a specific date, person, and activity.</li>
          <li><strong>Same minute counted toward multiple programs.</strong> Especially common when stacking CCM with RPM or TCM. A single phone call about diabetes can be CCM care coordination or RPM treatment management. It cannot be both for the same minute.</li>
          <li><strong>Multi-patient activity time not split.</strong> If clinical staff perform a 30-minute activity benefiting three patients, the time must be split (10 minutes each), not counted in full against each.</li>
          <li><strong>CCM billed during a month with home health or hospice supervision.</strong> Per the CMS CCM FAQ, these are explicitly excluded.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          The operational implication
        </h2>
        <p>
          CCM is the most predictable monthly billable in Medicare care coordination. It is also the one most often run below its potential, because the 20 minutes of clinical staff contact per patient per month is structurally easier to skip than to deliver. A practice with 500 enrolled CCM patients needs to generate, document, and code roughly 10,000 minutes of clinical staff time every month. That math does not work on whichever nurse remembers to make the call.
        </p>
        <p>
          Structured automated outreach changes the math. Positive Check supports CCM workflows by automating structured patient outreach, capturing patient responses, organizing time-and-activity documentation, and escalating clinically meaningful responses to the care team. Billable CCM time should be reviewed and documented according to CMS requirements, including applicable clinical staff, incident-to, supervision, scope-of-practice, and practitioner oversight rules.
        </p>
        <p>
          Positive Check does not do the parts that cannot be delegated. The comprehensive care plan, practitioner oversight and management, claim submission decisions, and, for complex CCM, the moderate-or-high MDM remain with the billing practitioner and care team. What changes is that routine patient outreach, documentation organization, and escalation workflows become more structured and scalable as the program grows.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          Compliance note for outsourced CCM
        </h3>
        <p>
          Compliance note: External clinical staff can support CCM when applicable incident-to, supervision, scope-of-practice, documentation, and practitioner oversight requirements are met. The billing practitioner must retain oversight, management, collaboration, and reassessment responsibilities. Time counted toward CCM should be reviewed according to CMS and payer requirements. For complex CCM, the moderate-or-high MDM must be personally performed by the billing practitioner.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">See how it works</h2>
          <p className="font-medium text-lg mb-4">
            Want to see what this looks like at scale? Positive Check helps CCM, RPM, and care management teams automate structured patient outreach, organize documentation, and surface the patients who need human follow-up. Request a demo to see how it fits into your CCM workflow.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact">
              <Button className="bg-[#e879f9] hover:bg-[#d946ef] text-white">
                Request a demo
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline">
                See how it works
              </Button>
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          This article is for educational and operational guidance and does not constitute billing, legal, or clinical advice. CPT code reimbursement amounts cited are approximate 2026 Medicare non-facility national averages reported in industry analyses of the CY 2026 Physician Fee Schedule final rule (CMS-1832-F); actual reimbursement varies by geographic locality, setting, payer, MAC, QP/non-QP status, and applicable Medicare payment rules. For your practice's specific billing questions, consult a qualified medical coder, your Medicare Administrative Contractor, or the CMS Physician Fee Schedule Look-Up Tool.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Primary sources cited</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
            <li>
              CMS: Frequently Asked Questions About Practitioner Billing for Chronic Care Management Services (Division of Practitioner Services, last updated August 2022) —{' '}
              <a href="https://www.cms.gov/files/document/chronic-care-management-faqs.pdf" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/files/document/chronic-care-management-faqs.pdf</a>
            </li>
            <li>
              CMS MLN Booklet: Chronic Care Management Services (MLN909188) —{' '}
              <a href="https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/mln-publications-items/icn909188" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/mln-publications-items/icn909188</a>
            </li>
            <li>
              CMS Newsroom Fact Sheet: Calendar Year (CY) 2026 Medicare Physician Fee Schedule Final Rule (CMS-1832-F) —{' '}
              <a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-medicare-physician-fee-schedule-final-rule-cms-1832-f" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-medicare-physician-fee-schedule-final-rule-cms-1832-f</a>
            </li>
            <li>
              CMS MLN Matters MM14315: Medicare Physician Fee Schedule Final Rule Summary CY 2026 —{' '}
              <a href="https://www.cms.gov/files/document/mm14315-medicare-physician-fee-schedule-final-rule-summary-cy-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/files/document/mm14315-medicare-physician-fee-schedule-final-rule-summary-cy-2026.pdf</a>
            </li>
            <li>
              CMS Physician Fee Schedule Look-Up Tool —{' '}
              <a href="https://www.cms.gov/medicare/physician-fee-schedule/search/overview" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/medicare/physician-fee-schedule/search/overview</a>
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/resources/compare/rpm-vs-ccm-medicare-billing"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">RPM vs. CCM Medicare Billing Comparison</h3>
              <p className="text-sm text-gray-600">How Remote Patient Monitoring and Chronic Care Management compare, and when each is the right fit.</p>
            </Link>
            <Link
              href="/resources/billing-guide"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Medicare Billing Guide</h3>
              <p className="text-sm text-gray-600">A practical overview of Medicare care coordination billing for practices and care teams.</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
