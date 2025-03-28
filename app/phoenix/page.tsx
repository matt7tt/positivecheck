import { PhoenixLandingPageComponent } from "@/components/phoenix-landing-page"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phoenix Senior Wellness Check-In Calls | Positive Check',
  description: 'Daily wellness check-in calls for seniors in Phoenix, Arizona. Helping families stay connected with affordable $20/month wellness calls. Perfect for the Valley\'s heat and sprawling neighborhoods.',
  keywords: 'senior care Phoenix, elderly check-in Phoenix, senior wellness Phoenix, Phoenix senior services, daily check-in calls Phoenix, senior care Arizona, Valley of the Sun senior care',
  alternates: {
    canonical: 'https://www.positivecheck.com/phoenix',
  },
}

export default function PhoenixPage() {
  return <PhoenixLandingPageComponent />
}
