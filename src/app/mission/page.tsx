import SVGBackground from '@/common/backgrounds/svg/SVGBackground';
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';

interface Props {}

const Mission: NextPage<Props> = ({}) => {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <SVGBackground />
            </main>
        </PrimeReactProvider>
    );
};

export default Mission;
