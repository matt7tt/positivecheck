'use client';

import { useEffect } from 'react';

// Add TypeScript declarations for Facebook Pixel
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function FacebookPixel() {
  useEffect(() => {
    // Facebook Pixel Code with proper TypeScript typing
    const f = window;
    const b = document;
    const e = 'script';
    const v = 'https://connect.facebook.net/en_US/fbevents.js';
    
    // Using traditional approach instead of IIFE to avoid TypeScript errors
    if (f.fbq) return;
    
    // Define fbq function
    f.fbq = function() {
      const obj = f.fbq as any;
      obj.callMethod ? 
        obj.callMethod.apply(obj, arguments) : 
        obj.queue.push(arguments);
    };
    
    // Setup fbq properties
    if (!f._fbq) f._fbq = f.fbq;
    const fbq = f.fbq as any;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    
    // Create script element
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    
    // Insert script into DOM
    const s = b.getElementsByTagName(e)[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    }
    
    // Initialize pixel and track page view
    f.fbq('init', '2093713827815363');
    f.fbq('track', 'PageView');
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=2093713827815363&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
} 