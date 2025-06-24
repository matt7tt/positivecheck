import { LandingPageComponent } from "@/components/landing-page"
import { headers } from 'next/headers'

export default async function Page() {
  const headersList = await headers()
  const variant = headersList.get('X-AB-Test-Variant') || 'A'
  
  return <LandingPageComponent variant={variant} />
}