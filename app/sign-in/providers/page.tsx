"use client"

import { useEffect } from "react"

export default function ProvidersSignInPage() {
  useEffect(() => {
    // Redirect to the external provider login page
    window.location.href = "https://provider.positivecheck.com/admin-new/login"
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to provider login...</p>
      </div>
    </div>
  )
}