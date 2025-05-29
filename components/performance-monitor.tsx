'use client'

import { useEffect } from 'react'

interface Metric {
  name: string
  value: number
  delta: number
  id: string
  entries: PerformanceEntry[]
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if Web Vitals API is available
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return
    }

    // Dynamic import of web-vitals for performance
    import('web-vitals').then((webVitals) => {
      // Track Core Web Vitals
      webVitals.onCLS((metric: Metric) => {
        console.log('CLS:', metric)
        // Send to analytics if needed
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000),
            non_interaction: true,
          })
        }
      })

      // Use onINP instead of onFID for web-vitals v5
      webVitals.onINP((metric: Metric) => {
        console.log('INP:', metric)
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'INP',
            value: Math.round(metric.value),
            non_interaction: true,
          })
        }
      })

      webVitals.onFCP((metric: Metric) => {
        console.log('FCP:', metric)
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(metric.value),
            non_interaction: true,
          })
        }
      })

      webVitals.onLCP((metric: Metric) => {
        console.log('LCP:', metric)
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(metric.value),
            non_interaction: true,
          })
        }
      })

      webVitals.onTTFB((metric: Metric) => {
        console.log('TTFB:', metric)
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(metric.value),
            non_interaction: true,
          })
        }
      })
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error)
    })
  }, [])

  return null // This component doesn't render anything
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
} 