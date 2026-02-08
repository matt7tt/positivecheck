import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Insights for Healthcare Providers | Positive Check',
  description: 'Tips, research, and resources on AI-powered patient check-in calls, remote patient monitoring, senior wellness, and healthcare provider best practices.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - Insights for Healthcare Providers | Positive Check',
    description: 'Tips, research, and resources on AI-powered patient check-in calls, remote patient monitoring, senior wellness, and healthcare provider best practices.',
    url: '/blog',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Insights for Healthcare Providers | Positive Check',
    description: 'Tips, research, and resources on AI-powered patient check-in calls, remote patient monitoring, and senior wellness.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
