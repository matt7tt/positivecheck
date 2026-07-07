import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { CcmBilling2026Cpt9949099439994879489Post } from "@/components/blog-posts/ccm-billing-2026-cpt-99490-99439-99487-99489"

export const metadata: Metadata = {
  title: 'CCM Billing in 2026: CPT 99490, 99439, 99487 & 99489 Guide | Positive Check',
  description: 'The complete 2026 guide to Chronic Care Management billing: CPT 99490, 99439, 99487, and 99489 rates, non-complex vs. complex CCM, audit-defensible documentation, and the CY 2026 Physician Fee Schedule changes.',
  alternates: {
    canonical: '/blog/ccm-billing-2026-cpt-99490-99439-99487-99489',
  },
  openGraph: {
    title: 'CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489',
    description: 'What each CCM code covers, how to choose non-complex vs. complex CCM, audit-defensible documentation, and 2026 rate changes from the CY 2026 Physician Fee Schedule final rule.',
    url: '/blog/ccm-billing-2026-cpt-99490-99439-99487-99489',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/ccm-billing-2026-cpt-99490-99439-99487-99489.png', width: 1200, height: 630, alt: 'Healthcare practice administrator reviewing chronic care management billing on a laptop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489',
    description: 'CCM code rates, non-complex vs. complex CCM, audit-defensible documentation, and CY 2026 Physician Fee Schedule changes.',
    images: ['/images/ccm-billing-2026-cpt-99490-99439-99487-99489.png'],
  },
}

export default function CcmBilling2026Cpt9949099439994879489Page() {
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
              { "@type": "ListItem", "position": 3, "name": "CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489", "item": "https://www.positivecheck.com/blog/ccm-billing-2026-cpt-99490-99439-99487-99489" }
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
            "headline": "CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489",
            "description": "The complete 2026 guide to Chronic Care Management billing: CPT 99490, 99439, 99487, and 99489 rates, non-complex vs. complex CCM, audit-defensible documentation, and the CY 2026 Physician Fee Schedule changes.",
            "image": "https://www.positivecheck.com/images/ccm-billing-2026-cpt-99490-99439-99487-99489.png",
            "datePublished": "2026-07-07",
            "dateModified": "2026-07-07",
            "author": { "@type": "Organization", "name": "Positive Check", "url": "https://www.positivecheck.com" },
            "publisher": { "@type": "Organization", "name": "Positive Check", "logo": { "@type": "ImageObject", "url": "https://www.positivecheck.com/images/positive-logo-dark-blue.png" } }
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <CcmBilling2026Cpt9949099439994879489Post />
      </main>
      <PublicFooter />
    </div>
  )
}
