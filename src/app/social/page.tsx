'use client'; // This marks the entire file as a Client Component
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { MenuModel } from '@/components/Menu/MenuModel';

export default function Social() {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-6'>
                    <h1>Get In Touch</h1>
                    <div></div>
                </div>
            </main>
        </PrimeReactProvider>
    );
}
