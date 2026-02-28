import { DemoComponent } from "@/components/demo"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo Request - Positive Check',
  description: 'Request a personalized demo of Positive Check AI-powered patient check-in calls for RPM, CCM, and post-discharge follow-up programs.',
  robots: {
    index: false,
    follow: false,
  }
}

export default function DemoPage() {
  return <DemoComponent />
}