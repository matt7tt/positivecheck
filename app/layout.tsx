// app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { Space_Grotesk, Raleway } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PerformanceMonitor } from '@/components/performance-monitor'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: 'swap',
  preload: true,
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: 'swap',
  preload: true,
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
        className={`${geistSans.className} ${geistMono.className} antialiased ${spaceGrotesk.className} ${raleway.className}`}
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
