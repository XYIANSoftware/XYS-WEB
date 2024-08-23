import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';

interface Props {}

const WebApps: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-6'>
                    <h1>Public Web Apps</h1>
                    <div></div>
                </div>
            </main>
        </PrimeReactProvider>
    );
};

export default WebApps;
