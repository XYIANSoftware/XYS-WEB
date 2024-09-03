import { ProjectModel } from '@/common';
import { useEffect, useState, ReactNode, CSSProperties } from 'react';

interface ProjectDisplayProps {
    project: ProjectModel[] ;
}

export const ProjectDisplay = ({ project }: ProjectDisplayProps) => {
    //TODO use list to map projects
    // const { description, id, imgSrc, title, url } = project;

    return (
        <div className="gallery">
            {project.map((proj, index) => (
                <span key={index} style={{ "--i": index + 1 } as React.CSSProperties}>
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                    <img src={proj.imgSrc} alt={`Gallery image ${index + 1}`} />
                </a>
                </span>
            ))}
        </div>
    );
};
