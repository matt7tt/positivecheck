'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { MaintainingSocialConnectionsPost } from "@/components/blog-posts/maintaining-social-connections"

export default function MaintainingSocialConnectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <MaintainingSocialConnectionsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 