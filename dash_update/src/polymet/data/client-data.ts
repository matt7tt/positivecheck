export const CLIENT_DATA = {
  clientName: "Frankie Miller",
  callDetails: {
    date: "Apr 3, 2025",
    time: "12:06 PM [PST]",
    duration: "1 mins",
    status: "Completed",
  },
  sentiment: "Positive",
  summary:
    "Frankie reports feeling better after experiencing gastrointestinal issues last week. He has been resting and consuming yogurt to improve his digestion. He also reports having eight hours of restful sleep last night.",
  actionItems: [
    "Monitor Frankie's GI symptoms for any recurrence or worsening.",
    "Encourage continued probiotic intake and adequate rest.",
    "Follow-up on sleep quality and overall wellbeing.",
  ],

  engagementMetrics: {
    responseLengths: {
      client: 68,
      caregiver: 32,
    },
  },
  interactionQuality: {
    emotionalLanguage: "I am feeling better, I felt rested",
    conversationalRichness: "Medium",
  },
  cognitiveHealthSignals: {
    memoryRecall: {
      status: "Intact",
      level: "Good",
    },
    verbalFluency: {
      status: "Hesitant",
      level: "Medium",
    },
    languageCoherence: {
      status: "Coherent",
      level: "Good",
    },
  },
  contactRate: {
    percentage: 19.0,
    successful: 4,
    notMade: 17,
  },
  responseTrends: [
    {
      question: "Did you take a nap?",
      data: [],
    },
    {
      question: "Have you eaten?",
      data: [],
    },
    {
      question: "Have you showered or bathed?",
      data: [],
    },
  ],

  historicalData: {
    sleepQuality: [
      { date: "Mar 28", hours: 5.5 },
      { date: "Mar 29", hours: 6.0 },
      { date: "Mar 30", hours: 6.5 },
      { date: "Mar 31", hours: 7.0 },
      { date: "Apr 1", hours: 7.5 },
      { date: "Apr 2", hours: 7.0 },
      { date: "Apr 3", hours: 8.0 },
    ],

    moodTrend: [
      { date: "Mar 28", value: 3 },
      { date: "Mar 29", value: 3 },
      { date: "Mar 30", value: 4 },
      { date: "Mar 31", value: 4 },
      { date: "Apr 1", value: 5 },
      { date: "Apr 2", value: 6 },
      { date: "Apr 3", value: 7 },
    ],

    weeklyContacts: [
      { day: "Mon", completed: 1, missed: 2 },
      { day: "Tue", completed: 0, missed: 3 },
      { day: "Wed", completed: 1, missed: 2 },
      { day: "Thu", completed: 0, missed: 3 },
      { day: "Fri", completed: 1, missed: 2 },
      { day: "Sat", completed: 0, missed: 3 },
      { day: "Sun", completed: 1, missed: 2 },
    ],
  },
};
