import React from 'react';
import { ABOUT_US } from '../constants/ABOUT_US';
import { XYType } from '@/common/types/common';
interface AboutUsProps {
    type: XYType;
}
const AboutUs = ({ type }: AboutUsProps) => {
    return (
        <div className='flex w-full justify-content-center align-content-center'>
            <div className='w-9 text-center '>
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
