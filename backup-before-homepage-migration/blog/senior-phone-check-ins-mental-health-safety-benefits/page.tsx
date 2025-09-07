import { Metadata } from 'next'
import { SeniorPhoneCheckInsMentalHealthSafetyBenefitsBlogPost } from '@/components/blog/senior-phone-check-ins-mental-health-safety-benefits'

export const metadata: Metadata = {
  title: '7 Ways Phone Check-ins Help Senior Mental Health | Positive Check',
  description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Learn proven benefits of elderly wellness calls for aging in place and caregiver peace of mind.',
  alternates: {
    canonical: '/blog/senior-phone-check-ins-mental-health-safety-benefits',
  },
  openGraph: {
    title: '7 Ways Phone Check-ins Help Senior Mental Health',
    description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Learn proven benefits of elderly wellness calls for aging in place and caregiver peace of mind.',
    url: '/blog/senior-phone-check-ins-mental-health-safety-benefits',
    type: 'article',
    images: [
      {
        url: '/images/senior-phone-check-in-mental-health.webp',
        width: 1200,
        height: 630,
        alt: 'Senior person enjoying a phone conversation, representing the mental health benefits of regular check-ins',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Ways Phone Check-ins Help Senior Mental Health',
    description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Learn proven benefits of elderly wellness calls for aging in place and caregiver peace of mind.',
    images: ['/images/senior-phone-check-in-mental-health.webp'],
  },
}

export default function Page() {
  return <SeniorPhoneCheckInsMentalHealthSafetyBenefitsBlogPost />
} 