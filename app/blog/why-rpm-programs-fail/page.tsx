import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { WhyRpmProgramsFailPost } from "@/components/blog-posts/why-rpm-programs-fail"

export const metadata: Metadata = {
  title: 'Why RPM Programs Fail: Four Operational Problems & Fixes | Positive Check',
  description: 'RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.',
  alternates: {
    canonical: '/blog/why-rpm-programs-fail',
  },
  openGraph: {
    title: 'Why RPM Programs Fail: Four Operational Problems and How to Fix Them',
    description: 'RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.',
    url: '/blog/why-rpm-programs-fail',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/why-rpm-programs-fail.jpg', width: 1734, height: 907, alt: 'Why RPM programs fail: enrollment, adherence, alerts, and documentation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why RPM Programs Fail: Four Operational Problems and How to Fix Them',
    description: 'RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.',
    images: ['/images/why-rpm-programs-fail.jpg'],
  },
}

export default function WhyRpmProgramsFailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.positivecheck.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Why RPM Programs Fail: Four Operational Problems and How to Fix Them", "item": "https://www.positivecheck.com/blog/why-rpm-programs-fail" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Why RPM Programs Fail: Four Operational Problems and How to Fix Them",
            "description": "RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.",
            "image": "https://www.positivecheck.com/images/why-rpm-programs-fail.jpg",
            "datePublished": "2026-07-20",
            "dateModified": "2026-07-20",
            "author": { "@type": "Organization", "name": "Positive Check", "url": "https://www.positivecheck.com" },
            "publisher": { "@type": "Organization", "name": "Positive Check", "logo": { "@type": "ImageObject", "url": "https://www.positivecheck.com/images/positive-logo-dark-blue.png" } }
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <WhyRpmProgramsFailPost />
      </main>
      <PublicFooter />
    </div>
  )
}
