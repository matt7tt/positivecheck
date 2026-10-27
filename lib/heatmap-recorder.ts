import { CLARITY_PROJECT_ID, hasPrivacySignal, isHeatmapVisit, readHeatmapChoice } from './heatmap-privacy'

type Clarity = ((...args: unknown[]) => void) & { q?: unknown[][] }
declare global { interface Window { clarity?: Clarity } }

const EVENTS = new Set(['lead_form_start', 'generate_lead', 'sample_audio_play', 'sample_audio_complete', 'calculator_used'])

// One recorder per document. A fresh document at navigation boundaries prevents
// the SDK from following Next.js into account pages or collecting URL parameters.
export function startHeatmapRecorder(publicPaths: readonly string[]) {
  if (!isHeatmapVisit(new URL(location.href), document.referrer, publicPaths) ||
    hasPrivacySignal(navigator) || readHeatmapChoice(localStorage) !== 'accepted' ||
    document.getElementById('pc-clarity')) return () => {}

  let stopped = false
  const queue: Clarity = (...args) => { queue.q!.push(args) }
  queue.q = []
  window.clarity = queue
  window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' })
  const script = document.createElement('script')
  script.id = 'pc-clarity'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`
  const stop = () => {
    if (stopped) return
    stopped = true
    window.clarity?.('stop')
  }
  // Also stop if the tag finishes loading after a navigation/revocation.
  script.onload = () => { if (stopped) window.clarity?.('stop') }

  const navigate = (href: string) => { stop(); window.location.assign(href) }
  const click = (event: MouseEvent) => {
    const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null
    if (!(anchor instanceof HTMLAnchorElement) || event.defaultPrevented ||
      event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      anchor.target === '_blank' || anchor.hasAttribute('download')) return
    const url = new URL(anchor.href)
    if (!['http:', 'https:'].includes(url.protocol)) return
    if (url.href !== location.href) {
      event.preventDefault()
      event.stopImmediatePropagation()
      navigate(url.href)
    }
  }
  const push = history.pushState
  const replace = history.replaceState
  const wrap = (original: History['pushState']): History['pushState'] => function (data, unused, url) {
    if (url && new URL(String(url), location.href).href !== location.href) {
      navigate(new URL(String(url), location.href).href)
      return
    }
    original.call(history, data, unused, url)
  }
  const wrappedPush = wrap(push)
  const wrappedReplace = wrap(replace)
  history.pushState = wrappedPush
  history.replaceState = wrappedReplace
  const pop = () => { stop(); location.reload() }
  const restore = (event: PageTransitionEvent) => { if (event.persisted) location.reload() }
  const conversion = (event: Event) => {
    const name = (event as CustomEvent).detail
    if (!stopped && EVENTS.has(name)) window.clarity?.('event', name)
  }
  document.addEventListener('click', click, true)
  window.addEventListener('popstate', pop, true)
  window.addEventListener('hashchange', pop, true)
  window.addEventListener('pagehide', stop)
  window.addEventListener('pageshow', restore)
  window.addEventListener('pc:conversion', conversion)
  document.head.appendChild(script)

  return () => {
    window.clarity?.('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' })
    stop()
    script.remove()
    document.removeEventListener('click', click, true)
    window.removeEventListener('popstate', pop, true)
    window.removeEventListener('hashchange', pop, true)
    window.removeEventListener('pagehide', stop)
    window.removeEventListener('pageshow', restore)
    window.removeEventListener('pc:conversion', conversion)
    if (history.pushState === wrappedPush) history.pushState = push
    if (history.replaceState === wrappedReplace) history.replaceState = replace
  }
}
