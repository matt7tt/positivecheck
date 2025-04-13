import { PhoenixLandingPageComponent } from "@/components/phoenix-landing-page"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phoenix Senior Wellness Check-In Calls | Positive Check',
  description: 'Daily wellness check-in calls for seniors in Phoenix, Arizona. Helping families stay connected with affordable $20/month wellness calls, providing peace of mind for your loved ones.',
  keywords: 'senior care Phoenix, elderly check-in Phoenix, senior wellness Phoenix, Phoenix senior services, daily check-in calls Phoenix, senior care Arizona, Valley of the Sun senior care',
  alternates: {
    canonical: 'https://www.positivecheck.com/phoenix',
    languages: {
      'en-US': 'https://www.positivecheck.com/phoenix',
      'x-default': 'https://www.positivecheck.com'
    }
  },
  openGraph: {
    title: 'Phoenix Senior Wellness Check-In Calls | Positive Check',
    description: 'Daily wellness check-in calls for seniors in Phoenix, Arizona. Our service provides peace of mind for families with affordable $20/month wellness calls.',
    url: 'https://www.positivecheck.com/phoenix',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/images/senior-talking-on-the-phone1.jpeg',
      width: 1200,
      height: 630,
      alt: 'Senior enjoying a wellness check-in call in Phoenix'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phoenix Senior Wellness Check-In Calls | Positive Check',
    description: 'Daily wellness check-in calls for seniors in Phoenix, Arizona. Our service provides peace of mind for families.',
    images: ['/images/senior-talking-on-the-phone1.jpeg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

export default function PhoenixPage() {
  return <PhoenixLandingPageComponent />
}
