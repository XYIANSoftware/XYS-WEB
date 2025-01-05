import { StoreCard } from '@/components';
import ItemDetails from '@/components/cards/ItemDetails';
import { useStore } from '@/context';
import { Item } from '@/types';
import { confirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';

export const useStoreFunctions = () => {
    const { cart, setCart } = useStore();
    const [detailsPopup, setDetailsPopup] = useState(false);

    const emptyCart = () => {
        setCart([]);
    };
    const addToCart = (item: Item) => {
        // const newCart: Item[] = cart;
        // newCart.push(item);
        //TODO add toast for cart adition.
        setCart([...cart, item]);
        return;
    };
    const removeFromCart = (item: Item) => {
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
