"use client"

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { captureTouch, isCaptureAllowed } from '@/lib/attribution'

// Saves the visitor's source once per page load. Renders nothing.
export function AttributionCapture() {
  const pathname = usePathname()
  const captured = useRef(false)
  useEffect(() => {
    if (captured.current) return
    captured.current = true
    try {
      if (!isCaptureAllowed(pathname || window.location.pathname)) return
      captureTouch(window.location.href, document.referrer, new Date(), window.localStorage)
    } catch {
      // never let capture break the page
    }
  }, [pathname])
  return null
}
