import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Positive Check",
  description: "Terms and conditions for using Positive Check's daily wellness call services for seniors and healthcare providers.",
  robots: "noindex, follow",
  openGraph: {
    title: "Terms and Conditions | Positive Check",
    description: "Terms of service for Positive Check wellness monitoring services.",
    type: "website",
    url: "https://positivecheck.com/terms",
  },
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}