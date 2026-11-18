// First-party source capture: remembers where a visitor came from (first and
// last touch) so lead forms can send it later. Stores only the listed fields,
// never a query string or hash other than the utm_* values and gclid.

export type Touch = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  referrer_host?: string
  landing_path?: string
  at: string
}

type AttributionStorage = Pick<Storage, 'getItem' | 'setItem'>

const STORAGE_KEY = 'pc_attr'
const MAX_VALUE_LENGTH = 200
const FIRST_TOUCH_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000
const OWN_DOMAIN = 'positivecheck.com'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
const BLOCKED_PATHS = ['/my-account', '/sign-in', '/forgot-password', '/reset-password']

export function isCaptureAllowed(pathname: string): boolean {
  return !BLOCKED_PATHS.some(p => pathname === p || pathname.startsWith(`${p}/`))
}

function parseUrl(value: string): URL | null {
  try { return new URL(value) } catch { return null }
}

function isOwnHost(host: string, currentHost: string): boolean {
  return host === OWN_DOMAIN || host.endsWith(`.${OWN_DOMAIN}`) || host === 'localhost' || host === currentHost
}

function clip(value: string | null): string | undefined {
  return value ? value.slice(0, MAX_VALUE_LENGTH) : undefined
}

function buildTouch(url: string, referrer: string, now: Date): Touch {
  const touch: Touch = { at: now.toISOString() }
  const parsed = parseUrl(url)
  if (!parsed) return touch
  for (const key of UTM_KEYS) {
    const v = clip(parsed.searchParams.get(key))
    if (v) touch[key] = v
  }
  const gclid = clip(parsed.searchParams.get('gclid'))
  if (gclid) touch.gclid = gclid
  const ref = referrer ? parseUrl(referrer) : null
  const refHost = ref?.hostname.toLowerCase()
  if (refHost && !isOwnHost(refHost, parsed.hostname.toLowerCase())) touch.referrer_host = clip(refHost)
  touch.landing_path = clip(parsed.pathname)
  return touch
}

function hasSource(t: Touch): boolean {
  return UTM_KEYS.some(k => t[k]) || Boolean(t.gclid) || Boolean(t.referrer_host)
}

function readStored(storage: AttributionStorage): { first?: Touch; last?: Touch } {
  try {
    const raw = storage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const data = JSON.parse(raw)
    if (!data || typeof data !== 'object') return {}
    return { first: data.first ?? undefined, last: data.last ?? undefined }
  } catch {
    return {}
  }
}

function isFresh(first: Touch | undefined, now: Date): first is Touch {
  if (!first || typeof first.at !== 'string') return false
  const age = now.getTime() - Date.parse(first.at)
  return Number.isFinite(age) && age <= FIRST_TOUCH_MAX_AGE_MS
}

export function captureTouch(url: string, referrer: string, now: Date, storage: AttributionStorage): void {
  try {
    const touch = buildTouch(url, referrer, now)
    const stored = readStored(storage)
    const firstFresh = isFresh(stored.first, now)
    const first = firstFresh ? stored.first! : touch
    const last = !stored.last || !firstFresh || hasSource(touch) ? touch : stored.last
    storage.setItem(STORAGE_KEY, JSON.stringify({ first, last }))
  } catch {
    // storage blocked or full: capture is best-effort
  }
}

export function readAttribution(
  storage: AttributionStorage,
  now: Date,
): { first_touch?: Touch; last_touch?: Touch } {
  const { first, last } = readStored(storage)
  const result: { first_touch?: Touch; last_touch?: Touch } = {}
  if (isFresh(first, now)) result.first_touch = first
  if (last) result.last_touch = last
  return result
}
