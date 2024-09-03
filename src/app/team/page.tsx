'use client'; // This marks the entire file as a Client Component
import { MemberDetail } from '@/common';
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import { PersonDisplay } from './components/PersonDisplay';
import { TEAM_LIST } from './TEAM_LIST';

interface Props {}

const Team: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-8 flex-column'>
                    <h1 className='text-center'>Meet Our Team</h1>
                    <div className='flex flex-column p-2 justify-content-center align-items-center'>
                        {TEAM_LIST.map((person) => {
                            return (
                                <PersonDisplay
                                    memberDetails={person}
                                    key={person.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default Team;
