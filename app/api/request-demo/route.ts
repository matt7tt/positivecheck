import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Send email to info@positivecheck.com
    // In production, you would use a service like SendGrid, Resend, or AWS SES
    // For now, we'll log the request and return success
    console.log(`Demo request received from: ${email}`)
    console.log(`This should be sent to: info@positivecheck.com`)

    // In production, replace this with actual email sending logic:
    // await sendEmail({
    //   to: 'info@positivecheck.com',
    //   subject: 'New Demo Request',
    //   text: `A new demo request has been received from: ${email}`,
    //   html: `
    //     <h2>New Demo Request</h2>
    //     <p>A healthcare provider has requested a demo.</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p>Please follow up with them to schedule a demo.</p>
    //   `
    // })

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