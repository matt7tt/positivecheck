import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Provider Login | Positive Check",
  description: "Healthcare provider login for Positive Check remote patient monitoring dashboard",
  robots: "noindex, nofollow", // Don't index redirect pages
}

export default function ProviderLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}