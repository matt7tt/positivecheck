"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { trackEvent } from "@/lib/analytics"

export function TrackedExternalLink({
  children,
  eventName,
  eventParameters,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  eventName: string
  eventParameters?: Record<string, string | number | boolean | undefined>
}) {
  return (
    <a
      {...props}
      onClick={(event) => {
        props.onClick?.(event)
        trackEvent(eventName, eventParameters)
      }}
    >
      {children}
    </a>
  )
}
