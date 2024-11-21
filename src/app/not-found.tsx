'use client';
import React from 'react';
import Image from 'next/image';

const NotFound = () => {
    const backgroundImage = require('../../public/Primary.png');

    return (
        <div className='w-full h-full justify-content-center align-items-center'>
            <Image src={backgroundImage} alt='Image' width='250' />
            <h2>Uh-Oh! 404 Page Not Found.</h2>
            <p></p>
        </div>
    );
};

export default NotFound;
