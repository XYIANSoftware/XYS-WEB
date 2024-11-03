import React from 'react';
import { ABOUT_US } from '../constants/ABOUT_US';
const AboutUs = (type?: 'primary' | 'secondary') => {
    return (
        <div>
            <div>
                {ABOUT_US.map((entry) => {
                    return <p key={entry.id}>{entry.text}</p>;
                })}
            </div>
        </div>
    );
};

export default AboutUs;
