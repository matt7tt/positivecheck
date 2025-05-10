import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, ClipboardListIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionItemsCardProps {
  title?: string;
  items: string[];
  className?: string;
}

export default function ActionItemsCard({
  title = "Action Items",
  items,
  className,
}: ActionItemsCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <ClipboardListIcon className="h-5 w-5 text-blue-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <CheckIcon className="h-3 w-3 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
