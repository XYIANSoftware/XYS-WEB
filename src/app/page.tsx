import Image from 'next/image';
import styles from './page.module.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import { Panel } from 'primereact/panel';
import { MenuModel } from '@/common/Menu/MenuModel';
// import { Image } from 'primereact/image';

export default function Home() {
    const backgroundImage = require('../../public/Primary.png');
    return (
        <PrimeReactProvider>
            <main>
                {/* <MenuModel /> */}

                <div
                    className='flex flex-column p-6 justify-content-center text-center align-items-center gap-3'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                    }}
                >
                    <Image src={backgroundImage} alt='Image' width='250' />

                    <h1 className='text-center'>Xyian Software</h1>
                    <p>
                        Site is under new construction<br></br> Please come back
                        later.
                    </p>
                </div>
            </main>
        </PrimeReactProvider>
    );
}
