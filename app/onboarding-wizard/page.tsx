import type { Metadata } from 'next'
import { OnboardingWizardComponent } from '@/components/onboarding-wizard'

export const metadata: Metadata = {
  title: 'Get Started | Positive Check',
  description: 'Start your Positive Check service in minutes. Set up daily wellness calls for your loved one with our easy step-by-step onboarding process. 7-day free trial available.',
}

export default function OnboardingWizardPage() {
  return <OnboardingWizardComponent />
}