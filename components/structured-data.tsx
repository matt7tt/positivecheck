import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Organization schema for all pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Positive Check",
  "url": "https://positivecheck.com",
  "logo": "https://positivecheck.com/images/positive-logo-dark-blue.png",
  "description": "AI-powered daily wellness calls for seniors and remote patient monitoring for healthcare providers",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-858-522-9524",
    "contactType": "Customer Service",
    "email": "info@positivecheck.com",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/positivecheck",
    "https://www.facebook.com/positivecheck"
  ]
}

// Medical service schema for main pages
export const medicalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Positive Check",
  "description": "Daily wellness monitoring and AI-powered check-in calls for seniors",
  "medicalSpecialty": [
    "Geriatrics",
    "RemotePatientMonitoring",
    "ChronicCareManagement"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Daily Wellness Calls",
      "description": "Automated daily check-in calls with AI companion Lola for seniors"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Remote Patient Monitoring",
      "description": "Healthcare provider dashboard for monitoring multiple patients"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Medication Adherence Monitoring",
      "description": "Daily reminders and tracking for medication compliance"
    }
  ]
}

// Product schema for service pages
export const productSchemaFamilies = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Positive Check for Families",
  "description": "Daily wellness calls for aging parents with AI companion Lola",
  "brand": {
    "@type": "Brand",
    "name": "Positive Check"
  },
  "offers": {
    "@type": "Offer",
    "price": "29.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "250"
  }
}

export const productSchemaProviders = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Positive Check for Healthcare Providers",
  "description": "Scalable remote patient monitoring and wellness check-ins",
  "brand": {
    "@type": "Brand",
    "name": "Positive Check"
  },
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  }
}

// FAQ schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Positive Check work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Positive Check uses an AI companion named Lola to make daily wellness calls to seniors. Lola checks on their health, mood, and daily activities, then sends updates to family members or healthcare providers."
      }
    },
    {
      "@type": "Question",
      "name": "Is Positive Check HIPAA compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Positive Check is fully HIPAA compliant. We maintain the highest standards of privacy and security for all health information."
      }
    },
    {
      "@type": "Question",
      "name": "What if my parent doesn't answer the call?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If a call is missed, Positive Check will attempt to call again later. If multiple calls are missed, designated family members or caregivers are notified immediately."
      }
    },
    {
      "@type": "Question",
      "name": "Can Lola understand different accents or speech patterns?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Lola is trained to understand various accents, speech patterns, and even mild cognitive impairment. The AI continuously improves its understanding through machine learning."
      }
    }
  ]
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}