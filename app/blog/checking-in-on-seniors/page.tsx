'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { CheckingInOnSeniorsPost } from "@/components/blog-posts/checking-in-on-seniors"

export default function CheckingInOnSeniorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <CheckingInOnSeniorsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 