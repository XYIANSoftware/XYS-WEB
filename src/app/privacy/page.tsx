import { MenuModel } from '@/common/Menu/MenuModel';
import { MobileMenu } from '@/common/Menu/MobileMenu';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';

interface Props {}

const Privacy: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-6'>
                    <h1>Privacy & Terms</h1>
                    <div></div>
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default Privacy;
