'use client';
import Image from 'next/image';
import { MenuModel } from '@/common/Menu/MenuModel';
import { MainLinks } from '@/common/links/MainLinks';
import '../common/styles/inputs/buttonHover.scss';
import LoginLink from '@/common/links/LoginLink';
import XYButton from '@/common/Inputs/XYButton';

export default function Home() {
    const backgroundImage = require('../../public/Primary.png');

    return (
        <main>
            <MenuModel />
            <div
                className='flex flex-column p-4 justify-content-center text-center align-items-center gap-3 mainBody'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <Image src={backgroundImage} alt='Image' width='250' />
                <h1 className='text-center'>XYIAN Software</h1>
                <p className='w-11'>
                    Transforming innovative ideas into powerful digital
                    solutions. Serving USA-based companies and small businesses.
                </p>
                <p className='p-2 flex align-items-center justify-content-center'>
                    Existing Customers:&nbsp;
                    <LoginLink />
                </p>
            </div>
            <MainLinks />
            <div className='p-3 flex justify-content-center'>
                <XYButton
                    text
                    xyType='white'
                    //outlined
                    label='Support@XYIAN.com'
                    //tooltip='Contact us now! Click here to email us.'
                    onClick={() =>
                        (window.location.href = 'mailto:support@xyian.com')
                    }
                    //className='p-2 gap-2 bg-white animated-button'
                    icon='fa-solid fa-envelope'
                />
            </div>
        </main>
    );
}
