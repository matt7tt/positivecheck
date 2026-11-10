'use client'

import { useId, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

const conversations = {
  call: [
    ['Lola', 'Hello, I’m Lola, the automated assistant for Example Practice. Is now a good time to discuss your appointment reminder?'],
    ['Patient', 'Yes.'],
    ['Lola', 'Your appointment is Tuesday at 10 a.m. Will that time still work for you?'],
    ['Patient', 'I need to move it. Could someone call me about a Thursday afternoon appointment?'],
    ['Lola', 'I can note that request for the front desk. Your appointment has not changed yet; the team will need to check availability and confirm a new time.'],
    ['Patient', 'That works, thank you.'],
    ['Lola', 'I’ll include your preference in the follow-up request. Please contact the practice directly if you need to speak with someone sooner.'],
  ],
  sms: [
    ['Lola', 'Example Practice reminder: you have an appointment Tuesday at 10 a.m. Does that time still work for you? Reply STOP to opt out.'],
    ['Patient', 'Can I move it to Thursday afternoon? Please call me.'],
    ['Lola', 'I’ll note your request for the front desk. Your appointment has not changed yet. The team needs to check availability and confirm a new time with you. Please contact the practice directly if you need help sooner.'],
  ],
} as const

const stages = [
  { title: 'Patient reply', status: 'Reschedule requested', text: 'The patient asks for Thursday afternoon and a callback. Tuesday at 10 a.m. remains the scheduled appointment until staff confirm a change.' },
  { title: 'Summary and staff task', status: 'Awaiting front desk review', text: 'Summary: reschedule requested; Thursday afternoon preferred; callback requested. Assigned role: front desk scheduling owner. Next action: check availability and contact the patient.' },
  { title: 'Staff resolution', status: 'Resolved by staff in this example', text: 'A staff member checks the schedule, calls the patient, agrees a new time and updates the authoritative appointment record. The team reconciles future reminders with the updated schedule.' },
] as const

export function ReminderWorkflowDemo({ source = 'appointment_reminders' }: { source?: string }) {
  const id = useId()
  const [channel, setChannel] = useState<'call' | 'sms'>('call')
  const [stage, setStage] = useState(-1)
  const tracked = useRef(new Set<string>())
  function trackOnce(event: string) {
    const key = `${channel}_${event}`
    if (tracked.current.has(key)) return
    tracked.current.add(key)
    trackEvent(event, { demo_id: 'appointment_reminder_v1', channel, cta_location: source })
  }
  function advance() {
    const next = stage + 1
    setStage(next)
    if (next === 0) trackOnce('workflow_demo_start')
    if (next === stages.length - 1) trackOnce('workflow_demo_complete')
  }

  return <section id="reminder-workflow-example" aria-labelledby={`${id}-title`} className="my-10 scroll-mt-24 rounded-2xl border border-purple-200 bg-purple-50 p-5 md:p-8">
    <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">Fictional interactive example · No real patient data</p>
    <h2 id={`${id}-title`} className="my-3 text-2xl font-bold text-gray-900">See a reminder become a resolved follow-up</h2>
    <p className="mb-6 leading-relaxed text-gray-700">Explore a complete scripted call or SMS exchange, then follow the request through summary, staff review and resolution. This is an illustration, not a live product session, recorded patient call or customer result. No call or text is sent.</p>
    <div role="group" aria-label="Example channel" className="mb-5 flex flex-wrap gap-3">
      {(['call', 'sms'] as const).map(value => <Button key={value} variant={channel === value ? 'default' : 'outline'} aria-pressed={channel === value} aria-controls={`${id}-transcript`} onClick={() => { setChannel(value); setStage(-1) }}>{value === 'call' ? 'Call example' : 'SMS example'}</Button>)}
    </div>
    <div id={`${id}-transcript`} className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="mb-3 text-lg font-semibold">{channel === 'call' ? 'Full scripted call' : 'Full scripted SMS conversation'}</h3>
      <p className="mb-4 text-sm text-gray-600">Assumes the practice has confirmed the recipient, contact permission and permitted message details. Names, appointment times and responses are fictional. Confirm identity checks, voicemail wording and contact rules for your workflow.</p>
      <ol className="space-y-3">{conversations[channel].map(([speaker, message], index) => <li key={`${channel}-${index}`} className={`rounded-lg p-3 ${speaker === 'Patient' ? 'bg-purple-50' : 'bg-gray-50'}`}><span className="font-semibold text-gray-900">{speaker}: </span><span className="text-gray-700">{message}</span></li>)}</ol>
    </div>
    <div className="my-5 flex flex-wrap items-center gap-3">
      {stage < stages.length - 1 ? <Button onClick={advance}>{stage === -1 ? 'Follow the request' : stage === 0 ? 'Show the staff handoff' : 'Show the resolved outcome'}</Button> : <Button variant="outline" onClick={() => setStage(-1)}>Restart walkthrough</Button>}
      <p role="status" aria-live="polite" className="text-sm font-medium text-purple-900">{stage < 0 ? 'All steps are readable below. Follow the request to highlight each handoff.' : `Step ${stage + 1} of ${stages.length}: ${stages[stage].status}`}</p>
    </div>
    <ol className="grid gap-4 md:grid-cols-3">{stages.map((item, index) => <li key={item.title} aria-current={stage === index ? 'step' : undefined} className={`rounded-xl border bg-white p-5 ${stage === index ? 'border-purple-600 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      <h3 className="mb-2 font-semibold text-gray-900">{index + 1}. {item.title}</h3><p className="mb-3 text-sm font-semibold text-purple-700">{item.status}</p><p className="text-sm leading-relaxed text-gray-700">{item.text}</p>
    </li>)}</ol>
    <p className="mt-5 text-sm leading-relaxed text-gray-700">A reschedule request is not a confirmed booking. Your practice owns availability checks, calendar updates and unresolved requests. The handoff method and any automated write-back must be agreed during implementation. This example does not demonstrate an EHR integration.</p>
  </section>
}
