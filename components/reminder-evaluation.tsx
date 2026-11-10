import Link from 'next/link'

export function ReminderEvaluation() {
  return <>
    <section className="my-10" aria-labelledby="reminder-fit-title">
      <h2 id="reminder-fit-title" className="mb-4 text-2xl font-bold">Reminder calls, basic tools or staff follow-up?</h2>
      <p className="mb-5 leading-relaxed text-gray-700">Conversational reminders are worth evaluating when patient replies create a callback queue: a different appointment time, a question for the practice or help reaching the right person. Compare the full follow-up workload with the process you already use.</p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="p-4 text-left text-gray-600">Typical approaches; capabilities vary by tool and configuration.</caption>
          <thead className="bg-gray-50"><tr>{['Approach', 'Useful when', 'Work to account for'].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
          <tbody className="divide-y">
            <tr><th scope="row" className="p-4 align-top">Basic reminder tool</th><td className="p-4 align-top">Standard messages and simple replies cover most appointment needs.</td><td className="p-4 align-top">Check how unexpected replies reach staff and how schedule changes update messages.</td></tr>
            <tr><th scope="row" className="p-4 align-top">Lola calls and SMS</th><td className="p-4 align-top">Your practice needs repeatable conversations and requests captured for follow-up.</td><td className="p-4 align-top">Configure the conversation and data source; retain staff review, scheduling decisions and exception handling.</td></tr>
            <tr><th scope="row" className="p-4 align-top">Front desk staff</th><td className="p-4 align-top">Requests need judgment, complex scheduling or an established relationship.</td><td className="p-4 align-top">Include calling time, repeat attempts, coverage and documentation alongside patient-facing work.</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4"><Link href="/solutions/front-office/compare" className="font-medium text-purple-700 underline">Compare Front Office approaches in more detail</Link></p>
    </section>
    <section className="my-10" aria-labelledby="reminder-setup-title">
      <h2 id="reminder-setup-title" className="mb-4 text-2xl font-bold">What your reminder workflow needs to go live</h2>
      <dl className="grid gap-5 sm:grid-cols-2">
        {[
          ['Appointment source', 'Identify the system that owns the schedule, the appointment fields available and how cancellations or changes reach the outreach list. Confirm the transfer method and update frequency.'],
          ['Contact rules', 'Bring approved call and SMS wording, patient channel preferences, contact windows, retry limits and an opt-out process. Decide which details may be used in messages or voicemail.'],
          ['A staff owner', 'Name the front desk role that handles callback requests, ambiguous replies and failed contacts. Agree coverage hours and how unresolved work is reviewed.'],
          ['A tested handoff', 'Walk through a confirmed reply, reschedule request, no answer, failed message and stale appointment using fictional records. Confirm who updates the calendar in every case.'],
        ].map(([title, text]) => <div key={title} className="rounded-xl border p-5"><dt className="mb-2 font-semibold">{title}</dt><dd className="leading-relaxed text-gray-700">{text}</dd></div>)}
      </dl>
      <p className="mt-5 leading-relaxed text-gray-700">Dashboard-led setup, bulk import and API options are described in the <Link href="/resources/implementation-guide" className="text-purple-700 underline">implementation guide</Link>. Confirm appointment-data support, scheduling access and any write-back for your specific system in the demo; a named EHR connector is not assumed.</p>
    </section>
    <section className="my-10 rounded-xl border bg-slate-50 p-6" aria-labelledby="reminder-pilot-title">
      <h2 id="reminder-pilot-title" className="mb-4 text-2xl font-bold">Scope a pilot and its total cost</h2>
      <p className="mb-4 leading-relaxed text-gray-700">Start with one appointment type and a defined outreach volume. In the demo, bring an estimate of monthly appointments, your call/SMS mix and the reminder tool you use today. Ask for a written scope and quote before committing.</p>
      <ul className="list-disc space-y-3 pl-5 text-gray-700">
        <li>Confirm software charges, included usage, any overages and setup or integration fees.</li>
        <li>Include staff time for reviewing replies, scheduling callbacks and resolving exceptions.</li>
        <li>Agree the pilot duration, success measures, support arrangements and expansion or exit terms.</li>
        <li>Compare resolved requests, contact outcomes and attendance against your starting baseline.</li>
      </ul>
      <p className="mt-4 text-sm text-gray-600">These are evaluation questions, not published package terms. Pricing and launch timing require confirmation of the workflow and implementation scope.</p>
    </section>
  </>
}
