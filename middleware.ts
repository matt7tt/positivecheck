import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware processing path:', request.nextUrl.pathname)
  
  const token = request.cookies.get('auth_token')?.value
  console.log('Token in middleware:', token ? 'Present' : 'Not present')

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
    '/api/:path*'
  ]
}
