import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  roleInfo?: string;
  tags: string[];
  projectId: string;
}

const ProjectCard = ({ title, subtitle, description, roleInfo, tags, projectId }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="hover-lift cursor-pointer group overflow-hidden border-border h-full"
      onClick={() => navigate(`/project/${projectId}`)}
    >
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {subtitle && (
              <p className="text-lg font-medium text-muted-foreground mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
        </div>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        {/* Role Info */}
        {roleInfo && (
          <div className="mb-4 pt-4">
            <div className="w-12 h-px bg-border mb-3" />
            <p className="text-sm text-muted-foreground/70">
              {roleInfo}
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
