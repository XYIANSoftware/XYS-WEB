import { ProjectModel } from '@/types';
import Image from 'next/image';
interface ProjectDisplayProps {
    projects: ProjectModel[];
}

export const ProjectDisplay = ({ projects }: ProjectDisplayProps) => {
    //TODO eventually add skeleton and lazy loading to images
    //TODO add tooltip for each item
    //TODO add short title for each item (mostly for mobile)
    return (
        <div className='gallery'>
            {projects.map((proj, index) => (
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
                        {/* <h1
                        className='title-element absolute bottom-0 right-0 left-0 text-center'
                        style={{
                            transform: 'translateY(3.3rem)',
                        }}
                        >
                        {proj.title || `Project ${index + 1}`}
                    </h1> */}
                    </a>
                </span>
            ))}
        </div>
    );
};
