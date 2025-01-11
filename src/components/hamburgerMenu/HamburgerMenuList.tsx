import { useRouter } from 'next/navigation';
import { Ripple } from 'primereact/ripple';
import XYButton from '../inputs/XYButton';
import { MENU_LINKS } from '@/constants';
const BUTTON_SYLE = 'p-2 font-bold w-11';
interface MenuItem {
    label: string;
    route: string;
}
interface HamburgerMenuListProps {
    closeMenu: () => void;
}
export const HamburgerMenuList = ({ closeMenu }: HamburgerMenuListProps) => {
    const currentRoute = window.location.pathname;
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
        closeMenu();
    };

    function filterMenuByLabel(
        menu: MenuItem[],
        labelToRemove: string
    ): MenuItem[] {
        return menu.filter(
            (item) => item.route !== labelToRemove.replace('/', '')
        );
    }
    const MENU_WITHOUT_CURRENT_ROUTE: MenuItem[] = filterMenuByLabel(
        MENU_LINKS,
        currentRoute
    );
    return (
        <div className='flex flex-column p-1 mobileMenu gap-4 justify-content-center align-content-center'>
            {MENU_WITHOUT_CURRENT_ROUTE.map((page) => {
                return (
                    <div
                        key={page.route}
                        className='flex justify-content-center align-items-center'
                    >
                        <XYButton
                            key={page.route + '-x'}
                            className={BUTTON_SYLE}
                            label={page.label}
                            onClick={() => handleNavigateClick(page.route)}
                            xyType='transparentWhite'
                        >
                            <Ripple
                                pt={{
                                    root: {
                                        style: {
                                            background: 'rgba(0, 14, 0, .4)',
                                        },
                                    },
                                }}
                            />
                        </XYButton>
                    </div>
                );
            })}
        </div>
    );
};
