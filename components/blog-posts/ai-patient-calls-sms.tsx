import Image from 'next/image'
import Link from 'next/link'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { AI_PATIENT_CALLS_POST as post } from '@/lib/blog-posts'

export const AI_PATIENT_CALLS_IMAGE_ALT = 'Healthcare professional speaking on the phone while working at a laptop'

export const AI_PATIENT_CALLS_FAQ = [
  {
    question: 'What is AI patient communication?',
    answer: 'AI patient communication uses conversational AI to handle phone calls and text messages between healthcare organizations and patients. Common uses include answering inquiries, appointment reminders, patient notifications, wellness check-ins and care management outreach.',
  },
  {
    question: 'Can AI answer patient calls for a medical practice?',
    answer: 'Yes. Platforms like Positive Check can handle common patient inquiries, collect information and book appointments. Anything that needs staff is routed to the right team.',
  },
  {
    question: 'Can AI send appointment reminders by phone and text?',
    answer: 'Yes. Positive Check sends reminders by voice call and SMS. Patients can confirm or request a change, and staff follow up as needed.',
  },
  {
    question: 'How does AI help RPM and CCM programs?',
    answer: 'AI automates routine check-ins, documents patient responses and flags concerns based on practice-defined criteria. Clinical staff review the information and decide on follow-up.',
  },
  {
    question: 'Can AI replace nurses or care coordinators?',
    answer: 'No. Lola handles structured conversations and documentation. Licensed professionals remain responsible for clinical assessment, treatment decisions and patient care.',
  },
  {
    question: 'Is Positive Check HIPAA compliant?',
    answer: 'Positive Check signs a Business Associate Agreement (BAA) with customers and supports HIPAA-compliant workflows for both front office and care management. That matters because even routine messages, like appointment reminders, confirmations and medication shipping notices, can contain protected health information. Practices remain responsible for their own privacy and security practices.',
  },
  {
    question: 'Can a practice use Positive Check for only front office or only care management?',
    answer: 'Yes. Practices can start with either one and add the other as their needs grow.',
  },
]

export function AiPatientCallsPost() {
  return (
    <article className="space-y-8 text-gray-700 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_p]:leading-relaxed [&_li]:leading-relaxed [&_a]:text-purple-700 [&_a]:underline">
      <header>
        <Link href="/blog">Provider insights</Link>
        <h1 className="my-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{post.title}</h1>
        <p className="text-sm">By the Positive Check Team · <time dateTime={post.datePublished}>{post.displayDate}</time> · {post.readTime}</p>
        <Image src={post.image} alt={AI_PATIENT_CALLS_IMAGE_ALT} width={640} height={427} sizes="(max-width: 688px) calc(100vw - 48px), 640px" priority className="mx-auto my-8 h-auto w-full max-w-[640px] rounded-xl" />
        <p className="text-xl">Medical practices run on timely patient communication, but every call, reminder and follow-up competes for the same busy staff.</p>
        <p className="mt-4">Positive Check automates patient calls and text messages across the whole patient journey, from new patient inquiries and appointment reminders to Remote Patient Monitoring (RPM), Chronic Care Management (CCM) and post-discharge follow-up. Its AI assistant, Lola, handles routine conversations, reduces administrative workload and gives staff more time to focus on patients who need personal attention.</p>
      </header>

      <section className="space-y-4">
        <h2>The challenge: two kinds of patient communication, one busy team</h2>
        <p>Every practice manages two kinds of patient communication.</p>
        <p><strong>Front office communication</strong> keeps daily operations running: answering new patient inquiries, coordinating appointments, sending reminders and sharing schedule changes.</p>
        <p><strong>Care management communication</strong> supports patients between visits: routine check-ins, patient-reported symptoms, post-discharge follow-up and spotting concerns that need clinical attention.</p>
        <p>Both place significant demands on staff, especially as patient volumes grow. When workloads rise, calls go unanswered, confirmations slip and follow-ups get missed. Adding a separate tool for each job creates disconnected workflows and scatters the record of patient interactions.</p>
        <p>Positive Check connects front office communication and ongoing care management on one AI-powered platform, helping practices streamline workflows and maintain visibility across patient interactions.</p>
      </section>

      <section className="space-y-4">
        <h2>How can AI help a medical practice&apos;s front office?</h2>
        <p>AI can handle the high-volume, routine calls and texts that tie up a front desk, while staff keep control of the schedule. With Positive Check, that includes:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong><Link href="/solutions/front-office/new-patient-leads">New patient inquiries.</Link></strong> Lola responds to prospective patients by phone or text, answers common questions about the practice and collects details for staff follow-up.</li>
          <li><strong><Link href="/solutions/front-office/scheduling-confirmations">Scheduling and confirmations.</Link></strong> Lola books appointments based on your practice&apos;s availability and confirms upcoming visits, following the scheduling rules your staff set.</li>
          <li><strong><Link href="/solutions/front-office/appointment-reminders">Appointment reminders.</Link></strong> Automated calls and texts remind patients about visits and let them confirm or ask for a change.</li>
          <li><strong><Link href="/solutions/front-office/patient-notifications">Patient notifications.</Link></strong> Lola shares office closures, provider changes, visit prep instructions, medication shipping updates and other operational notices.</li>
        </ul>
        <p>The result: faster, more consistent responses for patients and fewer routine calls for your front desk.</p>
      </section>

      <section className="space-y-4">
        <h2>How does AI support RPM, CCM and post-discharge follow-up?</h2>
        <p>AI handles the structured, recurring check-ins these programs require, documents what patients say and flags concerns for the care team. Clinicians review the information and decide next steps.</p>
        <h3><Link href="/solutions/remote-patient-monitoring">Remote Patient Monitoring (RPM)</Link></h3>
        <p>Lola contacts patients on a practice-defined schedule, asks the questions your program sets and documents patient-reported information. Responses that meet your alert criteria are flagged for care team review, so staff don&apos;t have to make every routine call themselves.</p>
        <h3><Link href="/solutions/chronic-care-management">Chronic Care Management (CCM)</Link></h3>
        <p>Lola runs structured monthly check-ins about symptoms, medications and daily well-being, then summarizes the responses for care coordinators. Care managers can spend their time on the patients who need more support.</p>
        <h3><Link href="/solutions/post-discharge-follow-up">Post-discharge follow-up</Link></h3>
        <p>Following discharge from a hospital or skilled nursing facility, Lola conducts structured check-ins about patient well-being, medication access and scheduled follow-up appointments. Concerns are documented and escalated through your approved workflows.</p>
      </section>

      <section className="space-y-4">
        <h2>Why use one platform for front office and care management?</h2>
        <p>The value of connecting the two is clearest from the patient&apos;s side. Consider Maria, a fictional example rather than a real patient or customer case study:</p>
        <ol className="list-decimal space-y-3 pl-6">
          <li><strong>First inquiry.</strong> Maria calls on a Saturday looking for a new primary care provider. Lola answers common questions and collects her information for the front office.</li>
          <li><strong>Scheduling.</strong> The practice books her first visit. Lola sends a confirmation and a reminder.</li>
          <li><strong>Enrollment.</strong> At the visit, her provider enrolls her in CCM for diabetes and hypertension.</li>
          <li><strong>Ongoing care.</strong> Lola checks in with Maria monthly. Her care manager reviews the responses and follows up when needed.</li>
          <li><strong>Post-discharge.</strong> Months later, Maria is discharged from the hospital. Lola checks in and finds she hasn&apos;t scheduled a follow-up visit. The care team decides the next step.</li>
        </ol>
        <p>For the practice, that continuity delivers three concrete benefits:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>Fewer disconnected workflows.</strong> One platform for inquiries, reminders and care program outreach, instead of a separate tool for each.</li>
          <li><strong>Better visibility.</strong> Patient conversations are documented in one place, so staff can see what was said and what still needs follow-up.</li>
          <li><strong>More time for patients.</strong> Routine outreach runs on its own, and staff focus on the conversations that need a person.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2>How does Positive Check keep staff in control?</h2>
        <p>Positive Check automates routine communication while people stay responsible for care.</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>Clinical decisions stay with care teams.</strong> Lola gathers information and flags concerns. It does not diagnose, prescribe or make clinical decisions.</li>
          <li><strong>Practices define the workflows.</strong> Staff set schedules, approved questions, messaging and escalation criteria for each program.</li>
          <li><strong>Every interaction is documented.</strong> Calls and messages are recorded so authorized staff can review responses and follow-up needs.</li>
          <li><strong>Concerns are escalated.</strong> When a response meets defined criteria or needs a person, Positive Check routes it to the right team.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2>Frequently asked questions</h2>
        {AI_PATIENT_CALLS_FAQ.map(faq => <section key={faq.question} className="space-y-2"><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
      </section>

      <ContentConversionCta source="ai_patient_calls_blog" title="See how Positive Check can support your practice" description="From first contact through ongoing care, Positive Check helps medical practices automate routine patient communication while keeping their staff in control. Request a demo to see how Lola can support your front office, your care management programs or both." buttonText="Request a demo" secondaryText="Estimate RPM/CCM ROI" />
      <p>Want to estimate the impact first? Try the <Link href="/roi-calculator">ROI Calculator</Link> for RPM/CCM program planning; it is not a Front Office savings estimate.</p>

      <nav aria-label="Related practice resources" className="space-y-4 border-t pt-6">
        <h2>Related practice resources</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><Link href="/solutions/front-office/compare">Compare AI calls and SMS with staff and reminder tools</Link></li>
          <li><Link href="/resources/implementation-guide">Plan an implementation and pilot</Link></li>
          <li><Link href="/blog/post-discharge-follow-up-workflow">Build a post-discharge workflow with clear staff handoffs</Link></li>
        </ul>
      </nav>
    </article>
  )
}
