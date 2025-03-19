import React from 'react';
import './ProjectCard.scss'

export interface ProjectMetadata {
  name: string;
  image: string;
  url: string;
  id: number;
}

interface ProjectCardProps {
  metadata: ProjectMetadata;
  active: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ metadata, active}) => {

  return (
    <div className="card-container">
      <div className={`project-card ${active ? 'active' : 'inactive'}`}>
        <a href={metadata.url} target="_blank" rel="noopener noreferrer">
          <img 
            src={metadata.image} 
            alt={metadata.name} 
            className="project-image"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;