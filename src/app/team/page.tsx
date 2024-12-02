'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import OurTeam from './components/OurTeam';
import { ScrollTop } from 'primereact/scrolltop';
import { XYSToTop } from '@/common';

interface Props {}

const Team: NextPage<Props> = ({}) => {
    return (
        <main>
            <MenuModel />
            <div className='flex justify-content-center pt-8 flex-column'>
                <h2 className='text-center pb-3 pt-3'>Meet Our Team</h2>
                <OurTeam />
            </div>
            <XYSToTop />
        </main>
    );
};

export default Team;
