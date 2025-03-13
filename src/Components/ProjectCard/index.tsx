import React from 'react';
import './ProjectCard.scss'

export interface ProjectMetadata {
  name: string;
  image: string;
  url: string;
  id: number;
}

const ProjectCard: React.FC<{ metadata: ProjectMetadata }> = ({ metadata }) => {

  return (
    <div className="project-card">
      <a href={metadata.url} target="_blank" rel="noopener noreferrer">
        <img 
          src={metadata.image} 
          alt={metadata.name } 
          className="project-image"
        />
      </a>
    </div>
  );
};

export default ProjectCard;