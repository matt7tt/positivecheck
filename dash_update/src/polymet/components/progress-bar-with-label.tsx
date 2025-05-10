import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarWithLabelProps {
  value: number;
  maxValue?: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "default" | "blue" | "green" | "yellow" | "red";
  className?: string;
}

export default function ProgressBarWithLabel({
  value,
  maxValue = 100,
  label,
  showPercentage = true,
  size = "md",
  color = "default",
  className,
}: ProgressBarWithLabelProps) {
  const percentage = Math.round((value / maxValue) * 100);

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const colorClasses = {
    default: "",
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    red: "text-red-600 dark:text-red-400",
  };

  const progressColorClasses = {
    default: "",
    blue: "[&>div]:bg-blue-500 dark:[&>div]:bg-blue-500",
    green: "[&>div]:bg-green-500 dark:[&>div]:bg-green-500",
    yellow: "[&>div]:bg-yellow-500 dark:[&>div]:bg-yellow-500",
    red: "[&>div]:bg-red-500 dark:[&>div]:bg-red-500",
  };

  return (
    <div className={cn("space-y-1.5", className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-sm font-medium">{label}</span>}
          {showPercentage && (
            <span className={cn("text-sm font-medium", colorClasses[color])}>
              {percentage}%
            </span>
          )}
        </div>
      )}
      <Progress
        value={percentage}
        className={cn(
          "w-full rounded-full",
          sizeClasses[size],
          progressColorClasses[color]
        )}
      />
    </div>
  );
}
