import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status:
    | "Positive"
    | "Negative"
    | "Neutral"
    | "Intact"
    | "Hesitant"
    | "Coherent"
    | "Medium"
    | string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
}

export default function StatusBadge({
  status,
  size = "md",
  variant = "filled",
}: StatusBadgeProps) {
  // Define status colors
  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();

    if (
      statusLower === "positive" ||
      statusLower === "intact" ||
      statusLower === "coherent" ||
      statusLower === "good"
    ) {
      return {
        bg: "bg-green-100 dark:bg-green-900/30",
        text: "text-green-700 dark:text-green-400",
        border: "border-green-200 dark:border-green-800",
        icon: "bg-green-500",
      };
    } else if (statusLower === "negative" || statusLower === "poor") {
      return {
        bg: "bg-red-100 dark:bg-red-900/30",
        text: "text-red-700 dark:text-red-400",
        border: "border-red-200 dark:border-red-800",
        icon: "bg-red-500",
      };
    } else if (statusLower === "medium" || statusLower === "hesitant") {
      return {
        bg: "bg-yellow-100 dark:bg-yellow-900/30",
        text: "text-yellow-700 dark:text-yellow-400",
        border: "border-yellow-200 dark:border-yellow-800",
        icon: "bg-yellow-500",
      };
    } else {
      return {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-700 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        icon: "bg-blue-500",
      };
    }
  };

  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  };

  const colors = getStatusColor(status);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full",
        variant === "filled" ? colors.bg : "bg-transparent",
        variant === "outline" ? `border ${colors.border}` : "",
        colors.text,
        sizeClasses[size]
      )}
    >
      <span className={cn("w-2 h-2 rounded-full", colors.icon)}></span>
      {status}
    </div>
  );
}
