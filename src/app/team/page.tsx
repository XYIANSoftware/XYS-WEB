'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';

import OurTeam from './components/OurTeam';
import AboutUs from './components/AboutUs';

interface Props {}

const Team: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-8 flex-column'>
                    <h1 className='text-center'>Meet Our Team</h1>
                    <AboutUs />
                    <OurTeam />
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default Team;
