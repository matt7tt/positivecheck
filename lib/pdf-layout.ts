/** Fit an existing summary canvas on one page without clipping its footnotes. */
export function fitSummaryToPage(imageWidth: number, imageHeight: number, pageWidth: number, pageHeight: number) {
  const margin = 10
  const scale = Math.min((pageWidth - margin * 2) / imageWidth, (pageHeight - margin * 2) / imageHeight)
  const width = imageWidth * scale
  return { x: (pageWidth - width) / 2, y: margin, width, height: imageHeight * scale }
}
