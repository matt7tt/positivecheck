import { NextResponse } from 'next/server'

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Forward the demo request to the backend API
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
      body: JSON.stringify({
        firstName: 'Demo',
        lastName: 'Request',
        email: email,
        phone: '',
        hearAboutUs: 'provider-demo-request',
        message: 'Healthcare provider requesting a demo of Positive Check.',
        newsletter: true
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit demo request to backend')
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