import Image from 'next/image'
import Link from 'next/link'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { AI_CARE_ASSISTANT_POST as post } from '@/lib/blog-posts'

export const AI_CARE_ASSISTANT_IMAGE_ALT = 'Smiling nurse wearing a headset while working at a computer'

export const AI_CARE_ASSISTANT_FAQ = [
  {
    question: 'How should healthcare practices introduce an AI care assistant to patients?',
    answer: "Introduce the assistant by name during onboarding, mention it again at the first few staff interactions, and reference what patients shared with it during check-ins. Be clear that it supports the care team and doesn't replace it.",
  },
  {
    question: 'How can AI patient outreach improve patient engagement?',
    answer: 'AI outreach makes regular check-ins, reminders, and follow-ups possible by voice and text without adding staff workload. Engagement improves most when patients recognize the assistant and see that their responses inform their care.',
  },
  {
    question: 'Does an AI care assistant replace nurses or care managers?',
    answer: 'No. An AI care assistant like Lola handles routine outreach and gathers information. Healthcare professionals remain responsible for clinical decisions and follow-up.',
  },
]

const quoteClass = 'border-l-4 border-purple-300 bg-purple-50 px-5 py-4 italic'

export function IntroducingAiCareAssistantPost() {
  return (
    <article className="space-y-8 text-gray-700 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_p]:leading-relaxed [&_li]:leading-relaxed [&_a]:text-purple-700 [&_a]:underline">
      <header>
        <Link href="/blog">Provider insights</Link>
        <h1 className="my-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{post.title}</h1>
        <p className="text-sm">By the Positive Check Team · <time dateTime={post.datePublished}>{post.displayDate}</time> · {post.readTime}</p>
        <Image src={post.image} alt={AI_CARE_ASSISTANT_IMAGE_ALT} width={640} height={640} sizes="(max-width: 688px) calc(100vw - 48px), 640px" priority className="mx-auto my-8 h-auto w-full max-w-[640px] rounded-xl" />
        <p className="text-xl">Patients answer the calls they expect, from people they trust. That&apos;s why how you introduce an AI care assistant matters as much as the technology itself.</p>
        <p className="mt-4">Many practices treat AI patient outreach like a new phone system. They switch it on and hope patients pick up. But an unexpected call from an unfamiliar voice sounds like a robocall, so patients hang up. The care team ends up back where it started: chasing patients, playing phone tag, and leaving voicemails that never get returned.</p>
        <p className="mt-4">Practices that see the best patient engagement introduce Lola, <Link href="/platform">Positive Check&apos;s AI care assistant</Link>, as part of the care team. When patients know who she is, why she&apos;s contacting them, and how their conversations support their care, they&apos;re more likely to respond. Here are four steps to get there.</p>
      </header>

      <section className="space-y-4">
        <h2>Step 1: Introduce your AI care assistant during patient onboarding</h2>
        <p>The best time to introduce Lola is when a patient first joins your practice or enrolls in a care management program such as <Link href="/solutions/remote-patient-monitoring">Remote Patient Monitoring (RPM)</Link> or <Link href="/solutions/chronic-care-management">Chronic Care Management (CCM)</Link>. Patients form expectations early, and a call they were told to expect is a call they&apos;re more likely to answer.</p>
        <p>Keep the introduction simple and personal. A staff member might say:</p>
        <blockquote className={quoteClass}>&ldquo;You&apos;ll also hear from Lola. She&apos;s our AI assistant, and she works with our team. She&apos;ll call or text you between visits to check in, remind you about appointments, and help us keep track of how you&apos;re doing. When Lola reaches out, she&apos;s reaching out for us.&rdquo;</blockquote>
        <p>A few small actions help patients recognize and remember her:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>Introduce her by name.</strong> A familiar name is easier to trust than &ldquo;our automated system.&rdquo; Your practice can also give the assistant a different name.</li>
          <li><strong>Save her number.</strong> Ask patients to add Lola to their contacts so her calls and texts don&apos;t look like spam.</li>
          <li><strong>Include her in onboarding materials.</strong> Mention Lola in welcome packets, enrollment forms, and patient portal messages.</li>
          <li><strong>Send a welcome text.</strong> A short hello right after enrollment gives patients an easy first interaction.</li>
        </ul>
        <p><strong>The goal:</strong> Lola should feel familiar before her first check-in call.</p>
      </section>

      <section className="space-y-4">
        <h2>Step 2: Reinforce Lola&apos;s role at early human touch points</h2>
        <p>One introduction is rarely enough. New patients take in a lot of information during onboarding, and Lola&apos;s name is easy to forget. Repeating it during the first few conversations with your staff turns a name they heard once into someone they recognize.</p>
        <p>Three natural moments to mention her:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>The first nurse or care manager call:</strong> &ldquo;Lola will check in with you each week. If you mention something we should know about, she&apos;ll help bring it to our team.&rdquo;</li>
          <li><strong>The first in-person or telehealth visit:</strong> The provider can explain how Lola&apos;s check-ins help the team stay informed between appointments.</li>
          <li><strong>Appointment scheduling:</strong> Front desk staff can say, &ldquo;You&apos;ll get a reminder from Lola before your next visit.&rdquo;</li>
        </ul>
        <p>Each mention sends the same message: Lola isn&apos;t a separate service. She&apos;s part of the care team the patient already knows. That familiarity is often the difference between a patient ignoring a call and picking up because they know who&apos;s calling.</p>
      </section>

      <section className="space-y-4">
        <h2>Step 3: Use Lola&apos;s call and text data in check-ins to show patients their conversations matter</h2>
        <p>Patients keep engaging when they can see their answers lead somewhere. If they feel they&apos;re talking into a void, they stop. The most effective fix is to bring what Lola learned into your own conversations with them.</p>
        <p>Before a check-in or appointment, review the patient&apos;s recent calls and texts with Lola as part of your care management workflow. Then connect them to the care you&apos;re providing:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>&ldquo;Lola mentioned you were having trouble sleeping last week. How has that been?&rdquo;</li>
          <li>&ldquo;I saw your blood pressure readings were a bit higher during your check-in with Lola. Let&apos;s talk about that.&rdquo;</li>
          <li>&ldquo;You told Lola you were running low on your medication. Let&apos;s make sure that&apos;s taken care of.&rdquo;</li>
          <li>&ldquo;Thanks for answering Lola&apos;s appointment reminder. It helped us confirm your visit.&rdquo;</li>
        </ul>
        <p><strong>Follow up on the goals patients share.</strong> Patients often tell Lola what they&apos;re working toward, like losing weight or walking 10,000 steps a day. Those goals are some of the most valuable things to bring into your own conversations:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>&ldquo;You told Lola you&apos;re aiming for 10,000 steps a day. How&apos;s that going?&rdquo;</li>
          <li>&ldquo;Lola mentioned you want to lose some weight before summer. Let&apos;s talk about what&apos;s working.&rdquo;</li>
        </ul>
        <p>When a care manager remembers a goal the patient set, it shows real attention. It also gives the patient a reason to keep updating Lola on their progress.</p>
        <p>These small acknowledgments show patients that someone read what they shared and that it shaped their care. Routine outreach stops feeling like a chore and starts feeling worthwhile.</p>
        <p>Reference both voice and SMS. Some patients prefer a quick phone call, others would rather text. Acknowledging both tells patients they can reach the team whichever way is easiest.</p>
      </section>

      <section className="space-y-4">
        <h2>Step 4: Make it clear that Lola supports your care team and doesn&apos;t replace it</h2>
        <p>Many patients quietly wonder whether AI in healthcare means less personal attention. Answer that question before they have to ask it.</p>
        <p>Lola doesn&apos;t replace nurses, care managers, or physicians. She supports them by handling routine patient outreach, gathering information, and flagging concerns that may need follow-up, according to your practice&apos;s workflow.</p>
        <p>A simple way to explain it:</p>
        <blockquote className={quoteClass}>&ldquo;Lola is our AI assistant, and she helps us stay in touch with you between visits. What you share with her helps our team understand how you&apos;re doing and when you might need extra support. We&apos;re still here taking care of you.&rdquo;</blockquote>
        <p>This sets three clear expectations:</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>Lola supports the care team rather than replacing it.</li>
          <li>Patient conversations help the team stay informed.</li>
          <li>Healthcare professionals remain responsible for clinical decisions and follow-up.</li>
        </ul>
        <p>It also helps to tell patients what a typical call looks like. If they&apos;re doing well, a check-in with Lola takes just a few minutes and they can get back to their day. If something sounds concerning, Lola lets the patient know that someone from the care team will reach out and sends an alert to the team. Knowing the calls are quick, and that concerns get flagged for a person, makes patients more willing to pick up.</p>
        <p>Patients should also know how to reach the practice directly and who to call for urgent medical concerns. Clear expectations make patients more comfortable with AI patient communication as part of their ongoing care.</p>
      </section>

      <section className="space-y-4">
        <h2>Care teams perform best when they&apos;re providing care, not leaving voicemails</h2>
        <p>Nurses and care managers didn&apos;t go into healthcare to dial unanswered numbers and leave messages. Yet routine outreach, reminders, and follow-ups eat up hours that could go to patients who need personal attention.</p>
        <p>When patients recognize Lola, understand her purpose, and see how their responses shape their care, they answer. Lola reaches more than 75% of patients every month by call or text. That means more completed check-ins, more confirmed appointments, and relevant concerns reaching the care team sooner. Your team spends less time on repetitive outreach and more time on the care only people can provide.</p>
        <p>The technology is only half the equation. The other half is how you introduce it. Patients engage with Lola because they know she&apos;s connected to the people who care for them.</p>
        <p><strong>Want to see how Lola can support your patient engagement and care management programs?</strong> Call Positive Check at <a href="tel:+18585229524">(858) 522-9524</a> or <Link href="/contact">request a demo of Lola</Link>.</p>
      </section>

      <section className="space-y-6">
        <h2>Frequently asked questions</h2>
        {AI_CARE_ASSISTANT_FAQ.map(faq => <section key={faq.question} className="space-y-2"><h3>{faq.question}</h3><p>{faq.answer}</p></section>)}
      </section>

      <ContentConversionCta source="ai_care_assistant_blog" title="See how Lola can support your care team" description="Lola handles routine check-ins, reminders and follow-ups by call and text, and brings what patients share back to your care team. Request a demo to see how she can support your patient engagement and care management programs." buttonText="Request a demo" secondaryText="Estimate RPM/CCM ROI" />
    </article>
  )
}
