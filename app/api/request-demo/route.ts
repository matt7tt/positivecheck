import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { cleanText, createLeadPayload, escapeHtml, forwardLeadToCrm, isValidEmail, readLeadBody, settleLeadDelivery } from '@/lib/server/lead-delivery'
import { getDemoOffer } from '@/lib/demo-offers'

export async function POST(request: Request) {
  try {
    const body = await readLeadBody(request)
    if (!body) return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    const name = cleanText(body.name, 120)
    const email = (typeof body.email === 'string' ? body.email.trim() : '').toLowerCase()
    const organization = cleanText(body.organization, 200)
    const attribution = body.attribution
    const offer = getDemoOffer(body.offer_id)
    // Accept a bounded identifier, not arbitrary prose or visitor contact data.
    const ctaLocation = typeof body.cta_location === 'string' && /^[a-z0-9_]{1,80}$/.test(body.cta_location)
      ? body.cta_location : undefined

    if (!name || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'A name and valid email are required' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'hello@positivecheck.com'
    const lead = createLeadPayload(
      'demo_request',
      { name, email, organization, ...(offer ? { offer_id: offer.id } : {}), ...(ctaLocation ? { cta_location: ctaLocation } : {}) },
      attribution && typeof attribution === 'object' && !Array.isArray(attribution) ? attribution as Record<string, unknown> : undefined
    )

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeOrganization = escapeHtml(organization)
    const safeSource = escapeHtml(lead.attribution?.utm_source || lead.attribution?.initial_referrer || 'Direct / unknown')
    const safeLandingPage = escapeHtml(lead.attribution?.landing_page || lead.attribution?.page_path || 'Unknown')

    const { crmDelivered, emailDelivered } = await settleLeadDelivery(lead,
      () => forwardLeadToCrm(lead),
      async () => {
        if (!process.env.RESEND_API_KEY) return false
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { error: resendError } = await resend.emails.send({
          from: 'Positive Check <info@contact.positivecheck.com>',
          to: [contactEmail],
          replyTo: email,
          subject: `Demo Request from ${safeName}${organization ? ` at ${safeOrganization}` : ''}`,
          html: `
            <h2>New Demo Request</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
              <tr><td style="padding: 8px; font-weight: bold;">Lead ID:</td><td style="padding: 8px;">${lead.id}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${safeName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
              ${organization ? `<tr><td style="padding: 8px; font-weight: bold;">Organization:</td><td style="padding: 8px;">${safeOrganization}</td></tr>` : ''}
              ${offer ? `<tr><td style="padding: 8px; font-weight: bold;">Requested offer:</td><td style="padding: 8px;">${escapeHtml(offer.modalTitle)} (${offer.id})</td></tr>` : ''}
              <tr><td style="padding: 8px; font-weight: bold;">Source:</td><td style="padding: 8px;">${safeSource}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Landing page:</td><td style="padding: 8px;">${safeLandingPage}</td></tr>
              ${ctaLocation ? `<tr><td style="padding: 8px; font-weight: bold;">CTA location:</td><td style="padding: 8px;">${escapeHtml(ctaLocation)}</td></tr>` : ''}
            </table>
            <p>Demo requested — not a confirmed booking. Arrange a time with the prospect, then record booking, attendance and qualification from actual outcomes.</p>
          `,
        })

        return !resendError
      }
    )

    if (!emailDelivered && !crmDelivered) {
      return NextResponse.json(
        { error: 'Lead delivery is not configured or temporarily unavailable' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { message: 'Demo request submitted successfully', leadId: lead.id, crmDelivered, emailDelivered },
      { status: 200 }
    )
  } catch {
    console.error('Error processing demo request')
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
