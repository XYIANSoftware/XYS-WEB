import { ProjectModel } from '@/common';
import { useEffect, useState, ReactNode } from 'react';

interface ProjectDisplayProps {
    project: ProjectModel;
}

export const ProjectDisplay = ({ project }: ProjectDisplayProps) => {
    //TODO use list to map projects
    const { description, id, imgSrc, title, url } = project;

    return <div> Starter code for ProjectDisplay</div>;
};
