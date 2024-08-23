'use client'; // This marks the entire file as a Client Component
import { MainLinks } from '@/common/links/MainLinks';
import { MobileMenu } from '@/common/Menu/MobileMenu';
// import { ContactMe } from '@/components/forms/contact/ContactMe';

export default function Contact() {
    return (
        <main>
            <MobileMenu />
            <div className='flex flex-column justify-content-center w-full align-items-center'>
                <h1>Contact XYIAN</h1>
                <MainLinks />
                {/* <ContactMe /> */}
            </div>
        </main>
    );
}
