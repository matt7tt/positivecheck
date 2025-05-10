import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusBadge from "@/polymet/components/status-badge";

interface CognitiveIndicator {
  name: string;
  status: string;
  level?: string;
}

interface CognitiveHealthIndicatorsProps {
  title?: string;
  indicators: CognitiveIndicator[];
  className?: string;
}

export default function CognitiveHealthIndicators({
  title = "Cognitive Health Signals",
  indicators,
  className,
}: CognitiveHealthIndicatorsProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <BrainIcon className="h-5 w-5 text-purple-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="bg-muted/50 p-4 rounded-lg border border-border flex flex-col items-center text-center"
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {indicator.name}
              </h3>
              <StatusBadge status={indicator.status} />
              {indicator.level && (
                <span className="text-xs text-muted-foreground mt-2">
                  Level: {indicator.level}
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
