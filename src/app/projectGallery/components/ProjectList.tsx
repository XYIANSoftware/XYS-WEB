import { ProjectModel } from '@/common';
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Image from 'next/image';
import '../../../common/styles/accordionOverride.scss';
interface ProjectListProps {
    projects: ProjectModel[];
}

interface AccordionHeaderProps {
    title: string;
    iconUrl: string;
}

const AccordionHeader = ({ title, iconUrl }: AccordionHeaderProps) => {
    return (
        <div className='flex align-items-center gap-3 p-2'>
            {iconUrl && (
                <Image
                    src={iconUrl}
                    alt={title}
                    width={48}
                    height={48}
                    className='border-circle'
                />
            )}
            <h5 className='m-0'>{title}</h5>
        </div>
    );
};

const ProjectList = ({ projects }: ProjectListProps) => {
    const fillerImage = require('../../../../public/Primary.png');

    return (
        <div className='flex justify-content-center'>
            <div style={{ width: '80%' }}>
                <Accordion
                    className='shadow-2 border-round'
                    multiple
                    //transitionOptions={{ easing: 'ease', duration: 300 }}
                >
                    {projects.map((project) => {
                        const imageSource = project?.imgSrc
                            ? project.imgSrc
                            : fillerImage;
                        return (
                            <AccordionTab
                                key={project.id}
                                className=''
                                header={
                                    <AccordionHeader
                                        title={project.title}
                                        iconUrl={imageSource}
                                    />
                                }
                            >
                                <div className='p-3'>
                                    <div className='flex flex-column md:flex-row align-items-start gap-4'>
                                        <Image
                                            src={imageSource}
                                            alt={project.title}
                                            width={50}
                                            height={50}
                                            className='border-round shadow-1'
                                        />
                                        <div>
                                            <h6 className='mb-2'>
                                                {project.title}
                                            </h6>
                                            <p className='text-justify'>
                                                {project.description}
                                            </p>
                                            <a
                                                href={project.url}
                                                className='text-primary font-medium'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTab>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
};

export default ProjectList;
