import { Item } from '@/types';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import React from 'react';

interface CartItemProps {
    cartItemToDisplay: Item;
}
const CartItem = ({ cartItemToDisplay }: CartItemProps) => {
    const {
        name,
        subTitle,
        longDescription,
        description,
        price,
        quantity,
        imageUrl,
    } = cartItemToDisplay;

    const CartItemHeader = () => <div></div>;
    const CartItemFooter = () => <div></div>;

    return (
        <Card
            title={name}
            subTitle={subTitle}
            footer={CartItemHeader}
            header={CartItemHeader}
            className='md:w-25rem'
        >
            <div className='flex'>
                <Image src={imageUrl} alt={name} />
                <p className='m-0'>{description}</p>
            </div>
        </Card>
    );
};

export default CartItem;
