import { Button } from 'primereact/button';
import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const BUTTON_SYLE = 'p-2 font-bold';
interface MenuItem {
    label: string;
    page: string;
}
const MENU: MenuItem[] = [
    { label: 'Home', page: '' },
    { label: 'Project Gallery', page: 'projectGallery' },
    { label: 'Our Team', page: 'team' },
    { label: 'Privacy & Terms', page: 'privacy' },
];
export const MobileMenu = () => {
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
    };
    return (
        <div className='flex flex-column p-1 mobileMenu gap-3'>
            <Button
                className={BUTTON_SYLE}
                label='Home'
                onClick={() => handleNavigateClick('')}
            />
            <Button
                className={BUTTON_SYLE}
                label='Project Gallery'
                onClick={() => handleNavigateClick('projectGallery')}
            />
            <Button
                className={BUTTON_SYLE}
                label='Our Team'
                onClick={() => handleNavigateClick('team')}
            />
            {/* <Button
                className={BUTTON_SYLE}
                label='Contact'
                onClick={() => handleNavigateClick('social')}
            />
            <Button
                className={BUTTON_SYLE}
                label='Services'
                onClick={() => handleNavigateClick('portfolio')}
            /> */}
            <Button
                className={BUTTON_SYLE}
                label='Privacy & Terms'
                onClick={() => handleNavigateClick('privacy')}
            />
        </div>
    );
};
