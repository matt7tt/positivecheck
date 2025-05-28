import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { CaregiverReliefPost } from "@/components/blog-posts/caregiver-relief"

export const metadata: Metadata = {
  title: 'How Positive Check\'s Wellness Calls Provide Essential Caregiver Relief | Positive Check Blog',
  description: 'Discover how Positive Check\'s wellness calls provide essential relief for overwhelmed caregivers. Learn how daily check-ins reduce stress and improve family relationships.',
}

export default function CaregiverReliefPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <CaregiverReliefPost />
      </main>
      <PublicFooter />
    </div>
  )
} 