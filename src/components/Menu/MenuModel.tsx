'use client';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useEffect, useState } from 'react';
import LoadMask from '../LoadMask';
import SVGBackground from '../backgrounds/svg/SVGBackground';
import { MobileMenu } from './MobileMenu';
// import HIcon from '../../../public/images/XYIAN LOGO_ALL_SVG/hamburgerSVG.svg';
import { usePathname, useSearchParams } from 'next/navigation';
export const MenuModel = () => {
    const [visible, setVisible] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // const toggleLoadMask = () => {
    //     if (loading) {
    //         setLoading(false);
    //     } else setLoading(true);
    // };
    const onClose = () => {
        // if (!isLoading && visible) {
        //     setVisible(false);
        //     setIsLoading(true);
        // }
        //alert('hit');
        setVisible(false);
    };
    // const SideBarHeader = (props: SidebarProps): ReactNode => {
    //     //const {} = props;
    //     return (
    //         <Toolbar
    //             end={
    //                 <XYButton
    //                     icon='pi-times'
    //                     onClick={() => setVisible(false)}
    //                 />
    //             }
    //         />
    //     );
    // };
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
                <MobileMenu onClose={onClose} />
                <LoadMask loading={loading} />
            </Sidebar>
        </>
    );
};
