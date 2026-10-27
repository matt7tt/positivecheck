'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { HEATMAP_CHOICE_KEY, HEATMAP_CHOICES_EVENT, hasPrivacySignal, isHeatmapVisit, readHeatmapChoice, type HeatmapChoice } from '@/lib/heatmap-privacy'
import { startHeatmapRecorder } from '@/lib/heatmap-recorder'

export function HeatmapPrivacy({ publicPaths }: { publicPaths: string[] }) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [choice, setChoice] = useState<HeatmapChoice | null>(null)
  const stop = useRef<(() => void) | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const eligible = isHeatmapVisit(new URL(location.href), document.referrer, publicPaths)
    const signal = hasPrivacySignal(navigator)
    let saved: HeatmapChoice | null = null
    try { saved = readHeatmapChoice(localStorage) } catch { /* Fail closed. */ }
    setChoice(saved)
    setBlocked(signal)
    setVisible(eligible && !saved && !signal)
    if (eligible && saved === 'accepted' && !signal && !started.current) {
      started.current = true
      stop.current = startHeatmapRecorder(publicPaths)
    }
    const open = () => setVisible(true)
    const sync = (event: StorageEvent) => {
      if (event.key === HEATMAP_CHOICE_KEY || event.key === null) {
        stop.current?.()
        location.reload()
      }
    }
    window.addEventListener(HEATMAP_CHOICES_EVENT, open)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(HEATMAP_CHOICES_EVENT, open)
      window.removeEventListener('storage', sync)
    }
  }, [pathname, publicPaths])

  function save(next: HeatmapChoice) {
    try { localStorage.setItem(HEATMAP_CHOICE_KEY, JSON.stringify({ choice: next, at: Date.now() })) }
    catch { setBlocked(true); return }
    setChoice(next)
    setVisible(false)
    stop.current?.()
    // Clear first-party Clarity cookies even if the SDK was blocked or failed.
    if (next === 'declined') {
      for (const name of ['_clck', '_clsk']) {
        for (const domain of ['', '; domain=positivecheck.com', '; domain=www.positivecheck.com']) {
          document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax; Secure`
        }
      }
    }
    // A clean document handles both initial opt-in and withdrawal; no recorder
    // remains alive in the background after a visitor changes their choice.
    location.reload()
  }

  if (!visible) return null
  return (
    <section aria-label="Heatmap privacy choices" className="fixed bottom-0 inset-x-0 z-[60] border-t border-gray-200 bg-white p-4 shadow-lg" data-clarity-mask="true">
      <div className="mx-auto max-w-5xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl text-sm text-gray-700">
          <h2 className="font-semibold text-[#1a2642] mb-1">Help us improve this website</h2>
          <p>Allow Microsoft Clarity heatmaps and session recordings of clicks and scrolling on public pages? Text and form entries are masked. This choice only controls Clarity. <a href="/privacy#website-heatmaps" className="underline">Privacy details</a>.</p>
          {blocked && <p className="mt-1">Recording is off because of your browser privacy settings or unavailable preference storage.</p>}
          {choice && <p className="mt-1">Your saved choice: {choice === 'accepted' ? 'allowed' : 'off'}.</p>}
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          <button className="rounded-md border border-gray-400 px-4 py-2 text-sm font-medium" onClick={() => save('declined')}>No thanks</button>
          <button disabled={blocked} className="rounded-md bg-[#1a2642] text-white px-4 py-2 text-sm font-medium disabled:opacity-50" onClick={() => save('accepted')}>Allow heatmaps</button>
          {choice && <button className="px-2 py-2 text-sm underline" onClick={() => setVisible(false)}>Close</button>}
        </div>
      </div>
    </section>
  )
}

export function HeatmapChoicesButton() {
  return <button type="button" className="hover:text-[#1a2642] underline" onClick={() => window.dispatchEvent(new Event(HEATMAP_CHOICES_EVENT))}>Heatmap privacy choices</button>
}
