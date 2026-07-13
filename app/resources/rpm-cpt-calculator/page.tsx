import type { Metadata } from 'next'
import { RpmCptCalculator } from '@/components/rpm-cpt-calculator'

export const metadata: Metadata = {
  title: '2026 RPM CPT Calculator: Estimate Medicare RPM Reimbursement | Positive Check',
  description: 'Free RPM CPT calculator for 2026 Medicare billing. Estimate monthly reimbursement across CPT 99453, 99454, 99445, 99457, 99458, and 99470 based on your patient mix.',
  alternates: {
    canonical: '/resources/rpm-cpt-calculator',
  },
  openGraph: {
    title: '2026 RPM CPT Calculator',
    description: 'Estimate monthly Medicare RPM reimbursement across CPT 99453, 99454, 99445, 99457, 99458, and 99470 — including the two new 2026 codes.',
    url: '/resources/rpm-cpt-calculator',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/2026-rpm-cpt-codes-billing-guide.png', width: 1200, height: 630, alt: 'Healthcare professional reviewing Remote Patient Monitoring data and billing documentation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 RPM CPT Calculator | Positive Check',
    description: 'Estimate monthly Medicare RPM reimbursement across CPT 99453, 99454, 99445, 99457, 99458, and 99470.',
    images: ['/images/2026-rpm-cpt-codes-billing-guide.png'],
  },
}

export default function RpmCptCalculatorPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.positivecheck.com/resources" },
              { "@type": "ListItem", "position": 3, "name": "RPM CPT Calculator", "item": "https://www.positivecheck.com/resources/rpm-cpt-calculator" }
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
            "name": "Positive Check 2026 RPM CPT Calculator",
            "description": "Estimate monthly Medicare Remote Patient Monitoring reimbursement across CPT 99453, 99454, 99445, 99457, 99458, and 99470 based on patient mix.",
            "url": "https://www.positivecheck.com/resources/rpm-cpt-calculator",
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
      <RpmCptCalculator />
    </>
  )
}
