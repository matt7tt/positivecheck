import type { Metadata } from 'next'
import { OnboardingWizardComponent } from '@/components/onboarding-wizard'

export const metadata: Metadata = {
  title: 'Start Senior Wellness Calls | Positive Check',
  description: 'Start daily wellness calls for your senior in 5 minutes. Easy setup wizard, 7-day free trial, then just $20/month. Begin your peace of mind today.',
}

export default function OnboardingWizardPage() {
  return <OnboardingWizardComponent />
}