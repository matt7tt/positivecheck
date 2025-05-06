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
      call_sentiment: string;
    }>,
    weeklyLearning: '',
    billing: {
      stripeCustomerId: '',
    }
  })
  const [activeSection, setActiveSection] = useState('dashboard')
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
  const [dashboardData, setDashboardData] = useState<Array<{
    user_question_id: number;
    user_call_questions_result: string;
    date_created: string;
    questionid: number;
  }>>([])
  const [isDashboardLoading, setIsDashboardLoading] = useState(true)

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
        const [userResponse, preferencesResponse, questionsResponse, callLogResponse, dashboardDataResponse] = await Promise.all([
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
          fetch(`${API_BASE_URL}/api/users/me/dashboard-data`, {
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

        const [userData, preferencesData, questionsData, callLogData] = await Promise.all([
          userResponse.json(),
          preferencesResponse.json(),
          questionsResponse.json(),
          callLogResponse.json(),
        ])

        // Fetch dashboard data
        if (dashboardDataResponse.ok) {
          const dashboardData = await dashboardDataResponse.json()
          console.log('Dashboard Data received:', dashboardData)
          setDashboardData(dashboardData)
        } else {
          console.error('Failed to fetch dashboard data:', await dashboardDataResponse.text())
        }
        setIsDashboardLoading(false)

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
          weeklyLearning: ''
        }))

        setIsAuthenticated(true)
        setIsLoading(false)
      } catch (error) {
        console.error('fetchUserData error:', error)
        setIsLoading(false)
        setIsDashboardLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="animate-spin h-8 w-8 border-4 border-[#1a2642] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-[#1a2642] font-medium">Loading your account...</p>
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
    sectionId: 'call-preferences' | 'questions' | 'caller-info' | 'account-info' | 'call-log' | 'dashboard' | 'billing',
    content: React.ReactNode,
    editContent: React.ReactNode
  ) => (
    <div className="border rounded-lg p-6 mb-6 relative w-full hover:shadow-sm transition-shadow duration-200">
      <div className="mb-5 flex justify-between items-center w-full pb-3 border-b border-gray-100">
        <div className="flex items-center gap-3 font-bold text-lg text-[#1a2642]">
          <span className="text-blue-600">{icon}</span>
          {title}
        </div>
        {sectionId !== 'call-log' && sectionId !== 'dashboard' && sectionId !== 'billing' && (
          <button
            onClick={() => editMode[sectionId] ? handleSave(sectionId) : toggleEdit(sectionId)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              editMode[sectionId] ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-100'
            }`}
            aria-label={editMode[sectionId] ? `Save ${title} changes` : `Edit ${title}`}
          >
            {editMode[sectionId] ? 
              <Save className="h-5 w-5 text-blue-600" /> : 
              <Edit2 className="h-5 w-5 text-gray-600" />
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
    call_sentiment: string;
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

  // Function to get dashboard data for a specific question
  const getQuestionData = (questionId: number) => {
    console.log(`Getting data for question ID ${questionId}`)
    const filteredData = dashboardData
      .filter(data => data.questionid === questionId)
      .sort((a, b) => new Date(a.date_created).getTime() - new Date(b.date_created).getTime())
    console.log(`Found ${filteredData.length} data points for question ID ${questionId}:`, filteredData)
    return filteredData
  }

  // Function to determine dot color based on sentiment
  const getSentimentColor = (sentiment: string) => {
    // First check if it's a scale value (0-5)
    if (/^[0-5]$/.test(sentiment) && sentiment !== '0' && sentiment !== '1') {
      const value = parseInt(sentiment);
      if (value >= 4) return 'bg-green-500'; // 4-5 = positive
      if (value === 3 || value === 2) return 'bg-yellow-400'; // 2-3 = neutral
      return 'bg-red-500'; // shouldn't reach here for 0-5 scale
    }
    
    // Handle regular values (0/1/-)
    switch(sentiment) {
      case '1':
        return 'bg-green-500'; // positive
      case '0':
        return 'bg-red-500';   // negative
      case '-':
      default:
        return 'bg-yellow-400'; // neutral/unknown
    }
  }

  // Function to get sentiment icon
  const getSentimentIcon = (sentiment: string) => {
    // First check if it's a scale value (0-5)
    if (/^[0-5]$/.test(sentiment) && sentiment !== '0' && sentiment !== '1') {
      const value = parseInt(sentiment);
      if (value >= 4) return <Smile className="h-6 w-6 text-green-500" />; // 4-5 = positive
      if (value === 3 || value === 2) return <Meh className="h-6 w-6 text-yellow-500" />; // 2-3 = neutral
      return <Frown className="h-6 w-6 text-red-500" />; // shouldn't reach here for 0-5 scale
    }
    
    // Handle regular values (0/1/-)
    switch(sentiment) {
      case '1':
        return <Smile className="h-6 w-6 text-green-500" />; // positive
      case '0':
        return <Frown className="h-6 w-6 text-red-500" />;   // negative
      case '-':
      default:
        return <Meh className="h-6 w-6 text-yellow-500" />;  // neutral/unknown
    }
  }

  // Function to get sentiment label
  const getSentimentLabel = (sentiment: string) => {
    // First check if it's a scale value (0-5)
    if (/^[0-5]$/.test(sentiment) && sentiment !== '0' && sentiment !== '1') {
      const value = parseInt(sentiment);
      if (value >= 4) return 'Positive';  // 4-5 = positive
      if (value === 3 || value === 2) return 'Neutral'; // 2-3 = neutral
      return 'Negative'; // shouldn't reach here for 0-5 scale
    }
    
    // Handle regular values (0/1/-)
    switch(sentiment) {
      case '1':
        return 'Positive';
      case '0':
        return 'Negative';
      case '-':
        return 'Neutral';
      default:
        return 'Unknown';
    }
  }

  // Function to render a sentiment chart for a question
  const renderSentimentChart = (questionId: number) => {
    const questionData = getQuestionData(questionId)
    
    if (questionData.length === 0) {
      console.log(`No data available for question ID ${questionId}`)
      return (
        <div className="flex justify-center items-center h-24 text-gray-400 bg-gray-50 rounded-md">
          <span className="text-sm">No data available</span>
        </div>
      )
    }

    // Get last 7 days, including today
    const last7Days = Array.from({length: 7}, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - i)
      return d.toISOString().split('T')[0]
    }).reverse()
    
    console.log(`Last 7 days for question ID ${questionId}:`, last7Days)

    // Create a mapping of dates to results
    const dateResultMap: Record<string, string> = {}
    questionData.forEach(data => {
      const date = data.date_created.split('T')[0]
      dateResultMap[date] = data.user_call_questions_result
    })
    
    console.log(`Date-result map for question ID ${questionId}:`, dateResultMap)

    // Get the latest sentiment for display
    const latestSentiment = questionData.length > 0 ? 
      questionData[questionData.length-1].user_call_questions_result : '-'
    
    console.log(`Latest sentiment for question ID ${questionId}:`, latestSentiment)

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 font-medium">7-Day Trend:</p>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
            {getSentimentIcon(latestSentiment)}
            <span className="text-sm font-medium">{getSentimentLabel(latestSentiment)}</span>
          </div>
        </div>
        <div className="flex flex-col h-48 w-full bg-gray-50 p-3 rounded-md">
          {/* Chart line with dots */}
          <div className="relative h-32 w-full mb-6">
            {/* Data points */}
            <div className="relative w-full flex justify-between h-full pt-2 pb-1">
              {last7Days.map((date, index) => {
                const sentiment = dateResultMap[date] || 'none';
                
                // Skip rendering the dot completely if sentiment is '-'
                if (sentiment === '-') {
                  return (
                    <div key={index} className="flex flex-col items-center relative h-full">
                      {/* No dot rendered for "-" values */}
                    </div>
                  );
                }
                
                // Determine vertical position based on sentiment
                let positionClass = '';
                if (sentiment === 'none') {
                  positionClass = 'opacity-0';
                } else if (sentiment === '1' || (parseInt(sentiment) >= 4 && /^[0-5]$/.test(sentiment))) {
                  // Positive - place high on the chart (near top)
                  // Includes '1' or 4-5 on 0-5 scale
                  positionClass = 'top-3';
                } else if (sentiment === '0' || (parseInt(sentiment) <= 1 && /^[0-5]$/.test(sentiment))) {
                  // Negative - place low on the chart (near bottom)
                  // Includes '0' or 0-1 on 0-5 scale
                  positionClass = 'top-24';
                } else {
                  // Neutral - place in the middle of the chart
                  // Includes 2-3 on 0-5 scale
                  positionClass = 'top-14';
                }
                
                // Determine dot color
                const dotColor = sentiment !== 'none' ? getSentimentColor(sentiment) : 'bg-transparent';
                
                return (
                  <div key={index} className="flex flex-col items-center relative h-full">
                    <div className={`absolute w-5 h-5 ${dotColor} rounded-full ${sentiment !== 'none' ? 'ring-2 ring-white' : ''} ${positionClass} z-10 transform transition-all duration-300`}></div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Date labels */}
          <div className="flex justify-between w-full px-2 mt-0">
            {last7Days.map((date, index) => (
              <div key={`date-${index}`} className="text-xs text-gray-500 text-center">
                {new Date(date).getDate()}
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Positive</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Negative</span>
            </div>
          </div>
        </div>
      </div>
    )
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
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm transition-shadow duration-200">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
              <Image
                src="/images/positive-logo.png"
                alt="Positive Check"
                width={120}
                height={32}
                priority
                className="h-full w-auto lg:h-[64px]"
              />
            </Link>
            <nav>
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="text-base font-medium text-gray-600 hover:text-[#1a2642] transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  href="/contact" 
                  className="text-base font-medium text-gray-600 hover:text-[#1a2642] transition-colors duration-200"
                >
                  Contact
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-base font-medium text-gray-600 hover:text-[#1a2642] transition-colors duration-200"
                  aria-label="Log out of your account"
                >
                  Log Out
                </button>
              </div>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 flex-grow">
          <div>
            <h1 className="text-3xl font-bold text-[#1a2642] mb-1">Account</h1>
            <p className="text-gray-600">
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
                    className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-blue-600 shadow-sm' 
                        : 'hover:bg-gray-50 text-gray-700 hover:text-[#1a2642]'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
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
                      <div key={day} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer">
                        <Checkbox
                          id={day}
                          checked={userData.callPreferences.callDays.includes(day)}
                          onCheckedChange={(checked: boolean) => {
                            const newDays = checked
                              ? [...userData.callPreferences.callDays, day]
                              : userData.callPreferences.callDays.filter(d => d !== day)
                            handleInputChange('callPreferences', 'callDays', newDays)
                          }}
                          className="h-5 w-5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 transition-colors"
                        />
                        <Label htmlFor={day} className="text-base cursor-pointer">{day}</Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label>Call Time</Label>
                    <Select
                      value={userData.callPreferences.callTime}
                      onValueChange={(value) => handleInputChange('callPreferences', 'callTime', value)}
                    >
                      <SelectTrigger className="w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent className="max-h-80">
                        {CALL_TIMES.map((time) => (
                          <SelectItem key={time.value} value={time.value} className="cursor-pointer hover:bg-blue-50">
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
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                  <input 
                    type="text" 
                    value={userData.callerInfo.lastName}
                    onChange={(e) => handleInputChange('callerInfo', 'lastName', e.target.value)}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                  <input 
                    type="text" 
                    value={userData.callerInfo.preferredName}
                    onChange={(e) => handleInputChange('callerInfo', 'preferredName', e.target.value)}
                    placeholder="Preferred Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                  <input 
                    type="tel" 
                    value={userData.callerInfo.userphone}
                    onChange={(e) => handleInputChange('callerInfo', 'userphone', e.target.value)}
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                  <select 
                    value={userData.callerInfo.timezone}
                    onChange={(e) => handleInputChange('callerInfo', 'timezone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
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
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                  <input 
                    type="text" 
                    value={userData.accountInfo.lastName}
                    onChange={(e) => handleInputChange('accountInfo', 'lastName', e.target.value)}
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                  <input 
                    type="email" 
                    value={userData.accountInfo.email}
                    onChange={(e) => handleInputChange('accountInfo', 'email', e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  />
                  <input 
                    type="tel" 
                    value={userData.accountInfo.userphone}
                    onChange={(e) => handleInputChange('accountInfo', 'phone', e.target.value)}
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
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
                              {log.call_date/*convertDateToUserTimezone(log.call_date, userData.callerInfo.timezone)*/}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {toCamelCase(log.call_status)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {convertToUserTimezone(log.call_start, userData.callerInfo.timezone)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {log.call_duration} {parseInt(log.call_duration) === 1 ? 'min' : 'mins'}
                            </td>
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
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200 border border-gray-100">
                      <h3 className="text-lg font-semibold text-[#1a2642] mb-4 flex items-center">
                        <span className="mr-2">Contact Rate</span>
                        <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Overall</span>
                      </h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-4xl font-bold text-[#1a2642] mb-1">{calculateCallStatistics(userData.callLog).contactRate}%</p>
                          <p className="text-sm text-gray-600">Successful Contacts</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-full">
                          <PhoneCall className="h-9 w-9 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200 border border-gray-100">
                      <h3 className="text-lg font-semibold text-[#1a2642] mb-4">Contact Summary</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <span className="text-gray-700 font-medium">Made</span>
                          <span className="text-lg font-semibold text-green-600">{calculateCallStatistics(userData.callLog).contactMade}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <span className="text-gray-700 font-medium">Not Made</span>
                          <span className="text-lg font-semibold text-red-600">{calculateCallStatistics(userData.callLog).contactNotMade}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200 border border-gray-100">
                      <h3 className="text-lg font-semibold text-[#1a2642] mb-4">Last Contact</h3>
                      <div className="space-y-2">
                        {userData.callLog[0] ? (
                          <>
                            <p className="text-gray-700 font-medium">
                              {convertDateToUserTimezone(userData.callLog[0].call_date, userData.callerInfo.timezone)}
                            </p>
                            <p className="text-xl font-semibold text-[#1a2642]">
                              {convertToUserTimezone(userData.callLog[0].call_start, userData.callerInfo.timezone)}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                              {userData.callLog[0].call_status === 'Contact Made' ? 
                                <span className="text-green-600 flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Contact Made</span> : 
                                <span className="text-red-600 flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>No Contact</span>}
                            </p>
                          </>
                        ) : (
                          <p className="text-gray-600 text-lg">No calls recorded</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Question Response Sections */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#1a2642]">Response Trends</h3>
                    {isDashboardLoading ? (
                      <div className="text-center py-8 bg-gray-50 rounded-lg">
                        <div className="animate-spin h-6 w-6 border-3 border-[#1a2642] border-t-transparent rounded-full mx-auto mb-2"></div>
                        <p className="text-gray-600 text-sm">Loading sentiment data...</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {userData.questions.filter(q => q.selected).map((question) => {
                          console.log(`Rendering chart for question:`, question)
                          return (
                            <div key={question.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                              <h4 className="text-md font-semibold text-[#1a2642] mb-4">{question.text}</h4>
                              {renderSentimentChart(question.id)}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                  
                  {/* Call Sentiment Section */}
                  {userData.callLog.some(log => log.call_sentiment && log.call_sentiment.trim() !== '') && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-[#1a2642]">Call Sentiment Analysis</h3>
                      {userData.callLog
                        .filter(log => log.call_sentiment && log.call_sentiment.trim() !== '')
                        .slice(0, 3) // Show only the 3 most recent calls with sentiment
                        .map((log, index) => {
                          let parsedData: any = {};
                          try {
                            parsedData = JSON.parse(log.call_sentiment);
                          } catch (e) {
                            // If parsing fails, just display the raw text
                            return (
                              <div key={index} className="p-4 bg-gray-50 rounded-md">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium text-[#1a2642]">
                                    {convertDateToUserTimezone(log.call_date, userData.callerInfo.timezone)}
                                  </span>
                                  <span className="text-sm text-gray-600">
                                    {convertToUserTimezone(log.call_start, userData.callerInfo.timezone)}
                                  </span>
                                </div>
                                <p className="text-gray-700">{log.call_sentiment}</p>
                              </div>
                            );
                          }

                          // Function to display field value or fallback for "not_applicable"
                          const displayValue = (value: any, defaultVal: string = "N/A") => {
                            if (value === undefined || value === null) return defaultVal;
                            if (value === "not_applicable") return "-";
                            return value;
                          };

                          return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200 border border-gray-100">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Left Column - Client Interaction Summary */}
                                <div className="md:col-span-2 space-y-4">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-lg font-bold text-[#1a2642]">Client Interaction Summary</h4>
                                    {parsedData.interaction_quality?.sentiment && (
                                      <div className="flex items-center">
                                        <span className="text-green-500">
                                          {parsedData.interaction_quality.sentiment === "positive" && (
                                            <span className="flex items-center">
                                              <Smile className="h-6 w-6 text-green-500 mr-2" />
                                              Positive
                                            </span>
                                          )}
                                          {parsedData.interaction_quality.sentiment === "negative" && (
                                            <span className="flex items-center">
                                              <Frown className="h-6 w-6 text-red-500 mr-2" />
                                              Negative
                                            </span>
                                          )}
                                          {parsedData.interaction_quality.sentiment === "neutral" && (
                                            <span className="flex items-center">
                                              <Meh className="h-6 w-6 text-yellow-500 mr-2" />
                                              Neutral
                                            </span>
                                          )}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="border rounded-lg p-4">
                                    <p className="text-gray-700">{parsedData.summary || ""}</p>
                                  </div>
                                  
                                  <h4 className="text-lg font-bold text-[#1a2642] mt-6">Engagement Metrics</h4>
                                  <div className="space-y-4">
                                    <div>
                                      <p className="font-medium mb-2">Response Lengths</p>
                                      <div className="space-y-2">
                                        <div>
                                          <div className="flex justify-between mb-1">
                                            <span>Client</span>
                                          </div>
                                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div 
                                              className="bg-blue-500 h-2.5 rounded-full" 
                                              style={{ width: `${Math.min(100, ((parsedData.engagement_metrics?.response_lengths?.client || 0) / 50) * 100)}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                        <div>
                                          <div className="flex justify-between mb-1">
                                            <span>Lola</span>
                                          </div>
                                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div 
                                              className="bg-blue-500 h-2.5 rounded-full" 
                                              style={{ width: `${Math.min(100, ((parsedData.engagement_metrics?.response_lengths?.lola || 0) / 50) * 100)}%` }}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mt-2">
                                        <span className="font-medium">Average</span>{" "}
                                        <span className="text-gray-700">
                                          {(((parsedData.engagement_metrics?.response_lengths?.client || 0) + 
                                            (parsedData.engagement_metrics?.response_lengths?.lola || 0)) / 2).toFixed(1)} sec. average response delay
                                        </span>
                                      </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <p className="font-medium mb-1">Turn-Taking Balance</p>
                                        <p className="text-gray-700">
                                          {displayValue(parsedData.engagement_metrics?.turn_taking_balance)}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="font-medium mb-1">Average to Respond</p>
                                        <p className="text-gray-700">
                                          {displayValue(parsedData.engagement_metrics?.response_consistency, "consistent")}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <h4 className="text-lg font-bold text-[#1a2642] mt-6">Interaction Quality</h4>
                                  <div className="border rounded-md p-4 space-y-3 bg-gray-50">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <p className="font-medium text-sm text-gray-500 mb-1">Emotional Language</p>
                                        <p className="text-gray-700">
                                          {Array.isArray(parsedData.interaction_quality?.emotional_language)
                                            ? parsedData.interaction_quality.emotional_language.join(', ')
                                            : displayValue(parsedData.interaction_quality?.emotional_language)}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm text-gray-500 mb-1">Conversational Richness</p>
                                        <div className="mt-1">
                                          {parsedData.interaction_quality?.conversational_richness === "low" && 
                                            <span className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                                              Low
                                            </span>
                                          }
                                          {parsedData.interaction_quality?.conversational_richness === "medium" && 
                                            <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                                              Medium
                                            </span>
                                          }
                                          {parsedData.interaction_quality?.conversational_richness === "high" && 
                                            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                              High
                                            </span>
                                          }
                                          {!["low", "medium", "high"].includes(parsedData.interaction_quality?.conversational_richness) && 
                                            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                                              {displayValue(parsedData.interaction_quality?.conversational_richness)}
                                            </span>
                                          }
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <h4 className="text-lg font-bold text-[#1a2642] mt-6">Cognitive Health Signals</h4>
                                  <div className="border rounded-md p-4 space-y-3 bg-gray-50">
                                    <div className="grid grid-cols-3 gap-4">
                                      <div>
                                        <p className="font-medium text-sm text-gray-500 mb-1">Memory Recall</p>
                                        <div className="mt-1">
                                          {parsedData.cognitive_health_signals?.memory_recall === "intact" && 
                                            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                              Intact
                                            </span>
                                          }
                                          {parsedData.cognitive_health_signals?.memory_recall === "impaired" && 
                                            <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                                              Impaired
                                            </span>
                                          }
                                          {parsedData.cognitive_health_signals?.memory_recall === "not_observed" && 
                                            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                                              Not Observed
                                            </span>
                                          }
                                          {!["intact", "impaired", "not_observed"].includes(parsedData.cognitive_health_signals?.memory_recall) && 
                                            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                                              {displayValue(parsedData.cognitive_health_signals?.memory_recall)}
                                            </span>
                                          }
                                        </div>
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm text-gray-500 mb-1">Verbal Fluency</p>
                                        <div className="mt-1">
                                          {parsedData.cognitive_health_signals?.verbal_fluency === "fluent" && 
                                            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                              Fluent
                                            </span>
                                          }
                                          {parsedData.cognitive_health_signals?.verbal_fluency === "hesitant" && 
                                            <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                                              Hesitant
                                            </span>
                                          }
                                          {parsedData.cognitive_health_signals?.verbal_fluency === "circumlocutory" && 
                                            <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                                              Circumlocutory
                                            </span>
                                          }
                                          {!["fluent", "hesitant", "circumlocutory"].includes(parsedData.cognitive_health_signals?.verbal_fluency) && 
                                            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                                              {displayValue(parsedData.cognitive_health_signals?.verbal_fluency)}
                                            </span>
                                          }
                                        </div>
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm text-gray-500 mb-1">Language Coherence</p>
                                        <div className="mt-1">
                                          {parsedData.cognitive_health_signals?.language_coherence === "coherent" && 
                                            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                              Coherent
                                            </span>
                                          }
                                          {parsedData.cognitive_health_signals?.language_coherence === "fragmented" && 
                                            <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                                              Fragmented
                                            </span>
                                          }
                                          {parsedData.cognitive_health_signals?.language_coherence === "repetitive" && 
                                            <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">
                                              Repetitive
                                            </span>
                                          }
                                          {!["coherent", "fragmented", "repetitive"].includes(parsedData.cognitive_health_signals?.language_coherence) && 
                                            <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                                              {displayValue(parsedData.cognitive_health_signals?.language_coherence)}
                                            </span>
                                          }
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Right Column - Action Items */}
                                <div className="space-y-4">
                                  <h4 className="text-lg font-bold text-[#1a2642]">Action Items</h4>
                                  <ul className="space-y-2">
                                    {Array.isArray(parsedData.action_items) && parsedData.action_items.length > 0 ? (
                                      parsedData.action_items.map((item: any, i: number) => (
                                        <li key={i} className="flex items-start">
                                          <span className="text-gray-500 mr-2 mt-1">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))
                                    ) : (
                                      <li className="flex items-start">
                                        <span className="text-gray-500 mr-2 mt-1">•</span>
                                        <span>No action needed</span>
                                      </li>
                                    )}
                                  </ul>
                                  
                                  <div className="pt-4 text-xs text-gray-500 mt-auto">
                                    <p>Call Date: {convertDateToUserTimezone(log.call_date, userData.callerInfo.timezone)}</p>
                                    <p>Call Time: {convertToUserTimezone(log.call_start, userData.callerInfo.timezone)}</p>
                                    <p>Duration: {log.call_duration} mins</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
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