import type { Metadata } from "next"
import { Rpm2027ProposedRulePost, RPM_2027_FAQ } from "@/components/blog-posts/2027-rpm-proposed-rule"
import { PublicFooter } from "@/components/shared/public-footer"
import { PublicHeader } from "@/components/shared/public-header"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"

const TITLE = "2027 RPM Proposed Rule: What Providers Need to Know"
const DESCRIPTION =
  "CMS proposed new 2027 RPM rules for initiating visits, employed clinical staff, RTM relationships, valuation and possible G-codes. See what could change."
const URL = `${SITE_URL}/blog/2027-rpm-proposed-rule`
const IMAGE = `${SITE_URL}/images/healthcare-administrator-desk.png`

export const metadata: Metadata = {
  title: `${TITLE} | Positive Check`,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/2027-rpm-proposed-rule" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog/2027-rpm-proposed-rule",
    siteName: "Positive Check",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-07-30",
    modifiedTime: "2026-07-30",
    images: [{
      url: "/images/healthcare-administrator-desk.png",
      width: 1200,
      height: 630,
      alt: "Healthcare administrator reviewing remote patient monitoring policy and operations",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/healthcare-administrator-desk.png"],
  },
}

export default function Rpm2027ProposedRulePage() {
  const articleSchema = buildArticleSchema({
    type: "BlogPosting",
    headline: "2027 RPM Proposed Rule: Initiating Visits, Employed Staff, and What Could Change",
    description: DESCRIPTION,
    url: URL,
    image: IMAGE,
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    articleSection: "CMS Billing & Compliance",
    keywords: [
      "2027 RPM proposed rule",
      "CMS 2027 RPM",
      "remote patient monitoring 2027",
      "RPM initiating visit",
      "RPM employed clinical staff",
      "CMS-1848-P",
    ],
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: TITLE, url: URL },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(RPM_2027_FAQ)) }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <Rpm2027ProposedRulePost />
      </main>
      <PublicFooter />
    </div>
  )
}
