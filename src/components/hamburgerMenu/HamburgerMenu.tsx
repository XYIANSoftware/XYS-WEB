'use client';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useEffect, useState } from 'react';
import LoadMask from '../LoadMask';
import SVGBackground from '../backgrounds/svg/SVGBackground';
import { usePathname, useSearchParams } from 'next/navigation';
import { HamburgerMenuList } from './HamburgerMenuList';

export const HamburgerMenu = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const closeMenu = () => setVisible(false);

    useEffect(() => {
        function removeLoadMask() {
            setLoading(false);
        }
        setLoading(true);
        if (document.readyState === 'complete') {
            setLoading(false);
        } else {
            window.addEventListener('load', removeLoadMask);
        }
        return () => {
            window.removeEventListener('load', removeLoadMask);
        };
    }, [pathname, searchParams]);

    return (
        <>
            <Button
                icon={'fa-solid fa-bars'}
                onClick={() => setVisible(true)}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    padding: '5px',
                    zIndex: 999,
                }}
                pt={{
                    root: {
                        style: {
                            backgroundColor: 'white',
                        },
                    },
                }}
            />
            <Sidebar
                //header={SideBarHeader}
                visible={visible}
                onHide={() => setVisible(false)}
                position='right'
                className='flex justify-content-center align-content-center sideMenu bg-black-alpha-90'
                closeIcon={
                    <i
                        className='fa-solid fa-xmark fa-lg cursor-pointer hover:shadow-4'
                        style={{ color: 'white', zIndex: 999 }}
                    />
                }
            >
                <SVGBackground />
                <HamburgerMenuList closeMenu={closeMenu} />
                <LoadMask loading={loading} />
            </Sidebar>
        </>
    );
};
