'use client';
import Image from 'next/image';
import { MenuModel } from '@/common/Menu/MenuModel';
import { MainLinks } from '@/common/links/MainLinks';
import '../common/styles/inputs/buttonHover.scss';
import LoginLink from '@/common/links/LoginLink';

const BOTTOM_PADDING = ` pb-4`;
export default function Home() {
    const backgroundImage = require('../../public/Primary.png');

    return (
        <main>
            <MenuModel />
            <div
                className='flex flex-column pt-6 justify-content-center text-center align-items-center gap-3 mainBody m-0'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    padding: '0rem 2rem',
                }}
            >
                <Image
                    src={backgroundImage}
                    alt='Image'
                    width='250'
                    className={` ${BOTTOM_PADDING}`}
                />
                <h1 className={`text-center m-0 ${BOTTOM_PADDING}`}>
                    XYIAN Software
                </h1>
                {/* <p className={`m-0 p-0 w-full ${BOTTOM_PADDING}`}>
                    Transforming innovative ideas into powerful digital
                    solutions. Serving USA-based companies and small businesses.
                </p> */}
            </div>
            <MainLinks />
            {/* <div className='flex justify-content-center m-0'>
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
            </div> */}
            <p className=' flex align-items-center justify-content-center m-0 pb-1'>
                Existing Customers:&nbsp;
                <LoginLink />
            </p>
        </main>
    );
}
