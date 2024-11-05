'use client';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';
import LoadMask from '../LoadMask';
import SVGBackground from '../backgrounds/svg/SVGBackground';
export const MenuModel = () => {
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
                visible={visible}
                onHide={() => setVisible(false)}
                position='right'
                className='flex justify-content-center align-content-center sideMenu bg-black-alpha-90'
            >
                <SVGBackground />
                <MobileMenu setIsLoading={setIsLoading} />

                <LoadMask loading={isLoading} />
            </Sidebar>
        </>
    );
};
