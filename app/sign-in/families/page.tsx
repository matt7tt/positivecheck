"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FamiliesSignInPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the my-account page for families login
    router.push("/my-account")
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    </div>
  )
}