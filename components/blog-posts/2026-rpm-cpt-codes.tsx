'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function RpmBilling2026CptCodesPost() {
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
          RPM Billing in 2026: CPT Codes, Requirements and Reimbursement
        </h1>

        <p className="text-sm text-gray-500 mb-4">Last updated: July 12, 2026</p>

        <Image
          src="/images/2026-rpm-cpt-codes-billing-guide.png"
          alt="Healthcare professional reviewing Remote Patient Monitoring data and billing documentation"
          width={800}
          height={400}
          priority
          className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-md border border-gray-200"
        />

        <p className="lead-paragraph">
          Remote Patient Monitoring can create a meaningful per-patient reimbursement opportunity for eligible Medicare patients when all coverage, device, data-transmission, treatment-management, and documentation requirements are met. The CY 2026 Physician Fee Schedule final rule introduced two new CPT codes that create billable pathways for shorter data-transmission and treatment-management periods that previously fell below the applicable reporting thresholds. This guide walks through what each RPM code covers, how the new 99445 and 99470 codes change the billing decision, and what makes documentation defensible.
        </p>

        <p>
          This guide is written for primary care practices, telehealth groups, RPM/CCM operators, ACOs, MSOs, and care management teams billing Medicare RPM in 2026.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What are the RPM CPT codes for 2026?
        </h2>
        <p>
          The principal Medicare RPM codes for 2026 are 99453 for setup and education; 99445 and 99454 for device supply and data transmission; and 99470, 99457, and 99458 for treatment management. CPT 99091 may additionally apply to qualifying physician or other qualified healthcare professional data collection and interpretation, as a distinct legacy service rather than an interchangeable part of the six-code framework above.
        </p>
        <p>
          Two of the six principal codes — 99445 and 99470 — are new for 2026. CPT 99453 covers initial device setup and patient education. Device-supply codes 99445 and 99454 are reported based on a 30-day monitoring period, while treatment-management codes 99470, 99457, and 99458 are reported based on a calendar month. Those periods don't always align exactly, and each component's requirements are evaluated independently.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          2026 RPM CPT code and reimbursement table
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 p-3 font-semibold">Code</th>
                <th className="border border-gray-200 p-3 font-semibold">Category</th>
                <th className="border border-gray-200 p-3 font-semibold">What it covers</th>
                <th className="border border-gray-200 p-3 font-semibold">Approximate 2026 Medicare payment information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">99453</td>
                <td className="border border-gray-200 p-3">Setup</td>
                <td className="border border-gray-200 p-3">Initial device setup and patient education, generally reported once at the start of an episode of care when applicable requirements are met.</td>
                <td className="border border-gray-200 p-3">~$19</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-semibold">99454</td>
                <td className="border border-gray-200 p-3">Device supply (16–30 days)</td>
                <td className="border border-gray-200 p-3">Device supply with recordings or programmed alerts transmitted on 16 or more days within a 30-day period.</td>
                <td className="border border-gray-200 p-3">Same valuation as 99445 — verify current amount in the CMS PFS Look-Up Tool</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">99445 (new 2026)</td>
                <td className="border border-gray-200 p-3">Device supply (2–15 days)</td>
                <td className="border border-gray-200 p-3">Device supply with recordings or programmed alerts transmitted on 2–15 days within a 30-day period. CMS finalized the same valuation as 99454, reasoning that practice expense doesn't change based on transmission days since the device is supplied for the full period either way.</td>
                <td className="border border-gray-200 p-3">Same valuation as 99454 — verify current amount in the CMS PFS Look-Up Tool</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-semibold">99457</td>
                <td className="border border-gray-200 p-3">Treatment management (first 20 min)</td>
                <td className="border border-gray-200 p-3">First 20 minutes of cumulative RPM treatment-management time (clinical staff/physician/QHP) in a calendar month, including at least one real-time interactive communication with the patient or caregiver.</td>
                <td className="border border-gray-200 p-3">~$52</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">99458</td>
                <td className="border border-gray-200 p-3">Treatment management add-on</td>
                <td className="border border-gray-200 p-3">Each additional 20 minutes of cumulative treatment-management time in the same calendar month, add-on to 99457. Unit limits are subject to CPT instructions, MUE, and payer/MAC policy — verify before billing multiple units.</td>
                <td className="border border-gray-200 p-3">~$41</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-semibold">99470 (new 2026)</td>
                <td className="border border-gray-200 p-3">Treatment management (first 10 min)</td>
                <td className="border border-gray-200 p-3">First 10 minutes of cumulative RPM treatment-management time in a calendar month, including at least one real-time interactive communication. Used instead of 99457 when monthly time reaches this level but not the 20-minute threshold.</td>
                <td className="border border-gray-200 p-3">~$26</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">99091</td>
                <td className="border border-gray-200 p-3">Legacy data interpretation</td>
                <td className="border border-gray-200 p-3">At least 30 minutes of physician/QHP time collecting and interpreting digitally stored or transmitted physiologic data, per 30 days.</td>
                <td className="border border-gray-200 p-3">Verify in PFS tool</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          Amounts are approximate 2026 Medicare non-facility national averages and vary by locality, provider status, and geographic adjustment. Multiple industry sources report slightly different point estimates for 99454/99445 (commonly $47–$52); rather than pick one, verify the current locality-specific amount in the CMS Physician Fee Schedule Look-Up Tool before finalizing program economics. Estimates throughout this table are provided for general comparison only and should not be used to forecast claims revenue.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What RPM actually requires
        </h2>
        <p>
          Medicare RPM generally involves three separately billable components — device setup and education, device supply and data transmission, and treatment management — each governed by its own code and requirements. Across all of them, the monitoring must be medically reasonable and necessary, the device must meet the FDA definition of a medical device and digitally transmit physiologic data, and the billing practitioner should obtain and document patient consent before monitoring begins.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          An acute or chronic condition requiring medically necessary physiologic monitoring
        </h3>
        <p>
          Unlike Chronic Care Management, RPM does not require two or more chronic conditions — Medicare covers RPM for an acute or chronic condition when monitoring is medically reasonable and necessary and produces physiologic data (blood pressure, glucose, weight, SpO2, and similar measures) that informs care decisions. That's a different eligibility framework from CCM, which generally requires two or more chronic conditions, and it's part of why many patients who don't qualify for CCM still qualify for RPM.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          Device setup and patient education
        </h3>
        <p>
          Before ongoing monitoring begins, the patient needs a one-time setup and education session on how to use the device — this is what 99453 covers.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          Ongoing data transmission and treatment management, reported separately
        </h3>
        <p>
          To report a device-supply code, the applicable transmission-day requirement must be met during the 30-day monitoring period (determining whether 99454 or 99445 applies). To report a treatment-management code, the applicable cumulative-time and interactive-communication requirements must be met during the calendar month (determining whether 99457, 99458, or 99470 applies). These are independent requirements on independent timeframes, not a single combined monthly bar a patient must clear.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          CPT 99445 vs. 99454: Which RPM device-supply code applies?
        </h2>

        <blockquote className="border-l-4 border-[#d946ef] bg-purple-50 pl-4 pr-4 py-3 my-6 italic text-gray-700">
          Quick answer: Use 99445 for 2–15 qualifying transmission days and 99454 for 16–30 qualifying transmission days within the 30-day monitoring period; don't report both for the same period.
        </blockquote>

        <p>
          The first 2026 decision concerns the number of qualifying data-transmission days within the 30-day monitoring period. The threshold is based on the number of qualifying days during which physiologic data is collected and transmitted, not the total number of individual measurements — multiple measurements transmitted on the same calendar day do not create multiple transmission days.
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>CPT 99454</strong> applies when the patient transmits data on 16 or more of the 30 days in the monitoring period. This has been the standard RPM device-supply code since the program began.</li>
          <li><strong>CPT 99445 (new for 2026)</strong> applies when the patient transmits data on 2 to 15 days within the 30-day period. Before 2026, patients who transmitted fewer than 16 days of data in a period fell short of the reporting threshold for device supply entirely — 99445 creates a billable pathway for that shorter transmission window.</li>
        </ul>

        <p>
          99445 and 99454 cannot both be billed in the same 30-day period for the same patient. The transmission-day count in that specific period determines which single code applies. A patient who transmits 20 days in one 30-day period and 10 days in the next would be billed 99454 for the first period and 99445 for the second.
        </p>
        <p>
          This change helps practices correctly report qualifying monitoring for patients whose device engagement varies across 30-day monitoring periods — a common real-world pattern, especially early in enrollment — where the prior all-or-nothing 16-day threshold left shorter engagement unreportable.
        </p>
        <p>
          <strong>Example:</strong> A patient transmits blood-pressure data on 12 separate days during a 30-day monitoring period. All other RPM requirements (medical necessity, device standards, consent) are met. That period's device-supply activity may support 99445 rather than 99454, since transmission fell within the 2–15 day range. Verify the applicable code against the actual dates logged, not an estimate.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          CPT 99470 vs. 99457: Which treatment-management code applies?
        </h2>

        <blockquote className="border-l-4 border-[#d946ef] bg-purple-50 pl-4 pr-4 py-3 my-6 italic text-gray-700">
          Quick answer: Use 99470 when qualifying monthly treatment-management time reaches 10–19 minutes and 99457 when it reaches 20–39 minutes; 99458 may apply beginning at 40 total minutes.
        </blockquote>

        <p>
          The second new 2026 decision mirrors the first, but for treatment-management time within a calendar month rather than data-transmission days within a 30-day period.
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>CPT 99457</strong> covers the first 20 minutes of cumulative RPM treatment-management time (clinical staff/physician/QHP) in a calendar month, including at least one real-time interactive communication with the patient or caregiver. 99458 is billable for each additional 20 minutes of cumulative time in the same month — unit limits are subject to CPT instructions, medical necessity, and payer/MAC policy, so verify limits before billing more than one additional unit.</li>
          <li><strong>CPT 99470 (new for 2026)</strong> covers the first 10 minutes of cumulative RPM treatment-management time in a calendar month, also including at least one real-time interactive communication. It's used instead of 99457 when the documented monthly time reaches this level but doesn't reach the 20-minute threshold — time that, before 2026, fell short of what could be billed at all.</li>
        </ul>

        <p>
          99457 and 99470 cannot both be billed in the same calendar month for the same patient. If a patient's monthly cumulative treatment-management time totals 20 minutes or more (with the required interactive communication), bill 99457, plus 99458 for additional 20-minute increments. If it totals 10–19 minutes, bill 99470 instead.
        </p>
        <p>
          Like 99445, this change helps practices correctly report qualifying monthly engagement that falls short of the traditional 20-minute bar — previously an all-or-nothing threshold, now a two-tier system that creates a billable pathway for shorter, real engagement.
        </p>
        <p>
          <strong>Example:</strong> Fourteen minutes of qualifying monthly treatment-management work, including the required real-time interactive communication, may support 99470. Twenty-six minutes may support 99457 only — 99458 covers each additional 20 minutes, not any amount beyond the initial 20, so 26 minutes doesn't reach a billable additional unit. Forty minutes may support 99457 plus one unit of 99458, subject to medical necessity, CPT instructions, MUEs, and payer or MAC rules. No time may also be counted toward CCM, TCM, or another billed service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What counts as interactive communication?
        </h2>
        <p>
          Interactive communication is a defined term, not just any contact with the patient. In the CY 2021 Physician Fee Schedule final rule, CMS stated that interactive communication for these codes "involves, at a minimum, real-time synchronous, two-way audio interaction that is capable of being enhanced with video or other kinds of data transmission" — between the patient or caregiver and clinical staff, a physician, or another qualified healthcare professional, actively exchanging information about the monitored condition. A one-way text alert or an unreturned voicemail doesn't qualify.
        </p>
        <p>
          CMS has not established that a fully automated AI interaction independently satisfies the interactive-communication requirement. In the CY 2026 final rule, commenters specifically asked CMS to clarify whether automated bi-directional messaging and AI prompts could count toward this requirement — and CMS declined to give an affirmative answer, instead adopting the CPT Manual's language and stating it is "not specifying further exclusions for the types of communications that can be had with the patient/caregiver, so long as they meet the CPT specifications." Practices should treat that as an open question, not a green light.
        </p>
        <p>
          Interactive communication does not have to represent the entirety of the reported treatment-management time: the code requires cumulative time that includes at least one qualifying interactive communication, not 20 (or 10) minutes composed entirely of that conversation. Time spent reviewing device data without patient interaction contributes to that cumulative time, but at least one real-time interactive communication must still occur during the reported period.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Can RPM and CCM be billed together?
        </h2>
        <p>
          RPM may be reported concurrently with Chronic Care Management and Transitional Care Management when all requirements for each service are independently met. The governing rule is that the same staff time, interaction, or work may not be counted toward more than one billed service — documentation should clearly identify which activities support each program. RPM and CCM can create a meaningful concurrent reimbursement opportunity for patients with chronic conditions generating device data, since RPM's device-driven billing (setup, device supply, and treatment-management time) is separate from CCM's care-coordination time, as long as no minute is counted twice. CMS confirms this concurrent-billing structure in its CCM guidance. See our{' '}
          <Link href="/resources/compare/rpm-vs-ccm-medicare-billing" className="text-[#d946ef] hover:underline">
            RPM vs. CCM Medicare billing comparison
          </Link>{' '}
          for how the two programs' eligibility and time rules differ.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          What changed for RPM in the 2026 Medicare Physician Fee Schedule
        </h2>
        <p>
          CMS's CY 2026 Physician Fee Schedule final rule (CMS-1832-F), effective January 1, 2026, introduced the two new RPM codes described above — 99445 and 99470 — to create billable pathways for partial-period engagement that the prior all-or-nothing thresholds excluded. Beyond the new codes:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Two conversion factors took effect in CY 2026: approximately $33.5675 for qualifying APM participants and $33.4009 for non-QPs, both increases over CY 2025.</li>
          <li>CMS finalized a -2.5% efficiency adjustment for non-time-based work RVUs, but exempted time-based care-management services — including RPM's treatment-management codes (99457, 99458, 99470) — from that cut. CMS also revised aspects of its practice-expense methodology for certain remote-monitoring services, including finalizing equal valuation for 99445 and 99454.</li>
          <li>Net effect: final code-level payment amounts reflect the conversion factor, finalized RVUs, geographic adjustments, and other Physician Fee Schedule methodology — not a single uniform percentage change. Verify locality-specific amounts in the CMS PFS Look-Up Tool rather than applying a flat adjustment.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          RPM documentation checklist
        </h2>
        <p>To support an RPM claim, documentation should generally establish:</p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Medical necessity and the specific condition being monitored</li>
          <li>Documented patient consent</li>
          <li>A qualifying connected medical device meeting the FDA device definition</li>
          <li>The specific calendar dates on which physiologic data was transmitted, within the relevant 30-day monitoring period</li>
          <li>Date, duration, and content of each treatment-management activity within the relevant calendar month</li>
          <li>The identity and role of the staff member or practitioner performing each activity</li>
          <li>At least one qualifying real-time interactive communication with the patient or caregiver</li>
          <li>The clinical content of that communication and any resulting action (care plan updates, escalations, and so on)</li>
          <li>Clear separation of time counted toward RPM from time counted toward CCM, TCM, or any other billed service</li>
          <li>Practitioner oversight and, where applicable, alignment with the patient's plan of care</li>
        </ul>

        <p>
          A single unsupported monthly total may not provide enough detail to substantiate the billed service — documentation should allow the practice or a reviewer to trace billed time back to the specific dates, staff, and activities above. Practices should also follow any additional documentation requirements from their MAC or payer.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Common RPM billing and documentation risks
        </h2>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>99454 or 99445 billed without meeting the transmission-day threshold for that specific code.</strong> The count resets every 30-day period — a strong period doesn't carry over data-transmission credit to a weak one.</li>
          <li><strong>99454 and 99445 both billed for the same patient in the same 30-day period.</strong> Only one device-supply code applies per period, determined by that period's actual transmission-day count.</li>
          <li><strong>99457 or 99470 billed without a qualifying real-time interactive communication occurring during the reported month.</strong> Cumulative time built entirely from passive device-data review, with no live patient or caregiver contact, does not satisfy the requirement underlying either code.</li>
          <li><strong>99457 and 99470 both billed for the same patient in the same month.</strong> Only one treatment-management code applies per month, based on actual cumulative time logged.</li>
          <li><strong>RPM time double-counted against CCM or TCM.</strong> The same staff time, interaction, or work may not be counted toward more than one billed service.</li>
          <li><strong>Time aggregated rather than itemized by date, duration, staff member, and activity.</strong> See the documentation checklist above for what a defensible record generally includes.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          The operational implication
        </h2>
        <p>
          RPM's 2026 additions create reporting pathways when activity meets the new 2–15 transmission-day threshold or the new 10-minute treatment-management threshold, even when it doesn't meet the older 16-day or 20-minute thresholds. The tradeoff is that RPM programs now have two separate threshold decisions to track and correctly apply for every enrolled patient, every period.
        </p>
        <p>
          Positive Check supports RPM operations by automating structured outreach, documenting patient responses, and surfacing patients who may need follow-up from clinical staff. These automated interactions do not independently establish billable RPM treatment-management time or satisfy the required real-time interactive communication with clinical staff, a physician, or another qualified healthcare professional — the billing practice must determine which staff activities and patient interactions meet applicable CPT and Medicare requirements, and practitioner oversight, care plan management, and claim submission remain with the billing practice throughout.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">See how it works</h2>
          <p className="font-medium text-lg mb-4">
            Want to see what consistent RPM engagement looks like at scale? Positive Check helps RPM, CCM, and TCM teams automate structured patient outreach, organize documentation, and surface patients who need human follow-up. Request a demo to see how it fits into your RPM workflow.
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

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Frequently asked questions
        </h2>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          What's the difference between CPT 99454 and CPT 99445?
        </h3>
        <p>
          Both are RPM device-supply codes billed per 30-day period, valued the same by CMS, but they apply to different transmission-day counts: 99454 requires 16 or more days of data transmission in the period, while 99445 (new in 2026) applies to 2–15 days. Only one can be billed per patient per period.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          What's the difference between CPT 99457 and CPT 99470?
        </h3>
        <p>
          Both cover cumulative monthly treatment-management time that includes at least one real-time interactive communication, but at different thresholds: 99457 requires 20 or more minutes (with 99458 available for additional 20-minute increments), while 99470 (new in 2026) applies when the total reaches 10 minutes but not 20. Only one applies per patient per month.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          Can RPM and CCM be billed for the same patient in the same month?
        </h3>
        <p>
          Yes, when each program's requirements are independently met and the same staff time, interaction, or work is not counted toward more than one billed service.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          Does RPM require two or more chronic conditions like CCM?
        </h3>
        <p>
          No. Medicare covers RPM for an acute or chronic condition when monitoring is medically reasonable and necessary and the other applicable requirements are met. This differs from CCM, which generally requires two or more qualifying chronic conditions.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          What counts as "interactive communication" for RPM billing?
        </h3>
        <p>
          Real-time, synchronous, two-way audio communication (which can be enhanced with video or other technology) between the patient or caregiver and clinical staff, a physician, or another qualified healthcare professional, about the monitored condition. At least one such communication must occur during the reported period, though it doesn't have to account for the entire cumulative treatment-management time.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
          Can an automated call or AI-driven check-in satisfy the interactive communication requirement?
        </h3>
        <p>
          It has not been established that an automated interaction independently satisfies the requirement. CMS was directly asked whether automated bidirectional messaging and AI prompts could qualify and did not give an affirmative answer, instead referring back to CPT specifications. Practices should therefore not assume automated outreach alone creates billable treatment-management time or satisfies the required interactive communication — qualified clinical and billing personnel should determine which human interactions meet current CPT, CMS, MAC, and payer requirements.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          This article is for educational and operational guidance and does not constitute billing, legal, or clinical advice. CPT code reimbursement amounts cited are approximate 2026 Medicare non-facility national averages; actual reimbursement varies by geographic locality, setting, payer, MAC, and applicable Medicare payment rules. For your practice's specific billing questions, consult a qualified medical coder, your Medicare Administrative Contractor, or the CMS Physician Fee Schedule Look-Up Tool.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Primary sources cited</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
            <li>
              CMS Physician Fee Schedule Look-Up Tool —{' '}
              <a href="https://www.cms.gov/medicare/physician-fee-schedule/search/overview" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/medicare/physician-fee-schedule/search/overview</a>
            </li>
            <li>
              CMS MLN Matters MM14315: Medicare Physician Fee Schedule Final Rule Summary CY 2026 —{' '}
              <a href="https://www.cms.gov/files/document/mm14315-medicare-physician-fee-schedule-final-rule-summary-cy-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/files/document/mm14315-medicare-physician-fee-schedule-final-rule-summary-cy-2026.pdf</a>
            </li>
            <li>
              CMS Newsroom Fact Sheet: Calendar Year (CY) 2026 Medicare Physician Fee Schedule Final Rule (CMS-1832-F) —{' '}
              <a href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-medicare-physician-fee-schedule-final-rule-cms-1832-f" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-medicare-physician-fee-schedule-final-rule-cms-1832-f</a>
            </li>
            <li>
              Federal Register: Medicare and Medicaid Programs; CY 2026 Payment Policies Under the Physician Fee Schedule —{' '}
              <a href="https://www.federalregister.gov/documents/2025/11/05/2025-19787/medicare-and-medicaid-programs-cy-2026-payment-policies-under-the-physician-fee-schedule-and-other" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.federalregister.gov/documents/2025/11/05/2025-19787/medicare-and-medicaid-programs-cy-2026-payment-policies-under-the-physician-fee-schedule-and-other</a>
            </li>
            <li>
              CMS: Remote Patient Monitoring coverage page —{' '}
              <a href="https://www.cms.gov/medicare/coverage/telehealth/remote-patient-monitoring" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/medicare/coverage/telehealth/remote-patient-monitoring</a>
            </li>
            <li>
              Telehealth.HHS.gov: Billing for Remote Patient Monitoring —{' '}
              <a href="https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient</a>
            </li>
            <li>
              CMS MLN909188: Chronic Care Management Services (concurrent-billing guidance) —{' '}
              <a href="https://www.cms.gov/files/document/chroniccaremanagement.pdf" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.cms.gov/files/document/chroniccaremanagement.pdf</a>
            </li>
            <li>
              Nixon Law Group: CMS Finalizes 2026 Remote Monitoring Reimbursement Updates (secondary analysis quoting the CY 2026 final rule's comment/response on interactive communication and AI prompts) —{' '}
              <a href="https://www.nixonlawgroup.com/resources/cms-finalizes-2026-remote-monitoring-reimbursement-updates-what-changed-for-rpm-and-rtm" target="_blank" rel="noopener noreferrer" className="text-[#d946ef] hover:underline break-words">https://www.nixonlawgroup.com/resources/cms-finalizes-2026-remote-monitoring-reimbursement-updates-what-changed-for-rpm-and-rtm</a>
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/resources/billing-guide"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Medicare Billing Guide</h3>
              <p className="text-sm text-gray-600">Full RPM, CCM, TCM, and PCM reference for practices and care teams.</p>
            </Link>
            <Link
              href="/resources/compare/rpm-vs-ccm-medicare-billing"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">RPM vs. CCM Medicare Billing Comparison</h3>
              <p className="text-sm text-gray-600">How Remote Patient Monitoring and Chronic Care Management compare, and when each is the right fit.</p>
            </Link>
            <Link
              href="/solutions/remote-patient-monitoring/cpt-99457-billing-guide"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">CPT 99457 Billing Guide</h3>
              <p className="text-sm text-gray-600">A focused guide to RPM treatment-management billing under CPT 99457.</p>
            </Link>
            <Link
              href="/solutions/remote-patient-monitoring"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Remote Patient Monitoring Solution</h3>
              <p className="text-sm text-gray-600">How Positive Check supports RPM programs with automated patient outreach.</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
