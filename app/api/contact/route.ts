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
    const body = await request.json()
    const { firstName, lastName, email, phone, customerType, hearAboutUs, message, newsletter } = body

    if (!firstName || (!email && !phone)) {
      return NextResponse.json(
        { error: 'Name and either email or phone are required' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'hello@positivecheck.com'
    const fullName = `${firstName} ${lastName || ''}`.trim()

    const emailOptions: Parameters<typeof resend.emails.send>[0] = {
      from: 'Positive Check <info@contact.positivecheck.com>',
      to: [contactEmail],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${fullName}</td></tr>
          ${email ? `<tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>` : ''}
          ${phone ? `<tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>` : ''}
          ${customerType ? `<tr><td style="padding: 8px; font-weight: bold;">Interested In:</td><td style="padding: 8px;">${customerType}</td></tr>` : ''}
          ${hearAboutUs ? `<tr><td style="padding: 8px; font-weight: bold;">How They Heard:</td><td style="padding: 8px;">${hearAboutUs}</td></tr>` : ''}
          ${typeof newsletter !== 'undefined' ? `<tr><td style="padding: 8px; font-weight: bold;">Newsletter:</td><td style="padding: 8px;">${newsletter ? 'Yes' : 'No'}</td></tr>` : ''}
        </table>
        ${message ? `<h3>Message:</h3><p style="white-space: pre-wrap;">${message}</p>` : ''}
      `,
    }

    if (email) {
      emailOptions.replyTo = email
    }

    await resend.emails.send(emailOptions)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
