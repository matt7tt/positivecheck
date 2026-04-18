import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Positive Check",
  description: "Get in touch with Positive Check. Questions about senior wellness calls? Need support? Our team is here to help families and healthcare providers.",
  keywords: "contact Positive Check, customer support, senior care questions, wellness call information",
  openGraph: {
    title: "Contact Us | Positive Check",
    description: "Have questions about our daily wellness calls for seniors? Contact our support team.",
    type: "website",
    url: "https://positivecheck.com/contact",
    images: [
      {
        url: "/images/healthcare-care-coordinator.png",
        width: 1200,
        height: 630,
        alt: "Contact the Positive Check care team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Positive Check",
    description: "Questions about senior wellness calls? Our team is here to help.",
    images: ["/images/healthcare-care-coordinator.png"],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}