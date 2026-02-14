import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, email, organization, role, patientVolume } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'hello@positivecheck.com'

    const { data, error: resendError } = await resend.emails.send({
      from: 'Positive Check <info@contact.positivecheck.com>',
      to: [contactEmail],
      replyTo: email,
      subject: `Demo Request from ${name}${organization ? ` at ${organization}` : ''}`,
      html: `
        <h2>New Demo Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${organization ? `<tr><td style="padding: 8px; font-weight: bold;">Organization:</td><td style="padding: 8px;">${organization}</td></tr>` : ''}
          ${role ? `<tr><td style="padding: 8px; font-weight: bold;">Role:</td><td style="padding: 8px;">${role}</td></tr>` : ''}
          ${patientVolume ? `<tr><td style="padding: 8px; font-weight: bold;">Patient Volume:</td><td style="padding: 8px;">${patientVolume}</td></tr>` : ''}
        </table>
      `,
    })

    if (resendError) {
      console.error('Resend API error:', resendError)
      return NextResponse.json(
        { error: `Email send failed: ${resendError.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Demo request submitted successfully' },
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
