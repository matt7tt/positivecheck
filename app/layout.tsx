// app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";
import { DeferredFacebookPixel } from "@/components/deferred-facebook-pixel";
import { ConversionAnalytics } from "@/components/conversion-analytics";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "AI-Powered Patient Check-In Calls | Positive Check",
  description:
    "AI-powered patient check-in calls supporting RPM, CCM, and post-discharge follow-up for healthcare providers. HIPAA-compliant wellness monitoring at scale.",
  metadataBase: new URL('https://www.positivecheck.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.positivecheck.com',
    siteName: 'Positive Check',
    title: 'AI-Powered Patient Check-In Calls | Positive Check',
    description: 'AI-powered patient check-in calls supporting RPM, CCM, and post-discharge follow-up programs for healthcare providers. HIPAA-compliant wellness monitoring at scale.',
    images: [
      {
        url: '/images/senior-talking-on-the-phone1.webp',
        width: 1200,
        height: 630,
        alt: 'Senior person enjoying a phone conversation with Positive Check',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@positivecheck',
    creator: '@positivecheck',
    title: 'AI-Powered Patient Check-In Calls | Positive Check',
    description: 'AI-powered patient check-in calls supporting RPM, CCM, and post-discharge follow-up programs for healthcare providers.',
    images: ['/images/senior-talking-on-the-phone1.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This property was used by the site before GA was removed as a presumed GTM
  // duplicate. The public GTM container currently has no GA4 tag, so retain the
  // known property as a safe default while allowing an environment override.
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-C6J8097SY5";

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKHVJ3LF');`,
          }}
        />

        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics-4"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaMeasurementId}');`,
              }}
            />
          </>
        )}

        {/* Site-wide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationSchema()),
          }}
        />

        {/* Blog feed discovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Positive Check Blog"
          href="/feed.xml"
        />

        {/* Resource hints for third-party measurement loaded after page content */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-container { min-height: 400px; }
            @media (min-width: 1024px) { .hero-container { min-height: 600px; } }
            .hero-image { background-color: #f3f4f6; }
            .hero-text { font-display: swap; }
          `
        }} />
        
        {/* AI-assistant referral tracking: tags visits arriving from AI search
            tools so they're segmentable in GA4 (event: ai_referral) and GTM
            (dataLayer event). */}
        <Script
          id="ai-referral-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var r = document.referrer;
                  if (!r) return;
                  var host = new URL(r).hostname;
                  var aiSources = {
                    'chatgpt.com': 'chatgpt', 'chat.openai.com': 'chatgpt',
                    'perplexity.ai': 'perplexity', 'www.perplexity.ai': 'perplexity',
                    'claude.ai': 'claude',
                    'gemini.google.com': 'gemini', 'bard.google.com': 'gemini',
                    'copilot.microsoft.com': 'copilot',
                    'you.com': 'you', 'poe.com': 'poe', 'meta.ai': 'meta-ai'
                  };
                  var source = aiSources[host];
                  if (!source) return;
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({ event: 'ai_referral', ai_source: source, ai_referrer: host });
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', 'ai_referral', { ai_source: source, ai_referrer: host });
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

      </head>
      <body
        className={`${inter.className} antialiased`}
>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKHVJ3LF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AuthProvider>
          <DeferredFacebookPixel />
          <ConversionAnalytics />
          {children}
          <Analytics />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
