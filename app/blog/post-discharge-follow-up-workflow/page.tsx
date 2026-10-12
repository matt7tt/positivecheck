import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { StructuredData, buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'
import { TCM_WORKFLOW_POST as post } from '@/lib/blog-posts'

const url = `https://www.positivecheck.com/blog/${post.slug}`
export const metadata: Metadata = {
  title: `${post.title} | Positive Check`, description: post.description, alternates: { canonical: `/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, url, type: 'article', publishedTime: post.datePublished, modifiedTime: post.dateModified, images: [post.image] },
  twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.image] },
}
const faqs = [
  { question: 'What should a post-discharge outreach queue show?', answer: 'A useful outreach queue shows who owns the next action, the discharge date, contact attempts, the latest outcome and unresolved requests. Keep successful contact separate from an attempted call or delivered message. The team should be able to find patients still awaiting review without searching individual transcripts or assuming that a completed automated task means follow-up is finished.' },
  { question: 'Who owns scheduling versus clinical questions?', answer: 'Assign scheduling questions to an authorized scheduling team and clinical questions to the appropriate care team. A request for an appointment is not a confirmed booking, and a reported concern is not a clinical assessment. Define how the recipient acknowledges the handoff and where the final action is recorded so that neither team assumes the other has finished it.' },
  { question: 'What should happen when an automated call is unsuccessful?', answer: 'An unsuccessful call should remain an unresolved outreach outcome, not be marked as a completed conversation. Follow the practice-approved contact plan, record what happened and send unresolved cases to the designated staff owner. Evaluate wrong numbers, voicemail and requests to stop contact during testing, so the workflow has an explicit next step rather than unlimited automatic retries.' },
  { question: 'Can a practice start without a complex integration?', answer: 'Start by confirming how the team can provide an accurate discharge list and receive actionable results. A limited pilot may use a simpler supported handoff, but someone must own updates, duplicate checks and reconciliation with the system of record. Do not assume a live EHR feed or automatic write-back until the specific connection has been verified.' },
  { question: 'How should a care manager evaluate a pilot?', answer: 'Evaluate whether the workflow reliably puts the right next action in front of the right person. Review unresolved contacts, handoff delays, staff follow-up workload and discrepancies between the outreach record and the practice record. Use a defined patient cohort and reporting period; a high volume of calls alone does not demonstrate better care or a reduction in readmissions.' },
  { question: 'Where should the team review billing requirements?', answer: 'Use the current CMS materials and the practice’s billing review process for reimbursement decisions. This article is an operational planning guide, not a complete code checklist or a billing determination. Keep an explicit distinction between software-generated outreach records and the professional services documented by the practice, and verify payer-specific requirements before submitting claims.' },
]

export default function PostDischargeWorkflowPage() {
  return <>
    <StructuredData id="tcm-workflow-article" data={buildArticleSchema({ type: 'BlogPosting', headline: post.title, description: post.description, image: `https://www.positivecheck.com${post.image}`, datePublished: post.datePublished, dateModified: post.dateModified, url, articleSection: post.articleSection, keywords: post.keywords })} />
    <StructuredData id="tcm-workflow-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', url: 'https://www.positivecheck.com' }, { name: 'Blog', url: 'https://www.positivecheck.com/blog' }, { name: post.title, url }])} />
    <StructuredData id="tcm-workflow-faq" data={buildFAQSchema(faqs)} />
    <PublicHeader currentPage="blog" />
    <main className="mx-auto max-w-4xl px-6 py-14">
      <article className="space-y-8 text-gray-700 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_p]:leading-relaxed">
        <header>
          <Link href="/blog" className="text-purple-700 underline">Provider insights</Link>
          <h1 className="my-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{post.title}</h1>
          <p className="text-sm">By the Positive Check Team · <time dateTime={post.datePublished}>{post.displayDate}</time> · {post.readTime}</p>
          <p className="mt-6 text-xl">Post-discharge outreach works only when someone owns what happens after the contact attempt. Build the process around a reliable discharge list, an explicit staff handoff and a recorded outcome—not around the number of calls a system can place.</p>
        </header>
        <section className="space-y-4"><h2>Keep TCM requirements separate from automation</h2>
          <p>CMS describes TCM as a 30-day service period beginning on discharge. Required interactive contact is generally within two business days and must address patient status and needs beyond scheduling. CPT 99495 requires at least moderate-complexity medical decision-making and a visit within 14 calendar days; 99496 requires high-complexity decision-making and a visit within seven. Medication reconciliation is due on or before that visit. These are selected requirements, not a complete billing checklist. <a href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf" className="text-purple-700 underline">Source: CMS TCM Services booklet, August 2025, pages 3–6</a>.</p>
          <p>An AI call, reminder or appointment request should not be treated as proof that the practice has met those requirements. Lola supports outreach and information handoffs; the practice retains clinical responsibility and determines whether its documented services qualify for billing.</p>
        </section>
        <section className="space-y-4"><h2>1. Start with an owned discharge list</h2>
          <p>Identify who supplies and reviews the discharge list, when it is refreshed and how corrections are handled. Confirm the intended recipient and contact channel through the practice’s approved process. A duplicate or stale record should be resolved before it creates another outreach attempt.</p>
          <p>For a pilot, define one cohort and one accountable care manager. Document the source of each record and how the team will reconcile new discharges with existing follow-up activity. Test the intake process with synthetic records before using patient information.</p>
        </section>
        <section className="space-y-4"><h2>2. Make each outreach outcome actionable</h2>
          <p>Use distinct outcomes for no answer, voicemail, wrong number, a completed conversation and a request needing staff attention. Agree on the approved questions, contact windows and escalation instructions before launch. Unexpected responses should have a human owner rather than being forced into a successful-contact category.</p>
          <p>Record what is known and what still needs confirmation. For example, a patient saying they want help arranging a visit creates a scheduling request. It does not establish that an appointment exists or that the patient has received clinical guidance.</p>
        </section>
        <section className="space-y-4"><h2>3. Close the handoff between Front Office and Care Management</h2>
          <p>Front Office can handle appointment logistics while Care Management reviews concerns and coordinates the appropriate professional follow-up. The two queues should share an explicit ownership rule: who accepts the next task, what information they receive and how the originating team learns that action was taken.</p>
          <p>Walk through a fictional example: an outreach conversation produces a request for a visit and a question for the care team. Send the appointment request to the scheduler and the question to the care manager. Keep both open until the responsible person records the outcome. This is a planning example, not a customer result or a promise of a particular integration.</p>
        </section>
        <ContentConversionCta source="tcm_workflow_blog" title="Walk through a post-discharge workflow" description="Bring your discharge-list process and staff handoff questions to a 15-minute demo. We’ll use synthetic examples; please do not send patient information." buttonText="Request a workflow demo" secondaryText="Review the TCM solution" secondaryHref="/solutions/post-discharge-follow-up" secondaryCtaName="view_tcm_solution" />
        <section className="space-y-4"><h2>4. Review unresolved work, not just completed calls</h2>
          <p>A daily operational review should reveal contacts still awaiting action, handoffs without an acknowledged owner and mismatches between the outreach record and the practice’s system. Choose thresholds and stop conditions that the care team can actually support. Confirm the response process during staffed and unstaffed hours.</p>
          <p>For evaluation, keep attempted, reached, reviewed and resolved counts separate. State the denominator and reporting period for every rate. Review staff time spent on follow-up as well as automation activity. Do not infer reduced readmissions or reimbursement gains from a contact rate alone.</p>
        </section>
        <section className="space-y-4"><h2>Questions to settle before a pilot</h2>{faqs.map(faq => <section key={faq.question}><h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.question}</h3><p>{faq.answer}</p></section>)}</section>
        <section className="space-y-4"><h2>Related provider resources</h2><ul className="list-disc space-y-2 pl-5">
          <li><Link href="/solutions/post-discharge-follow-up/post-discharge-contact-timing" className="text-purple-700 underline">Post-discharge contact timing</Link></li>
          <li><Link href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide" className="text-purple-700 underline">CPT 99495 billing guide</Link></li>
          <li><Link href="/solutions/front-office/scheduling-confirmations" className="text-purple-700 underline">Scheduling and confirmation workflows</Link></li>
          <li><Link href="/resources/implementation-guide" className="text-purple-700 underline">Implementation and pilot planning</Link></li>
        </ul></section>
        <p className="border-t pt-5 text-sm">Operational guidance from Positive Check, not patient-specific medical advice or a reimbursement guarantee. No independent clinical reviewer is claimed. Confirm clinical protocols and billing decisions with the appropriate professionals at your practice.</p>
      </article>
    </main>
    <PublicFooter />
  </>
}
