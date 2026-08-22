import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { cleanText, createLeadPayload, escapeHtml, forwardLeadToCrm, isValidEmail } from '@/lib/server/lead-delivery'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = cleanText(body.name, 120)
    const email = cleanText(body.email, 254).toLowerCase()
    const organization = cleanText(body.organization, 200)
    const attribution = body.attribution

    if (!name || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'A name and valid email are required' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'hello@positivecheck.com'
    const lead = createLeadPayload(
      'demo_request',
      { name, email, organization },
      attribution && typeof attribution === 'object' ? attribution : undefined
    )

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeOrganization = escapeHtml(organization)
    const safeSource = escapeHtml(lead.attribution?.utm_source || lead.attribution?.initial_referrer || 'Direct / unknown')
    const safeLandingPage = escapeHtml(lead.attribution?.landing_page || lead.attribution?.page_path || 'Unknown')

    const crmDelivery = forwardLeadToCrm(lead)
    let emailDelivered = false

    if (process.env.RESEND_API_KEY) {
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
            <tr><td style="padding: 8px; font-weight: bold;">Source:</td><td style="padding: 8px;">${safeSource}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Landing page:</td><td style="padding: 8px;">${safeLandingPage}</td></tr>
          </table>
        `,
      })

      if (resendError) console.error('Resend API error:', resendError)
      else emailDelivered = true
    }

    const crmDelivered = await crmDelivery

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
  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
