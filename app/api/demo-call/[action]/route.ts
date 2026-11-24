import { NextResponse } from "next/server"
import { demoRequest } from "@/lib/server/demo-booking"

export async function POST(request: Request, { params }: { params: Promise<{ action: string }> }) {
  const { action } = await params
  if (action !== "verify" && action !== "book") return new NextResponse(null, { status: 404 })
  const origin = request.headers.get("origin")
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ detail: "Please submit the form on this website." }, { status: 403 })
  }
  try {
    const text = await request.text()
    if (text.length > 8192) return new NextResponse(null, { status: 413 })
    const body = JSON.parse(text)
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ detail: "Please check the form." }, { status: 400 })
    }
    // Vercel overwrites this header with the client's IP; retain per-IP send limits.
    // https://vercel.com/docs/headers/request-headers#x-vercel-forwarded-for
    const ip = request.headers.get("x-vercel-forwarded-for") || "unknown"
    const response = await demoRequest(action, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": ip,
        "User-Agent": request.headers.get("user-agent") || "" },
      body: JSON.stringify(body),
    })
    if (response.status >= 500) {
      return NextResponse.json({ detail: "Booking is unavailable right now. Please try again later." }, { status: 503 })
    }
    const result = await response.json()
    return NextResponse.json(result, { status: response.status, headers: { "Cache-Control": "no-store" } })
  } catch (error) {
    return NextResponse.json({ detail: error instanceof SyntaxError ? "Please check the form." :
      "We could not confirm your request. Please try again later." }, { status: error instanceof SyntaxError ? 400 : 502 })
  }
}
