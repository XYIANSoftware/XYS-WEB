import { Button } from 'primereact/button';
import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const BUTTON_SYLE = 'p-2 font-bold';

export const MobileMenu = () => {
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
    };
    return (
        <div className='flex flex-column p-1 mobileMenu gap-3'>
            <Button
                className={BUTTON_SYLE}
                label='Contact'
                onClick={() => handleNavigateClick('social')}
            />
            <Button
                className={BUTTON_SYLE}
                label='Services'
                onClick={() => handleNavigateClick('portfolio')}
            />
            <Button
                className={BUTTON_SYLE}
                label='Public Works'
                onClick={() => handleNavigateClick('webApps')}
            />
        </div>
    );
};
