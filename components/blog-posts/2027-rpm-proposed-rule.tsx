import Image from "next/image"
import Link from "next/link"
import { KeyTakeaways, PostFAQ, type PostFAQItem, PostMeta } from "@/components/blog-posts/post-blocks"
import { TrackedExternalLink } from "@/components/tracked-external-link"

export const RPM_2027_FAQ: PostFAQItem[] = [
  {
    question: "Is the 2027 RPM rule final?",
    answer:
      "No. CMS-1848-P is a proposed rule. Current RPM and RTM requirements remain in effect while CMS reviews comments and prepares the final CY 2027 Medicare Physician Fee Schedule rule.",
  },
  {
    question: "When is the deadline to comment on the 2027 proposed rule?",
    answer:
      "CMS lists September 14, 2026 as the comment deadline for CMS-1848-P. Organizations should use the submission instructions on the official CMS rule page.",
  },
  {
    question: "Would the proposal ban RPM software vendors?",
    answer:
      "It does not state a blanket ban on software vendors. The proposed payment restriction focuses on RPM and RTM services performed by clinical staff who are not employed by the billing practice. Practices should separate software, data-transmission, and administrative functions from billable clinical work and evaluate each workflow against the final rule.",
  },
  {
    question: "Can contracted staff support RPM under current Medicare policy?",
    answer:
      "Current CMS guidance permits certain RPM services to be furnished by auxiliary personnel under general supervision, and prior CMS rulemaking said auxiliary personnel can include contracted employees for setup and device-supply services. The precise requirements vary by code and payer. The 2027 proposal would materially narrow this approach if finalized as written.",
  },
  {
    question: "When could the proposed changes take effect?",
    answer:
      "If finalized, CY 2027 Medicare Physician Fee Schedule policies would generally take effect January 1, 2027. CMS may revise or decline to finalize individual provisions after reviewing public comments.",
  },
]

export function Rpm2027ProposedRulePost() {
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
          2027 RPM Proposed Rule: Initiating Visits, Employed Staff, and What Could Change
        </h1>

        <PostMeta
          datePublished="2026-07-30"
          displayDate="July 30, 2026"
          readTime="9 min read"
        />

        <Image
          src="/images/healthcare-administrator-desk.png"
          alt="Healthcare administrator reviewing remote patient monitoring policy and operations"
          width={1200}
          height={630}
          priority
          className="w-full aspect-[1200/630] object-cover rounded-lg mb-8 shadow-md border border-gray-200"
        />

        <KeyTakeaways
          summary="CMS has proposed consequential RPM and RTM changes for 2027, but none of them are final. Practices should model the operational impact now while continuing to follow current policy."
          points={[
            "CMS would require a separately reportable initiating visit at the start of RPM or RTM.",
            "CMS would pay for RPM and RTM only when the relevant clinical staff are employed by the billing practice, rather than supplied as contractors.",
            "The proposal would extend an established-patient relationship requirement to RTM; RPM already has an established-relationship requirement.",
            "CMS is also seeking feedback on code valuation and possible bundled HCPCS G-codes for remote monitoring.",
            "Comments on CMS-1848-P are due September 14, 2026. Current rules remain in effect unless and until CMS finalizes changes.",
          ]}
        />

        <p className="lead-paragraph">
          In the CY 2027 Medicare Physician Fee Schedule proposed rule, CMS is considering changes that could reshape how practices start, staff, and bill Remote Patient Monitoring (RPM) and Remote Therapeutic Monitoring (RTM). The most immediate proposals are a separately reportable initiating visit and an employment requirement for clinical staff who perform remote-monitoring services. CMS is also reconsidering how the code families are valued and structured.
        </p>

        <p>
          The essential qualifier is <strong>proposed</strong>. CMS published the proposal on July 14, 2026, and lists a September 14, 2026 comment deadline. The agency can modify or decline to finalize any provision. Practices should not change claims based on the proposal alone.
        </p>

        <h2>What did CMS propose for RPM and RTM in 2027?</h2>

        <p>
          CMS identified four policy areas that deserve immediate attention from billing practitioners, care-management operators, and remote-monitoring vendors:
        </p>

        <ol>
          <li>
            <strong>A separately reportable initiating visit.</strong> At the onset of RPM or RTM, the practitioner would need to furnish an initiating visit that is separately reportable.
          </li>
          <li>
            <strong>An established relationship for RTM.</strong> CMS would apply an established-patient relationship requirement to RTM, aligning it more closely with RPM.
          </li>
          <li>
            <strong>Practice-employed clinical staff.</strong> CMS says payment would be made only when RPM and RTM services performed by clinical staff are furnished by staff employed by the billing practice, not contractors.
          </li>
          <li>
            <strong>Possible valuation and code-structure changes.</strong> CMS proposes valuation changes and is seeking comment on whether existing RPM and RTM codes should be bundled, including through four possible HCPCS G-codes.
          </li>
        </ol>

        <h2>Current policy versus the 2027 proposal</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 p-3 font-semibold">Issue</th>
                <th className="border border-gray-200 p-3 font-semibold">Current CMS policy</th>
                <th className="border border-gray-200 p-3 font-semibold">CY 2027 proposal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">Patient relationship</td>
                <td className="border border-gray-200 p-3">RPM requires an established relationship; CMS guidance does not apply the same requirement to RTM.</td>
                <td className="border border-gray-200 p-3">Require an established relationship for both RPM and RTM.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-semibold">Initiating service</td>
                <td className="border border-gray-200 p-3">Current remote-monitoring policy does not impose the proposed, separately reportable initiating visit across both programs.</td>
                <td className="border border-gray-200 p-3">Require a separately reportable visit when RPM or RTM begins.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">Clinical staffing</td>
                <td className="border border-gray-200 p-3">Certain services may be furnished by auxiliary personnel under general supervision; earlier CMS rulemaking recognizes contracted employees in specified RPM contexts.</td>
                <td className="border border-gray-200 p-3">Pay only when clinical-staff services are furnished by staff employed by the billing practice.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-semibold">Code structure</td>
                <td className="border border-gray-200 p-3">Practices use the existing CPT code families and their component requirements.</td>
                <td className="border border-gray-200 p-3">Revise valuation and gather comments on possible bundling and new HCPCS G-codes.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-semibold">Effective date</td>
                <td className="border border-gray-200 p-3">Current rules apply now.</td>
                <td className="border border-gray-200 p-3">Generally January 1, 2027 if provisions are finalized.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What the proposed employment restriction could mean</h2>

        <p>
          The proposed language is most consequential for arrangements in which a third party supplies clinical staff who perform the work represented by an RPM or RTM claim. If finalized as written, practices using outsourced clinical labor would need to determine whether the personnel performing each billable activity meet CMS&apos;s employment requirement.
        </p>

        <p>
          This should not be read as an automatic prohibition on every outside technology company. A software platform, connected device supplier, data-transmission service, or administrative vendor is not necessarily performing the clinical-staff service billed by the practice. The key operational question is <em>who performs the work represented by each code</em>, under whose supervision, and with what employment relationship.
        </p>

        <blockquote className="border-l-4 border-[#d946ef] bg-purple-50 pl-4 pr-4 py-3 my-6 text-gray-700">
          Do not classify the entire vendor relationship with one label. Map setup, device supply, data review, patient communication, treatment management, escalation, documentation, and billing separately.
        </blockquote>

        <p>
          CMS may clarify the scope in the final rule. Until then, practices should have compliance counsel and billing specialists review their specific contracts and workflows rather than treating this article as a billing determination.
        </p>

        <h2>How an initiating-visit requirement could affect enrollment</h2>

        <p>
          An initiating visit could add clinical capacity, scheduling, documentation, and patient-conversion steps before monitoring begins. Programs built around rapid remote enrollment should model the effect on time-to-start and determine which eligible practitioners can furnish the visit. They should also avoid assuming that a recent unrelated encounter will satisfy a requirement whose final details CMS has not yet established.
        </p>

        <p>
          The same operational map should distinguish the initiating visit from device setup, patient education, transmission, and monthly treatment-management activities. Separate documentation makes it easier to test workflows against the eventual final language.
        </p>

        <h2>Why the valuation and G-code discussion matters</h2>

        <p>
          The proposal goes beyond staffing. CMS is considering whether the current component-based code structure appropriately reflects resource costs and is requesting comments on bundling RPM and RTM through potential HCPCS G-codes. A bundled structure could change which activities are reported separately, how incomplete monitoring periods are treated, and how practices forecast program economics.
        </p>

        <p>
          This is an area for scenario planning, not a new 2027 revenue forecast. CMS is soliciting input, and any final code descriptions, valuations, or billing rules may differ from the concepts discussed in the proposal.
        </p>

        <h2>What practices should do before September 14</h2>

        <ul>
          <li><strong>Inventory every person involved.</strong> Record who performs setup, education, review, communication, treatment management, escalation, and documentation.</li>
          <li><strong>Identify employment status.</strong> Separate practice employees, independent contractors, vendor personnel, and practitioner work.</li>
          <li><strong>Map work to codes.</strong> Do not assume every remote-monitoring task is a clinical-staff service or billable activity.</li>
          <li><strong>Model the initiating visit.</strong> Estimate scheduling capacity, patient drop-off, documentation changes, and cost.</li>
          <li><strong>Review vendor agreements.</strong> Confirm the scope of software, administrative support, and clinical labor instead of relying on marketing labels.</li>
          <li><strong>Submit specific comments.</strong> Give CMS concrete operational data, patient-access implications, and recommended clarifications through the official rulemaking process.</li>
          <li><strong>Wait for the final rule before changing claims.</strong> Continue following current CPT, CMS, MAC, and payer requirements.</li>
        </ul>

        <h2>How Positive Check fits into a practice-owned workflow</h2>

        <p>
          Positive Check provides automated patient outreach, structured documentation, risk signals, and care-team alerts. The platform can support a practice&apos;s remote-monitoring operations, but software use does not by itself make an activity billable or satisfy clinical-staff, supervision, time, device, or interactive-communication requirements.
        </p>

        <p>
          Practices remain responsible for determining which activities qualify, who may perform them, and whether all requirements are met. See our current <Link href="/blog/2026-rpm-cpt-codes" className="text-[#d946ef] hover:underline">2026 RPM billing guide</Link> for the rules in effect today, or <Link href="/contact" className="text-[#d946ef] hover:underline">request a workflow review</Link>.
        </p>

        <h2>Official sources</h2>

        <ul>
          <li>
            <TrackedExternalLink href="https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-proposed-rule" target="_blank" rel="noopener noreferrer" eventName="cms_source_click" eventParameters={{ source: "cy_2027_pfs_fact_sheet" }}>CMS CY 2027 Physician Fee Schedule proposed-rule fact sheet</TrackedExternalLink>
          </li>
          <li>
            <TrackedExternalLink href="https://www.cms.gov/medicare/payment/fee-schedules/physician/federal-regulation-notices/cms-1848-p" target="_blank" rel="noopener noreferrer" eventName="cms_source_click" eventParameters={{ source: "cms_1848_p" }}>CMS-1848-P rule page and comment information</TrackedExternalLink>
          </li>
          <li>
            <TrackedExternalLink href="https://www.cms.gov/files/document/mln901705-telehealth-remote-patient-monitoring.pdf" target="_blank" rel="noopener noreferrer" eventName="cms_source_click" eventParameters={{ source: "mln_remote_monitoring" }}>CMS Medicare Learning Network remote-monitoring guidance</TrackedExternalLink>
          </li>
          <li>
            <TrackedExternalLink href="https://www.cms.gov/newsroom/fact-sheets/final-policy-payment-and-quality-provisions-changes-medicare-physician-fee-schedule-calendar-year-1" target="_blank" rel="noopener noreferrer" eventName="cms_source_click" eventParameters={{ source: "cy_2021_pfs_fact_sheet" }}>CMS CY 2021 final-rule fact sheet describing RPM auxiliary personnel</TrackedExternalLink>
          </li>
        </ul>

        <p className="text-sm text-gray-600 mt-8">
          This article is for general educational purposes and is not legal, coding, or billing advice. CMS policy, CPT instructions, Medicare Administrative Contractor guidance, and payer rules should be reviewed for each billing situation. We will update this page when CMS publishes the final CY 2027 rule.
        </p>

        <PostFAQ items={RPM_2027_FAQ} />
      </article>
    </div>
  )
}
