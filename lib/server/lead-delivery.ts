type LeadPayload = {
  id: string
  type: "demo_request" | "contact"
  createdAt: string
  fields: Record<string, unknown>
  attribution?: Record<string, unknown>
}

export function createLeadPayload(
  type: LeadPayload["type"],
  fields: Record<string, unknown>,
  attribution?: Record<string, unknown>
): LeadPayload {
  return {
    id: crypto.randomUUID(),
    type,
    createdAt: new Date().toISOString(),
    fields,
    attribution,
  }
}

export async function forwardLeadToCrm(lead: LeadPayload): Promise<boolean> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  if (!webhookUrl) return false

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify(lead),
      signal: controller.signal,
    })

    if (!response.ok) {
      console.error("Lead webhook returned a non-success response", {
        leadId: lead.id,
        status: response.status,
      })
      return false
    }

    return true
  } catch {
    console.error("Lead webhook delivery failed", { leadId: lead.id })
    return false
  } finally {
    clearTimeout(timeout)
  }
}

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

// Provider acceptance is not proof of inbox delivery or completed follow-up.
export async function settleLeadDelivery(
  lead: LeadPayload,
  crm: () => Promise<boolean>,
  email: () => Promise<boolean>
) {
  const results = await Promise.allSettled([
    Promise.resolve().then(crm),
    Promise.resolve().then(email),
  ])
  const [crmDelivered, emailDelivered] = results.map(result =>
    result.status === 'fulfilled' && result.value === true
  )
  const outcome = { leadId: lead.id, leadType: lead.type, crmDelivered, emailDelivered }
  // Omit contact details, payloads, and raw provider errors.
  if (crmDelivered || emailDelivered) console.info('Lead accepted', outcome)
  else console.error('Lead not accepted by any delivery channel', outcome)
  return { crmDelivered, emailDelivered }
}

export async function readLeadBody(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const body: unknown = await request.json()
    return body !== null && typeof body === 'object' && !Array.isArray(body)
      ? body as Record<string, unknown> : null
  } catch {
    return null
  }
}

export function cleanText(value: unknown, maxLength = 500): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254
}
