"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

export function ConversionAnalytics() {
  const pathname = usePathname()
  const isInitialPage = useRef(true)

  useEffect(() => {
    // GA4's config call records the initial page view. The object event is still
    // queued for GTM, and subsequent client-side navigations go to both.
    trackEvent("page_view", {}, { sendToDirectGa: !isInitialPage.current })
    isInitialPage.current = false
  }, [pathname])

  return null
}
