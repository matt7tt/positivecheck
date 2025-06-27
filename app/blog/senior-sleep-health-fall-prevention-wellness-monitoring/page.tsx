import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { SeniorSleepHealthFallPreventionWellnessMonitoringPost } from "@/components/blog-posts/senior-sleep-health-fall-prevention-wellness-monitoring"

export const metadata: Metadata = {
  title: 'Why Sleep Quality Is Critical for Senior Safety & Health | Positive Check',
  description: 'Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters for aging adults and how daily wellness monitoring can help prevent issues.',
  alternates: {
    canonical: '/blog/senior-sleep-health-fall-prevention-wellness-monitoring',
  },
}

export default function SeniorSleepHealthFallPreventionWellnessMonitoringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <SeniorSleepHealthFallPreventionWellnessMonitoringPost />
      </main>
      <PublicFooter />
    </div>
  )
}