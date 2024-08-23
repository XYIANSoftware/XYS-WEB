'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';

interface Props {}

const MobileApps: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-6'>
                    <h1>Mobile Applications</h1>
                    <div></div>
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default MobileApps;
