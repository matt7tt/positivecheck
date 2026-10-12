import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'
import { frontOfficeSolutions } from '@/lib/solution-catalog'

const title = 'AI Calls & SMS vs. Front Desk Staff and Reminder Tools'
const description = 'Compare front office outreach approaches by task, staff handoff, scheduling integration and measurable outcomes. Choose a workflow before choosing automation.'
const url = 'https://www.positivecheck.com/solutions/front-office/compare'
export const metadata: Metadata = { title: `${title} | Positive Check`, description, alternates: { canonical: url }, openGraph: { title, description, url, type: 'website' }, twitter: { card: 'summary_large_image', title, description, images: ['/images/admin-console-dashboard-new.png'] } }
const comparisons = [
  ['New patient inquiry', 'A person can discuss unusual requests and practice policies; coverage depends on staffing.', 'A basic reminder workflow may not handle new inquiries; check the actual product.', 'Evaluate prompt follow-up, approved questions and an explicit handoff for exceptions.'],
  ['Appointment confirmation', 'Staff can check availability and resolve conflicts directly.', 'Often suitable for scheduled messages and simple confirmation responses.', 'Evaluate conversational clarification and whether a requested change reaches an authorized scheduler.'],
  ['Reminder or notification', 'Useful when the message needs judgment or sensitive context.', 'May be sufficient for predictable, one-way messages or simple reply options.', 'Consider calls and SMS when follow-up questions or response capture justify the added workflow.'],
  ['Calendar updates', 'Staff use the practice’s existing scheduling system.', 'Capabilities depend on the specific integration and permissions.', 'Confirm supported connections and write access; a patient’s requested slot is not a booking.'],
  ['Exceptions and ownership', 'A trained person can resolve issues within their role.', 'Unrecognized replies may need a separate staff queue.', 'Define who handles uncertainty, failed contact, opt-outs and clinical concerns before launch.'],
  ['Cost and effort', 'Include outreach time, interruptions, coverage and training.', 'Include subscription costs, setup and manual work outside the tool.', 'Include configuration, usage, integration, staff review and quality checks—not just call cost.'],
]
const faqs = [
  { question: 'When is a basic appointment reminder tool enough?', answer: 'A basic reminder tool may be enough when the appointment is already booked, the message is predictable and responses need little interpretation. Check how it handles cancellations, wrong numbers and replies outside its expected choices. If staff still spend substantial time resolving those replies, evaluate that specific gap before replacing a working reminder system.' },
  { question: 'Does AI front office outreach replace reception staff?', answer: 'AI outreach should not be assumed to replace reception staff. Practice staff still own exceptions, scheduling commitments, sensitive conversations and decisions outside an approved workflow. Evaluate which repeatable calls or messages can be supported, then measure the review and follow-up work that remains. Headcount savings cannot be inferred from the number of automated contacts.' },
  { question: 'How is Positive Check different from a one-way reminder?', answer: 'Positive Check offers Lola voice calls and SMS for front office tasks as well as care management outreach. The relevant evaluation is whether a configured conversation can capture the response your team needs and support its next action. Test your actual task, including unexpected replies and staff handoffs, rather than assuming every reminder requires conversational AI.' },
  { question: 'What should we verify about scheduling integrations?', answer: 'Verify the exact calendar or practice-management system, available permissions and where the confirmed appointment record will live. Ask to see both a successful request and a failed or conflicting request. Until a supported booking connection is confirmed, treat collected preferences as requests for staff review, not appointments automatically written into your calendar.' },
  { question: 'Can we keep our existing process and test one task?', answer: 'Yes—evaluate a narrowly scoped task before considering a wider change. Keep a defined staff fallback and agree on the outcomes, review process and stop conditions for the evaluation. Comparing the new workflow with the existing process is more useful than changing every channel at once, because it makes failures and additional staff work easier to identify.' },
  { question: 'How should a practice compare return on investment?', answer: 'Compare total workflow cost with useful outcomes, such as a completed staff follow-up or a confirmed appointment in the system of record. Include setup, usage, oversight and exception handling alongside staff time. Keep contacted, booked and attended counts separate. A practice-specific baseline and pilot are needed before making claims about savings or additional revenue.' },
]

export default function FrontOfficeComparisonPage() {
  return <>
    <StructuredData id="front-office-comparison-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', url: 'https://www.positivecheck.com' }, { name: 'Solutions', url: 'https://www.positivecheck.com/solutions' }, { name: title, url }])} />
    <StructuredData id="front-office-comparison-faq" data={buildFAQSchema(faqs)} />
    <PublicHeader currentPage="solutions" />
    <main className="mx-auto max-w-6xl px-6 py-14">
      <Link href="/solutions#front-office" className="font-semibold text-purple-700 underline">Front Office · For practice managers</Link>
      <h1 className="my-6 text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
      <p className="max-w-4xl text-xl leading-relaxed text-gray-700">Choose the smallest workflow that solves the problem. A simple reminder tool can be sufficient for routine messages; trained staff remain essential for exceptions. AI calls and SMS are worth evaluating when repeatable outreach needs a conversation and a clear handoff.</p>
      <p className="mt-5 text-sm text-gray-600">A Positive Check-authored category comparison, not an independent vendor benchmark. Features vary by product and configuration. We do not assume guaranteed cost savings, bookings or staff replacement.</p>
      <h2 className="mb-5 mt-12 text-2xl font-bold">Compare the work, not just the communication channel</h2>
      <div className="overflow-x-auto rounded-lg border" role="region" aria-label="Front office approach comparison" tabIndex={0}>
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">Evaluation considerations for staff, basic reminder tools and AI calls and SMS</caption>
          <thead className="bg-purple-50"><tr>{['Task or consideration', 'Front desk staff', 'Basic reminder tools', 'AI calls and SMS'].map(h => <th key={h} scope="col" className="p-4">{h}</th>)}</tr></thead>
          <tbody>{comparisons.map(([task, ...cells]) => <tr key={task} className="border-t"><th scope="row" className="p-4 align-top">{task}</th>{cells.map(text => <td key={text} className="p-4 align-top leading-relaxed text-gray-700">{text}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <ContentConversionCta source="front_office_comparison" title="Compare one real front office workflow" description="Bring your current process, volume and scheduling system to a 15-minute demo. Use synthetic examples only. We’ll discuss what to verify before a pilot." buttonText="Request a Front Office demo" secondaryText="Plan an implementation" secondaryHref="/resources/implementation-guide" secondaryCtaName="view_implementation_guide" />
      <h2 className="mb-4 text-2xl font-bold">Include the hybrid and do-nothing options</h2>
      <p className="leading-relaxed text-gray-700">Keeping the existing process may be the right choice when volumes are low and follow-up is reliable. A hybrid workflow keeps people responsible for exceptions while using software for repeatable outreach. Building a workflow internally is another option, but assign owners for integrations, message changes, delivery failures and ongoing quality checks—not just the initial build.</p>
      <h2 className="mb-4 mt-10 text-2xl font-bold">Decide how the pilot can fail before it starts</h2>
      <p className="leading-relaxed text-gray-700">Select one task and define a successful outcome in your system of record. Review a wrong-number scenario, an opt-out, an unanswered attempt, a scheduling conflict and a request needing a person. Confirm who sees each outcome and how quickly they should act. Pause expansion if staff cannot reliably find and resolve the exceptions.</p>
      <h2 className="mb-5 mt-10 text-2xl font-bold">Questions from practice managers</h2>
      <div className="space-y-6">{faqs.map(faq => <section key={faq.question}><h3 className="mb-2 text-lg font-semibold">{faq.question}</h3><p className="leading-relaxed text-gray-700">{faq.answer}</p></section>)}</div>
      <h2 className="mb-4 mt-10 text-2xl font-bold">Explore the task you want to improve</h2>
      <ul className="list-disc space-y-2 pl-5">{frontOfficeSolutions.map(s => <li key={s.slug}><Link href={`/solutions/front-office/${s.slug}`} className="text-purple-700 underline">{s.name}</Link></li>)}</ul>
      <p className="mt-8 text-sm text-gray-500">Published by Positive Check. Updated October 9, 2026.</p>
    </main>
    <PublicFooter />
  </>
}
