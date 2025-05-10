import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import ProgressBarWithLabel from "@/polymet/components/progress-bar-with-label";

interface EngagementMetricsCardProps {
  title?: string;
  clientResponseLength: number;
  caregiverResponseLength: number;
  maxLength?: number;
  className?: string;
}

export default function EngagementMetricsCard({
  title = "Engagement Metrics",
  clientResponseLength,
  caregiverResponseLength,
  maxLength = 100,
  className,
}: EngagementMetricsCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <BarChart2Icon className="h-5 w-5 text-indigo-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-sm font-medium">Response Lengths</h3>
          <div className="text-xs text-muted-foreground mb-3">
            Average number of words per response
          </div>
        </div>

        <div className="space-y-4">
          <ProgressBarWithLabel
            value={clientResponseLength}
            maxValue={maxLength}
            label="Client"
            color="blue"
          />

          <ProgressBarWithLabel
            value={caregiverResponseLength}
            maxValue={maxLength}
            label="Caregiver"
            color="green"
          />
        </div>
      </CardContent>
    </Card>
  );
}
