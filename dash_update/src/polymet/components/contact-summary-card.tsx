import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

interface ContactSummaryCardProps {
  title?: string;
  successful: number;
  notMade: number;
  weeklyData?: Array<{
    day: string;
    completed: number;
    missed: number;
  }>;
  className?: string;
}

export default function ContactSummaryCard({
  title = "Contact Summary",
  successful,
  notMade,
  weeklyData,
  className,
}: ContactSummaryCardProps) {
  const total = successful + notMade;
  const successRate = total > 0 ? Math.round((successful / total) * 100) : 0;

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <PhoneIcon className="h-5 w-5 text-blue-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/50 p-4 rounded-lg border border-border flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-1">Made</span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              {successful}
            </span>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg border border-border flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-1">Not Made</span>
            <span className="text-2xl font-bold text-red-600 dark:text-red-400">
              {notMade}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Success Rate</span>
            <span className="text-sm font-medium">{successRate}%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${successRate}%` }}
            ></div>
          </div>
        </div>

        {weeklyData && weeklyData.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-3">Weekly Contact Trend</h3>
            <div className="h-[120px]">
              <ChartContainer config={{}} className="aspect-[none] h-full">
                <BarChart data={weeklyData}>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />

                  <Bar
                    dataKey="completed"
                    name="Completed"
                    stackId="a"
                    fill="hsl(var(--chart-1))"
                    radius={[4, 4, 0, 0]}
                  />

                  <Bar
                    dataKey="missed"
                    name="Missed"
                    stackId="a"
                    fill="hsl(var(--chart-2))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
