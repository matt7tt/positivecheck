import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In | Positive Check",
  description: "Sign in to your Positive Check account. Access your family dashboard or provider admin console for senior wellness monitoring.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Sign In | Positive Check",
    description: "Access your Positive Check account for senior wellness monitoring.",
    type: "website",
    url: "https://positivecheck.com/sign-in",
  },
  alternates: {
    canonical: "/sign-in",
  },
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}