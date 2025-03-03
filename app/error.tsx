'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
      <p className="mb-8 text-gray-600">
        We're sorry for the inconvenience. Please try again or return home.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/"
          className="px-6 py-3 bg-[#1a2642] hover:bg-[#2a3752] text-white rounded-md transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 