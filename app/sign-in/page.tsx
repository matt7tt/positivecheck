import type { Metadata } from 'next'
import { SignInComponent } from '@/components/sign-in'

export const metadata: Metadata = {
  title: 'Sign In | Positive Check',
  description: 'Sign in to your Positive Check account to manage wellness calls, view reports, and update preferences for your loved one\'s daily check-in service.',
}

export default function SignInPage() {
  return <SignInComponent />
}