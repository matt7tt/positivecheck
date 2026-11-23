import { render, screen } from '@testing-library/react'
import Page, { metadata } from '@/app/blog/introducing-ai-care-assistant-to-patients/page'
import { AI_CARE_ASSISTANT_FAQ } from '@/components/blog-posts/introducing-ai-care-assistant'
import { AI_CARE_ASSISTANT_POST as post, featuredPost } from '@/lib/blog-posts'
import sitemap from '@/app/sitemap'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))

describe('AI care assistant blog', () => {
  it('renders the article with its SEO title and internal links', () => {
    const { container } = render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(post.title)
    expect(metadata.title).toBe('How to Introduce an AI Care Assistant to Patients | Positive Check')
    expect((metadata.title as string).length).toBeLessThanOrEqual(70)
    for (const href of ['/platform', '/solutions/remote-patient-monitoring', '/solutions/chronic-care-management', '/contact'])
      expect(container.querySelector(`a[href="${href}"]`)).not.toBeNull()
    expect(container.innerHTML).not.toContain('Publishing notes')
  })

  it('keeps visible FAQ answers identical to the FAQ schema', () => {
    const { container } = render(<Page />)
    const schemas = Array.from(container.querySelectorAll('script[type="application/ld+json"]')).map(s => JSON.parse(s.textContent || '{}'))
    const faq = schemas.find(s => s['@type'] === 'FAQPage')
    expect(faq.mainEntity).toHaveLength(3)
    for (const item of AI_CARE_ASSISTANT_FAQ) {
      expect(screen.getByText(item.answer)).toBeVisible()
      expect(faq.mainEntity).toContainEqual(expect.objectContaining({ name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
    }
  })

  it('is featured on the blog and listed in the sitemap', () => {
    expect(featuredPost.slug).toBe(post.slug)
    expect(sitemap()).toContainEqual(expect.objectContaining({ url: `https://www.positivecheck.com/blog/${post.slug}` }))
  })
})
