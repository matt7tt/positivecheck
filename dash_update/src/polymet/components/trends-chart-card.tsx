import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChartIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from "recharts";

interface TrendsChartCardProps {
  title: string;
  data: Array<{ date: string; value: number; hours?: number }>;
  dataKey: string;
  valueLabel?: string;
  icon?: React.ReactNode;
  chartType?: "line" | "area";
  color?: "blue" | "green" | "purple" | "teal";
  className?: string;
}

export default function TrendsChartCard({
  title,
  data,
  dataKey,
  valueLabel,
  icon = <LineChartIcon className="h-5 w-5" />,
  chartType = "line",
  color = "blue",
  className,
}: TrendsChartCardProps) {
  const colorMap = {
    blue: {
      icon: "text-blue-500",
      stroke: "hsl(var(--chart-1))",
      fill: "url(#blue-gradient)",
    },
    green: {
      icon: "text-green-500",
      stroke: "hsl(var(--chart-2))",
      fill: "url(#green-gradient)",
    },
    purple: {
      icon: "text-purple-500",
      stroke: "hsl(var(--chart-3))",
      fill: "url(#purple-gradient)",
    },
    teal: {
      icon: "text-teal-500",
      stroke: "hsl(var(--chart-4))",
      fill: "url(#teal-gradient)",
    },
  };

  const selectedColor = colorMap[color];
  const latestValue = data.length > 0 ? data[data.length - 1][dataKey] : 0;
  const previousValue = data.length > 1 ? data[data.length - 2][dataKey] : 0;
  const change = latestValue - previousValue;
  const isPositive = change >= 0;

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <span className={selectedColor.icon}>{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline mb-4">
          <div className="text-2xl font-bold">
            {latestValue}
            {valueLabel && (
              <span className="text-sm font-normal ml-1">{valueLabel}</span>
            )}
          </div>

          {change !== 0 && (
            <div
              className={cn(
                "ml-2 text-xs font-medium",
                isPositive
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              )}
            >
              {isPositive ? "+" : ""}
              {change}
            </div>
          )}
        </div>

        <div className="h-[150px]">
          <ChartContainer config={{}} className="aspect-[none] h-full">
            {chartType === "line" ? (
              <LineChart data={data}>
                <defs>
                  <linearGradient
                    id="blue-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="green-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="purple-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="teal-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-4))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-4))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <ChartTooltip content={<ChartTooltipContent />} />
                <CartesianGrid
                  vertical={false}
                  stroke="hsl(var(--border))"
                  strokeDasharray="5 5"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />

                <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke={selectedColor.stroke}
                  strokeWidth={2}
                  dot={{ r: 3, strokeWidth: 2, fill: "hsl(var(--background))" }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                />
              </LineChart>
            ) : (
              <AreaChart data={data}>
                <defs>
                  <linearGradient
                    id="blue-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="green-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="purple-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="teal-gradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-4))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-4))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <ChartTooltip content={<ChartTooltipContent />} />
                <CartesianGrid
                  vertical={false}
                  stroke="hsl(var(--border))"
                  strokeDasharray="5 5"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />

                <Area
                  type="monotone"
                  dataKey={dataKey}
                  stroke={selectedColor.stroke}
                  fill={selectedColor.fill}
                  strokeWidth={2}
                  dot={{ r: 3, strokeWidth: 2, fill: "hsl(var(--background))" }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                />
              </AreaChart>
            )}
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
