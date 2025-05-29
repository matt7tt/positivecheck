import type { Metadata } from 'next'
import { HowItWorksComponent } from '@/components/how-it-works'

export const metadata: Metadata = {
  title: 'How Senior Wellness Calls Work | Positive Check',
  description: 'Simple 3-step process: 5-minute setup, daily AI wellness calls, detailed family reports. See exactly how our $20/month senior check-in service works.',
  alternates: {
    canonical: '/how-it-works',
  },
}

export default function HowItWorksPage() {
  return <HowItWorksComponent />
} 