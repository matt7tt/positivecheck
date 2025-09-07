import type { Metadata } from 'next'
import { SignInComponent } from '@/components/sign-in'

export const metadata: Metadata = {
  title: 'Senior Care Account Login | Positive Check',
  description: 'Access your senior wellness call dashboard. View call reports, update preferences, manage billing, and monitor your loved one\'s daily check-in trends.',
}

export default function SignInPage() {
  return <SignInComponent />
}