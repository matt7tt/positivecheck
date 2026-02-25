import type { Metadata } from 'next'
import { ResetPasswordComponent } from '@/components/reset-password'

export const metadata: Metadata = {
  title: 'Reset Password | Positive Check',
  description: 'Create a new password for your Positive Check account.',
  robots: { index: false, follow: false },
}

export default function ResetPasswordPage() {
  return <ResetPasswordComponent />
} 