"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

const steps = [
  {
    title: 'Patient call',
    label: 'Illustrative exchange',
    detail: 'Lola: “Is there anything you would like your care team to follow up on?” Patient: “I would like help arranging my next appointment.”',
    responsibility: 'The patient shares a request. This example contains no real patient information.',
  },
  {
    title: 'Call summary',
    label: 'Illustrative summary',
    detail: 'Patient requests help arranging the next appointment. Staff review is needed to confirm the request and next steps.',
    responsibility: 'The care team checks the summary against the conversation before acting.',
  },
  {
    title: 'Alert for review',
    label: 'Illustrative handoff',
    detail: 'Follow-up needed: appointment support. Route to the practice’s designated outreach owner using the agreed workflow.',
    responsibility: 'Confirm routing, staff coverage and response expectations during evaluation; this is not an emergency-response demonstration.',
  },
  {
    title: 'Staff follow-up',
    label: 'Illustrative staff action',
    detail: 'A team member contacts the patient, confirms the appointment request, and records the action and any remaining follow-up.',
    responsibility: 'Staff own the outcome. Automated outreach and summaries do not establish billable clinical work.',
  },
]

export function WorkflowDemonstration() {
  const hasPlayed = useRef(false)

  return (
    <section id="workflow-example" aria-labelledby="workflow-example-title" className="my-12 scroll-mt-24 rounded-xl border border-gray-200 bg-slate-50 p-6 md:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-700">Synthetic workflow example · No real patient data</p>
      <h2 id="workflow-example-title" className="mb-4 text-2xl font-bold text-gray-900">From patient call to care-team follow-up</h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Positive Check supports outreach and review; your team remains responsible for follow-up.
        This illustrative scenario shows the handoffs to discuss in a demo—not a customer result,
        a live product session, or a guarantee of your configured workflow.
      </p>
      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="mb-3 text-lg font-semibold text-gray-900"><span className="text-purple-700">{index + 1}.</span> {step.title}</h3>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{step.label}</p>
            <p className="mb-3 leading-relaxed text-gray-800">{step.detail}</p>
            <p className="text-sm leading-relaxed text-gray-600">{step.responsibility}</p>
          </li>
        ))}
      </ol>
      <details className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
        <summary className="cursor-pointer font-semibold text-purple-800">Explore the existing voice and dashboard previews</summary>
        <p id="workflow-voice-description" className="my-4 text-sm leading-relaxed text-gray-600">
          Optional voice preview: the existing Lola greeting. The written scenario above is a separate synthetic example, not a transcript of this recording.
        </p>
        <audio
          controls
          preload="none"
          aria-label="Lola greeting voice preview"
          aria-describedby="workflow-voice-description"
          className="w-full"
          onPlay={() => {
            if (hasPlayed.current) return
            hasPlayed.current = true
            trackEvent('workflow_preview_play', { cta_location: 'billing_guide_workflow_example', preview_id: 'lola_greeting' })
          }}
        >
          <source src="/audio/Positive_Check_Greeting.mp3" type="audio/mpeg" />
          Your browser does not support audio playback. The written workflow example is available above.
        </audio>
        <figure className="mt-6">
          <Image src="/images/admin-console-dashboard-new.png" alt="Positive Check dashboard preview with call activity, alerts and human follow-up panels" width={1657} height={860} sizes="(max-width: 768px) 90vw, 768px" className="h-auto w-full rounded-lg border border-gray-200" />
          <figcaption className="mt-3 text-sm leading-relaxed text-gray-600">Existing product-preview image. Displayed figures are illustrative, not evidence of customer results or the scenario above. Confirm current screens and configuration in your demo.</figcaption>
        </figure>
      </details>
      <p className="mt-6 leading-relaxed text-gray-700">
        Evaluating the staffing fit? <Link href="/solutions/chronic-care-management/vs-in-house-care-coordinators" className="font-medium text-purple-700 underline" onClick={() => trackEvent('cta_click', { cta_name: 'compare_staff_led_outreach', cta_location: 'billing_guide_workflow_example' })}>Compare software-supported and staff-led outreach</Link>.
        {' '}Explore the <Link href="/solutions/remote-patient-monitoring" className="text-purple-700 underline">RPM workflow</Link> or <Link href="/solutions/chronic-care-management" className="text-purple-700 underline">CCM workflow</Link> for your program.
      </p>
    </section>
  )
}
