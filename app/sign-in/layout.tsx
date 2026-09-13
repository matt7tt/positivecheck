import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | Positive Check",
  description: "Access the Positive Check provider admin console to manage patient care programs, or get help signing in to your organization account.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: null,
  },
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
