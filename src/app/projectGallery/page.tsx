'use client'; // This marks the entire file as a Client Component
import { ProjectModel } from '@/common';
// import { MainLinks } from '@/common/links/MainLinks';
// import { MobileMenu } from '@/common/Menu/MobileMenu';
import { ProjectDisplay } from './components/ProjectDisplay';
import { MenuModel } from '@/common/Menu/MenuModel';

const PROJECT_LIST: ProjectModel[] = [
    {
        id: 1,
        title: 'XYIAN Software',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: undefined, //use one from logo?
        url: 'xyian.com',
    },
    {
        id: 2,
        title: 'XYIAN Software2',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: undefined, //use one from logo?
        url: 'xyian.com',
    },
    {
        id: 3,
        title: 'XYIAN Software3',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: undefined, //use one from logo?
        url: 'xyian.com',
    },
];
export default function ProjectGallery() {
    return (
        <main>
            <MenuModel />

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
