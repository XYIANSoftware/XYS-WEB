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
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
    {
        id: 2,
        title: 'XYIAN Software2',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
    {
        id: 3,
        title: 'XYIAN Software3',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
    {
        id: 4,
        title: 'XYIAN Software',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
    {
        id: 5,
        title: 'XYIAN Software2',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
    {
        id: 6,
        title: 'XYIAN Software3',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
    {
        id: 7,
        title: 'XYIAN Software2',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
    {
        id: 8,
        title: 'XYIAN Software3',
        description:
            'This is an example of a basic description that should be about this long with minimal details. ',
        imgSrc: "/images/XYIAN_BANNER.png", //use one from logo?
        url: 'https://xyian.com/',
    },
];
export default function ProjectGallery() {
    return (
        <main>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-screen h-screen'>
                <h1 className='mb-6'>Project Gallery</h1>
                <div>
                    <ProjectDisplay
                        project={PROJECT_LIST}
                    />
                </div>
            </div>
        </main>
    );
}
