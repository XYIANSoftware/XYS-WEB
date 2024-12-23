import { Card } from 'primereact/card';
import React from 'react';
import XYButton from '../inputs/XYButton';
import Image from 'next/image';
import { Item } from '@/types';

export interface StoreCardProps {
    item: Item;
    // showDetails: (itemDetails: Item) => void;
    // closeDetails: () => void;
}
export const StoreCard = ({
    item,
}: // showDetails,
// closeDetails,
StoreCardProps) => {
    const { name, price, imageUrl, description } = item;
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
                    width={50}
                    height={100}
                />
            </div>
        </div>
    );
    const footer = (
        <>
            <XYButton
                label={`Buy $${price}`}
                icon='pi pi-cart-plus'
                //onClick={() => showDetails(item)}
            />
            <XYButton
                label='Cancel'
                severity='secondary'
                icon='pi pi-times'
                //style={{ marginLeft: '0.5em' }}
                //onClick={() => closeDetails()}
            />
        </>
    );
    return (
        <Card
            title='Advanced Card'
            subTitle='Card subtitle'
            footer={footer}
            header={header}
            className='md:w-25rem'
        >
            <p className='m-0'></p>
        </Card>
    );
};
