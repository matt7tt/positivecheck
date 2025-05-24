// app/layout.tsx

import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { Space_Grotesk, Raleway } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import { Analytics } from "@vercel/analytics/react";

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
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Positive Check | Affordable Caregiver Check-In Calls for Seniors",
  description:
    "Positive Check provides affordable caregiver calls to check-in on seniors on a customizable schedule ensuring their safety and well-being. Get updates and peace of mind for loved ones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased ${spaceGrotesk.className} ${raleway.className}`}
>
        <AuthProvider>
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
