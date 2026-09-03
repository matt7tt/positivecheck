import { render, screen, fireEvent, within } from '@testing-library/react'
import { PublicHeader } from '../public-header'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ priority: _priority, ...props }: any) => <img {...props} />,
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe('PublicHeader', () => {
  it('renders the logo', () => {
    render(<PublicHeader currentPage="home" />)
    
    const logo = screen.getByAltText('Positive Check')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/images/positive-logo.png')
  })

  it('highlights the current page in desktop navigation', () => {
    render(<PublicHeader currentPage="solutions" />)
    
    const solutionsLink = screen.getByRole('link', { name: 'Solutions' })
    expect(solutionsLink).toHaveClass('text-[#1a2642]', 'font-bold', 'border-b-2', 'border-[#1a2642]')
  })

  it('shows mobile menu when menu button is clicked', () => {
    render(<PublicHeader currentPage="home" />)
    
    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })
    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    const mobileNavigation = document.getElementById('mobile-navigation')
    expect(mobileNavigation).toBeInTheDocument()

    const mobile = within(mobileNavigation!)
    expect(mobile.getByRole('link', { name: 'Solutions' })).toHaveAttribute('href', '/solutions')
    expect(mobile.getByRole('link', { name: 'How It Works' })).toHaveAttribute('href', '/how-it-works')
    expect(mobile.getByRole('link', { name: 'ROI Calculator' })).toHaveAttribute('href', '/roi-calculator')
    expect(mobile.getByRole('link', { name: 'Resources' })).toHaveAttribute('href', '/resources')
    expect(mobile.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
    expect(mobile.getByRole('link', { name: 'Sign In' })).toHaveAttribute('href', '/sign-in')
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<PublicHeader currentPage="home" />)
    
    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })
    fireEvent.click(menuButton)

    const mobileNavigation = document.getElementById('mobile-navigation')
    fireEvent.click(within(mobileNavigation!).getByRole('link', { name: 'Resources' }))

    expect(document.getElementById('mobile-navigation')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders all navigation links', () => {
    render(<PublicHeader currentPage="home" />)

    const expectedLinks = [
      ['Solutions', '/solutions'],
      ['How It Works', '/how-it-works'],
      ['ROI Calculator', '/roi-calculator'],
      ['Resources', '/resources'],
      ['Contact', '/contact'],
      ['Sign In', '/sign-in'],
    ]

    expectedLinks.forEach(([name, href]) => {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
    })
  })

  it('highlights different pages correctly', () => {
    const pages = [
      ['solutions', 'Solutions'],
      ['how-it-works', 'How It Works'],
      ['roi-calculator', 'ROI Calculator'],
      ['resources', 'Resources'],
      ['contact', 'Contact'],
      ['sign-in', 'Sign In'],
    ] as const

    const { rerender } = render(<PublicHeader currentPage="solutions" />)

    pages.forEach(([page, pageText]) => {
      rerender(<PublicHeader currentPage={page} />)

      const link = screen.getByRole('link', { name: pageText })
      expect(link).toHaveClass('text-[#1a2642]', 'font-bold')
    })
  })

  it('toggles menu icon when clicked', () => {
    render(<PublicHeader currentPage="home" />)

    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })
    fireEvent.click(menuButton)

    const closeButton = screen.getByRole('button', { name: 'Close navigation menu' })
    expect(closeButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(closeButton)

    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-navigation')).not.toBeInTheDocument()
  })
})
