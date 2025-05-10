import { CLIENT_DATA } from "@/polymet/data/client-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  DownloadIcon,
  PhoneIcon,
  PlusIcon,
  UserIcon,
} from "lucide-react";

import ActionItemsCard from "@/polymet/components/action-items-card";
import CallDetailsCard from "@/polymet/components/call-details-card";
import CognitiveHealthIndicators from "@/polymet/components/cognitive-health-indicators";
import ContactRateCard from "@/polymet/components/contact-rate-card";
import EngagementMetricsCard from "@/polymet/components/engagement-metrics-card";
import InteractionQualityCard from "@/polymet/components/interaction-quality-card";
import ResponseTrendCard from "@/polymet/components/response-trend-card";
import SummaryCard from "@/polymet/components/summary-card";

export default function ClientDashboard() {
  const {
    clientName,
    callDetails,
    sentiment,
    summary,
    actionItems,
    engagementMetrics,
    interactionQuality,
    cognitiveHealthSignals,
    contactRate,
    responseTrends,
  } = CLIENT_DATA;

  const cognitiveIndicators = [
    {
      name: "Memory Recall",
      status: cognitiveHealthSignals.memoryRecall.status,
      level: cognitiveHealthSignals.memoryRecall.level,
    },
    {
      name: "Verbal Fluency",
      status: cognitiveHealthSignals.verbalFluency.status,
      level: cognitiveHealthSignals.verbalFluency.level,
    },
    {
      name: "Language Coherence",
      status: cognitiveHealthSignals.languageCoherence.status,
      level: cognitiveHealthSignals.languageCoherence.level,
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <header className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Client Dashboard
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <UserIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{clientName}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-1">
              <CalendarIcon className="h-4 w-4" />
              Schedule Call
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <DownloadIcon className="h-4 w-4" />
              Export
            </Button>
            <Button size="sm" className="gap-1">
              <PlusIcon className="h-4 w-4" />
              New Note
            </Button>
          </div>
        </div>

        {/* Main content - directly showing what was previously in the Overview tab */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactRateCard
              percentage={contactRate.percentage}
              successful={contactRate.successful}
              notMade={contactRate.notMade}
            />

            <CallDetailsCard
              date={callDetails.date}
              time={callDetails.time}
              duration={callDetails.duration}
              status="Completed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SummaryCard summary={summary} sentiment={sentiment} />

            <ActionItemsCard items={actionItems} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EngagementMetricsCard
              clientResponseLength={engagementMetrics.responseLengths.client}
              caregiverResponseLength={
                engagementMetrics.responseLengths.caregiver
              }
            />

            <InteractionQualityCard
              emotionalLanguage={interactionQuality.emotionalLanguage}
              conversationalRichness={interactionQuality.conversationalRichness}
            />
          </div>

          <div>
            <CognitiveHealthIndicators indicators={cognitiveIndicators} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Response Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {responseTrends.map((trend, index) => (
                <ResponseTrendCard
                  key={index}
                  question={trend.question}
                  data={trend.data}
                />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
