import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { cleanText, createLeadPayload, escapeHtml, forwardLeadToCrm, isValidEmail, readLeadBody, settleLeadDelivery } from '@/lib/server/lead-delivery'

export async function POST(request: Request) {
  try {
    const body = await readLeadBody(request)
    if (!body) return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    const firstName = cleanText(body.firstName, 80)
    const lastName = cleanText(body.lastName, 80)
    const email = (typeof body.email === 'string' ? body.email.trim() : '').toLowerCase()
    const phone = cleanText(body.phone, 40)
    const customerType = cleanText(body.customerType, 80)
    const hearAboutUs = cleanText(body.hearAboutUs, 100)
    const message = cleanText(body.message, 5000)
    const newsletter = body.newsletter === true
    const attribution = body.attribution

    if (!firstName || (email && !isValidEmail(email)) || (!email && phone.replace(/\D/g, '').length < 7)) {
      return NextResponse.json(
        { error: 'A name and valid email or phone are required' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'hello@positivecheck.com'
    const fullName = `${firstName} ${lastName || ''}`.trim()
    const lead = createLeadPayload(
      'contact',
      { firstName, lastName, email, phone, customerType, hearAboutUs, message, newsletter },
      attribution && typeof attribution === 'object' && !Array.isArray(attribution) ? attribution as Record<string, unknown> : undefined
    )
    const safeFullName = escapeHtml(fullName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeCustomerType = escapeHtml(customerType)
    const safeHearAboutUs = escapeHtml(hearAboutUs)
    const safeMessage = escapeHtml(message)
    const safeSource = escapeHtml(lead.attribution?.utm_source || lead.attribution?.initial_referrer || 'Direct / unknown')
    const safeLandingPage = escapeHtml(lead.attribution?.landing_page || lead.attribution?.page_path || 'Unknown')

    const emailOptions: Parameters<Resend['emails']['send']>[0] = {
      from: 'Positive Check <info@contact.positivecheck.com>',
      to: [contactEmail],
      subject: `New Contact Form Submission from ${safeFullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>Follow up using the contact details below. This enquiry is not a confirmed appointment; record follow-up and qualification from actual outcomes.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; font-weight: bold;">Lead ID:</td><td style="padding: 8px;">${lead.id}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${safeFullName}</td></tr>
          ${email ? `<tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>` : ''}
          ${phone ? `<tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${safePhone}</td></tr>` : ''}
          ${customerType ? `<tr><td style="padding: 8px; font-weight: bold;">Interested In:</td><td style="padding: 8px;">${safeCustomerType}</td></tr>` : ''}
          ${hearAboutUs ? `<tr><td style="padding: 8px; font-weight: bold;">How They Heard:</td><td style="padding: 8px;">${safeHearAboutUs}</td></tr>` : ''}
          ${typeof newsletter !== 'undefined' ? `<tr><td style="padding: 8px; font-weight: bold;">Newsletter:</td><td style="padding: 8px;">${newsletter ? 'Yes' : 'No'}</td></tr>` : ''}
          <tr><td style="padding: 8px; font-weight: bold;">Source:</td><td style="padding: 8px;">${safeSource}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Landing page:</td><td style="padding: 8px;">${safeLandingPage}</td></tr>
        </table>
        ${message ? `<h3>Message:</h3><p style="white-space: pre-wrap;">${safeMessage}</p>` : ''}
      `,
    }

    if (email) {
      emailOptions.replyTo = email
    }

    const { crmDelivered, emailDelivered } = await settleLeadDelivery(lead,
      () => forwardLeadToCrm(lead),
      async () => {
        if (!process.env.RESEND_API_KEY) return false
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { error: resendError } = await resend.emails.send(emailOptions)
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
      { message: 'Message sent successfully', leadId: lead.id, crmDelivered, emailDelivered },
      { status: 200 }
    )
  } catch {
    console.error('Error processing contact request')
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
