"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FamilyLoginRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace("/sign-in/families")
  }, [router])
  
  return null
}