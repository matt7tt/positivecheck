import { NextResponse } from "next/server"
import { cleanText } from '@/lib/server/lead-delivery'

const E164_RE = /^\+[1-9]\d{7,14}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const backendUrl = process.env.LOLA_BACKEND_URL
    const apiKey = process.env.LOLA_BACKEND_API_KEY

    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Please send a valid request.' }, { status: 400 })
    }
    const firstName = cleanText(body?.firstName, 80)
    const lastName = cleanText(body?.lastName, 80)
    // Never truncate a delivery address: doing so could change the recipient.
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''

    if (body?.consent !== true) {
      return NextResponse.json({ error: 'Please agree to the one-time automated demo call.' }, { status: 400 })
    }

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }
    if (email.length > 254 || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }
    if (!E164_RE.test(phone)) {
      return NextResponse.json({ error: "Phone must be E.164 (e.g. +14155551234)" }, { status: 400 })
    }

    if (!backendUrl || !apiKey) {
      return NextResponse.json({ error: "Callback requests are temporarily unavailable. Please contact our team." }, { status: 503 })
    }

    const upstream = await fetch(`${backendUrl.replace(/\/$/, "")}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone_e164: phone,
      }),
      signal: AbortSignal.timeout(15000),
    })

    if (!upstream.ok) {
      // Never echo or log upstream bodies: they may contain contact data or secrets.
      console.error("Lola backend returned a non-success status", upstream.status)

      // Only known user-actionable statuses receive specific, fixed messages.
      if (upstream.status === 429) {
        return NextResponse.json(
          { error: "You've made too many requests recently. Please wait a few minutes and try again." },
          { status: 429 }
        )
      }
      if (upstream.status === 409) {
        return NextResponse.json(
          { error: "You already have a pending request. Check your email for the confirmation link." },
          { status: 409 }
        )
      }
      if ([400, 422].includes(upstream.status)) {
        return NextResponse.json(
          { error: "We couldn't accept that request. Please double-check your details and try again." },
          { status: 400 }
        )
      }

      // 5xx → generic; don't leak server details.
      return NextResponse.json(
        { error: "Our system is having trouble right now. Please try again in a moment." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    // A timeout can happen after acceptance; do not automatically retry a dial request.
    return NextResponse.json({ error: "We could not confirm your request. Check your inbox before trying again, or contact our team." }, { status: 502 })
  }
}
