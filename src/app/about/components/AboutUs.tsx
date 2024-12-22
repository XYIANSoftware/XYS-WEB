import React from 'react';
import { ABOUT_US } from '../../team/constants/ABOUT_US';
import { XYType } from '@/types';
interface AboutUsProps {
    type: XYType;
}
const AboutUs = ({ type }: AboutUsProps) => {
    return (
        <div className='flex w-full justify-content-center align-content-center'>
            <div
                className=' text-center '
                style={{ padding: '0 2rem !important' }}
            >
                {ABOUT_US.map((entry) => {
                    if (type === entry.type) {
                        return (
                            <p key={entry.id} className='line-height-3 text-lg	'>
                                {entry.text}
                            </p>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default AboutUs;
