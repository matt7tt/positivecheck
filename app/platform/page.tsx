import type { Metadata } from 'next'
import { PlatformComponent } from '@/components/platform'

export const metadata: Metadata = {
  title: 'AI Patient Engagement Platform | Positive Check',
  description: 'Explore the Positive Check platform: real-time voice AI, clinical alert classification, cognitive health monitoring, and population analytics — HIPAA compliant.',
  alternates: {
    canonical: '/platform',
  },
  openGraph: {
    title: 'AI Patient Engagement Platform',
    description: 'Real-time voice AI, clinical alerts, cognitive health monitoring, and population analytics — built for healthcare at scale.',
    url: '/platform',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check provider dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Patient Engagement Platform',
    description: 'Real-time voice AI, clinical alerts, cognitive health monitoring, and population analytics — built for healthcare at scale.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Platform", "item": "https://positivecheck.com/platform" }
            ]
          })
        }}
      />
      <PlatformComponent />
    </>
  )
}
