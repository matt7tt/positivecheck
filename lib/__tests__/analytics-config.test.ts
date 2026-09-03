import { isMarketingAnalyticsPage, MARKETING_GA_MEASUREMENT_ID } from "../analytics-config"

describe("marketing analytics configuration", () => {
  it("uses the dedicated marketing property by default", () => {
    expect(MARKETING_GA_MEASUREMENT_ID).toBe("G-EZQ4F5Q7FG")
  })

  it.each([
    ["www.positivecheck.com", "/"],
    ["positivecheck.com", "/resources/billing-guide"],
  ])("collects public marketing traffic on %s%s", (hostname, pathname) => {
    expect(isMarketingAnalyticsPage({ hostname, pathname })).toBe(true)
  })

  it.each([
    ["provider.positivecheck.com", "/admin-new"],
    ["www.positivecheck.com", "/admin-new"],
    ["www.positivecheck.com", "/admin-new/patients"],
    ["www.positivecheck.com", "/api/request-demo"],
    ["localhost", "/"],
  ])("does not collect non-marketing traffic on %s%s", (hostname, pathname) => {
    expect(isMarketingAnalyticsPage({ hostname, pathname })).toBe(false)
  })
})
