import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Daily Wellness Calls for Your Aging Parents | Positive Check",
  description: "Give your aging parents daily check-in calls with our AI companion Lola. Starting at $20/month. Peace of mind for families, independence for seniors. No apps or devices needed.",
  keywords: "senior wellness calls, aging parent care, daily check-ins, elder care monitoring, family peace of mind, caregiver support",
  openGraph: {
    title: "Daily Wellness Calls for Your Aging Parents | Positive Check",
    description: "Give your aging parents daily check-in calls with our AI companion. Peace of mind for families, independence for seniors.",
    type: "website",
    url: "https://positivecheck.com/families",
    images: [
      {
        url: "/images/happy-senior-talking-to-lola-2.webp",
        width: 1200,
        height: 630,
        alt: "Senior enjoying a daily wellness call with Positive Check",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Wellness Calls for Your Aging Parents | Positive Check",
    description: "AI-powered daily check-ins for seniors. Peace of mind for families starting at $20/month.",
    images: ["/images/happy-senior-talking-to-lola-2.webp"],
  },
  alternates: {
    canonical: "/families",
  },
}

export default function FamiliesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}