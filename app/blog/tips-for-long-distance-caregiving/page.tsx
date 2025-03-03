'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { LongDistanceCaregivingTipsPost } from "@/components/blog-posts/tips-for-long-distance-caregiving"

export default function LongDistanceCaregivingTipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <LongDistanceCaregivingTipsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 