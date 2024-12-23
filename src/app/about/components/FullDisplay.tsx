// components/AboutUsDynamic.tsx

import React from 'react';
import { ABOUT_US } from '@/constants';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AboutUsModel } from '@/types';
import Image from 'next/image';

interface AboutUsProps {
    data: AboutUsModel[];
}

const FullDisplay: React.FC<AboutUsProps> = ({ data }) => {
    return (
        <div className='about-us-dynamic'>
            {data.map((item, index) => {
                if (item.type === 'primary' && index === 0) {
                    return <HeroSection key={item.id} data={item} />;
                } else if (item.type === 'primary') {
                    return (
                        <SplitSection
                            key={item.id}
                            data={item}
                            reverse={index % 2 !== 0}
                        />
                    );
                } else if (item.type === 'secondary') {
                    return <ListCard key={item.id} data={item} />;
                }
                return null;
            })}
        </div>
    );
};

// HeroSection for prominent display
const HeroSection: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    return (
        <div
            className='hero-section surface-0 text-center py-6 px-4'
            style={{
                background: 'linear-gradient(135deg, #007ad9, #003973)',
                color: '#fff',
            }}
        >
            <Image
                src={data.imageSrc}
                alt='Primary'
                className='mb-3'
                width={100}
                height={100}
            />
            <h1 className='text-3xl font-bold mb-3'>
                Welcome to XYIAN Software
            </h1>
            <p className='text-lg'>{data.text}</p>
            <Button
                label='Learn More'
                icon='pi pi-arrow-right'
                className='p-button-rounded mt-4'
            />
        </div>
    );
};

// SplitSection for alternating layouts
const SplitSection: React.FC<{
    data: (typeof ABOUT_US)[0];
    reverse?: boolean;
}> = ({ data, reverse }) => {
    return (
        <div
            className={classNames(
                'split-section flex align-items-center gap-6 py-4 px-4',
                { 'flex-row-reverse': reverse }
            )}
        >
            <div className='flex-1'>
                <Image
                    src={data.imageSrc}
                    alt='About Us'
                    className='w-full'
                    style={{
                        borderRadius: '10px',
                        maxHeight: '300px',
                        objectFit: 'cover',
                    }}
                    width={100}
                    height={100}
                />
            </div>
            <div className='flex-1'>
                <p className='text-lg'>{data.text}</p>
            </div>
        </div>
    );
};

// ListCard for secondary items
const ListCard: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    return (
        <div className='list-card py-3 px-3'>
            <Card className='text-center'>
                <i
                    className='pi pi-star text-4xl mb-3'
                    style={{ color: '#f5c518' }}
                ></i>
                <p>{data.text}</p>
            </Card>
        </div>
    );
};

export default FullDisplay;
