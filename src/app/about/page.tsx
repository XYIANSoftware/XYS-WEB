import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import AboutUs from './components/AboutUs';
import { XYSToTop } from '@/common';
import BulletPoints from './components/leftbulletpoints';
import LeftBulletPoints from './components/leftbulletpoints';
import RightBulletPoints from './components/rightbulletpoints';
import './styles/aboutStyles.scss'

interface Props {}

const AboutXYS: NextPage<Props> = ({}) => {
    return (
        <main className='p-6'>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-full h-full p-1'>
                <h1 className='mb-2 pt-7'>About XYS</h1>
            </div>
            <div className='bullet'>
                <LeftBulletPoints message='Roy' src='/Primary.png'></LeftBulletPoints>
                <RightBulletPoints message='Middle' src='/Primary.png'></RightBulletPoints>
                <LeftBulletPoints message='kyle' src='/Primary.png'></LeftBulletPoints>
            </div>
            {/* <AboutUs type={'primary'} /> <AboutUs type={'secondary'} /> */}
            <XYSToTop />
        </main>
    );
};

export default AboutXYS;
