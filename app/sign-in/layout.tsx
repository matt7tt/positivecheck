import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | Positive Check",
  description: "Sign in to your Positive Check account. Access your family dashboard or provider admin console for senior wellness monitoring.",
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