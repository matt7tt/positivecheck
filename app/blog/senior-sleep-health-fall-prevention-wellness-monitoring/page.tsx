import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { SeniorSleepHealthFallPreventionWellnessMonitoringPost } from "@/components/blog-posts/senior-sleep-health-fall-prevention-wellness-monitoring"

export const metadata: Metadata = {
  title: 'Why Sleep Quality Is Critical for Senior Safety & Health | Positive Check',
  description: 'Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters for aging adults and how daily wellness monitoring can help prevent issues.',
  alternates: {
    canonical: '/blog/senior-sleep-health-fall-prevention-wellness-monitoring',
  },
  openGraph: {
    title: 'Why Sleep Quality Is Critical for Senior Safety & Health',
    description: 'Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters and how daily wellness monitoring helps prevent issues.',
    url: '/blog/senior-sleep-health-fall-prevention-wellness-monitoring',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/senior-sleep-safety-bedroom.png', width: 1200, height: 630, alt: 'Senior sleeping safely in well-designed bedroom' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Sleep Quality Is Critical for Senior Safety & Health',
    description: 'Poor sleep increases fall risk by 30% in seniors. Learn how daily wellness monitoring helps prevent issues.',
    images: ['/images/senior-sleep-safety-bedroom.png'],
  },
}

export default function SeniorSleepHealthFallPreventionWellnessMonitoringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://positivecheck.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Why Sleep Quality Is Critical for Senior Safety & Health", "item": "https://positivecheck.com/blog/senior-sleep-health-fall-prevention-wellness-monitoring" }
            ]
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <SeniorSleepHealthFallPreventionWellnessMonitoringPost />
      </main>
      <PublicFooter />
    </div>
  )
}
