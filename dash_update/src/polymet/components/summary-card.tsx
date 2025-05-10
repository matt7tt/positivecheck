import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusBadge from "@/polymet/components/status-badge";

interface SummaryCardProps {
  title?: string;
  summary: string;
  sentiment?: "Positive" | "Negative" | "Neutral";
  className?: string;
}

export default function SummaryCard({
  title = "Client Interaction Summary",
  summary,
  sentiment,
  className,
}: SummaryCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <MessageSquareIcon className="h-5 w-5 text-blue-500" />
          {title}
        </CardTitle>
        {sentiment && <StatusBadge status={sentiment} />}
      </CardHeader>
      <CardContent>
        <div className="text-sm leading-relaxed bg-muted/50 p-4 rounded-lg border border-border">
          {summary}
        </div>
      </CardContent>
    </Card>
  );
}
