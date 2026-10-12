"use client"

import { useRef, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { LolaCallModal } from '@/components/lola-call-modal'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { trackEvent } from '@/lib/analytics'

export function LolaVoicePreview({ children, source }: { children: React.ReactNode; source: string }) {
  const [failed, setFailed] = useState(false)
  const played = useRef(false)
  const completed = useRef(false)
  const errorReported = useRef(false)
  const handleAudioError = () => {
    setFailed(true)
    if (errorReported.current) return
    errorReported.current = true
    trackEvent('sample_audio_error', { sample_id: 'lola_greeting', cta_location: source })
  }

  return (
    <Dialog onOpenChange={open => {
      if (open) trackEvent('cta_click', { cta_name: 'lola_voice_preview', cta_location: source })
      else { played.current = false; completed.current = false; errorReported.current = false; setFailed(false) }
    }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Listen to Lola’s greeting</DialogTitle>
          <DialogDescription>An existing voice preview—not a complete patient call or a customer recording. No form is required to listen.</DialogDescription>
        </DialogHeader>
        <audio controls preload="none" aria-label="Lola greeting recording" className="w-full" onError={handleAudioError} onPlay={() => {
          if (played.current) return
          played.current = true
          trackEvent('sample_audio_play', { sample_id: 'lola_greeting', cta_location: source })
        }} onEnded={() => {
          if (completed.current) return
          completed.current = true
          trackEvent('sample_audio_complete', { sample_id: 'lola_greeting', cta_location: source })
        }}>
          <source src="/audio/Positive_Check_Greeting.mp3" type="audio/mpeg" onError={handleAudioError} />
          Your browser does not support this audio player.
        </audio>
        {failed && <p role="alert" className="text-sm text-red-700">The recording could not load. You can still read the example below or request a workflow demo.</p>}
        <a href="/audio/Positive_Check_Greeting.mp3" className="text-sm text-purple-700 underline">Open the greeting audio directly</a>
        <details className="rounded-lg border p-4 text-sm text-gray-700">
          <summary className="cursor-pointer font-semibold">Read a fictional call example</summary>
          <p className="mt-3">Written illustration only—not a transcript of the greeting. No real patient information.</p>
          <p className="mt-3"><strong>Assistant:</strong> Is there anything you would like your care team to follow up on?</p>
          <p className="mt-2"><strong>Patient:</strong> I would like help arranging my next appointment.</p>
          <p className="mt-2"><strong>Assistant:</strong> I’ll note your request for your care team to review. They will need to confirm the next steps with you.</p>
          <p className="mt-2">The team reviews the summary, contacts the patient and records the outcome. This illustrates a handoff, not a confirmed appointment or clinical decision.</p>
        </details>
        <div className="grid gap-3 sm:grid-cols-2">
          <LolaCallModal source={`${source}_voice_preview`}><Button variant="outline" className="h-auto whitespace-normal py-3">Request a call from Lola</Button></LolaCallModal>
          <RequestDemoModal source={`${source}_voice_preview`}><Button className="h-auto whitespace-normal py-3">Discuss your workflow</Button></RequestDemoModal>
        </div>
        <p className="text-xs text-gray-500">A callback requires your contact details and one-time call consent. Listening alone does not submit a lead.</p>
      </DialogContent>
    </Dialog>
  )
}
