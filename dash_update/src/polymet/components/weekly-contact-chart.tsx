import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

interface WeeklyContactChartProps {
  data: Array<{
    day: string;
    completed: number;
    missed: number;
  }>;
  className?: string;
}

export default function WeeklyContactChart({
  data,
  className,
}: WeeklyContactChartProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Weekly Contact Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[120px]">
          <ChartContainer config={{}} className="aspect-[none] h-full">
            <BarChart data={data}>
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
      </CardContent>
    </Card>
  );
}
