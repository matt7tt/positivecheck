import type { Metadata } from 'next'
import { TermsComponent } from '@/components/terms'

export const metadata: Metadata = {
  title: 'Terms of Service | Positive Check',
  description: 'Terms of service for daily senior wellness calls. Understand our $20/month service agreement, user responsibilities, cancellation policy, and privacy protections.',
}

export default function TermsPage() {
  return <TermsComponent />
} 