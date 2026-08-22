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
  } catch (error) {
    console.error("Lead webhook delivery failed", { leadId: lead.id, error })
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

export function cleanText(value: unknown, maxLength = 500): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254
}
