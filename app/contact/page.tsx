import type { Metadata } from 'next'
import { ContactComponent } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact Us | Positive Check',
  description: 'Contact Positive Check for questions about our senior wellness call service. Get support, schedule a demo, or learn how we can help your family stay connected with loved ones.',
}

export default function ContactPage() {
  return <ContactComponent />
}