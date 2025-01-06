import { StoreCard } from '@/components';
import ItemDetails from '@/components/cards/ItemDetails';
import { useApplication, useStore } from '@/context';
import { Item } from '@/types';
import { confirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';

export const useStoreFunctions = () => {
    const { toastMessage } = useApplication();
    const { cart, setCart } = useStore();
    const [detailsPopup, setDetailsPopup] = useState(false);

    const emptyCart = () => {
        setCart([]);
    };
    const addToCart = (item: Item) => {
        toastMessage({
            severity: 'success',
            content: `Successfully added ${item.name} to your cart!`,
        });
        setCart([...cart, item]);
        return;
    };
    const removeFromCart = (item: Item) => {
        toastMessage({
            severity: 'error',
            content: `Removed ${
                item.name
            } from your cart, remaining quantity: ${
                item.quantity ? item.quantity : 0
            }`,
        });

        setCart([item, ...cart]);
    };
    const closeItemDetailPopup = () => {
        setDetailsPopup(false);
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
        removeFromCart,
        emptyCart,
    };
};
