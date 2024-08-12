import Image from 'next/image';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
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

                {/* <MenuModel /> Keep this removed in main*/}

                <div
                    className='flex flex-column p-6 justify-content-center text-center align-items-center gap-3 mainBody'
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
                                    href=''
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
