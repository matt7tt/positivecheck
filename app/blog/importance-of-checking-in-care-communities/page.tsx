'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { ImportanceOfCheckingInPost } from "@/components/blog-posts/importance-of-checking-in-care-communities"

export default function ImportanceOfCheckingInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <ImportanceOfCheckingInPost />
      </main>
      <PublicFooter />
    </div>
  )
} 