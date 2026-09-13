import type { Metadata } from 'next'
import { ROICalculator } from '@/components/roi-calculator'

export const metadata: Metadata = {
  title: 'ROI & Reimbursement Calculator | Positive Check',
  description: 'Explore illustrative RPM, CCM and post-discharge reimbursement scenarios. Compare revenue with assumed software cost and understand which delivery costs are excluded.',
  alternates: {
    canonical: '/roi-calculator',
  },
  openGraph: {
    title: 'ROI & Reimbursement Calculator',
    description: 'Model reimbursement and assumed software cost for RPM, CCM and post-discharge workflows. These scenarios are not quotes or full practice-profit estimates.',
    url: '/roi-calculator',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/senior-talking-on-the-phone1.webp', width: 1200, height: 630, alt: 'Positive Check ROI calculator for healthcare providers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI & Reimbursement Calculator | Positive Check',
    description: 'Explore reimbursement and software-cost assumptions, with clear exclusions for staffing and other delivery costs.',
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "ROI Calculator", "item": "https://www.positivecheck.com/roi-calculator" }
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
            "url": "https://www.positivecheck.com/roi-calculator",
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
