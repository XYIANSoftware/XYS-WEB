'use client';

import React from 'react';
import Image from 'next/image';
import XYButton from '@/common/Inputs/XYButton';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();
    const returnToHome = () => {
        router.push('/');
    };

    return (
        <div className='pt-4 flex flex-col w-full h-full justify-center items-center gap-2'>
            <Image src='/Primary.png' alt='Image' width={250} height={250} />
            <h2>Uh-Oh! 404 Page Not Found.</h2>
            <XYButton xyType='transparentWhite' text onClick={returnToHome} />
        </div>
    );
};

export default NotFound;
