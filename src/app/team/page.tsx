'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import OurTeam from './components/OurTeam';
import { ScrollTop } from 'primereact/scrolltop';

interface Props {}

const Team: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-8 flex-column'>
                    <h2 className='text-center pb-3 pt-3'>Meet Our Team</h2>
                    <OurTeam />
                    <h2 className='text-center pb-2 pt-5'>About XYIAN</h2>

                    <ScrollTop
                        className=''
                        pt={{
                            root: {
                                style: {
                                    backgroundColor: 'rgba(240, 240, 240,.5)',
                                },
                            },
                        }}
                    />
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default Team;
