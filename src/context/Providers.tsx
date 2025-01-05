'use client';
import React, { ReactNode } from 'react';
import { ApplicationProvider } from './ApplicationContext';
import { StoreProvider } from './StoreContext';

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ApplicationProvider>
            <StoreProvider>{children}</StoreProvider>
        </ApplicationProvider>
    );
};

export default Providers;
