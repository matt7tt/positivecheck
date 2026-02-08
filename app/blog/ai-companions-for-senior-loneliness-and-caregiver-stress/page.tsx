import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { AiCompanionsForSeniorLonelinessAndCaregiverStressPost } from "@/components/blog-posts/ai-companions-for-senior-loneliness-and-caregiver-stress"

export const metadata: Metadata = {
  title: 'Can AI Companions Help Seniors and Caregivers? | Positive Check Blog',
  description: 'Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.',
  alternates: {
    canonical: '/blog/ai-companions-for-senior-loneliness-and-caregiver-stress',
  },
  openGraph: {
    title: 'Can AI Companions Help Seniors and Caregivers? | Positive Check Blog',
    description: 'Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates.',
    url: '/blog/ai-companions-for-senior-loneliness-and-caregiver-stress',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/ai-companion-senior-wellness.png', width: 1200, height: 630, alt: 'AI companion helping reduce senior isolation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can AI Companions Help Seniors and Caregivers?',
    description: 'Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls.',
    images: ['/images/ai-companion-senior-wellness.png'],
  },
}

export default function AiCompanionsForSeniorLonelinessAndCaregiverStressPage() {
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
              { "@type": "ListItem", "position": 3, "name": "Can AI Companions Help Seniors and Caregivers?", "item": "https://positivecheck.com/blog/ai-companions-for-senior-loneliness-and-caregiver-stress" }
            ]
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <AiCompanionsForSeniorLonelinessAndCaregiverStressPost />
      </main>
      <PublicFooter />
    </div>
  )
}
