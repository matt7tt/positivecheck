import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Positive Check",
  description: "Positive Check privacy policy. Learn how we protect your personal information and comply with HIPAA regulations for senior wellness monitoring.",
  robots: "noindex, follow",
  openGraph: {
    title: "Privacy Policy | Positive Check",
    description: "How Positive Check protects your privacy and complies with HIPAA regulations.",
    type: "website",
    url: "https://positivecheck.com/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}