import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ResponseTrendCardProps {
  question: string;
  data?: any[];
  className?: string;
}

export default function ResponseTrendCard({
  question,
  data = [],
  className,
}: ResponseTrendCardProps) {
  const hasData = data && data.length > 0;

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        {hasData ? (
          <div>
            {/* Data visualization would go here */}
            <div className="text-center text-sm text-muted-foreground">
              Data visualization
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <HelpCircleIcon className="h-10 w-10 text-muted-foreground/50 mb-2" />
            <p className="text-sm text-muted-foreground mb-4">
              No data available for this question yet
            </p>
            <Button variant="outline" size="sm">
              Add Response
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
