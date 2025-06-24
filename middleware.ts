import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware processing path:', request.nextUrl.pathname)
  
  const token = request.cookies.get('auth_token')?.value
  console.log('Token in middleware:', token ? 'Present' : 'Not present')

  // A/B Test for homepage
  if (request.nextUrl.pathname === '/') {
    const response = NextResponse.next()
    
    // Check if user already has a variant cookie
    let variant = request.cookies.get('ab_test_variant')?.value
    
    if (!variant) {
      // Randomly assign variant (50/50 split)
      variant = Math.random() < 0.5 ? 'A' : 'B'
      response.cookies.set('ab_test_variant', variant, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: false, // Allow client-side access
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      })
    }
    
    // Set header for the page to read
    response.headers.set('X-AB-Test-Variant', variant)
    
    return response
  }

  // If it's an API request and we have a token, forward it
  if (request.nextUrl.pathname.includes('/api/')) {
    const response = NextResponse.next()
    if (token) {
      response.headers.set('Authorization', `Bearer ${token}`)
      console.log('Forwarding token to API')
    }
    return response
  }

  // For my-account page
  if (request.nextUrl.pathname.startsWith('/my-account')) {
    if (!token) {
      console.log('No token, redirecting to sign-in')
      return NextResponse.redirect(new URL('/sign-in?return=/my-account', request.url))
    }
    console.log('Token present, allowing access to my-account')
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/my-account/:path*',
    '/api/:path*',
    '/'
  ]
}
