import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { ImportanceOfCheckingInPost } from "@/components/blog-posts/importance-of-checking-in-care-communities"

export const metadata: Metadata = {
  title: 'Ensuring Seniors in Care Communities Receive Proper Attention | Positive Check',
  description: 'Regular check-ins are crucial for ensuring seniors in care communities receive consistent, individualized attention. Learn how automated wellness calls help.',
  alternates: {
    canonical: '/blog/importance-of-checking-in-care-communities',
  },
  openGraph: {
    title: 'Ensuring Seniors in Care Communities Receive Proper Attention',
    description: 'Regular check-ins are crucial for ensuring seniors in care communities receive consistent, individualized attention.',
    url: '/blog/importance-of-checking-in-care-communities',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/senior-care-family-visit.png', width: 1200, height: 630, alt: 'Family visiting senior in care community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ensuring Seniors in Care Communities Receive Proper Attention',
    description: 'Regular check-ins are crucial for ensuring seniors in care communities receive consistent, individualized attention.',
    images: ['/images/senior-care-family-visit.png'],
  },
}

export default function ImportanceOfCheckingInPage() {
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
              { "@type": "ListItem", "position": 3, "name": "Ensuring Seniors in Care Communities Receive Proper Attention", "item": "https://positivecheck.com/blog/importance-of-checking-in-care-communities" }
            ]
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <ImportanceOfCheckingInPost />
      </main>
      <PublicFooter />
    </div>
  )
}
