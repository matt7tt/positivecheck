import type { Metadata } from 'next'
import { TermsComponent } from '@/components/terms'

export const metadata: Metadata = {
  title: 'Terms of Service | Positive Check',
  description: 'Terms of service for Positive Check\'s senior wellness call platform. Understand our service agreement, user responsibilities, and privacy protections.',
}

export default function TermsPage() {
  return <TermsComponent />
} 