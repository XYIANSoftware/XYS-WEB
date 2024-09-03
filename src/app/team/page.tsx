'use client'; // This marks the entire file as a Client Component
import { MemberDetail } from '@/common';
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import { PersonDisplay } from './components/PersonDisplay';

interface Props {}

const TEAM_INFORMATION: MemberDetail[] = [
    {
        name: 'Kyle Dilbeck',
        id: 1,
        imageSrc: 'filler',
        position: 'Founder & Developer',
        bio: 'example bio',
    },
    {
        name: 'Rogelio Rodriguez',
        id: 2,
        imageSrc: 'filler',
        position: 'Co Founder & Developer',
        bio: 'example bio',
    },
    {
        name: 'Joel Sandoval',
        id: 3,
        imageSrc: 'filler',
        position: 'Sales & Marketing',
        bio: 'example bio',
    },
];

const Team: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-6 flex-column'>
                    <h1>Meet Our Team</h1>
                    <div className='flex flex-column p-2 justify-content-center align-items-center'>
                        {TEAM_INFORMATION.map((person) => {
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
