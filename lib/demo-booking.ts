// Only the operator-configured URL is used; never append visitor contact data.
export function getDemoBookingUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined
  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'https:' || url.username || url.password) return undefined
    return url.href
  } catch {
    return undefined
  }
}
