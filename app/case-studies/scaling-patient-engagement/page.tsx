import type { Metadata } from 'next'
import { CaseStudyAnchor } from '@/components/case-study-anchor'

export const metadata: Metadata = {
  title: 'Scaling Patient Engagement to 1,500+ Patients | Positive Check Case Study',
  description:
    'See how a healthcare partner used Positive Check to scale daily patient wellness calls to 1,500+ patients, achieve ~50% monthly engagement, and catch 485 clinical alerts — all in 6 months.',
  alternates: {
    canonical: '/case-studies/scaling-patient-engagement',
  },
  openGraph: {
    title: 'Scaling Patient Engagement to 1,500+ Patients in 6 Months',
    description:
      'Case study: AI-powered wellness calls scaled to 1,500+ patients with ~50% monthly engagement and 485 clinical alerts caught.',
    url: '/case-studies/scaling-patient-engagement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scaling Patient Engagement to 1,500+ Patients in 6 Months',
    description:
      'Case study: AI-powered wellness calls scaled to 1,500+ patients with ~50% monthly engagement and 485 clinical alerts caught.',
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
      <CaseStudyAnchor />
    </>
  )
}
