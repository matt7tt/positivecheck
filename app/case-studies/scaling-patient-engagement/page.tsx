import type { Metadata } from 'next'
import { CaseStudyAnchor } from '@/components/case-study-anchor'
import { caseStudyTitle, caseStudyDescription } from '@/lib/case-study-data'
import { ORG_ID } from '@/lib/schema'

export const metadata: Metadata = {
  title: '1,500+ Patient Engagement Case Study | Positive Check',
  description: caseStudyDescription,
  alternates: {
    canonical: '/case-studies/scaling-patient-engagement',
  },
  openGraph: {
    title: caseStudyTitle,
    description: caseStudyDescription,
    url: '/case-studies/scaling-patient-engagement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check patient engagement dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scaling Patient Engagement to 1,500+ Patients',
    description: caseStudyDescription,
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

export default function CaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Scaling Patient Engagement", "item": "https://www.positivecheck.com/case-studies/scaling-patient-engagement" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": caseStudyTitle,
            "description": caseStudyDescription,
            "image": "https://www.positivecheck.com/images/admin-console-dashboard-new.png",
            "datePublished": "2026-02-22",
            "dateModified": "2026-09-13",
            "author": { "@id": ORG_ID, "@type": "Organization", "name": "Positive Check", "url": "https://www.positivecheck.com" },
            "publisher": { "@id": ORG_ID, "@type": "Organization", "name": "Positive Check", "logo": { "@type": "ImageObject", "url": "https://www.positivecheck.com/images/positive-logo-dark-blue.png" } }
          })
        }}
      />
      <CaseStudyAnchor />
    </>
  )
}
