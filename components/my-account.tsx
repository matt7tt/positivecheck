'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, Calendar, User, CreditCard, Edit2, Save, Clock, HelpCircle, UserCircle, BarChart2, Smile, Frown, Meh } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import { PublicFooter } from "@/components/shared/public-footer"
import { loadStripe } from '@stripe/stripe-js'
import { Button } from "@/components/ui/button"

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const CALL_TIMES = [
  {value: "08:00", label: "8 AM"},
  {value: "09:00", label: "9 AM"},
  {value: "10:00", label: "10 AM"},
  {value: "11:00", label: "11 AM"},
  {value: "12:00", label: "12 PM"},
  {value: "13:00", label: "1 PM"},
  {value: "14:00", label: "2 PM"},
  {value: "15:00", label: "3 PM"},
  {value: "16:00", label: "4 PM"},
  {value: "17:00", label: "5 PM"},
  {value: "18:00", label: "6 PM"},
  {value: "19:00", label: "7 PM"},
  {value: "20:00", label: "8 PM"},
  {value: "21:00", label: "9 PM"},
  {value: "22:00", label: "10 PM"}
]


const DAY_ORDER: Record<string, number> = {
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
  'Sunday': 7
}

const convertToUserTimezone = (utcTime: string, userTimezone: string): string => {
  try {
    // Create a date object for today with the specified time
    const [hours, minutes] = utcTime.split(':').map(Number);
    const date = new Date();
    date.setUTCHours(hours, minutes, 0, 0);

    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: userTimezone === 'EST' ? 'America/New_York' :
                userTimezone === 'CST' ? 'America/Chicago' :
                userTimezone === 'MST' ? 'America/Denver' :
                userTimezone === 'PST' ? 'America/Los_Angeles' :
                userTimezone === 'AKST' ? 'America/Anchorage' :
                userTimezone === 'HST' ? 'Pacific/Honolulu' : 'UTC'
    };
    
    const timeString = date.toLocaleTimeString('en-US', options);
    return `${timeString} [${userTimezone}]`;
  } catch (error) {
    console.error('Error converting timezone:', error);
    return utcTime; // Fallback to original time if conversion fails
  }
}

const convertDateToUserTimezone = (utcDate: string, userTimezone: string): string => {
  try {
    const date = new Date(utcDate);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: userTimezone === 'EST' ? 'America/New_York' :
                userTimezone === 'CST' ? 'America/Chicago' :
                userTimezone === 'MST' ? 'America/Denver' :
                userTimezone === 'PST' ? 'America/Los_Angeles' :
                userTimezone === 'AKST' ? 'America/Anchorage' :
                userTimezone === 'HST' ? 'Pacific/Honolulu' : 'UTC'
    };
    
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    console.error('Error converting date timezone:', error);
    return utcDate; // Fallback to original date if conversion fails
  }
}

const toCamelCase = (str: string): string => {
  return str.toLowerCase().replace(/_/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
    index === 0 ? word.toUpperCase() : word.toUpperCase()
  );
}

const removeSummaryPrefix = (text: string): string => {
  return text.replace(/^Summary:\s*/i, '');
}

export function MyAccountComponent() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userData, setUserData] = useState({
    accountInfo: {
      firstName: '',
      lastName: '',
      userphone: '',
      email: '',
      password: '',
    },
    callPreferences: {
      callDayIds: [] as number[],
      questionIds: [] as number[],
      callDays: [] as string[],
      callTime: '',
    },
    questions: [] as Array<{
      id: number;
      text: string;
      selected: boolean;
    }>,
    callerInfo: {
      firstName: '',
      lastName: '',
      preferredName: '',
      userphone: '',
      timezone: '',
    },
    callLog: [] as Array<{
      call_date: string;
      call_status: string;
      call_start: string;
      call_end: string;
      call_duration: string;
      call_issues: string;
    }>,
    weeklyLearning: '',
    billing: {
      stripeCustomerId: '',
    }
  })
  const [activeSection, setActiveSection] = useState('call-log')
  const [editMode, setEditMode] = useState({
    'call-preferences': false,
    'questions': false,
    'caller-info': false,
    'account-info': false,
    'call-log': false,
    'dashboard': false,
    'billing': false
  })
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleInputChange = (
    section: 'accountInfo' | 'callerInfo' | 'callPreferences' | 'questions',
    field: string,
    value: string | string[] | Array<{ id: number; text: string; selected: boolean }>
  ) => {
    setUserData(prev => ({
      ...prev,
      [section]: section === 'questions' ? value : {
        ...prev[section],
        [field]: value
      }
    }))
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const cookies = document.cookie.split(';')
        const authCookie = cookies.find(c => c.trim().startsWith('auth_token='))
        const token = authCookie ? authCookie.split('=')[1].trim() : null

        if (!token) {
          console.error('No token found')
          setIsLoading(false)
          return
        }

        // Fetch all data
        const [userResponse, preferencesResponse, questionsResponse, callLogResponse, weeklyLearningResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `bearer ${token}`,
              'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
            },
          }),
          fetch(`${API_BASE_URL}/api/users/me/call-preferences`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `bearer ${token}`,
              'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
            },
          }),
          fetch(`${API_BASE_URL}/api/users/me/questions-test`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `bearer ${token}`,
              'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
            },
          }),
          fetch(`${API_BASE_URL}/api/users/me/call-log`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `bearer ${token}`,
              'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
            },
          }),
          fetch(`${API_BASE_URL}/api/users/me/weekly-learning`, {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `bearer ${token}`,
              'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
            },
          })
        ])

        if (!userResponse.ok || !preferencesResponse.ok || !questionsResponse.ok || !callLogResponse.ok) {
          console.error('API Error Response:', {
            user: await userResponse.json(),
            preferences: await preferencesResponse.json(),
            questions: await questionsResponse.json(),
            callLog: await callLogResponse.json()
          })
          setIsLoading(false)
          return
        }

        const [userData, preferencesData, questionsData, callLogData, weeklyLearningData] = await Promise.all([
          userResponse.json(),
          preferencesResponse.json(),
          questionsResponse.json(),
          callLogResponse.json(),
          weeklyLearningResponse.ok ? weeklyLearningResponse.text() : ''
        ])

        // Process questions data
        const questionsArray = Array.isArray(questionsData) 
          ? questionsData 
          : questionsData.questions || questionsData.data || []

        const questionsWithText = questionsData.map((q: { id: number, text: string, selected: boolean }) => ({
          id: q.id,
          text: q.text,
          selected: q.selected
        }))

        console.log('Preferences Data:', preferencesData);  // Log full preferences data
        console.log('Call Time from Backend:', preferencesData.call_time);  // Log specific call time

        // Extract hours and minutes from the full time string
        const callTime = preferencesData.call_time ? preferencesData.call_time.slice(0, 5) : '';
        console.log('Formatted Call Time:', callTime);  // Should show "08:00"

        // Update state with all data
        setUserData(prev => ({
          ...prev,
          accountInfo: {
            firstName: userData.acc_user_first_name || '',
            lastName: userData.acc_user_last_name || '',
            email: userData.acc_user_email || '',
            userphone: userData.acc_user_phone || '',
            password: '',
          },
          callerInfo: {
            firstName: userData.caller_user_first_name || '',
            lastName: userData.caller_user_last_name || '',
            preferredName: userData.caller_user_preferred_name || '',
            userphone: userData.caller_user_phone || '',
            timezone: userData.caller_user_timezone || '',
          },
          callPreferences: {
            callDayIds: preferencesData.user_call_day_ids || [],
            questionIds: preferencesData.question_ids || [],
            callDays: preferencesData.call_days || [],
            callTime: callTime,
          },
          questions: questionsWithText,
          callLog: callLogData,
          weeklyLearning: weeklyLearningData
        }))

        setIsAuthenticated(true)
        setIsLoading(false)
      } catch (error) {
        console.error('fetchUserData error:', error)
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="animate-spin inline-block mr-2">⚪</span>
          Loading...
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // This shouldn't render because middleware will redirect
  }

  // Add edit toggle function
  const toggleEdit = (section: 'call-preferences' | 'questions' | 'caller-info' | 'account-info' | 'call-log' | 'dashboard' | 'billing') => {
    setEditMode(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  // Add save handler function
  const handleSave = async (section: 'call-preferences' | 'questions' | 'caller-info' | 'account-info' | 'call-log' | 'dashboard' | 'billing') => {
    try {
      const cookies = document.cookie.split(';')
      const authCookie = cookies.find(c => c.trim().startsWith('auth_token='))
      const token = authCookie ? authCookie.split('=')[1].trim() : null

      if (!token) {
        console.error('No token found')
        return
      }

      let endpoint = ''
      let data = {}

      switch (section) {
        case 'call-preferences':
          endpoint = '/api/users/me/call-preferences'
          data = {
            call_days: userData.callPreferences.callDays,
            call_time: userData.callPreferences.callTime,
          }
          break
        case 'questions':
          endpoint = '/api/users/me/questions'
          data = {
            question_ids: userData.callPreferences.questionIds,
          }
          break
        case 'caller-info':
          endpoint = '/api/users/caller'
          data = {
            first_name: userData.accountInfo.firstName,
            last_name: userData.accountInfo.lastName,
            email: userData.accountInfo.email,
            userphone: userData.accountInfo.userphone,
            caller_user_first_name: userData.callerInfo.firstName,
            caller_user_last_name: userData.callerInfo.lastName,
            caller_user_phone: userData.callerInfo.userphone,
            caller_user_preferred_name: userData.callerInfo.preferredName,
            caller_user_timezone: userData.callerInfo.timezone
          }
          break
        case 'account-info':
          endpoint = '/api/users/me'
          data = {
            first_name: userData.accountInfo.firstName,
            last_name: userData.accountInfo.lastName,
            email: userData.accountInfo.email,
            userphone: userData.accountInfo.userphone,
            caller_user_first_name: null,
            caller_user_last_name: null,
            caller_user_phone: null,
            caller_user_preferred_name: null,
            caller_user_timezone: null
          }
          break
        case 'call-log':
          endpoint = '/api/users/me/call-log'
          // Call log is read-only, no save needed
          setEditMode(prev => ({ ...prev, [section]: false }))
          return
        case 'dashboard':
          // Dashboard is read-only, no save needed
          setEditMode(prev => ({ ...prev, [section]: false }))
          return
        case 'billing':
          endpoint = '/api/users/me/billing'
          data = {
            stripeCustomerId: userData.billing.stripeCustomerId,
          }
          break
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`,
          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Failed to save changes')
      }

      setEditMode(prev => ({ ...prev, [section]: false }))
      toast.success('Changes saved successfully', {
        duration: 3000,
        style: {
          background: '#10B981',
          color: '#FFFFFF',
        },
        position: 'bottom-center',
      })

    } catch (error) {
      console.error('Save error:', error)
      toast.error('Error saving changes. Please try again.', {
        duration: 5000,
        style: {
          background: '#EF4444',
          color: '#FFFFFF',
        },
        position: 'bottom-center',
      })
    }
  }

  // Modify the renderSection function to include a save button
  const renderSection = (
    title: string,
    icon: React.ReactNode,
    sectionId: 'call-preferences' | 'questions' | 'caller-info' | 'account-info' | 'call-log' | 'billing' | 'dashboard',
    content: React.ReactNode,
    editContent: React.ReactNode
  ) => (
    <div className="border rounded-lg p-6 mb-6 relative w-full">
      <div className="mb-4 flex justify-between items-center w-full">
        <div className="flex items-center gap-2 font-bold text-lg">
          {icon}
          {title}
        </div>
        {sectionId !== 'call-log' && sectionId !== 'dashboard' && sectionId !== 'billing' && (
          <button
            onClick={() => editMode[sectionId] ? handleSave(sectionId) : toggleEdit(sectionId)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            {editMode[sectionId] ? 
              <Save className="h-5 w-5 text-blue-600" /> : 
              <Edit2 className="h-5 w-5" />
            }
          </button>
        )}
      </div>
      <div className="space-y-4 w-full">
        {editMode[sectionId as keyof typeof editMode] ? editContent : content}
      </div>
    </div>
  )

  // Update the navItems array order
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart2 className="h-5 w-5" /> },
    { id: 'call-log', label: 'Call Log', icon: <Clock className="h-5 w-5" /> },
    { id: 'call-preferences', label: 'Call Preferences', icon: <PhoneCall className="h-5 w-5" /> },
    { id: 'questions', label: 'Questions', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'caller-info', label: 'Caller Info', icon: <User className="h-5 w-5" /> },
    { id: 'account-info', label: 'Account Info', icon: <UserCircle className="h-5 w-5" /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard className="h-5 w-5" /> },
  ]

  // Add logout function
  const handleLogout = async () => {
    try {
      // First, clear the auth cookie and state regardless of server response
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      setIsAuthenticated(false)
      
      // Attempt to notify the server, but don't wait for it
      fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
      }).catch(error => {
        console.error('Logout server notification failed:', error)
        // Server notification failed, but user is still logged out locally
      })
      
      // Redirect to sign in page immediately
      router.push('/sign-in')
      
    } catch (error) {
      console.error('Logout error:', error)
      toast.error('Error during logout, please try again or close your browser.')
      
      // Force logout anyway for security
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      setIsAuthenticated(false)
      router.push('/sign-in')
    }
  }

  // Add this function to handle portal redirect
  const redirectToCustomerPortal = async () => {
    try {
      const cookies = document.cookie.split(';')
      const authCookie = cookies.find(c => c.trim().startsWith('auth_token='))
      const token = authCookie ? authCookie.split('=')[1].trim() : null

      if (!token) {
        console.error('No token found')
        toast.error('Authentication required')
        setIsLoading(false)
        return
      }

      const response = await fetch(`${API_BASE_URL}/api/create-portal-session`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `bearer ${token}`,
          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
        },

      })

      if (!response.ok) {
        throw new Error('Failed to create portal session')
      }

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Error:', error)
      toast.error('Could not access billing portal')
    }
  }

  type CallLogEntry = {
    call_date: string;
    call_status: string;
    call_start: string;
    call_end: string;
    call_duration: string;
    call_issues: string;
  };

  const paginate = (items: CallLogEntry[], pageNumber: number, itemsPerPage: number): CallLogEntry[] => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const calculateCallStatistics = (callLog: CallLogEntry[]) => {
    const totalCalls = callLog.length
    const contactMade = callLog.filter(log => log.call_status === 'Contact Made').length
    const contactNotMade = totalCalls - contactMade
    const contactRate = totalCalls > 0 ? (contactMade / totalCalls * 100).toFixed(1) : '0'

    return {
      contactMade,
      contactNotMade,
      contactRate
    }
  }

  const getSentimentIcon = (sentiment: string) => {
    switch(sentiment.toLowerCase()) {
      case 'positive':
        return <Smile className="h-6 w-6 text-green-500" />
      case 'negative':
        return <Frown className="h-6 w-6 text-red-500" />
      default:
        return <Meh className="h-6 w-6 text-yellow-500" />
    }
  }

  return (
    <>
      <Toaster 
        position="bottom-center"
        containerStyle={{
          bottom: 100
        }}
      />
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/positive-logo.png"
                alt="Positive Check"
                width={120}
                height={32}
                priority
              />
            </Link>
            <nav>
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="text-base font-medium text-gray-600 hover:text-[#1a2642]"
                >
                  Home
                </Link>
                <Link 
                  href="/contact" 
                  className="text-base font-medium text-gray-600 hover:text-[#1a2642]"
                >
                  Contact
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-base font-medium text-gray-600 hover:text-[#1a2642]"
                >
                  Log Out
                </button>
              </div>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 flex-grow">
          <div>
            <h1 className="text-3xl font-bold text-[#1a2642]">Account</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
          <hr className="border-t border-gray-200 my-4" />
          
          <div className="flex gap-6">
            {/* Side Navigation */}
            <nav className="w-1/3 lg:w-64 flex-shrink-0">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-left ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Content Area */}
            <div className="w-2/3 lg:flex-grow">
              {activeSection === 'call-preferences' && renderSection(
                "Call Preferences",
                <PhoneCall className="h-5 w-5" />,
                'call-preferences',
                <div>
                  <p>Your preferred call days: {
                    [...userData.callPreferences.callDays]
                      .sort((a, b) => DAY_ORDER[a] - DAY_ORDER[b])
                      .join(', ')
                  }</p>
                  <p>Call time: {CALL_TIMES.find(t => t.value === userData.callPreferences.callTime)?.label || userData.callPreferences.callTime}</p>
                </div>,
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Preferred Call Days</Label>
                    {DAYS_OF_WEEK.map((day) => (
                      <div key={day} className="flex items-center space-x-2">
                        <Checkbox
                          id={day}
                          checked={userData.callPreferences.callDays.includes(day)}
                          onCheckedChange={(checked: boolean) => {
                            const newDays = checked
                              ? [...userData.callPreferences.callDays, day]
                              : userData.callPreferences.callDays.filter(d => d !== day)
                            handleInputChange('callPreferences', 'callDays', newDays)
                          }}
                        />
                        <Label htmlFor={day}>{day}</Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label>Call Time</Label>
                    <Select
                      value={userData.callPreferences.callTime}
                      onValueChange={(value) => handleInputChange('callPreferences', 'callTime', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {CALL_TIMES.map((time) => (
                          <SelectItem key={time.value} value={time.value}>
                            {time.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {activeSection === 'questions' && renderSection(
                "Questions",
                <HelpCircle className="h-5 w-5" />,
                'questions',
                <div>
                  {userData.questions.map((question) => (
                    <div key={question.id} className="flex items-center space-x-2 mb-2">
                      <Checkbox checked={question.selected} disabled />
                      <span>{question.text}</span>
                    </div>
                  ))}
                </div>,
                <div>
                  {userData.questions.map((question) => (
                    <div key={question.id} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={`question-${question.id}`}
                        checked={question.selected}
                        onCheckedChange={(checked: boolean) => {
                          const updatedQuestions = userData.questions.map(q =>
                            q.id === question.id ? { ...q, selected: checked } : q
                          )
                          handleInputChange('questions', '', updatedQuestions)
                        }}
                      />
                      <Label htmlFor={`question-${question.id}`}>{question.text}</Label>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'caller-info' && renderSection(
                "Caller Info",
                <User className="h-5 w-5" />,
                'caller-info',
                <div>
                  <p>Name: {userData.callerInfo.firstName} {userData.callerInfo.lastName}</p>
                  <p>Preferred Name: {userData.callerInfo.preferredName}</p>
                  <p>Phone: {userData.callerInfo.userphone}</p>
                  <p>Time Zone: {userData.callerInfo.timezone}</p>
                </div>,
                <div className="space-y-2">
                  <input 
                    type="text"
                    value={userData.callerInfo.firstName}
                    onChange={(e) => handleInputChange('callerInfo', 'firstName', e.target.value)}
                    placeholder="First Name"
                    className="w-full p-2 border rounded"
                  />
                  <input 
                    type="text" 
                    value={userData.callerInfo.lastName}
                    onChange={(e) => handleInputChange('callerInfo', 'lastName', e.target.value)}
                    placeholder="Last Name"
                    className="w-full p-2 border rounded"
                  />
                  <input 
                    type="text" 
                    value={userData.callerInfo.preferredName}
                    onChange={(e) => handleInputChange('callerInfo', 'preferredName', e.target.value)}
                    placeholder="Preferred Name"
                    className="w-full p-2 border rounded"
                  />
                  <input 
                    type="tel" 
                    value={userData.callerInfo.userphone}
                    onChange={(e) => handleInputChange('callerInfo', 'phone', e.target.value)}
                    placeholder="Phone"
                    className="w-full p-2 border rounded"
                  />
                  <select 
                    value={userData.callerInfo.timezone}
                    onChange={(e) => handleInputChange('callerInfo', 'timezone', e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="EST">EST</option>
                    <option value="CST">CST</option>
                    <option value="MST">MST</option>
                    <option value="PST">PST</option>
                    <option value="AKST">AKST</option>
                    <option value="HST">HST</option>
                  </select>
                </div>
              )}

              {activeSection === 'account-info' && renderSection(
                "Account Info",
                <UserCircle className="h-5 w-5" />,
                'account-info',
                <div>
                  <p>Name: {userData.accountInfo.firstName} {userData.accountInfo.lastName}</p>
                  <p>Email: {userData.accountInfo.email}</p>
                  <p>Phone: {userData.accountInfo.userphone}</p>
                </div>,
                <div className="space-y-2">
                  <input 
                    type="text" 
                    value={userData.accountInfo.firstName}
                    onChange={(e) => handleInputChange('accountInfo', 'firstName', e.target.value)}
                    placeholder="First Name"
                    className="w-full p-2 border rounded"
                  />
                  <input 
                    type="text" 
                    value={userData.accountInfo.lastName}
                    onChange={(e) => handleInputChange('accountInfo', 'lastName', e.target.value)}
                    placeholder="Last Name"
                    className="w-full p-2 border rounded"
                  />
                  <input 
                    type="email" 
                    value={userData.accountInfo.email}
                    onChange={(e) => handleInputChange('accountInfo', 'email', e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                  />
                  <input 
                    type="tel" 
                    value={userData.accountInfo.userphone}
                    onChange={(e) => handleInputChange('accountInfo', 'phone', e.target.value)}
                    placeholder="Phone"
                    className="w-full p-2 border rounded"
                  />
                </div>
              )}

              {activeSection === 'call-log' && renderSection(
                "Call Log",
                <Clock className="h-5 w-5" />,
                'call-log',
                <div className="w-full overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Summary</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {paginate(userData.callLog, currentPage, rowsPerPage).map((log, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {convertDateToUserTimezone(log.call_date, userData.callerInfo.timezone)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {toCamelCase(log.call_status)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {convertToUserTimezone(log.call_start, userData.callerInfo.timezone)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.call_duration}</td>
                            <td className="px-6 py-4 text-sm text-gray-900 break-words">
                              {removeSummaryPrefix(log.call_issues)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {userData.callLog.length > rowsPerPage && (
                      <div className="px-6 py-4 flex justify-between items-center border-t">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 text-sm font-medium text-[#1a2642] bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        <span className="text-sm text-gray-700">
                          Page {currentPage} of {Math.ceil(userData.callLog.length / rowsPerPage)}
                        </span>
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(userData.callLog.length / rowsPerPage)))}
                          disabled={currentPage === Math.ceil(userData.callLog.length / rowsPerPage)}
                          className="px-4 py-2 text-sm font-medium text-[#1a2642] bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                </div>,
                <div>Call log cannot be edited</div>
              )}

              {activeSection === 'billing' && renderSection(
                "Billing",
                <CreditCard className="h-5 w-5" />,
                'billing',
                <div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h3 className="font-semibold text-[#1a2642]">Current Plan</h3>
                        <p className="text-gray-600">Monthly Subscription</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#1a2642]">$20.00/month</p>
                        <Button 
                          onClick={redirectToCustomerPortal}
                          className="mt-2 px-4 py-2 bg-[#1a2642] hover:bg-[#2a3752] text-white rounded"
                        >
                          Manage Billing
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>,
                <div>Loading...</div>
              )}

              {activeSection === 'dashboard' && renderSection(
                "Dashboard",
                <BarChart2 className="h-5 w-5" />,
                'dashboard',
                <div className="space-y-6">
                  {/* Call Statistics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-[#1a2642] mb-2">Contact Rate</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-3xl font-bold text-[#1a2642]">{calculateCallStatistics(userData.callLog).contactRate}%</p>
                          <p className="text-sm text-gray-600">Successful Contacts</p>
                        </div>
                        <PhoneCall className="h-8 w-8 text-[#1a2642] opacity-20" />
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-[#1a2642] mb-2">Contact Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Made</span>
                          <span className="text-sm font-semibold text-green-600">{calculateCallStatistics(userData.callLog).contactMade}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Not Made</span>
                          <span className="text-sm font-semibold text-red-600">{calculateCallStatistics(userData.callLog).contactNotMade}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-[#1a2642] mb-2">Last Contact</h3>
                      <div className="space-y-1">
                        {userData.callLog[0] ? (
                          <>
                            <p className="text-sm text-gray-600">
                              {convertDateToUserTimezone(userData.callLog[0].call_date, userData.callerInfo.timezone)}
                            </p>
                            <p className="text-sm font-semibold text-[#1a2642]">
                              {convertToUserTimezone(userData.callLog[0].call_start, userData.callerInfo.timezone)}
                            </p>
                          </>
                        ) : (
                          <p className="text-sm text-gray-600">No calls recorded</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Question Response Sections */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#1a2642]">Recent Responses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {userData.questions.filter(q => q.selected).map((question, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow">
                          <h4 className="text-md font-semibold text-[#1a2642] mb-4">{question.text}</h4>
                          {userData.callLog[0] && (
                            <div className="space-y-2">
                              <p className="text-sm text-gray-600">Latest Response:</p>
                              <div className="flex items-center gap-2">
                                {getSentimentIcon('positive')}
                                <span className="text-sm font-medium">Positive</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>,
                <div>Dashboard cannot be edited</div>
              )}
            </div>
          </div>
        </div>
        <PublicFooter />
      </div>
    </>
  )
}