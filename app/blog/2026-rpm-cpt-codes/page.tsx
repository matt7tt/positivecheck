import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { RpmBilling2026CptCodesPost } from "@/components/blog-posts/2026-rpm-cpt-codes"

export const metadata: Metadata = {
  title: '2026 RPM CPT Codes: 99445, 99454, 99457, 99458 & 99470 | Positive Check',
  description: 'Learn 2026 Medicare RPM billing requirements for CPT 99445, 99454, 99457, 99458 and 99470, including reimbursement, transmission days, treatment time and stacking rules.',
  alternates: {
    canonical: '/blog/2026-rpm-cpt-codes',
  },
  openGraph: {
    title: 'RPM Billing in 2026: CPT Codes, Requirements and Reimbursement',
    description: 'What each RPM code covers, how the new 99445 and 99470 codes change the billing decision, and what makes documentation defensible under the CY 2026 Physician Fee Schedule.',
    url: '/blog/2026-rpm-cpt-codes',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/2026-rpm-cpt-codes-billing-guide.png', width: 1200, height: 630, alt: 'Healthcare professional reviewing Remote Patient Monitoring data and billing documentation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RPM Billing in 2026: CPT Codes, Requirements and Reimbursement',
    description: '2026 Medicare RPM billing: CPT 99445, 99454, 99457, 99458 and 99470 requirements, reimbursement, and documentation.',
    images: ['/images/2026-rpm-cpt-codes-billing-guide.png'],
  },
}

const FAQ_ITEMS = [
  {
    question: "What's the difference between CPT 99454 and CPT 99445?",
    answer: "Both are RPM device-supply codes billed per 30-day period, valued the same by CMS, but they apply to different transmission-day counts: 99454 requires 16 or more days of data transmission in the period, while 99445 (new in 2026) applies to 2–15 days. Only one can be billed per patient per period."
  },
  {
    question: "What's the difference between CPT 99457 and CPT 99470?",
    answer: "Both cover cumulative monthly treatment-management time that includes at least one real-time interactive communication, but at different thresholds: 99457 requires 20 or more minutes (with 99458 available for additional 20-minute increments), while 99470 (new in 2026) applies when the total reaches 10 minutes but not 20. Only one applies per patient per month."
  },
  {
    question: "Can RPM and CCM be billed for the same patient in the same month?",
    answer: "Yes, when each program's requirements are independently met and the same staff time, interaction, or work is not counted toward more than one billed service."
  },
  {
    question: "Does RPM require two or more chronic conditions like CCM?",
    answer: "No. Medicare covers RPM for an acute or chronic condition when monitoring is medically reasonable and necessary and the other applicable requirements are met. This differs from CCM, which generally requires two or more qualifying chronic conditions."
  },
  {
    question: "What counts as \"interactive communication\" for RPM billing?",
    answer: "Real-time, synchronous, two-way audio communication (which can be enhanced with video or other technology) between the patient or caregiver and clinical staff, a physician, or another qualified healthcare professional, about the monitored condition. At least one such communication must occur during the reported period, though it doesn't have to account for the entire cumulative treatment-management time."
  },
  {
    question: "Can an automated call or AI-driven check-in satisfy the interactive communication requirement?",
    answer: "It has not been established that an automated interaction independently satisfies the requirement. CMS was directly asked whether automated bidirectional messaging and AI prompts could qualify and did not give an affirmative answer, instead referring back to CPT specifications. Practices should therefore not assume automated outreach alone creates billable treatment-management time or satisfies the required interactive communication — qualified clinical and billing personnel should determine which human interactions meet current CPT, CMS, MAC, and payer requirements."
  },
]

export default function RpmBilling2026CptCodesPage() {
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
              { "@type": "ListItem", "position": 3, "name": "RPM Billing in 2026: CPT Codes, Requirements and Reimbursement", "item": "https://www.positivecheck.com/blog/2026-rpm-cpt-codes" }
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
            "headline": "RPM Billing in 2026: CPT Codes, Requirements and Reimbursement",
            "description": "Learn 2026 Medicare RPM billing requirements for CPT 99445, 99454, 99457, 99458 and 99470, including reimbursement, transmission days, treatment time and stacking rules.",
            "image": "https://www.positivecheck.com/images/2026-rpm-cpt-codes-billing-guide.png",
            "datePublished": "2026-07-12",
            "dateModified": "2026-07-12",
            "author": { "@type": "Organization", "name": "Positive Check", "url": "https://www.positivecheck.com" },
            "publisher": { "@type": "Organization", "name": "Positive Check", "logo": { "@type": "ImageObject", "url": "https://www.positivecheck.com/images/positive-logo-dark-blue.png" } },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.positivecheck.com/blog/2026-rpm-cpt-codes" }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ITEMS.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer }
            }))
          })
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <RpmBilling2026CptCodesPost />
      </main>
      <PublicFooter />
    </div>
  )
}
