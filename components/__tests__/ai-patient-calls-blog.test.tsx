import { render, screen, within } from '@testing-library/react'
import { existsSync } from 'fs'
import { join } from 'path'
import Page, { metadata } from '@/app/blog/ai-patient-calls-sms-front-office-ongoing-care/page'
import BlogPage from '@/app/blog/page'
import { AI_PATIENT_CALLS_FAQ, AI_PATIENT_CALLS_IMAGE_ALT } from '@/components/blog-posts/ai-patient-calls-sms'
import { AI_PATIENT_CALLS_POST as post, featuredPost, listedPosts, providerGridPosts, TCM_WORKFLOW_POST } from '@/lib/blog-posts'
import sitemap from '@/app/sitemap'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))

describe('AI patient calls blog', () => {
  it('renders the supplied article and image with the clinical boundary and fictional example', () => {
    const { container } = render(<Page />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(post.title)
    expect(screen.getByRole('img', { name: AI_PATIENT_CALLS_IMAGE_ALT })).toHaveAttribute('width', '640')
    expect(existsSync(join(process.cwd(), 'public', post.image))).toBe(true)
    expect(screen.getByText(/fictional example rather than a real patient or customer case study/)).toBeVisible()
    expect(screen.getByText(/It does not diagnose, prescribe or make clinical decisions/)).toBeVisible()
    expect(container.querySelector('time')).toHaveAttribute('dateTime', post.datePublished)
    expect(screen.getByRole('button', { name: 'Request a demo', exact: true })).toBeVisible()
    expect(screen.getByText(/it is not a Front Office savings estimate/)).toBeVisible()
  })

  it('replaces document placeholder links with all seven solution routes', () => {
    const { container } = render(<Page />)
    for (const path of [
      '/solutions/front-office/new-patient-leads',
      '/solutions/front-office/scheduling-confirmations',
      '/solutions/front-office/appointment-reminders',
      '/solutions/front-office/patient-notifications',
      '/solutions/remote-patient-monitoring',
      '/solutions/chronic-care-management',
      '/solutions/post-discharge-follow-up',
    ]) expect(container.querySelector(`a[href="${path}"]`)).not.toBeNull()
    expect(container.innerHTML).not.toContain('claude.ai')
    const related = screen.getByRole('navigation', { name: 'Related practice resources' })
    expect(within(related).getByRole('link', { name: /Compare AI/ })).toHaveAttribute('href', '/solutions/front-office/compare')
    expect(within(related).getByRole('link', { name: /Plan an implementation/ })).toHaveAttribute('href', '/resources/implementation-guide')
  })

  it('keeps all seven visible FAQ answers identical to schema and supplies article metadata', () => {
    const { container } = render(<Page />)
    const schemas = Array.from(container.querySelectorAll('script[type="application/ld+json"]')).map(s => JSON.parse(s.textContent || '{}'))
    const faq = schemas.find(s => s['@type'] === 'FAQPage')
    expect(faq.mainEntity).toHaveLength(7)
    for (const item of AI_PATIENT_CALLS_FAQ) {
      expect(screen.getByRole('heading', { name: item.question })).toBeVisible()
      expect(screen.getByText(item.answer)).toBeVisible()
      expect(faq.mainEntity).toContainEqual(expect.objectContaining({ name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } }))
    }
    expect(schemas.find(s => s['@type'] === 'BlogPosting')).toMatchObject({ headline: post.title, datePublished: post.datePublished, image: `https://www.positivecheck.com${post.image}` })
    expect(metadata.alternates?.canonical).toBe(`/blog/${post.slug}`)
    expect(metadata.openGraph).toMatchObject({ images: [{ url: post.image, width: 640, height: 427, alt: AI_PATIENT_CALLS_IMAGE_ALT }] })
  })

  it('features the new article and retains the earlier TCM post in the provider grid', () => {
    expect(featuredPost.slug).toBe(post.slug)
    expect(listedPosts.filter(p => p.slug === post.slug)).toHaveLength(1)
    expect(providerGridPosts).toContain(TCM_WORKFLOW_POST)
    render(<BlogPage />)
    expect(screen.getByRole('heading', { name: post.title })).toBeVisible()
    expect(screen.getByRole('heading', { name: TCM_WORKFLOW_POST.title })).toBeVisible()
    expect(screen.getAllByRole('link', { name: 'READ MORE', exact: true })[0]).toHaveAttribute('href', `/blog/${post.slug}`)
  })

  it('includes the post and image in the sitemap', () => {
    expect(sitemap()).toContainEqual(expect.objectContaining({ url: `https://www.positivecheck.com/blog/${post.slug}`, images: [`https://www.positivecheck.com${post.image}`] }))
  })
})
