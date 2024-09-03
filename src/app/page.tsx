'use client';
import Image from 'next/image';
import { MenuModel } from '@/common/Menu/MenuModel';
import { Button } from 'primereact/button';
import { MainLinks } from '@/common/links/MainLinks';
import '../common/styles/buttonHover.scss';

export default function Home() {
    const backgroundImage = require('../../public/Primary.png');
    return (
        <main>
            {/* <div className='flex flex-column p-6 justify-content-center text-center align-items-center header'>
                        temp remove header for production
                </div> */}
            <MenuModel />

            <div
                className='flex flex-column p-4 justify-content-center text-center align-items-center gap-3 mainBody'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                }}
            >
                <Image src={backgroundImage} alt='Image' width='250' />

                <h1 className='text-center'>XYIAN</h1>
                <p>
                    Transforming innovative ideas into powerful digital
                    solutions. Serving USA-based companies and small businesses.
                    Limited availability.
                </p>
                <p>Full site launching soon. Follow us for updates!</p>
            </div>
            <MainLinks />
            <div className='p-3 flex justify-content-center'>
                <Button
                    label='Contact Email'
                    onClick={() =>
                        (window.location.href = 'mailto:support@xyian.com')
                    }
                    className='p-2 gap-2 bg-white animated-button'
                    icon='fa-solid fa-envelope'
                />
            </div>
        </main>
    );
}
