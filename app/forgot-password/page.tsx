import type { Metadata } from 'next'
import { ForgotPasswordComponent } from '@/components/forgot-password'

export const metadata: Metadata = {
  title: 'Forgot Password | Positive Check',
  description: 'Reset your Positive Check account password to regain access to your wellness dashboard.',
  robots: { index: false, follow: false },
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordComponent />
} 