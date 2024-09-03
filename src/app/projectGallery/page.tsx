'use client'; // This marks the entire file as a Client Component
import { MainLinks } from '@/common/links/MainLinks';
import { MobileMenu } from '@/common/Menu/MobileMenu';

export default function ProjectGallery() {
    return (
        <main>
            <MobileMenu />
            <div className='flex flex-column justify-content-center w-full align-items-center'>
                <h1>Project Gallery</h1>
            </div>
        </main>
    );
}
