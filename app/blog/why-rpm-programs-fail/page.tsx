import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { WhyRpmProgramsFailPost } from "@/components/blog-posts/why-rpm-programs-fail"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'Why RPM Programs Fail: Four Operational Problems & Fixes | Positive Check',
  description: 'RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.',
  alternates: {
    canonical: '/blog/why-rpm-programs-fail',
  },
  openGraph: {
    title: 'Why RPM Programs Fail: Four Operational Problems and How to Fix Them',
    description: 'RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.',
    url: '/blog/why-rpm-programs-fail',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/why-rpm-programs-fail.jpg', width: 1734, height: 907, alt: 'Why RPM programs fail: enrollment, adherence, alerts, and documentation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why RPM Programs Fail: Four Operational Problems and How to Fix Them',
    description: 'RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.',
    images: ['/images/why-rpm-programs-fail.jpg'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "Why do most RPM programs fail?",
    answer: "Most RPM programs fail for operational rather than clinical reasons. The four most common failure points are enrollment that stalls after a single patient conversation, patient adherence that declines without ongoing reinforcement, care teams overwhelmed by untriaged alerts, and documentation gaps that prevent billing for work that was actually done. All four trace back to one root cause: patients are difficult to reach consistently, at scale, month after month.",
  },
  {
    question: "How can practices improve RPM patient adherence over time?",
    answer: "Treat adherence as an ongoing outreach workload rather than a one-time onboarding task. Sustained engagement requires regular check-ins that scale with the enrolled panel — which is where manual calling models break down. Voice check-ins are particularly useful because they capture why a patient stopped taking readings, not just that they have, giving the care team something actionable to address.",
  },
  {
    question: "Can RPM and CCM patient outreach be automated?",
    answer: "Routine, low-acuity outreach — enrollment follow-up sequences, adherence check-ins, reminders, and routine patient contact — can be automated with AI voice and SMS while preserving clinical judgment. Clinical decisions, care planning, alert escalation review, and billing determinations remain with the care team and billing practitioner.",
  },
  {
    question: "What should you ask before choosing an RPM or CCM outreach partner?",
    answer: "Four questions map to the four failure points: How does outreach work after the first attempt fails to reach a patient? Does adherence outreach scale as the panel grows, or does it rely on more staff hours? How are alerts triaged before they reach a clinician? And is documentation captured as interactions happen, or reconstructed later at billing time?",
  },
]

const POST_URL = `${SITE_URL}/blog/why-rpm-programs-fail`

export default function WhyRpmProgramsFailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "Why RPM Programs Fail: Four Operational Problems and How to Fix Them", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "Why RPM Programs Fail: Four Operational Problems and How to Fix Them",
            description: "RPM and CCM programs often struggle with enrollment, adherence, alert overload, and staff capacity. Learn how to fix each operational failure point.",
            url: POST_URL,
            image: `${SITE_URL}/images/why-rpm-programs-fail.jpg`,
            datePublished: "2026-07-20",
            dateModified: "2026-07-20",
            articleSection: "RPM & CCM Operations",
            keywords: [
              "why RPM programs fail",
              "RPM patient engagement",
              "RPM patient adherence",
              "remote patient monitoring challenges",
              "RPM enrollment strategies",
              "automated patient outreach",
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
        <WhyRpmProgramsFailPost faqs={FAQ_ITEMS} />
      </main>
      <PublicFooter />
    </div>
  )
}
