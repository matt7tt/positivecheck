import { render, screen, fireEvent } from '@testing-library/react'
import { PublicHeader } from '../public-header'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
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
    render(<PublicHeader currentPage="about" />)
    
    const aboutLink = screen.getAllByText('About')[0]
    expect(aboutLink).toHaveClass('text-[#1a2642]', 'font-bold', 'border-b-2', 'border-[#1a2642]')
  })

  it('shows mobile menu when menu button is clicked', () => {
    render(<PublicHeader currentPage="home" />)
    
    const menuButton = screen.getByRole('button')
    
    fireEvent.click(menuButton)
    
    const mobileMenus = screen.getAllByText('Home')
    expect(mobileMenus).toHaveLength(2)
    expect(screen.getAllByText('About')).toHaveLength(2)
    expect(screen.getAllByText('How It Works')).toHaveLength(2)
    expect(screen.getAllByText('Blog')).toHaveLength(2)
    expect(screen.getAllByText('Contact')).toHaveLength(2)
    expect(screen.getAllByText('Sign In')).toHaveLength(2)
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<PublicHeader currentPage="home" />)
    
    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)
    
    expect(screen.getAllByText('About')).toHaveLength(2)
    
    const mobileAboutLink = screen.getAllByText('About')[1]
    fireEvent.click(mobileAboutLink)
    
    expect(screen.getAllByText('About')).toHaveLength(1)
  })

  it('renders all navigation links', () => {
    render(<PublicHeader currentPage="home" />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it('highlights different pages correctly', () => {
    const pages = ['home', 'about', 'blog', 'contact', 'sign-in'] as const
    
    pages.forEach(page => {
      const { rerender } = render(<PublicHeader currentPage={page} />)
      
      const pageText = page === 'sign-in' ? 'Sign In' : page.charAt(0).toUpperCase() + page.slice(1)
      const link = screen.getAllByText(pageText)[0]
      expect(link).toHaveClass('text-[#1a2642]', 'font-bold')
      
      rerender(<div />)
    })
  })

  it('toggles menu icon when clicked', () => {
    render(<PublicHeader currentPage="home" />)
    
    const menuButton = screen.getByRole('button')
    
    fireEvent.click(menuButton)
    fireEvent.click(menuButton)
    
    expect(screen.getAllByText('About')).toHaveLength(1)
  })
})