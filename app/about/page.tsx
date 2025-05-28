import type { Metadata } from 'next'
import { AboutComponent } from '@/components/about'

export const metadata: Metadata = {
  title: 'About Us | Positive Check',
  description: 'Learn about Positive Check\'s mission to provide compassionate wellness calls for seniors. Our AI-powered service offers daily check-ins, caregiver relief, and peace of mind for families.',
}

export default function AboutPage() {
  return <AboutComponent />
} 