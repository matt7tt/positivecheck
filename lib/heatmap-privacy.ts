export const CLARITY_PROJECT_ID = 'z4i8uo2fud'
export const HEATMAP_CHOICE_KEY = 'pc-heatmap-consent-v1'
export const HEATMAP_CHOICES_EVENT = 'pc:heatmap-choices'
const CHOICE_LIFETIME = 180 * 24 * 60 * 60 * 1000

export type HeatmapChoice = 'accepted' | 'declined'

export function readHeatmapChoice(storage: Pick<Storage, 'getItem'>, now = Date.now()): HeatmapChoice | null {
  try {
    const saved = JSON.parse(storage.getItem(HEATMAP_CHOICE_KEY) || 'null')
    return saved && ['accepted', 'declined'].includes(saved.choice) &&
      typeof saved.at === 'number' && saved.at <= now && now - saved.at < CHOICE_LIFETIME
      ? saved.choice : null
  } catch { return null }
}

export function hasPrivacySignal(browser: { doNotTrack?: string | null; globalPrivacyControl?: boolean }) {
  return browser.globalPrivacyControl === true || browser.doNotTrack === '1'
}

// Exact public route allowlist comes from the sitemap. Never infer that an
// unknown route is safe. URL masking does not cover query strings or referrers.
export function isHeatmapUrl(url: URL, publicPaths: readonly string[]) {
  return url.protocol === 'https:' &&
    ['positivecheck.com', 'www.positivecheck.com'].includes(url.hostname) &&
    !url.port && !url.username && !url.password && !url.search && !url.hash &&
    publicPaths.includes(url.pathname)
}

export function isHeatmapVisit(url: URL, referrer: string, publicPaths: readonly string[]) {
  if (!isHeatmapUrl(url, publicPaths)) return false
  if (!referrer) return true
  try {
    const source = new URL(referrer)
    if (source.search || source.hash || source.username || source.password) return false
    if (source.hostname.endsWith('positivecheck.com')) return isHeatmapUrl(source, publicPaths)
    // Cross-origin browsers normally supply only the origin. Do not collect
    // potentially identifying paths from sites with a permissive referrer policy.
    return source.protocol === 'https:' && source.pathname === '/'
  } catch { return false }
}
