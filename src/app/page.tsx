'use client'; // This marks the entire file as a Client Component
import Image from 'next/image';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { MenuModel } from '@/common/Menu/MenuModel';
import { Button } from 'primereact/button';
import { MainLinks } from '@/common/links/MainLinks';
import '../common/styles/buttonHover.scss';
// import { Panel } from 'primereact/panel';
// import { MenuModel } from '@/common/Menu/MenuModel';
// import { Image } from 'primereact/image';

export default function Home() {
    const backgroundImage = require('../../public/Primary.png');
    return (
        <PrimeReactProvider>
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
                        Cutting-edge software development committed to
                        transforming innovative ideas into powerful digital
                        solutions.
                    </p>
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

                <div className='flex flex-column p-6 justify-content-center text-center align-items-center footer'>
                    <div className='z-50'>
                        <ul>
                            <li>
                                <a
                                    className='linkedIn'
                                    href='https://www.linkedin.com/company/104131290/admin/dashboard/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon
                                        className='iconLogoSizes'
                                        icon={faLinkedin}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='twitter'
                                    href='https://x.com/XYIANSoftware'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon
                                        className='iconLogoSizes'
                                        icon={faXTwitter}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='github'
                                    href='https://github.com/XYIAN'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon
                                        className='iconLogoSizes'
                                        icon={faGithub}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </PrimeReactProvider>
    );
}
