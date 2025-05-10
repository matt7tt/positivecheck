import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusBadge from "@/polymet/components/status-badge";

interface InteractionQualityCardProps {
  title?: string;
  emotionalLanguage: string;
  conversationalRichness: string;
  className?: string;
}

export default function InteractionQualityCard({
  title = "Interaction Quality",
  emotionalLanguage,
  conversationalRichness,
  className,
}: InteractionQualityCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg font-medium gap-2">
          <MessageCircleIcon className="h-5 w-5 text-teal-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Emotional Language
            </h3>
            <div className="bg-muted/50 p-3 rounded-lg border border-border text-sm">
              "{emotionalLanguage}"
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Conversational Richness
            </h3>
            <div className="flex items-center justify-center h-16 bg-muted/50 rounded-lg border border-border">
              <StatusBadge status={conversationalRichness} size="lg" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
