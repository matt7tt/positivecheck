"use client"

import { useEffect } from "react"

type FacebookQueue = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  loaded: boolean
  push: FacebookQueue
  queue: unknown[][]
  version: string
}

/**
 * Keep the advertising pixel off the critical rendering path. It starts on
 * the visitor's first interaction or after the initial mobile render has had
 * time to complete, whichever happens first.
 */
export function DeferredFacebookPixel() {
  useEffect(() => {
    let started = false

    const start = () => {
      if (started) return
      started = true
      cleanup()

      const facebookWindow = window as Window & {
        fbq?: FacebookQueue
        _fbq?: FacebookQueue
      }
      if (facebookWindow.fbq) return

      const fbq = function (...args: unknown[]) {
        if (fbq.callMethod) fbq.callMethod(...args)
        else fbq.queue.push(args)
      } as FacebookQueue

      fbq.loaded = true
      fbq.version = "2.0"
      fbq.queue = []
      fbq.push = fbq
      facebookWindow.fbq = fbq
      facebookWindow._fbq = fbq

      fbq("init", "2093713827815363")
      fbq("track", "PageView")

      const script = document.createElement("script")
      script.async = true
      script.src = "https://connect.facebook.net/en_US/fbevents.js"
      document.head.appendChild(script)
    }

    const timeout = window.setTimeout(start, 8000)
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown"]

    function cleanup() {
      window.clearTimeout(timeout)
      events.forEach((event) => window.removeEventListener(event, start))
    }

    events.forEach((event) => window.addEventListener(event, start, { once: true }))
    return cleanup
  }, [])

  return null
}
