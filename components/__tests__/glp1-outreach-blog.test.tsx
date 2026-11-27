import { render, screen } from '@testing-library/react'
import Page, { metadata } from '@/app/blog/ai-patient-outreach-glp-1-clinics/page'
import { GLP1_OUTREACH_FAQ } from '@/components/blog-posts/ai-patient-outreach-glp-1-clinics'
import { GLP1_OUTREACH_POST as post, featuredPost } from '@/lib/blog-posts'
import sitemap from '@/app/sitemap'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))

describe('GLP-1 outreach blog', () => {
  it('renders the article with its SEO title, sources and internal links', () => {
    const { container } = render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(post.title)
    expect(metadata.title).toBe('AI Patient Outreach for GLP-1 Clinics | Positive Check')
    for (const href of ['/platform', '/blog/introducing-ai-care-assistant-to-patients', '/contact', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11786232'])
      expect(container.querySelector(`a[href="${href}"]`)).not.toBeNull()
    expect(container.querySelectorAll('table')).toHaveLength(3)
    expect(container.innerHTML).not.toContain('Publishing notes')
  })

  it('keeps visible FAQ answers identical to the FAQ schema', () => {
    const { container } = render(<Page />)
    const schemas = Array.from(container.querySelectorAll('script[type="application/ld+json"]')).map(s => JSON.parse(s.textContent || '{}'))
    const faq = schemas.find(s => s['@type'] === 'FAQPage')
    expect(faq.mainEntity).toHaveLength(5)
    for (const item of GLP1_OUTREACH_FAQ) {
      expect(screen.getByText(item.answer)).toBeVisible()
      expect(faq.mainEntity).toContainEqual(expect.objectContaining({ name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
    }
  })

  it('is featured on the blog and listed in the sitemap', () => {
    expect(featuredPost.slug).toBe(post.slug)
    expect(sitemap()).toContainEqual(expect.objectContaining({ url: `https://www.positivecheck.com/blog/${post.slug}` }))
  })
})
