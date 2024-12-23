import { Item } from '@/types';
import { Panel } from 'primereact/panel';
import React from 'react';

export interface CartProps {
    userId: number;
    selectedItems: Item[];
    //cookies?: string[] | undefined;
}
export const Cart = ({ userId, selectedItems }: CartProps) => {
    return (
        <div className='w-full h-full'>
            <Panel title='XYS Shopping Cart'>
                <div></div>
            </Panel>
        </div>
    );
};
