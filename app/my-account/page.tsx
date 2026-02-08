import type { Metadata } from 'next'
import { MyAccountComponent } from '@/components/my-account'

export const metadata: Metadata = {
  title: 'Senior Care Dashboard | Positive Check',
  description: 'Manage your senior wellness calls: view detailed call reports, update questions, change schedules, track sentiment trends, and export PDF summaries.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MyAccountPage() {
  return <MyAccountComponent />
}