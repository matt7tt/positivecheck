import type { Metadata } from 'next'
import { MyAccountComponent } from '@/components/my-account'

export const metadata: Metadata = {
  title: 'My Account | Positive Check',
  description: 'Manage your Positive Check account settings, view call reports, update preferences, and monitor your loved one\'s wellness trends from your personalized dashboard.',
}

export default function MyAccountPage() {
  return <MyAccountComponent />
}