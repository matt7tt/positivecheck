import { fireEvent, render, screen, within } from '@testing-library/react'
import FrontOfficePage, { generateMetadata, generateStaticParams } from '@/app/solutions/front-office/[task]/page'
import ComparisonPage from '@/app/solutions/front-office/compare/page'
import TcmPage from '@/app/blog/post-discharge-follow-up-workflow/page'
import { frontOfficeContent } from '@/lib/front-office-content'
import { solutionGroups } from '@/lib/solution-catalog'
import { SolutionsMenu } from '@/components/solutions-menu'
import { SolutionInterestOptions } from '@/components/solution-interest-options'
import { featuredPost, TCM_WORKFLOW_POST, providerGridPosts, earlierCarePosts } from '@/lib/blog-posts'
import sitemap from '@/app/sitemap'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))
jest.mock('next/navigation', () => ({ notFound: () => { throw new Error('NOT_FOUND') } }))

describe('Front Office and Care Management content structure', () => {
  it.each(Object.keys(frontOfficeContent))('publishes a distinct, indexable task page: %s', async task => {
    const { container } = render(await FrontOfficePage({ params: Promise.resolve({ task }) }))
    const content = frontOfficeContent[task as keyof typeof frontOfficeContent]
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(content.title)
    expect(await generateMetadata({ params: Promise.resolve({ task }) })).toMatchObject({ alternates: { canonical: `/solutions/front-office/${task}` } })
    const faq = JSON.parse(container.querySelector('#front-office-faq')!.textContent!)
    expect(faq.mainEntity).toHaveLength(6)
    for (const item of content.faqs) {
      expect(screen.getByText(item.answer)).toBeVisible()
      expect(faq.mainEntity).toContainEqual(expect.objectContaining({ name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
    }
    expect(sitemap().some(item => item.url.endsWith(`/front-office/${task}`))).toBe(true)
  })
  it('limits dynamic task routes to the four known tasks', async () => {
    expect(generateStaticParams()).toHaveLength(4)
    await expect(FrontOfficePage({ params: Promise.resolve({ task: 'unknown' }) })).rejects.toThrow('NOT_FOUND')
  })
  it('uses the same seven solution options in grouped contact choices', () => {
    render(<select aria-label="Program"><SolutionInterestOptions /></select>)
    for (const group of solutionGroups) {
      const options = within(screen.getByRole('group', { name: group.name }))
      for (const item of group.items) expect(options.getByRole('option', { name: item.name })).toHaveValue(item.interest)
    }
  })
  it('makes both desktop solution categories keyboard-accessible', () => {
    render(<SolutionsMenu active />)
    const button = screen.getByRole('button', { name: 'Explore solutions' })
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    for (const group of solutionGroups) for (const item of group.items) expect(screen.getByRole('link', { name: item.name })).toHaveAttribute('href', item.href)
    fireEvent.keyDown(button, { key: 'Escape' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveFocus()
  })
  it('compares alternatives without sending Front Office buyers to the Medicare calculator', () => {
    render(<ComparisonPage />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Include the hybrid and do-nothing options' })).toBeVisible()
    expect(screen.getByRole('link', { name: 'Plan an implementation' })).toHaveAttribute('href', '/resources/implementation-guide')
  })
  it('features the TCM workflow while preserving earlier article URLs', () => {
    render(<TcmPage />)
    expect(featuredPost).toBe(TCM_WORKFLOW_POST)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(TCM_WORKFLOW_POST.title)
    expect(screen.getByRole('link', { name: /Source: CMS/ })).toHaveAttribute('href', 'https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf')
    expect(providerGridPosts.every(p => !p.datePublished.startsWith('2025-'))).toBe(true)
    expect(earlierCarePosts.length).toBeGreaterThan(0)
    for (const post of earlierCarePosts) expect(sitemap().some(item => item.url.endsWith(`/blog/${post.slug}`))).toBe(true)
  })
})
