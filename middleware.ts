import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value

  // If it's an API request and we have a token, forward it
  if (request.nextUrl.pathname.includes('/api/')) {
    const response = NextResponse.next()
    if (token) {
      response.headers.set('Authorization', `Bearer ${token}`)
    }
    return response
  }

  // For my-account page
  if (request.nextUrl.pathname.startsWith('/my-account')) {
    if (!token) {
      return NextResponse.redirect(new URL('/sign-in?return=/my-account', request.url))
    }
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
