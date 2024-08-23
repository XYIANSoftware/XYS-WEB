import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';

interface Props {}

const Mission: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-6'>
                    <h1>Our Mission</h1>
                    <div></div>
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default Mission;
