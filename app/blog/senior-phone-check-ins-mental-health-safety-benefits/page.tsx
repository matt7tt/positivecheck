import { Metadata } from 'next'
import { SeniorPhoneCheckInsMentalHealthSafetyBenefitsBlogPost } from '@/components/blog/senior-phone-check-ins-mental-health-safety-benefits'

export const metadata: Metadata = {
  title: 'Phone Check-Ins & Senior Health | Positive Check',
  description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place and caregiver peace of mind.',
  alternates: {
    canonical: '/blog/senior-phone-check-ins-mental-health-safety-benefits',
  },
  openGraph: {
    title: '7 Ways Phone Check-ins Help Senior Mental Health',
    description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place and caregiver peace of mind.',
    url: '/blog/senior-phone-check-ins-mental-health-safety-benefits',
    type: 'article',
    images: [
      {
        url: '/images/senior-phone-check-in-mental-health.webp',
        width: 1200,
        height: 630,
        alt: 'Senior person enjoying a phone conversation, representing the mental health benefits of regular check-ins',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Ways Phone Check-ins Help Senior Mental Health',
    description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place.',
    images: ['/images/senior-phone-check-in-mental-health.webp'],
  },
}

export default function Page() {
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
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://positivecheck.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "7 Ways Phone Check-ins Help Senior Mental Health", "item": "https://positivecheck.com/blog/senior-phone-check-ins-mental-health-safety-benefits" }
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
            "headline": "7 Ways Phone Check-ins Help Senior Mental Health",
            "description": "Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place and caregiver peace of mind.",
            "image": "https://positivecheck.com/images/senior-phone-check-in-mental-health.webp",
            "datePublished": "2025-01-25",
            "dateModified": "2025-01-25",
            "author": { "@type": "Organization", "name": "Positive Check", "url": "https://positivecheck.com" },
            "publisher": { "@type": "Organization", "name": "Positive Check", "logo": { "@type": "ImageObject", "url": "https://positivecheck.com/images/positive-logo-dark-blue.png" } }
          })
        }}
      />
      <SeniorPhoneCheckInsMentalHealthSafetyBenefitsBlogPost />
    </>
  )
} 