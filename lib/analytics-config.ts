export const MARKETING_GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_MARKETING_GA_MEASUREMENT_ID || "G-EZQ4F5Q7FG"

const MARKETING_HOSTNAMES = new Set(["positivecheck.com", "www.positivecheck.com"])
const NON_MARKETING_PATH_PREFIXES = ["/admin-new", "/api"]

export function isMarketingAnalyticsPage(location: Pick<Location, "hostname" | "pathname">) {
  return (
    MARKETING_HOSTNAMES.has(location.hostname) &&
    !NON_MARKETING_PATH_PREFIXES.some(
      (prefix) => location.pathname === prefix || location.pathname.startsWith(`${prefix}/`)
    )
  )
}
