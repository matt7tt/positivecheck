import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { CcmBilling2026CptCodesGuidePost } from "@/components/blog-posts/ccm-billing-2026-cpt-codes-guide"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'CCM Billing in 2026: CPT 99490, 99439, 99487 & 99489 Guide | Positive Check',
  description: 'The complete 2026 guide to Chronic Care Management billing: CPT 99490, 99439, 99487, and 99489 rates, non-complex vs. complex CCM, audit-defensible documentation, and the CY 2026 Physician Fee Schedule changes.',
  alternates: {
    canonical: '/blog/ccm-billing-2026-cpt-codes-guide',
  },
  openGraph: {
    title: 'CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489',
    description: 'What each CCM code covers, how to choose non-complex vs. complex CCM, audit-defensible documentation, and 2026 rate changes from the CY 2026 Physician Fee Schedule final rule.',
    url: '/blog/ccm-billing-2026-cpt-codes-guide',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/ccm-billing-2026-guide.png', width: 1200, height: 630, alt: 'Healthcare practice administrator reviewing chronic care management billing on a laptop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489',
    description: 'CCM code rates, non-complex vs. complex CCM, audit-defensible documentation, and CY 2026 Physician Fee Schedule changes.',
    images: ['/images/ccm-billing-2026-guide.png'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "How much does CPT 99490 reimburse in 2026?",
    answer: "Approximately $66.30 per patient per month at the 2026 Medicare national non-facility average — a 9.6% increase over 2025 — for the first 20 minutes of clinical staff CCM time. Actual reimbursement varies by locality, setting, payer, and MAC; verify amounts in the CMS Physician Fee Schedule Look-Up Tool.",
  },
  {
    question: "What is the difference between complex and non-complex CCM?",
    answer: "The clinical bright line is medical decision-making. Non-complex CCM (99490, 99439) covers standard care coordination time with no specific MDM threshold. Complex CCM (99487, 99489) requires moderate or high complexity medical decision-making performed personally by the billing practitioner during the service period. The two tiers are mutually exclusive for the same patient in the same calendar month.",
  },
  {
    question: "How many times can CPT 99439 be billed per month?",
    answer: "CPT 99439 is commonly reported as billable up to two times per calendar month as an add-on to 99490, covering 40 and 60 total minutes of clinical staff time. A patient with 60 documented minutes may support 99490 plus two units of 99439 — approximately $167 of monthly revenue at 2026 national non-facility planning rates. Verify current CPT, NCCI/MUE, payer, and MAC guidance before billing.",
  },
  {
    question: "Can CCM and RPM be billed for the same patient in the same month?",
    answer: "Yes — CCM may be billed concurrently with RPM and TCM when each program is clinically appropriate and its requirements are independently met, provided no time or effort is counted twice. The same minute can never be billed against both CCM and RPM: the two programs share patients, not minutes.",
  },
  {
    question: "What are the eligibility requirements for CCM billing?",
    answer: "Four conditions must be met: the patient has two or more chronic conditions expected to last at least 12 months (or until death) that place them at significant risk; documented patient consent obtained once before starting CCM; an initiating visit for new patients or patients not seen within the prior year; and a comprehensive care plan that is maintained and updated as conditions change.",
  },
]

const POST_URL = `${SITE_URL}/blog/ccm-billing-2026-cpt-codes-guide`

export default function CcmBilling2026CptCodesGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "CCM Billing in 2026: The Complete Guide to CPT 99490, 99439, 99487, and 99489",
            description: "The complete 2026 guide to Chronic Care Management billing: CPT 99490, 99439, 99487, and 99489 rates, non-complex vs. complex CCM, audit-defensible documentation, and the CY 2026 Physician Fee Schedule changes.",
            url: POST_URL,
            image: `${SITE_URL}/images/ccm-billing-2026-guide.png`,
            datePublished: "2026-07-02",
            dateModified: "2026-07-02",
            articleSection: "CMS Billing & Compliance",
            keywords: [
              "CCM billing 2026",
              "CPT 99490",
              "CPT 99439",
              "CPT 99487",
              "CPT 99489",
              "chronic care management reimbursement",
            ],
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFAQSchema(FAQ_ITEMS)),
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <CcmBilling2026CptCodesGuidePost faqs={FAQ_ITEMS} />
      </main>
      <PublicFooter />
    </div>
  )
}
