import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ContactRateCardProps {
  percentage: number;
  successful: number;
  notMade: number;
  className?: string;
}

export default function ContactRateCard({
  percentage,
  successful,
  notMade,
  className,
}: ContactRateCardProps) {
  const total = successful + notMade;

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <PhoneIcon className="h-5 w-5 text-blue-500" />
          Contact Rate
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div>
            <div className="text-3xl font-bold">{percentage}%</div>
            <p className="text-sm text-muted-foreground">Successful Contacts</p>
          </div>

          <div className="space-y-2">
            <Progress value={percentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-muted/50 p-3 rounded-lg border border-border flex flex-col items-center">
              <span className="text-xs text-muted-foreground mb-1">Made</span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {successful}
              </span>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg border border-border flex flex-col items-center">
              <span className="text-xs text-muted-foreground mb-1">
                Not Made
              </span>
              <span className="text-xl font-bold text-red-600 dark:text-red-400">
                {notMade}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm pt-2">
            <span className="text-muted-foreground">Total Attempts</span>
            <span className="font-medium">{total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
