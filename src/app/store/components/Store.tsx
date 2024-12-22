import React, { ReactNode } from 'react';

interface StoreProps {
    children?: ReactNode;
}

const Store = ({ children }: StoreProps) => {
    //!mainly layout
    return <div>{children}</div>;
};

export default Store;
