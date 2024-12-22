import { MenuModel } from '@/common/Menu/MenuModel';
import { NextPage } from 'next';
import { XYSToTop } from '@/common';
import LeftBulletPoints from './components/leftbulletpoints';
import RightBulletPoints from './components/rightbulletpoints';
import { ABOUT_US } from '../team/constants/ABOUT_US';
import './styles/aboutStyles.scss';

interface Props {}

const AboutXYS: NextPage<Props> = ({}) => {
    return (
        <main className='p-6'>
            <MenuModel />
            <div className='flex flex-column justify-content-center w-full align-items-center w-full h-full p-1'>
                <h1 className='mb-2 pt-7 mint'>About XYS</h1>
            </div>
            <div className='bullet'>
                {ABOUT_US.map((item) => (
                    <div key={item.id}>
                        {item.id % 2 === 0 ? (
                            // Render RightBulletPoints if the id is even
                            <RightBulletPoints
                                message={item.text}
                                src={item.imageSrc}
                            />
                        ) : (
                            // Render LeftBulletPoints if the id is odd
                            <LeftBulletPoints
                                message={item.text}
                                src={item.imageSrc}
                            />
                        )}
                    </div>
                ))}
            </div>
            {/* <AboutUs type={'primary'} /> <AboutUs type={'secondary'} /> */}
            <XYSToTop />
        </main>
    );
};

export default AboutXYS;
