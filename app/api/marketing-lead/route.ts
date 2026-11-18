import { NextResponse } from 'next/server'

// Forwards a form's lead and its visit source to the platform, server to server,
// so the browser never needs the platform's address or key. Best-effort: the
// browser always gets 204, whatever happens upstream, and the body is never logged.
const FIELDS = ['kind', 'name', 'email', 'phone', 'practice', 'self_reported_source', 'first_touch', 'last_touch'] as const
const MAX_BYTES = 16 * 1024
const TIMEOUT_MS = 5000

const done = () => new NextResponse(null, { status: 204 })

function clientIp(request: Request): string | undefined {
  const first = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim()
  return first || (request.headers.get('x-real-ip') || '').trim() || undefined
}

function byteLength(text: string): number {
  return new Blob([text]).size
}

export async function POST(request: Request) {
  const base = (process.env.PLATFORM_API_URL || '').replace(/\/+$/, '')
  const key = process.env.PLATFORM_LEAD_KEY || ''
  if (!base || !key) return done()

  const timer = new AbortController()
  const timeout = setTimeout(() => timer.abort(), TIMEOUT_MS)
  try {
    const raw = await request.text()
    if (byteLength(raw) > MAX_BYTES) return done()
    const body: unknown = JSON.parse(raw)
    if (!body || typeof body !== 'object' || Array.isArray(body)) return done()
    const lead = Object.fromEntries(
      FIELDS.filter((f) => (body as Record<string, unknown>)[f] !== undefined)
        .map((f) => [f, (body as Record<string, unknown>)[f]]),
    )

    const headers: Record<string, string> = { 'Content-Type': 'application/json', 'X-API-Key': key }
    const ip = clientIp(request)
    if (ip) headers['X-Lead-Client-IP'] = ip

    const upstream = await fetch(`${base}/api/marketing/lead`, {
      method: 'POST',
      headers,
      body: JSON.stringify(lead),
      signal: timer.signal,
    })
    if (!upstream.ok) console.error('Marketing lead not accepted by the platform', upstream.status)
  } catch {
    // bad JSON, network failure or timeout: the form has already succeeded
  } finally {
    clearTimeout(timeout)
  }
  return done()
}
