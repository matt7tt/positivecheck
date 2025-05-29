import type { Metadata } from 'next'
import { ContactComponent } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact Senior Care Support | Positive Check',
  description: 'Get help with senior wellness calls. Call 866-605-8571 or email for support, demos, and questions about our $20/month check-in service. Quick response guaranteed.',
}

export default function ContactPage() {
  return <ContactComponent />
}