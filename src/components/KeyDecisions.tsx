import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface Decision {
  title: string;
  situation: string;
  options: string[];
  decision: string;
  result: string;
}

interface KeyDecisionsProps {
  decisions: Decision[];
}

const KeyDecisions = ({ decisions }: KeyDecisionsProps) => {
  return (
    <div className="space-y-8">
      {decisions.map((decision, index) => (
        <Card 
          key={index} 
          className="border-border animate-fade-in"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {decision.title}
              </h3>
            </div>

            <div className="space-y-6 ml-12">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">情境</h4>
                <p className="text-foreground">{decision.situation}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">選項</h4>
                <ul className="space-y-2">
                  {decision.options.map((option, optIndex) => (
                    <li key={optIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-l-primary">
                <h4 className="text-sm font-semibold text-primary mb-2">決策</h4>
                <p className="text-foreground">{decision.decision}</p>
              </div>

              <div className="flex items-start gap-3 bg-secondary/50 p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">結果</h4>
                  <p className="text-muted-foreground">{decision.result}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KeyDecisions;
