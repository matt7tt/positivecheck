'use client'

import { useEffect } from 'react'

export default function FacebookPixel() {
  useEffect(() => {
    // Only execute this code on the client side
    // Facebook Pixel code
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2093713827815363');
    fbq('track', 'PageView');
  }, [])

  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=2093713827815363&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
} 