"use client"

type EventParameters = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: any[]) => void
  }
}

/**
 * Send the same event to GTM's dataLayer and directly configured GA4.
 *
 * The helper is intentionally safe before either analytics library has loaded:
 * GTM consumes queued dataLayer events, while direct GA4 receives the event when
 * gtag is already available.
 */
export function trackEvent(eventName: string, parameters: EventParameters = {}) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...parameters })
  window.gtag?.("event", eventName, parameters)
}
