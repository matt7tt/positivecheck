import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Senior Care Solutions for Healthcare Providers | Positive Check",
  description: "Enhance patient outcomes with AI-powered daily wellness calls. Reduce readmissions, improve care coordination, and scale your senior care programs efficiently.",
  keywords: "healthcare provider solutions, senior care technology, patient monitoring, care coordination, readmission reduction, wellness monitoring platform",
  openGraph: {
    title: "Senior Care Solutions for Healthcare Providers | Positive Check",
    description: "AI-powered daily wellness monitoring for healthcare organizations. Improve patient outcomes and reduce readmissions.",
    type: "website",
    url: "https://positivecheck.com/providers",
    images: [
      {
        url: "/images/admin-console-dashboard-new.png",
        width: 1200,
        height: 630,
        alt: "Positive Check admin console for healthcare providers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Provider Solutions | Positive Check",
    description: "Scale your senior care programs with AI-powered daily wellness monitoring. Request a demo today.",
    images: ["/images/admin-console-dashboard-new.png"],
  },
  alternates: {
    canonical: "/providers",
  },
}

export default function ProvidersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}