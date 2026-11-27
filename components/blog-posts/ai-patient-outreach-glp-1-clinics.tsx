import Image from 'next/image'
import Link from 'next/link'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { GLP1_OUTREACH_POST as post } from '@/lib/blog-posts'

export const GLP1_OUTREACH_IMAGE_ALT = 'Smiling clinician in a white coat with a stethoscope sitting at a clinic desk'

export const GLP1_OUTREACH_FAQ = [
  {
    question: 'How can GLP-1 clinics improve patient retention?',
    answer: 'Stay in regular contact between visits. Check in after each dose increase, address side effects early, send refill and shipment updates, and follow up on the goals patients set. An AI care assistant can handle this routine outreach by phone and text so staff can focus on patients who need clinical attention.',
  },
  {
    question: 'Why do patients stop taking GLP-1 medications?',
    answer: 'The most common reasons are cost, side effects, lack of insurance coverage, and reaching a weight-loss goal. In a 2026 national survey, 36.1% cited cost and 33.3% cited side effects.',
  },
  {
    question: 'Can AI check on GLP-1 side effects?',
    answer: "An AI care assistant can ask patients about side effects using questions your clinical team approves, and flag concerns to staff. It doesn't diagnose or change treatment. Clinicians review alerts and decide next steps.",
  },
  {
    question: 'Does AI patient outreach work by text as well as phone?',
    answer: 'Yes. Lola supports both voice calls and two-way SMS. Some patients prefer a quick call, others would rather text, and offering both makes it easier for patients to respond.',
  },
  {
    question: 'Is AI patient outreach HIPAA compliant?',
    answer: 'It can be. Look for a vendor that signs a Business Associate Agreement (BAA) and handles patient conversations as protected health information. Positive Check signs a BAA with its clinic customers.',
  },
]

const DISCONTINUATION_REASONS = [
  ['Cost', '36.1%'],
  ['Side effects', '33.3%'],
  ['Lack of insurance coverage', '28.2%'],
  ['Reached weight-loss goal', '26.1%'],
]

const OUTREACH_SCHEDULE = [
  ['Enrollment day', 'Text', 'Welcome message, introduces Lola and asks the patient to save her number'],
  ['Days 2 to 3 after first dose', 'Call', 'Checks how the first dose went and asks about side effects'],
  ['Weekly, first 2 months', 'Call or text', 'Short check-in on side effects, eating, energy, and goals'],
  ['After each dose increase', 'Call', 'Asks about new or worse side effects and flags concerns to staff'],
  ['Refill due', 'Text', 'Refill reminder, with a reply option for questions'],
  ['Shipped and delivered', 'Text', 'Shipment and delivery notifications'],
  ['2 days before each visit', 'Call or text', 'Appointment reminder with two-way confirm or reschedule'],
  ['Every 2 weeks, ongoing', 'Call or text', 'Maintenance check-in and goal follow-up'],
]

const ROLE_SPLIT = [
  ['Routine check-ins by call and text', 'Prescribing, dosing, and titration decisions'],
  ['Asking about side effects using your questions', 'Evaluating symptoms and deciding on treatment'],
  ['Flagging concerns and alerting staff', 'Following up on alerts according to your workflow'],
  ['Refill, shipment, and appointment messages', 'Medical advice and answers to clinical questions'],
  ['Recording goals and progress patients share', 'Adjusting the care plan'],
]

const cell = 'border border-gray-200 p-3 text-left align-top'
const head = `${cell} font-semibold`

function DataTable({ caption, columns, rows }: { caption: string; columns: string[]; rows: string[][] }) {
  return (
    <div className="my-6 overflow-x-auto" role="region" aria-label={caption} tabIndex={0}>
      <table className="w-full border-collapse text-sm">
        <caption className="mb-3 text-left font-semibold text-gray-900">{caption}</caption>
        <thead><tr className="bg-gray-100">{columns.map(c => <th key={c} scope="col" className={head}>{c}</th>)}</tr></thead>
        <tbody>
          {rows.map(([first, ...rest]) => (
            <tr key={first} className="even:bg-gray-50">
              <th scope="row" className={head}>{first}</th>
              {rest.map((value, i) => <td key={i} className={cell}>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function AiPatientOutreachGlp1Post() {
  return (
    <article className="space-y-8 text-gray-700 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_p]:leading-relaxed [&_li]:leading-relaxed [&_a]:text-purple-700 [&_a]:underline">
      <header>
        <Link href="/blog">Provider insights</Link>
        <h1 className="my-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{post.title}</h1>
        <p className="text-sm">By the Positive Check Team · <time dateTime={post.datePublished}>{post.displayDate}</time> · {post.readTime}</p>
        <Image src={post.image} alt={GLP1_OUTREACH_IMAGE_ALT} width={1280} height={720} sizes="(max-width: 944px) calc(100vw - 48px), 896px" priority className="mx-auto my-8 h-auto w-full rounded-xl" />
        <p className="rounded-xl border border-purple-200 bg-purple-50 px-5 py-4"><strong>Quick answer:</strong> AI patient outreach helps GLP-1 and medical weight loss clinics stay connected with patients between visits. An AI care assistant like <Link href="/platform">Lola</Link> can run routine check-ins, ask about side effects, send refill reminders, and follow up on patient goals by voice call and text. Concerns are flagged for the care team, so staff can focus on patients who need personal attention.</p>
        <p className="mt-4">Keeping GLP-1 patients engaged is an ongoing challenge. Side effects, cost, missed refills, and long gaps between appointments can all disrupt treatment. And the patients who need help don&apos;t always call when something goes wrong. Some just stop responding, miss their next visit, or quietly stop their medication.</p>
        <p className="mt-4">Regular check-ins help clinics spot those problems earlier. The catch is that most care teams don&apos;t have time to call every patient every week. That&apos;s where AI patient outreach helps.</p>
      </header>

      <section className="space-y-4">
        <h2>Why GLP-1 patients stop treatment and disengage</h2>
        <p>Most patients who start a GLP-1 medication for weight loss stop within a year. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11786232" target="_blank" rel="noopener noreferrer">JAMA Network Open study of 125,474 adults</a> found that 64.8% of patients without type 2 diabetes discontinued within one year, compared with 46.5% of patients with type 2 diabetes.</p>
        <p>The reasons are familiar to anyone running a GLP-1 clinic. In a <a href="https://www.uspharmacist.com/article/costs-adverse-effects-and-weightloss-goals-commonly-drive-glp1-ra-discontinuation" target="_blank" rel="noopener noreferrer">2026 national survey of adults who stopped</a>, the most common were:</p>
        <DataTable caption="Most common reasons for stopping a GLP-1 medication" columns={['Reason for stopping', 'Share of patients']} rows={DISCONTINUATION_REASONS} />
        <p>Stopping a medication isn&apos;t the same as leaving a program. Some patients stop on clinical advice or after reaching a goal, and stay enrolled for nutrition support or maintenance care. But many simply drift away. While clinics can&apos;t always solve cost or coverage, they can help patients raise problems before communication breaks down. Side effects, missed refills, and worries about progress often go unreported between visits, and a short check-in gives patients a chance to speak up.</p>
        <p>For cash-pay clinics, there&apos;s a business side too. Every missed appointment, unanswered refill question, or disengaged patient creates extra work and puts recurring revenue at risk. Consistent outreach helps clinics catch those gaps early while supporting continuity of care.</p>
      </section>

      <section className="space-y-4">
        <h2>5 ways AI patient outreach keeps GLP-1 patients enrolled</h2>
        <p>An AI care assistant like Lola handles the routine, high-frequency contact that busy clinic staff can&apos;t keep up with. Here&apos;s where it makes the biggest difference.</p>
        <h3>1. Regular check-ins between visits</h3>
        <p>Patients on a GLP-1 often see a provider once a month or less. A short weekly or biweekly check-in by phone or text keeps them connected in between. If they&apos;re doing well, it takes a few minutes and they get on with their day.</p>
        <h3>2. Side effect questions, with concerns flagged to staff</h3>
        <p>Nausea, constipation, and fatigue are common, especially after a dose increase. Lola can ask how the patient is feeling after each titration. If something sounds concerning, she tells the patient someone from the care team will reach out and sends an alert to your staff. Your clinicians decide what happens next.</p>
        <h3>3. Refill, shipment, and delivery updates</h3>
        <p>A missed or late shipment can quietly end a patient&apos;s treatment. Using refill schedules and shipment information from your clinic or pharmacy partner, Lola can send reminders when a refill is due and updates when a prescription ships and arrives. Patients stay informed, and your front desk gets fewer &ldquo;where&apos;s my medication?&rdquo; calls.</p>
        <h3>4. Follow-up on the goals patients set</h3>
        <p>Patients set their own goals with their care team, like walking 10,000 steps a day or cooking at home more often. Lola can ask about them on each call, and your staff can bring them up at visits. Hearing that someone remembers their goal gives patients a personal reason to keep going.</p>
        <h3>5. Appointment reminders and confirmations</h3>
        <p>Reminders by call and text reduce missed visits, and two-way SMS lets patients confirm or reschedule without calling the office. Fewer no-shows means fewer patients falling out of their dosing plan.</p>
      </section>

      <section className="space-y-4">
        <h2>Sample AI outreach schedule for a GLP-1 program</h2>
        <p>Every clinic&apos;s protocol is different, but a typical outreach plan for a new patient looks like this. Your clinical team sets the questions, timing, and escalation rules.</p>
        <DataTable caption="Sample outreach schedule for a new GLP-1 patient" columns={['When', 'Channel', 'What Lola does']} rows={OUTREACH_SCHEDULE} />
      </section>

      <section className="space-y-4">
        <h2>What an AI care assistant should and shouldn&apos;t do in a GLP-1 clinic</h2>
        <p>AI outreach works best with clear boundaries. Lola supports your clinical team. She doesn&apos;t replace it.</p>
        <DataTable caption="Lola and your clinical team: who handles what" columns={['Lola handles', 'Your clinical team handles']} rows={ROLE_SPLIT} />
        <p>Patients should always know how to reach your clinic directly and who to call for urgent symptoms. Alerts are routed according to your clinic&apos;s workflow, so urgent symptoms should never wait for a callback.</p>
        <p>Introduce AI outreach at enrollment, get the patient&apos;s consent for automated calls and texts, and make opting out easy. Positive Check signs a Business Associate Agreement (BAA) with its clinic customers and handles patient conversations as protected health information.</p>
      </section>

      <section className="space-y-4">
        <h2>Getting started with AI outreach in your GLP-1 clinic</h2>
        <p>You don&apos;t need to automate everything at once. Most clinics start with two or three touch points, such as refill reminders, shipment notifications, and a post-dose check-in, then add more once patients are used to hearing from Lola.</p>
        <p>Track a few simple numbers from the start so you can see what&apos;s working:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>Completed check-ins</li>
          <li>Outreach that goes unanswered</li>
          <li>Missed appointments</li>
          <li>Patients who stop their medication, tracked separately from patients who leave the program</li>
        </ul>
        <p>How you introduce her matters as much as the technology. Patients answer calls they expect. Our guide on <Link href="/blog/introducing-ai-care-assistant-to-patients">how to introduce an AI care assistant to patients</Link> covers the four steps that build trust from day one.</p>
        <p>Across Positive Check&apos;s current care programs, Lola reaches more than 75% of patients every month by call or text. Your staff gets its time back for the patients who need a person, not another round of voicemails.</p>
        <p><strong>Want to see how Lola can help keep your GLP-1 patients enrolled?</strong> Call Positive Check at <a href="tel:+18585229524">(858) 522-9524</a> or <Link href="/contact">request a demo</Link>.</p>
      </section>

      <section className="space-y-6">
        <h2>Frequently asked questions</h2>
        {GLP1_OUTREACH_FAQ.map(faq => <section key={faq.question} className="space-y-2"><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
      </section>

      <ContentConversionCta source="glp1_outreach_blog" title="See how Lola can keep your GLP-1 patients enrolled" description="Lola runs check-ins, side effect questions, refill and shipment updates, and appointment reminders by call and text, and flags concerns to your care team. Request a demo to see how she fits your GLP-1 program." buttonText="Request a demo" />
    </article>
  )
}
