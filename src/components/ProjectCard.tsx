import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (project.demoUrl) {
      e.preventDefault();
      navigate(project.demoUrl);
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link to={project.demoUrl || `/project/${project.id}`} onClick={handleClick}>
        {project.imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.demoUrl && (
              <span className="flex items-center gap-2 text-blue-600">
                <ExternalLink size={16} /> Play Now
              </span>
            )}
            {project.githubUrl && (
              <span className="flex items-center gap-2 text-gray-700">
                <Github size={16} /> Code
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}