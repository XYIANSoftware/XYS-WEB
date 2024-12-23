import { StoreCard } from '@/components';
import { Item } from '@/types';
import React from 'react';

interface StoreItemDisplayProps {
    storeItemList: Item[];
}
const StoreItemDisplay = ({ storeItemList }: StoreItemDisplayProps) => {
    //TODO mobile & desktop grid scss mobile first design
    return (
        <div className='flex flex-column justify-content-center align-items-center gap-4'>
            {storeItemList.map((item) => {
                return (
                    <div key={item.id}>
                        <StoreCard item={item} />
                    </div>
                );
            })}
        </div>
    );
};

export default StoreItemDisplay;
