import { Button } from 'primereact/button';
import {
    useEffect,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react';
import { useRouter } from 'next/navigation';

const BUTTON_SYLE = 'p-2 font-bold bg-white	w-11';
interface MenuItem {
    label: string;
    route: string;
}
interface MobileMenuProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}
export const MobileMenu = ({ setIsLoading }: MobileMenuProps) => {
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        setIsLoading(true);
        router.push(`/${to}`);
    };
    const MENU: MenuItem[] = [
        { label: 'Home', route: '' },
        {
            label: 'Project Gallery',
            route: 'projectGallery',
        },
        {
            label: 'Our Team',
            route: 'team',
        },
        {
            label: 'Privacy & Terms',
            route: 'privacy',
        },
    ];
    return (
        <div className='flex flex-column p-1 mobileMenu gap-4 justify-content-center align-content-center'>
            {MENU.map((page) => {
                return (
                    <div
                        key={page.route}
                        className='flex justify-content-center align-items-center'
                    >
                        <Button
                            key={page.route + '-x'}
                            className={BUTTON_SYLE}
                            label={page.label}
                            onClick={() => handleNavigateClick(page.route)}
                        />
                    </div>
                );
            })}
        </div>
    );
};
