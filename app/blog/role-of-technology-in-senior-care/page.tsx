import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { TechnologyInSeniorCarePost } from "@/components/blog-posts/role-of-technology-in-senior-care"

export const metadata: Metadata = {
  title: 'The Role of Technology in Senior Care | Positive Check Blog',
  description: 'How AI-powered tools and telehealth are transforming senior care delivery, improving patient outcomes, and helping providers scale wellness monitoring.',
  alternates: {
    canonical: '/blog/role-of-technology-in-senior-care',
  },
  openGraph: {
    title: 'The Role of Technology in Senior Care',
    description: 'How AI-powered tools and telehealth are transforming senior care delivery and improving patient outcomes.',
    url: '/blog/role-of-technology-in-senior-care',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Role of Technology in Senior Care',
    description: 'How AI-powered tools and telehealth are transforming senior care delivery and improving patient outcomes.',
  },
}

export default function TechnologyInSeniorCarePage() {
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
              { "@type": "ListItem", "position": 3, "name": "The Role of Technology in Senior Care", "item": "https://positivecheck.com/blog/role-of-technology-in-senior-care" }
            ]
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <TechnologyInSeniorCarePost />
      </main>
      <PublicFooter />
    </div>
  )
}
