'use client';
import { ProjectDisplay } from './components/ProjectDisplay';
import { MenuModel } from '@/common/Menu/MenuModel';
import { PROJECT_LIST } from './constants/projectList';

export default function ProjectGallery() {
    return (
        <main>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-screen h-screen'>
                <h1 className='mb-6'>Project Gallery</h1>
                <div>
                    <ProjectDisplay project={PROJECT_LIST} />
                </div>
            </div>
        </main>
    );
}
