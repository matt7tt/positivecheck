import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Positive Check | AI-Powered Senior Wellness Calls",
  description: "Learn about Positive Check's mission to help seniors age safely at home with daily AI-powered wellness calls. Founded to provide peace of mind for families.",
  keywords: "about Positive Check, senior care company, wellness monitoring, aging in place, caregiver support",
  openGraph: {
    title: "About Positive Check | Our Mission",
    description: "Helping seniors age safely at home with daily AI-powered wellness calls.",
    type: "website",
    url: "https://positivecheck.com/about",
    images: [
      {
        url: "/images/lola-from-positive-check.webp",
        width: 1200,
        height: 630,
        alt: "Lola, the AI companion from Positive Check",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Positive Check",
    description: "Our mission: Help seniors age safely at home with daily wellness monitoring.",
    images: ["/images/lola-from-positive-check.webp"],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}