import { ProjectModel } from '@/common';
import React from 'react';

import { Accordion, AccordionTab } from 'primereact/accordion';

interface ProjectListProps {
    projects: ProjectModel[];
}
interface AccordionHeaderProps {
    title: string;
    iconUrl?: string;
}
const ProjectList = ({ projects }: ProjectListProps) => {
    //TODO create clean header
    //TODO design tab layout + add thumbnail
    const AccordionHeader = ({ title, iconUrl }: AccordionHeaderProps) => {
        return (
            <div className='flex align-items-center justify-content-center'>
                <h5>{title}</h5>
            </div>
        );
    };
    return (
        <Accordion>
            {projects.map((project) => {
                return (
                    <AccordionTab
                        key={project.id}
                        header={<AccordionHeader title={project.title} />}
                    >
                        <p>{project.description}</p>
                        <a href={project.url}>Click Here to View</a>
                    </AccordionTab>
                );
            })}
        </Accordion>
    );
};

export default ProjectList;
