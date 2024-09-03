'use client'; // This marks the entire file as a Client Component
import { ProjectModel } from '@/common';
import { MainLinks } from '@/common/links/MainLinks';
import { MobileMenu } from '@/common/Menu/MobileMenu';
import { ProjectDisplay } from './components/ProjectDisplay';

const PROJECT_LIST: ProjectModel[] = [
    {
        id: 1,
        title: 'Project 1 Example',
        description: 'filler desc',
        imgSrc: undefined,
        url: 'example.com',
    },
];
export default function ProjectGallery() {
    return (
        <main>
            <MobileMenu />
            <div className='flex flex-column justify-content-center w-full align-items-center'>
                <h1>Project Gallery</h1>
                <div>
                    {PROJECT_LIST.map((project) => {
                        return (
                            <ProjectDisplay
                                project={project}
                                key={project.id}
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
