import type { Metadata } from 'next'
import { ROICalculator } from '@/components/roi-calculator'

export const metadata: Metadata = {
  title: 'ROI & Reimbursement Calculator | Positive Check',
  description: 'Calculate your projected Medicare reimbursement revenue with Positive Check. See how RPM, CCM, and post-discharge programs generate 5-15x ROI at $8-16/patient/month.',
  alternates: {
    canonical: '/roi-calculator',
  },
  openGraph: {
    title: 'ROI & Reimbursement Calculator',
    description: 'Calculate your projected Medicare reimbursement revenue with Positive Check. See how RPM, CCM, and post-discharge programs generate 5-15x ROI.',
    url: '/roi-calculator',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/senior-talking-on-the-phone1.webp', width: 1200, height: 630, alt: 'Positive Check ROI calculator for healthcare providers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI & Reimbursement Calculator | Positive Check',
    description: 'Calculate your projected Medicare reimbursement revenue with Positive Check. See RPM, CCM, and post-discharge ROI at $8-16/patient/month.',
    images: ['/images/senior-talking-on-the-phone1.webp'],
  },
}

export default function ROICalculatorPage() {
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
              { "@type": "ListItem", "position": 2, "name": "ROI Calculator", "item": "https://positivecheck.com/roi-calculator" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Positive Check ROI & Reimbursement Calculator",
            "description": "Calculate projected Medicare reimbursement revenue for RPM, CCM, and post-discharge programs with Positive Check.",
            "url": "https://positivecheck.com/roi-calculator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <ROICalculator />
    </>
  )
}
