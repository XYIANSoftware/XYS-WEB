import SVGBackground from '@/common/backgrounds/svg/SVGBackground';
import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import AboutUs from '../team/components/AboutUs';

interface Props {}

const AboutXYS: NextPage<Props> = ({}) => {
    return (
        <main>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-full h-full p-1'>
                <h1 className='mb-2 pt-7'>About XYS</h1>
            </div>
            <AboutUs type={'primary'} /> <AboutUs type={'secondary'} />
        </main>
    );
};

export default AboutXYS;
