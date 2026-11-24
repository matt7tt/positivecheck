const BACKEND = "https://mw-web-backend-service-prod-fwwbrpa22a-uw.a.run.app"

export async function demoRequest(action: "options" | "verify" | "book", init: RequestInit = {}) {
  const key = process.env.DEMO_BOOKING_API_KEY
  if (!key) throw new Error("Demo booking is unavailable")
  const headers = new Headers(init.headers)
  headers.set("X-API-Key", key)
  return fetch(`${BACKEND}/api/demo-call/${action}`, {
    ...init, headers, cache: "no-store", signal: AbortSignal.timeout(20000),
  })
}
