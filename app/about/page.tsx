import type { Metadata } from 'next'
import { AboutComponent } from '@/components/about'

export const metadata: Metadata = {
  title: 'Senior Care Mission & Team | Positive Check',
  description: 'Meet the team behind Positive Check\'s AI-powered wellness calls for seniors. Our mission: provide affordable daily check-ins that give families peace of mind and caregiver relief.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <AboutComponent />
} 