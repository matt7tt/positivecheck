import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, PhoneCallIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CallDetailsCardProps {
  title?: string;
  date: string;
  time: string;
  duration: string;
  status?: "Completed" | "Missed" | "Scheduled";
  className?: string;
}

export default function CallDetailsCard({
  title = "Last Contact",
  date,
  time,
  duration,
  status = "Completed",
  className,
}: CallDetailsCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-green-600 dark:text-green-400";
      case "missed":
        return "text-red-600 dark:text-red-400";
      case "scheduled":
        return "text-blue-600 dark:text-blue-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <PhoneCallIcon className="h-5 w-5 text-blue-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <CalendarIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Date</div>
              <div className="font-medium">{date}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Time</div>
              <div className="font-medium">{time}</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="text-sm text-muted-foreground">Duration</div>
            <div className="font-medium">{duration}</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Status</div>
            <div className={cn("font-medium", getStatusColor(status))}>
              {status}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
