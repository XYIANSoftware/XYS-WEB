'use client';

import { NextPage } from 'next';
interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <main className='w-full h-full'>
            <div className='h-full w-full justify-content-center align-items-center'>
                <h1 className='p-2'>XYS Store</h1>
            </div>
        </main>
    );
};

export default Page;
