import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { AiCompanionsForSeniorLonelinessAndCaregiverStressPost } from "@/components/blog-posts/ai-companions-for-senior-loneliness-and-caregiver-stress"

export const metadata: Metadata = {
  title: 'Can AI Companions Help Seniors and Caregivers? | Positive Check Blog',
  description: 'Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.',
}

export default function AiCompanionsForSeniorLonelinessAndCaregiverStressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <AiCompanionsForSeniorLonelinessAndCaregiverStressPost />
      </main>
      <PublicFooter />
    </div>
  )
}