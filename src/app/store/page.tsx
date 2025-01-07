'use client';
import { NextPage } from 'next';

interface Props {}

const Store: NextPage<Props> = ({}) => {
    return (
        <div className='flex flex-column h-full w-full justify-content-center align-items-center p-1'>
            <h1 className='p-2 text-center pt-6'>XYS Store</h1>
            <p className='text-center p-3'>
                XYS Store is currently under an inventory change and restock as
                we prepare our new 2025 line. Please come back after 1/12/25, we
                appriciate your patience and understanding.{' '}
            </p>
        </div>
    );
};

export default Store;
