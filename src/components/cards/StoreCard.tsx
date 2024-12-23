import { Card } from 'primereact/card';
import React from 'react';
import XYButton from '../inputs/XYButton';
import Image from 'next/image';
import { Item, StoreFunctionType } from '@/types';

export interface StoreCardProps {
    item: Item;
    storeFunctionType: StoreFunctionType;
    showDetails: (itemDetails: Item) => void;
    closeDetails: () => void;
}
export const StoreCard = ({
    item,
    showDetails,
    closeDetails,
    storeFunctionType,
}: StoreCardProps) => {
    const { name, price, imageUrl, description, subTitle, longDescription } =
        item;
    const header = (
        <div className='flex justify-content-center align-items-center'>
            <div className='p-1 flex justify-content-center align-items-center'>
                <Image
                    className=''
                    alt={`${name}-{${price}}`}
                    src={`${
                        imageUrl.length > 2
                            ? imageUrl
                            : 'https://github.com/XYIANSoftware/images/blob/main/logos_XYIAN/Primary.png?raw=true'
                    }`}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
    const CartFooter = () => <div></div>;
    const StoreFooter = () => (
        <div className='w-full flex justify-content-between'>
            <XYButton
                label={`Buy $${price}`}
                icon='pi pi-cart-plus'
                onClick={() => showDetails(item)}
            />
            <XYButton
                label='Details'
                icon='pi pi-info-circle'
                onClick={() => closeDetails()}
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
            <p className='m-0'>{description}</p>
        </Card>
    );
};
