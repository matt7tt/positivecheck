import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../contact-form'

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
}))

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, disabled, ...props }: any) => (
    <button disabled={disabled} {...props}>
      {children}
    </button>
  ),
}))

jest.mock('@/components/ui/input', () => ({
  Input: (props: any) => <input {...props} />,
}))

jest.mock('@/components/ui/textarea', () => ({
  Textarea: (props: any) => <textarea {...props} />,
}))

jest.mock('@/components/ui/select', () => ({
  Select: ({ children, name }: any) => (
    <div data-testid={`select-${name}`}>
      {children}
    </div>
  ),
  SelectTrigger: ({ children }: any) => <div>{children}</div>,
  SelectValue: ({ placeholder }: any) => <span>{placeholder}</span>,
  SelectContent: ({ children }: any) => <div>{children}</div>,
  SelectItem: ({ children, value }: any) => (
    <option value={value}>{children}</option>
  ),
}))

const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockFetch.mockClear()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/First Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Last Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone/)).toBeInTheDocument()
    expect(screen.getByTestId('select-hearAboutUs')).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Sign up for news/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Submit/ })).toBeInTheDocument()
  })

  it('requires first name, email, and message fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /Submit/ })
    await user.click(submitButton)
    
    expect(screen.getByLabelText(/First Name/)).toBeRequired()
    expect(screen.getByLabelText(/Email/)).toBeRequired()
    expect(screen.getByLabelText(/Message/)).toBeRequired()
  })

  it('shows loading state when submitting', async () => {
    const user = userEvent.setup()
    mockFetch.mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response), 100))
    )
    
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/First Name/), 'John')
    await user.type(screen.getByLabelText(/Email/), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/), 'Test message')
    
    const submitButton = screen.getByRole('button', { name: /Submit/ })
    await user.click(submitButton)
    
    expect(screen.getByRole('button', { name: /Submitting/ })).toBeDisabled()
  })

  it('submits form with correct data', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    } as Response)
    
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/First Name/), 'John')
    await user.type(screen.getByLabelText(/Last Name/), 'Doe')
    await user.type(screen.getByLabelText(/Email/), 'john@example.com')
    await user.type(screen.getByLabelText(/Phone/), '555-1234')
    await user.type(screen.getByLabelText(/Message/), 'Test message')
    
    const submitButton = screen.getByRole('button', { name: /Submit/ })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/contact'),
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
          body: expect.stringContaining('John'),
        })
      )
    })
  })

  it('shows success message after successful submission', async () => {
    const user = userEvent.setup()
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    } as Response)
    
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/First Name/), 'John')
    await user.type(screen.getByLabelText(/Email/), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/), 'Test message')
    
    const submitButton = screen.getByRole('button', { name: /Submit/ })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Thank You!')).toBeInTheDocument()
      expect(screen.getByText(/Thanks for your message/)).toBeInTheDocument()
    })
  })

  it('handles form submission errors', async () => {
    const user = userEvent.setup()
    const toast = require('react-hot-toast').default
    
    mockFetch.mockRejectedValueOnce(new Error('Network error'))
    
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/First Name/), 'John')
    await user.type(screen.getByLabelText(/Email/), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/), 'Test message')
    
    const submitButton = screen.getByRole('button', { name: /Submit/ })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        expect.stringContaining('error submitting'),
        expect.any(Object)
      )
    })
  })

  it('newsletter checkbox is checked by default', () => {
    render(<ContactForm />)
    
    const newsletterCheckbox = screen.getByLabelText(/Sign up for news/)
    expect(newsletterCheckbox).toBeChecked()
  })
})