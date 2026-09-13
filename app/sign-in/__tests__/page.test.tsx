import { render, screen } from '@testing-library/react'
import SignInPage from '../page'

jest.mock('@/components/shared/public-header', () => ({ PublicHeader: () => null }))
jest.mock('@/components/shared/public-footer', () => ({ PublicFooter: () => null }))

describe('Provider sign-in entry point', () => {
  it('takes visitors to the provider portal without collecting credentials on the marketing site', () => {
    render(<SignInPage />)

    expect(screen.getByRole('link', { name: /sign in to admin console/i })).toHaveAttribute(
      'href', 'https://provider.positivecheck.com/admin-new/login'
    )
    expect(screen.queryByLabelText(/email|password/i)).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /need help with your password/i })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: 'Request Demo' })).toHaveAttribute('href', '/demo')
  })
})
