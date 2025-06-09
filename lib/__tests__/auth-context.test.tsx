import { render, screen, act } from '@testing-library/react'
import { AuthProvider, useAuth } from '../auth-context'

function TestComponent() {
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  
  return (
    <div>
      <span data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not authenticated'}</span>
      <button 
        data-testid="toggle-auth" 
        onClick={() => setIsAuthenticated(!isAuthenticated)}
      >
        Toggle Auth
      </button>
    </div>
  )
}

describe('AuthContext', () => {
  it('provides default unauthenticated state', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('not authenticated')
  })

  it('allows updating authentication state', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('not authenticated')
    
    act(() => {
      screen.getByTestId('toggle-auth').click()
    })
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
  })

  it('throws error when useAuth is used outside AuthProvider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
    
    expect(() => {
      render(<TestComponent />)
    }).toThrow('useAuth must be used within an AuthProvider')
    
    spy.mockRestore()
  })
})