import { Item } from '@/types';
import { Card } from 'primereact/card';
import React from 'react';
import Image from 'next/image';
interface ItemDetailsProps {
    item: Item;
}
const ItemDetails = ({ item }: ItemDetailsProps) => {
    const { name, price, imageUrl, description, subTitle, longDescription } =
        item;
    const header = (
        <div className='flex justify-content-center align-items-center'>
            <div className='p-1 flex justify-content-center align-items-center'>
                <Image
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

    return (
        <Card
            title={name}
            subTitle={subTitle}
            //    footer={footer}
            header={header}
            className='md:w-25rem'
        >
            <p className='m-0'>{description}</p>
            <p>{longDescription}</p>
            <p>
                <strong>${price}</strong>
            </p>
        </Card>
    );
};

export default ItemDetails;
