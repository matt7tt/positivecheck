"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { DeferredFacebookPixel } from '@/components/deferred-facebook-pixel'
import { ConversionAnalytics } from '@/components/conversion-analytics'
import { isMarketingAnalyticsPage, MARKETING_GA_MEASUREMENT_ID } from '@/lib/analytics-config'

export function MarketingTelemetry() {
  const pathname = usePathname()
  const [allowedHost, setAllowedHost] = useState(false)
  useEffect(() => {
    setAllowedHost(isMarketingAnalyticsPage({ hostname: window.location.hostname, pathname: '/' }))
  }, [])
  if (!allowedHost || !isMarketingAnalyticsPage({ hostname: 'www.positivecheck.com', pathname: pathname || '/' })) return null

  return <>
    {MARKETING_GA_MEASUREMENT_ID && <Script src={`https://www.googletagmanager.com/gtag/js?id=${MARKETING_GA_MEASUREMENT_ID}`} strategy="lazyOnload" />}
    <DeferredFacebookPixel />
    <ConversionAnalytics />
    <Analytics beforeSend={event => isMarketingAnalyticsPage(new URL(event.url)) ? event : null} />
    <SpeedInsights beforeSend={event => isMarketingAnalyticsPage(new URL(event.url)) ? event : null} />
  </>
}
