import type { Touch } from '@/lib/attribution'

const TAG_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'] as const

// Only the operator-configured URL is used; never append visitor contact data.
// The visit's source tags (not contact details) may be added so a booking can
// be traced back to the campaign.
export function getDemoBookingUrl(value: string | undefined, touch?: Touch): string | undefined {
  if (!value?.trim()) return undefined
  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'https:' || url.username || url.password) return undefined
    if (touch) {
      for (const key of TAG_KEYS) {
        const tag = touch[key]
        if (tag) url.searchParams.set(key, tag)
      }
    }
    return url.href
  } catch {
    return undefined
  }
}
