import { render, screen, within } from '@testing-library/react'
import { existsSync } from 'fs'
import { join } from 'path'
import Page, { metadata } from '@/app/blog/apcm-billing-2026/page'
import { APCM_FAQ } from '@/components/blog-posts/apcm-billing-2026'
import { APCM_BILLING_POST as post, featuredPost, listedPosts } from '@/lib/blog-posts'
import sitemap from '@/app/sitemap'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))

describe('APCM billing blog publication', () => {
  it('renders the supplied article, both accessible tables, image, and source links', () => {
    const { container } = render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(post.title)
    expect(container.textContent).not.toContain('@Someone')
    expect(screen.getByText('By the Positive Check Team')).toBeVisible()
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Three healthcare professionals reviewing a tablet together in a primary care office')
    expect(screen.getAllByRole('table')).toHaveLength(2)
    const eligibility = screen.getByRole('table', { name: 'APCM codes and patient eligibility' })
    expect(within(eligibility).getByRole('rowheader', { name: 'G0558' })).toBeVisible()
    expect(within(eligibility).getByText(/Qualified Medicare Beneficiary/)).toBeVisible()
    expect(screen.getByRole('link', { name: 'RPM vs. CCM comparison page' })).toHaveAttribute('href', '/resources/compare/rpm-vs-ccm-medicare-billing')
    expect(container.querySelectorAll('a[href^="https://www.cms.gov/"]').length).toBe(8)
    expect(container.querySelectorAll('a[href^="https://www.aapc.com/"]').length).toBe(5)
    expect(screen.getByRole('heading', { name: 'Key takeaways' })).toBeVisible()
    expect(existsSync(join(process.cwd(), 'public', post.image))).toBe(true)
  })

  it('keeps all eight visible FAQ answers identical to structured data', () => {
    const { container } = render(<Page />)
    const schemas = Array.from(container.querySelectorAll('script[type="application/ld+json"]')).map(s => JSON.parse(s.textContent || '{}'))
    const faq = schemas.find(s => s['@type'] === 'FAQPage')
    expect(faq.mainEntity).toHaveLength(8)
    for (const item of APCM_FAQ) {
      expect(screen.getByRole('heading', { name: item.question })).toBeVisible()
      expect(screen.getByText(item.answer)).toBeVisible()
      expect(faq.mainEntity).toContainEqual(expect.objectContaining({ name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
    }
    const article = schemas.find(s => s['@type'] === 'BlogPosting')
    expect(article.headline).toBe(post.title)
    expect(article.datePublished).toBe(post.datePublished)
    expect(article.image).toBe(`https://www.positivecheck.com${post.image}`)
    expect(metadata.alternates?.canonical).toBe(`/blog/${post.slug}`)
  })

  it('features the article in the listing and includes it in the sitemap', () => {
    expect(featuredPost).toBe(post)
    expect(listedPosts.filter(p => p.slug === post.slug)).toHaveLength(1)
    expect(sitemap()).toContainEqual(expect.objectContaining({ url: `https://www.positivecheck.com/blog/${post.slug}` }))
  })
})
