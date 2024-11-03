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
                    <h2 className='text-center pb-2'>About XYIAN</h2>
                    <AboutUs type={'primary'} />{' '}
                    <h2 className='text-center pb-3 pt-5'>Meet Our Team</h2>
                    <OurTeam />
                    <AboutUs type={'secondary'} />
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default Team;
