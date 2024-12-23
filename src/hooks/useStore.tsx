import { StoreCard } from '@/components';
import ItemDetails from '@/components/cards/ItemDetails';
import { Item } from '@/types';
import { confirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';

export const useStore = () => {
    const [detailsPopup, setDetailsPopup] = useState(false);
    const closeItemDetailPopup = () => {
        setDetailsPopup(false);
        return;
    };
    const addToCart = (item: Item) => {
        console.log('add to cart hit for item:', item);
        alert('add to cart hit');
        return;
    };
    const showItemDetailPopup = (item: Item) => {
        confirmDialog({
            message: <ItemDetails item={item} />,
            rejectLabel: 'CLOSE',
            //reject: () => closeItemDetailPopup(),
            accept: () => addToCart(item),
            acceptLabel: `Add to Cart $${item.price}`,
        });

        return;
    };
    return {
        showItemDetailPopup,
        detailsPopup,
        closeItemDetailPopup,
        addToCart,
    };
};
