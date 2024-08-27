'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';

interface Props {}

const WebApps: NextPage<Props> = ({}) => {
    return (
        <main>
            <MenuModel />
            <div className='flex justify-content-center pt-6'>
                <h1>Public Web Apps</h1>
                <div></div>
            </div>
        </main>
    );
};

export default WebApps;
