"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProviderLoginRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace("/sign-in/providers")
  }, [router])
  
  return null
}