import type { Metadata } from 'next'
import { BlogComponent } from '@/components/blog'

export const metadata: Metadata = {
  title: 'Senior Care Blog | Positive Check',
  description: 'Expert senior care advice: caregiver burnout prevention, long-distance caregiving tips, wellness call benefits, and aging-in-place strategies for families.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return <BlogComponent />
} 