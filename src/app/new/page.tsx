'use client';
import { NextPage } from 'next';

interface Props {}

const Welcome: NextPage<Props> = ({}) => {
    return (
        <div className='h-full w-full'>
            <h1>Welcome to XYS</h1>
            <p>
                Please complete the short form below and a member of our
                onboarding team will reach out to you within 1-4 buisness days
                with everything you will need to know and more.
            </p>
            {/* form goes here  */}
        </div>
    );
};

export default Welcome;
