import type { Metadata } from 'next'
import { HowItWorksComponent } from '@/components/how-it-works'

export const metadata: Metadata = {
  title: 'How It Works | Positive Check',
  description: 'Learn exactly how Positive Check works: from quick 5-minute setup to daily wellness calls and detailed family reports. Complete step-by-step guide to our senior care service.',
}

export default function HowItWorksPage() {
  return <HowItWorksComponent />
} 