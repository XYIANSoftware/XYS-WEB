import { ProjectModel } from '@/common';
import Image from 'next/image';
interface ProjectDisplayProps {
    project: ProjectModel[];
}

export const ProjectDisplay = ({ project }: ProjectDisplayProps) => {
    return (
        <div className='gallery'>
            {project.map((proj, index) => (
                <span
                    key={index}
                    style={{ '--i': index + 1 } as React.CSSProperties}
                >
                    <a
                        href={proj.url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src={proj.imgSrc ? proj.imgSrc : ''}
                            alt={`Gallery image ${index + 1}`}
                            width={500}
                            height={500}
                        />
                    </a>
                </span>
            ))}
        </div>
    );
};
