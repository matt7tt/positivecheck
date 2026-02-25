import type { Metadata } from 'next'
import { CaseStudyAnchor } from '@/components/case-study-anchor'

export const metadata: Metadata = {
  title: '1,500+ Patient Engagement Case Study | Positive Check',
  description: 'How a healthcare partner scaled daily AI wellness calls to 1,500+ patients, reached ~50% monthly engagement, and caught 485 clinical alerts in 6 months.',
  alternates: {
    canonical: '/case-studies/scaling-patient-engagement',
  },
  openGraph: {
    title: 'Scaling Patient Engagement to 1,500+ Patients in 6 Months',
    description: 'Case study: AI-powered wellness calls scaled to 1,500+ patients with ~50% monthly engagement and 485 clinical alerts caught.',
    url: '/case-studies/scaling-patient-engagement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check patient engagement dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scaling Patient Engagement to 1,500+ Patients',
    description: 'Case study: AI-powered wellness calls scaled to 1,500+ patients with ~50% monthly engagement and 485 clinical alerts caught.',
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://positivecheck.com/case-studies" },
              { "@type": "ListItem", "position": 3, "name": "Scaling Patient Engagement", "item": "https://positivecheck.com/case-studies/scaling-patient-engagement" }
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
            "headline": "Scaling Patient Engagement to 1,500+ Patients in 6 Months",
            "description": "How a healthcare partner scaled daily AI wellness calls to 1,500+ patients, reached ~50% monthly engagement, and caught 485 clinical alerts.",
            "image": "https://positivecheck.com/images/admin-console-dashboard-new.png",
            "datePublished": "2026-02-22",
            "dateModified": "2026-02-22",
            "author": { "@type": "Organization", "name": "Positive Check", "url": "https://positivecheck.com" },
            "publisher": { "@type": "Organization", "name": "Positive Check", "logo": { "@type": "ImageObject", "url": "https://positivecheck.com/images/positive-logo-dark-blue.png" } }
          })
        }}
      />
      <CaseStudyAnchor />
    </>
  )
}
