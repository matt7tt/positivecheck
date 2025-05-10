import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export default function MetricCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  children,
  footer,
}: MetricCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div className="flex items-baseline gap-2">
            <div className="text-2xl font-bold">{value}</div>
            {trend && (
              <div
                className={cn(
                  "text-xs font-medium",
                  trend.isPositive
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                )}
              >
                {trend.isPositive ? "+" : "-"}
                {trend.value}%
              </div>
            )}
          </div>
          {description && (
            <CardDescription className="mt-1 text-xs">
              {description}
            </CardDescription>
          )}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      {children && <CardContent className="p-0">{children}</CardContent>}
      {footer && (
        <div className="bg-muted/50 px-6 py-3 text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </Card>
  );
}
