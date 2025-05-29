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
    if (typeof window !== 'undefined' && 'web-vitals' in window === false) {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(console.log)
        onINP(console.log)
        onFCP(console.log)
        onLCP((metric: any) => {
          console.log('LCP:', metric)
          // Track LCP specifically for optimization
          if (metric.value > 2500) {
            console.warn('LCP is slow:', metric.value, 'ms')
          }
        })
        onTTFB(console.log)
      })
    }
  }, [])

  // Preload critical resources
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Preload critical images that might be LCP candidates
      const criticalImages = [
        '/images/senior-talking-on-the-phone1.webp',
        '/images/lola-from-positive-check.webp'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        link.type = 'image/webp'
        document.head.appendChild(link)
      })
    }
  }, [])

  return null // This component doesn't render anything
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
} 