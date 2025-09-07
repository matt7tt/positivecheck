// app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PerformanceMonitor } from '@/components/performance-monitor'

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Daily Wellness Calls for Seniors | Positive Check",
  description:
    "Daily wellness check-in calls for seniors starting at $20/month. AI-powered service provides caregiver relief, family peace of mind, and helps seniors age safely at home.",
  metadataBase: new URL('https://positivecheck.com'),
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
    url: 'https://positivecheck.com',
    siteName: 'Positive Check',
    title: 'Daily Wellness Calls for Seniors | Positive Check',
    description: 'Daily wellness check-in calls for seniors starting at $20/month. AI-powered service provides caregiver relief, family peace of mind, and helps seniors age safely at home.',
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
    title: 'Daily Wellness Calls for Seniors | Positive Check',
    description: 'Daily wellness check-in calls for seniors starting at $20/month. AI-powered service provides caregiver relief and family peace of mind.',
    images: ['/images/senior-talking-on-the-phone1.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preload" href="/images/positive-logo.png" as="image" type="image/png" />
        <link rel="preload" href="/images/senior-talking-on-the-phone1.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/lola-from-positive-check.webp" as="image" type="image/webp" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-container { min-height: 400px; }
            @media (min-width: 1024px) { .hero-container { min-height: 600px; } }
            .hero-image { background-color: #f3f4f6; }
            .hero-text { font-display: swap; }
          `
        }} />
        
        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;
                n=f.fbq=function(){
                  n.callMethod?
                    n.callMethod.apply(n,arguments):
                    n.queue.push(arguments);
                };
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              }(
                window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js'
              );
              fbq('init', '2093713827815363');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C6J8097SY5"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C6J8097SY5');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
>
        <AuthProvider>
          <PerformanceMonitor />
          {children}
          <Analytics />
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
