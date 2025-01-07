import { Card } from 'primereact/card';
import React from 'react';
import { Item, StoreFunctionType } from '@/types';
import XYButton from '../inputs/XYButton';
import { Image } from 'primereact/image';
export interface StoreCardProps {
    item: Item;
    storeFunctionType: StoreFunctionType;
    showDetails: (itemDetails: Item) => void;
    closeDetails: () => void;
    addToCart: (item: Item) => void;
}
export const StoreCard = ({
    item,
    showDetails,
    closeDetails,
    storeFunctionType,
    addToCart,
}: StoreCardProps) => {
    const { name, price, imageUrl, description, subTitle, longDescription } =
        item;
    const header = (
        <div className='flex justify-content-center align-items-center'>
            <div className='p-3 flex justify-content-center align-items-center'>
                <Image
                    className='cursor-pointer'
                    alt={`${name}-{${price}}`}
                    src={`${
                        imageUrl.length > 2
                            ? imageUrl
                            : 'https://github.com/XYIANSoftware/images/blob/main/logos_XYIAN/Primary.png?raw=true'
                    }`}
                    width={'200'}
                    preview
                />
            </div>
        </div>
    );
    const CartFooter = () => <div></div>;
    const StoreFooter = () => (
        <div className='w-full flex justify-content-between'>
            <XYButton
                label={`Add to Cart $${price}`}
                icon='pi pi-cart-plus'
                onClick={() => addToCart(item)}
                // loading add loading true while adding to cart
            />
            <XYButton
                label='Details'
                icon='pi pi-info-circle'
                onClick={() => showDetails(item)}
                outlined
            />
        </div>
    );
    const footer = () => {
        if (storeFunctionType === 'cart') {
            return <CartFooter />;
        } else return <StoreFooter />;
    };
    return (
        <Card
            title={name}
            subTitle={subTitle}
            footer={footer}
            header={header}
            className='md:w-25rem'
        >
            <p className='m-0'>
                {storeFunctionType === 'cart' ? longDescription : description}
            </p>
        </Card>
    );
};
