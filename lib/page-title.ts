export const MAX_TITLE_LENGTH = 70
const BRAND_SUFFIX = ' | Positive Check'

// Bing warns on titles over 70 characters. Add the brand only when it fits.
export function pageTitle(title: string): string {
  const branded = `${title}${BRAND_SUFFIX}`
  return branded.length <= MAX_TITLE_LENGTH ? branded : title
}
