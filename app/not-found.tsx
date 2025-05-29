import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Positive Check',
  description: 'The page you are looking for could not be found. Return to Positive Check homepage for senior wellness calls.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#1a2642] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you were looking for. The page may have been moved or doesn't exist.
        </p>
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Return Home
          </Link>
          <div className="text-sm text-gray-500">
            <p>Need help? <Link href="/contact" className="text-[#1a2642] hover:underline">Contact us</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
} 