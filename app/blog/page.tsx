import type { Metadata } from 'next'
import { BlogComponent } from '@/components/blog'

export const metadata: Metadata = {
  title: 'Senior Care Blog | Positive Check',
  description: 'Expert insights on senior care, caregiver support, and wellness monitoring. Read our blog for tips on long-distance caregiving, preventing burnout, and keeping seniors safe.',
}

export default function BlogPage() {
  return <BlogComponent />
} 