import type { Metadata } from 'next'
import { HowItWorksComponent } from '@/components/how-it-works'

export const metadata: Metadata = {
  title: 'How AI Patient Check-In Calls Work | Positive Check',
  description: 'Set up in minutes: configure call schedules, customize wellness prompts, and receive real-time patient insights via a HIPAA-compliant dashboard.',
  alternates: {
    canonical: '/how-it-works',
  },
  openGraph: {
    title: 'How AI Patient Check-In Calls Work',
    description: 'Set up in minutes: configure call schedules, customize wellness prompts, and receive real-time patient insights via a HIPAA-compliant dashboard.',
    url: '/how-it-works',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/senior-talking-on-the-phone1.webp', width: 1200, height: 630, alt: 'Senior receiving an AI-powered wellness check-in call' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AI Patient Check-In Calls Work',
    description: 'Set up in minutes: configure call schedules, customize wellness prompts, and receive real-time patient insights.',
    images: ['/images/senior-talking-on-the-phone1.webp'],
  },
}

export default function HowItWorksPage() {
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
              { "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://positivecheck.com/how-it-works" }
            ]
          })
        }}
      />
      <HowItWorksComponent />
    </>
  )
} 