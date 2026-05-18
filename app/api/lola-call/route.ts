import { NextResponse } from "next/server"

const E164_RE = /^\+[1-9]\d{7,14}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const backendUrl = process.env.LOLA_BACKEND_URL
    const apiKey = process.env.LOLA_BACKEND_API_KEY

    if (!backendUrl || !apiKey) {
      return NextResponse.json({ error: "Lola backend not configured" }, { status: 500 })
    }

    const { firstName, lastName, email, phone } = await request.json()

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }
    if (!E164_RE.test(phone)) {
      return NextResponse.json({ error: "Phone must be E.164 (e.g. +14155551234)" }, { status: 400 })
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
    })

    if (!upstream.ok) {
      const rawBody = await upstream.text().catch(() => "")
      console.error("Lola backend error", upstream.status, rawBody)

      // Parse a structured error message if the backend returned JSON.
      let backendMessage: string | undefined
      try {
        const parsed = JSON.parse(rawBody)
        if (typeof parsed?.error === "string") backendMessage = parsed.error
        else if (typeof parsed?.message === "string") backendMessage = parsed.message
        else if (typeof parsed?.detail === "string") backendMessage = parsed.detail
      } catch {
        // not JSON
      }

      // 4xx → user-actionable; forward the backend message when present.
      if (upstream.status === 429) {
        return NextResponse.json(
          { error: backendMessage || "You've made too many requests recently. Please wait a few minutes and try again." },
          { status: 429 }
        )
      }
      if (upstream.status === 409) {
        return NextResponse.json(
          { error: backendMessage || "You already have a pending request. Check your email for the confirmation link." },
          { status: 409 }
        )
      }
      if (upstream.status >= 400 && upstream.status < 500) {
        return NextResponse.json(
          { error: backendMessage || "We couldn't accept that request. Please double-check your details and try again." },
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
  } catch (error) {
    console.error("Error processing Lola call request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
