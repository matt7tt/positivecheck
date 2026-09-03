"use client"

import { isMarketingAnalyticsPage, MARKETING_GA_MEASUREMENT_ID } from "@/lib/analytics-config"

type EventParameters = Record<string, string | number | boolean | undefined>

const ATTRIBUTION_STORAGE_KEY = "positive_check_attribution"

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: any[]) => void
  }
}

function readAttribution(): EventParameters {
  if (typeof window === "undefined") return {}

  const params = new URLSearchParams(window.location.search)
  let initialReferrer: string | undefined
  try {
    const referrer = document.referrer ? new URL(document.referrer) : null
    initialReferrer = referrer ? `${referrer.origin}${referrer.pathname}` : undefined
  } catch {
    initialReferrer = undefined
  }
  const current: EventParameters = {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
    gclid: params.get("gclid") || undefined,
    msclkid: params.get("msclkid") || undefined,
    landing_page: window.location.pathname,
    initial_referrer: initialReferrer,
  }

  const hasCampaignData = Object.entries(current).some(
    ([key, value]) => key !== "landing_page" && key !== "initial_referrer" && Boolean(value)
  )

  try {
    const stored = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
    if (stored && !hasCampaignData) return JSON.parse(stored) as EventParameters

    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(current))
  } catch {
    // Storage can be unavailable in privacy-focused browsing modes. Current-page
    // attribution is still returned in that case.
  }

  return current
}

export function getAttributionContext(): EventParameters {
  if (typeof window === "undefined") return {}

  return {
    ...readAttribution(),
    page_path: window.location.pathname,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_title: document.title,
    device_category: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
  }
}

/**
 * Send the same event to GTM's dataLayer and directly configured GA4.
 *
 * The helper is intentionally safe before either analytics library has loaded:
 * GTM consumes queued dataLayer events, while direct GA4 receives the event when
 * gtag is already available.
 */
export function trackEvent(
  eventName: string,
  parameters: EventParameters = {},
  options: { sendToDirectGa?: boolean } = {}
) {
  if (typeof window === "undefined" || !isMarketingAnalyticsPage(window.location)) return

  const eventParameters = {
    ...getAttributionContext(),
    ...parameters,
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...eventParameters })

  // When a direct GA4 property is configured, send events without depending on
  // unpublished GTM tags. GTM still receives the dataLayer event for other tags.
  if (
    MARKETING_GA_MEASUREMENT_ID &&
    options.sendToDirectGa !== false
  ) {
    window.gtag?.("event", eventName, eventParameters)
  }
}
