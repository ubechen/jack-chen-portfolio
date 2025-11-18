import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  projectId: string;
}

const ProjectCard = ({ title, description, tags, projectId }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="hover-lift cursor-pointer group overflow-hidden border-border"
      onClick={() => navigate(`/project/${projectId}`)}
    >
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
