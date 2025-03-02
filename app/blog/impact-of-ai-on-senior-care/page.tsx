'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { ImpactOfAIOnSeniorCarePost } from "@/components/blog-posts/impact-of-ai-on-senior-care"

export default function ImpactOfAIOnSeniorCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <ImpactOfAIOnSeniorCarePost />
      </main>
      <PublicFooter />
    </div>
  )
} 