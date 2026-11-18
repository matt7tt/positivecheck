import { readAttribution, type Touch } from '@/lib/attribution'

export type MarketingLead = {
  kind: 'contact' | 'demo_request' | 'demo_call'
  name?: string
  email?: string
  phone?: string
  practice?: string
  self_reported_source?: string
}

// First touch stored for this visitor, or undefined (SSR, blocked storage, none).
export function readFirstTouch(): Touch | undefined {
  try {
    if (typeof window === 'undefined') return undefined
    return readAttribution(window.localStorage, new Date()).first_touch
  } catch {
    return undefined
  }
}

// Best-effort, fire-and-forget: sends the lead and its stored visit source to
// the platform. Never throws, never retries, and callers must not await it.
export function sendMarketingLead(lead: MarketingLead): void {
  try {
    if (typeof window === 'undefined') return
    const base = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/+$/, '')
    if (!base) return
    let attribution: ReturnType<typeof readAttribution> = {}
    try {
      attribution = readAttribution(window.localStorage, new Date())
    } catch {
      // storage blocked: send the lead without a source
    }
    const fields = Object.fromEntries(
      Object.entries(lead).filter(([, v]) => typeof v === 'string' && v.trim() !== ''),
    )
    fetch(`${base}/api/marketing/lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
      body: JSON.stringify({ ...fields, ...attribution }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // never let lead forwarding affect the form
  }
}
