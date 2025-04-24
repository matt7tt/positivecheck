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
    // Facebook Pixel Code with TypeScript fixes
    (function(f, b, e, v, n, t, s) {
      if ((f as any).fbq) return;
      n = (f as any).fbq = function() {
        (n as any).callMethod ? 
          (n as any).callMethod.apply(n, arguments) : 
          (n as any).queue.push(arguments);
      };
      if (!(f as any)._fbq) (f as any)._fbq = n;
      (n as any).push = n;
      (n as any).loaded = true;
      (n as any).version = '2.0';
      (n as any).queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', '2093713827815363');
    window.fbq('track', 'PageView');
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