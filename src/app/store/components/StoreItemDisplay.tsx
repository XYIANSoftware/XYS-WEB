import { StoreCard } from '@/components';
import { useStoreFunctions } from '@/hooks';
import { Item, StoreFunctionType } from '@/types';
import React from 'react';

interface StoreItemDisplayProps {
    storeItemList: Item[];
    type?: StoreFunctionType;
}
const StoreItemDisplay = ({ type, storeItemList }: StoreItemDisplayProps) => {
    const {
        showItemDetailPopup,
        closeItemDetailPopup,
        addToCart,
        detailsPopup,
    } = useStoreFunctions();
    const functionType: StoreFunctionType = type ? type : 'store';

    return (
        <div className='flex flex-column justify-content-center align-items-center gap-4'>
            {storeItemList.map((item) => {
                return (
                    <div key={item.id} className='pb-1'>
                        <StoreCard
                            item={item}
                            storeFunctionType={functionType}
                            showDetails={showItemDetailPopup}
                            closeDetails={closeItemDetailPopup}
                            addToCart={addToCart}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StoreItemDisplay;
