import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Family Login | Positive Check",
  description: "Sign in to your Positive Check family account to monitor your loved one's daily wellness",
  robots: "noindex, nofollow", // Don't index redirect pages
}

export default function FamilyLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}