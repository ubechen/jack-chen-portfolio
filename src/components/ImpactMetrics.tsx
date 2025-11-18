import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";

interface Metric {
  label: string;
  before?: number;
  after?: number;
  value?: number;
  unit: string;
  inverse?: boolean;
}

interface ImpactMetricsProps {
  metrics: Metric[];
}

const ImpactMetrics = ({ metrics }: ImpactMetricsProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => {
        const hasComparison = metric.before !== undefined && metric.after !== undefined;
        const change = hasComparison ? metric.after! - metric.before! : metric.value;
        const isPositive = metric.inverse ? change! < 0 : change! > 0;
        
        return (
          <Card 
            key={index} 
            className="hover-lift animate-fade-in border-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  {metric.label}
                </h3>
                {isPositive ? (
                  <TrendingUp className="h-5 w-5 text-primary" />
                ) : (
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              
              {hasComparison ? (
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      {metric.after}{metric.unit}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {metric.before}{metric.unit}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isPositive ? (
                      <ArrowUp className="h-4 w-4 text-primary" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className={`text-sm font-semibold ${isPositive ? 'text-primary' : 'text-muted-foreground'}`}>
                      {Math.abs(change!)} {metric.unit} {isPositive ? 'improvement' : 'change'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {isPositive ? '+' : ''}{metric.value}{metric.unit}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ImpactMetrics;
