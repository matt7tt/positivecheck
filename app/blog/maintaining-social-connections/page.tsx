import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { MaintainingSocialConnectionsPost } from "@/components/blog-posts/maintaining-social-connections"

export const metadata: Metadata = {
  title: 'Maintaining Social Connections in Senior Years | Positive Check Blog',
  description: 'Social connections play a vital role in senior mental and physical health. Learn effective strategies to help seniors stay socially active and engaged.',
  alternates: {
    canonical: '/blog/maintaining-social-connections',
  },
  openGraph: {
    title: 'Maintaining Social Connections in Senior Years',
    description: 'Social connections play a vital role in senior mental and physical health. Learn strategies to help seniors stay socially active.',
    url: '/blog/maintaining-social-connections',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/senior-social-connections.png', width: 1200, height: 630, alt: 'Seniors maintaining social connections' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maintaining Social Connections in Senior Years',
    description: 'Social connections play a vital role in senior mental and physical health. Learn strategies to help seniors stay active.',
    images: ['/images/senior-social-connections.png'],
  },
}

export default function MaintainingSocialConnectionsPage() {
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
              { "@type": "ListItem", "position": 3, "name": "Maintaining Social Connections in Senior Years", "item": "https://positivecheck.com/blog/maintaining-social-connections" }
            ]
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <MaintainingSocialConnectionsPost />
      </main>
      <PublicFooter />
    </div>
  )
}
