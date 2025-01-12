'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PhoneCall, Calendar, User, CreditCard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import type { StripeElementChangeEvent } from '@stripe/stripe-js';

// Initialize Stripe with error handling
const stripePromise = (() => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!key) {
    console.error('Stripe publishable key is missing')
    return null
  }
  return loadStripe(key)
})()

export function OnboardingWizardComponent() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    callDays: [] as string[],
    callTime: '',
    questions: [] as { id: number; text: string; selected: boolean }[],
    firstName: '',
    lastName: '',
    preferredName: '',
    phone: '',
    timezone: '',
    language: 'English',
    accountFirstName: '',
    accountLastName: '',
    accountPhone: '',
    accountEmail: '',
    accountPassword: '',
    signUpCode: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true)
  const { setIsAuthenticated } = useAuth()

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '')
    
    if (digits.length >= 10) {
      return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6,10)}`
    }
    return value
  }

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/
    return phoneRegex.test(phone)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    if (name === 'phone' || name === 'accountPhone') {
      const formattedPhone = formatPhoneNumber(value)
      setFormData(prevData => ({
        ...prevData,
        [name]: formattedPhone
      }))
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  const handleCheckboxChange = (day: string) => {
    setFormData(prevData => ({
      ...prevData,
      callDays: prevData.callDays.includes(day)
        ? prevData.callDays.filter(d => d !== day)
        : [...prevData.callDays, day]
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleQuestionChange = (id: number) => {
    setFormData(prevData => ({
      ...prevData,
      questions: prevData.questions.map(q =>
        q.id === id ? { ...q, selected: !q.selected } : q
      )
    }))
  }

  const handleNext = () => {
    if (step === 1) {
      if (formData.callDays.length === 0) {
        alert("Please select at least one day for calls.");
        return;
      }
    }
    setStep(prevStep => prevStep + 1);
  }

  const handleBack = () => {
    setStep(prevStep => prevStep - 1)
  }

  const router = useRouter()

  const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)
    
    if (formData.signUpCode !== 'PCSIGNUP34') {
      setErrorMessage('Invalid Sign Up Code - Please contact support if you need help.')
      setIsLoading(false)
      return
    }
    
    if (!validatePhoneNumber(formData.phone) || !validatePhoneNumber(formData.accountPhone)) {
      setErrorMessage('Please enter valid US phone numbers')
      setIsLoading(false)
      return
    }
    
    try {
      const submitUserData = {
        first_name: formData.accountFirstName,
        last_name: formData.accountLastName,
        email: formData.accountEmail,
        phone: `+1${formData.accountPhone.replace(/\D/g, '')}`,
        timezone: formData.timezone,
        call_time: formData.callTime,
        days_to_call: formData.callDays,
        password: formData.accountPassword,
        caller_first_name: formData.firstName,
        caller_last_name: formData.lastName,
        caller_preferred_name: formData.preferredName,
        caller_phone: `+1${formData.phone.replace(/\D/g, '')}`,
        caller_language: formData.language,
        questions: formData.questions
          .filter(q => q.selected)
          .map(q => q.id)
      }

      console.log('Sending request to:', `${API_BASE_URL}/api/users`)

      const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        body: JSON.stringify(submitUserData),
      })

      if (!response.ok) {
        let errorMessage: string;
        try {
          const errorData = await response.json();
          if (Array.isArray(errorData)) {
            errorMessage = errorData.map(err => err.msg || err.message).join('\n');
          } else {
            errorMessage = errorData.detail || errorData.message || 'Failed to create user';
          }
        } catch (e) {
          errorMessage = `Error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json()
      console.log('User created successfully:', result)
      
      setIsAuthenticated(true)
      await new Promise(resolve => setTimeout(resolve, 100))
      router.push('/my-account')
    } catch (error) {
      console.error('Error creating user:', error)
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const steps = [
    { title: "Call Preferences", icon: <PhoneCall className="w-6 h-6" /> },
    { title: "Questions", icon: <Calendar className="w-6 h-6" /> },
    { title: "Caller Info", icon: <User className="w-6 h-6" /> },
    { title: "Account", icon: <CreditCard className="w-6 h-6" /> },
    { title: "Payment", icon: <CreditCard className="w-6 h-6" /> },
  ]

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/questions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to fetch questions');
      }

      const data = await response.json();
      const formattedQuestions = data.questions.map((q: { question_id: number, question_text: string }) => ({
        id: q.question_id,
        text: q.question_text,
        selected: false
      }));

      setFormData(prev => ({
        ...prev,
        questions: formattedQuestions
      }));
    } catch (error) {
      console.error('Error fetching questions:', error);
      setErrorMessage('Failed to load questions. Please refresh the page.');
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  interface PaymentFormProps {
    onBack: () => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    setErrorMessage: (message: string | null) => void;
    formData: typeof formData;
  }

  function PaymentForm({ onBack, isLoading, setIsLoading, setErrorMessage, formData }: PaymentFormProps) {
    const stripe = useStripe()
    const elements = useElements()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!stripe || !elements) {
        toast.error("Stripe is not properly initialized")
        return
      }

      setIsLoading(true)
      setErrorMessage(null)

      const loadingToast = toast.loading('Processing your payment...')

      try {
        // Create payment method
        const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement)!,
        })

        if (paymentMethodError) {
          toast.error(`Payment method error: ${paymentMethodError.message}`)
          throw new Error(paymentMethodError.message)
        }

        // Create subscription
        const response = await fetch(`${API_BASE_URL}/api/create-subscription`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            email: formData.accountEmail,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          toast.error(`Subscription error: ${errorData.detail || 'Failed to create subscription'}`)
          throw new Error('Failed to create subscription')
        }

        const { clientSecret, subscriptionId } = await response.json()

        // Confirm the payment
        const { error: confirmationError } = await stripe.confirmCardPayment(clientSecret)

        if (confirmationError) {
          toast.error(`Payment confirmation error: ${confirmationError.message}`)
          throw new Error(confirmationError.message)
        }

        // Payment successful - create user account
        const userData = {
          first_name: formData.accountFirstName,
          last_name: formData.accountLastName,
          email: formData.accountEmail,
          phone: `+1${formData.accountPhone.replace(/\D/g, '')}`,
          timezone: formData.timezone,
          call_time: formData.callTime,
          days_to_call: formData.callDays,
          password: formData.accountPassword,
          caller_first_name: formData.firstName,
          caller_last_name: formData.lastName,
          caller_preferred_name: formData.preferredName,
          caller_phone: `+1${formData.phone.replace(/\D/g, '')}`,
          caller_language: formData.language,
          questions: formData.questions
            .filter(q => q.selected)
            .map(q => q.id),
          subscription_id: subscriptionId
        }

        const userResponse = await fetch(`${API_BASE_URL}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
          },
          body: JSON.stringify(userData),
        })

        if (!userResponse.ok) {
          const errorData = await userResponse.json()
          toast.error(`Account creation error: ${errorData.detail || 'Failed to create account'}`)
          throw new Error('Failed to create user account')
        }

        // Success!
        toast.success('Payment successful! Redirecting to your account...')
        await new Promise(resolve => setTimeout(resolve, 1500)) // Brief delay for user to see success message
        router.push('/my-account')
      } catch (error) {
        console.error('Error:', error)
        setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
      } finally {
        toast.dismiss(loadingToast)
        setIsLoading(false)
      }
    }

    // Add card validation feedback
    const handleCardChange = (event: StripeElementChangeEvent) => {
      if (event.error) {
        setErrorMessage(event.error.message)
      } else {
        setErrorMessage(null)
      }
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#1a2642]">Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <CardElement 
                  onChange={handleCardChange}
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-lg font-semibold text-[#1a2642] mb-2">Order Summary</p>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Monthly Subscription</span>
                  <span>$15.00</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-[#1a2642]">
                    <span>Total</span>
                    <span>$15.00/month</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button 
            type="button" 
            onClick={onBack} 
            variant="outline"
            disabled={isLoading}
          >
            Back
          </Button>
          <Button 
            type="submit" 
            className="bg-[#1a2642] hover:bg-[#2a3752] text-white"
            disabled={isLoading || !stripe}
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⚪</span>
                Processing Payment...
              </>
            ) : (
              'Submit Payment'
            )}
          </Button>
        </div>
      </form>
    )
  }

  return (
    <>
      <Toaster position="bottom-center" />
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="h-16">
              <Image
                src="/images/positive-logo.png"
                alt="Positive Check"
                height={32}
                width={120}
                priority
                className="h-full w-auto"
              />
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-[#1a2642] text-center">Sign Up for Positive Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 mb-6">
                  Recommendation: Start with a small set of questions to encourage engagement. Make changes at any time.
                </p>
                <div className="flex justify-between mb-2">
                  {steps.map((s, index) => (
                    <div key={index} className={`flex flex-col items-center ${index + 1 === step ? 'text-[#1a2642]' : 'text-gray-400'}`}>
                      <div className={`rounded-full p-2 ${index + 1 === step ? 'bg-[#1a2642] text-white' : 'bg-gray-200'}`}>
                        {s.icon}
                      </div>
                      <span className="text-sm mt-1">{s.title}</span>
                    </div>
                  ))}
                </div>
                <Progress value={step * 25} className="h-2 mb-8" />
                
                {step === 1 && (
                  <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#1a2642]">Call Preferences</h2>
                      <div>
                        <Label className="text-base font-semibold">Days to Call <span className="text-red-500">*</span></Label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                            <div key={day} className="flex items-center space-x-2">
                              <Checkbox
                                id={day}
                                checked={formData.callDays.includes(day)}
                                onCheckedChange={() => handleCheckboxChange(day)}
                              />
                              <Label
                                htmlFor={day}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {day}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="callTime">Preferred Call Time</Label>
                        <Select onValueChange={(value) => handleSelectChange('callTime', value)} required>
                          <SelectTrigger id="callTime">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="08:00">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="12:00">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="16:00">Evening (4PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white">
                      Next
                    </Button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (formData.questions.filter(q => q.selected).length === 0) {
                      alert("Please select at least one question to ask.");
                      return;
                    }
                    handleNext();
                  }} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#1a2642]">Which questions to ask? <span className="text-red-500">*</span></h2>
                      {isLoadingQuestions ? (
                        <div className="text-center py-4">
                          <span className="animate-spin mr-2">⚪</span>
                          Loading questions...
                        </div>
                      ) : errorMessage ? (
                        <div className="p-4 text-sm text-red-800 bg-red-100 rounded-lg">
                          {errorMessage}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {formData.questions.map((question) => (
                            <div key={question.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={`question-${question.id}`}
                                checked={question.selected}
                                onCheckedChange={() => handleQuestionChange(question.id)}
                              />
                              <Label
                                htmlFor={`question-${question.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {question.text}
                              </Label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" onClick={handleBack} variant="outline">
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-[#1a2642] hover:bg-[#2a3752] text-white"
                        disabled={isLoadingQuestions}
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#1a2642]">Who will Lola be calling?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="preferredName">Preferred Name</Label>
                        <Input
                          id="preferredName"
                          name="preferredName"
                          value={formData.preferredName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 555-5555"
                          required
                          pattern="\(\d{3}\) \d{3}-\d{4}"
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select onValueChange={(value) => handleSelectChange('timezone', value)} required>
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="EST">Eastern Time (ET)</SelectItem>
                            <SelectItem value="CST">Central Time (CT)</SelectItem>
                            <SelectItem value="MST">Mountain Time (MT)</SelectItem>
                            <SelectItem value="PST">Pacific Time (PT)</SelectItem>
                            <SelectItem value="AKST">Alaska Time (AKT)</SelectItem>
                            <SelectItem value="HST">Hawaii Time (HT)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="language">Preferred Language</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange('language', value)} 
                          defaultValue="English"
                          required
                        >
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" onClick={handleBack} variant="outline">
                        Back
                      </Button>
                      <Button type="submit" className="bg-[#1a2642] hover:bg-[#2a3752] text-white">
                        Next
                      </Button>
                    </div>
                  </form>
                )}

                {step === 4 && (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (formData.signUpCode !== 'PCSIGNUP34') {
                      setErrorMessage('Invalid Sign Up Code');
                      return;
                    }
                    setErrorMessage(null);
                    handleNext();
                  }} className="space-y-6">
                    <Card className="bg-gray-50">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-[#1a2642]">Call Configuration Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p><strong>Call Days:</strong> {formData.callDays.join(', ') || 'None selected'}</p>
                        <p><strong>Call Time:</strong> {formData.callTime ? formData.callTime.replace(/(\d{2}):(\d{2})/, (_, hour, min) => 
                          `${hour > 12 ? hour - 12 : hour}${min === '00' ? '' : ':' + min}${hour >= 12 ? 'PM' : 'AM'}`
                        ) : 'Not specified'}</p>
                        <p><strong>Selected Questions:</strong></p>
                        <ul className="list-disc list-inside">
                          {formData.questions.filter(q => q.selected).map(q => (
                            <li key={q.id}>{q.text}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#1a2642]">Account Information</h2>
                      <p className="text-sm text-gray-600">Account owner/person paying for the service.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="accountFirstName">First Name</Label>
                          <Input
                            id="accountFirstName"
                            name="accountFirstName"
                            value={formData.accountFirstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="accountLastName">Last Name</Label>
                          <Input
                            id="accountLastName"
                            name="accountLastName"
                            value={formData.accountLastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="accountPhone">Phone</Label>
                        <Input
                          id="accountPhone"
                          name="accountPhone"
                          type="tel"
                          value={formData.accountPhone}
                          onChange={handleInputChange}
                          placeholder="(555) 555-5555"
                          required
                          pattern="\(\d{3}\) \d{3}-\d{4}"
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accountEmail">Email</Label>
                        <Input
                          id="accountEmail"
                          name="accountEmail"
                          type="email"
                          value={formData.accountEmail}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="accountPassword">Password</Label>
                        <Input
                          id="accountPassword"
                          name="accountPassword"
                          type="password"
                          value={formData.accountPassword}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="signUpCode">Sign Up Code</Label>
                        <Input
                          id="signUpCode"
                          name="signUpCode"
                          type="text"
                          value={formData.signUpCode}
                          onChange={handleInputChange}
                          required
                          className="w-full p-2 border rounded"
                        />
                      </div>
                    </div>
                    {errorMessage && (
                      <div className="p-4 text-sm text-red-800 bg-red-100 rounded-lg">
                        {errorMessage}
                      </div>
                    )}
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        onClick={handleBack} 
                        variant="outline"
                        disabled={isLoading}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-[#1a2642] hover:bg-[#2a3752] text-white"
                        disabled={isLoading}
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                )}

                {step === 5 && (
                  <>
                    {!stripePromise ? (
                      <div className="p-4 text-sm text-red-800 bg-red-100 rounded-lg">
                        Payment system is not properly configured. Please contact support.
                      </div>
                    ) : (
                      <Elements stripe={stripePromise}>
                        <PaymentForm 
                          onBack={handleBack}
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                          setErrorMessage={setErrorMessage}
                          formData={formData}
                        />
                      </Elements>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="border-t bg-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600 text-sm">
              © Positive Check 2025
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}