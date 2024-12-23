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

const AboutUsSplit: React.FC<AboutUsProps> = ({ data }) => {
    return (
        <div className='about-us-dynamic'>
            {data.map((item, index) => {
                if (item.type === 'primary') {
                    return (
                        <SplitSection
                            key={item.id}
                            data={item}
                            reverse={index % 2 !== 0}
                        />
                    );
                } else if (item.type === 'secondary') {
                    return <ListCard key={item.id} data={item} />;
                } else if (item.type === 'quote') {
                    return <QuoteSection key={item.id} data={item} />;
                }
                return null;
            })}
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
                'split-section flex align-items-center py-6 px-4',
                { 'flex-row-reverse': reverse },
                { 'gap-8 md:gap-12': true }
            )}
            style={{
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                margin: '20px 0',
            }}
        >
            <div className='flex-1'>
                <Image
                    width={150}
                    height={150}
                    src={data.imageSrc}
                    alt='About Us'
                    className='w-full'
                    style={{
                        borderRadius: '12px',
                        maxHeight: '300px',
                        objectFit: 'cover',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                />
            </div>
            <div className='flex-1'>
                <p className='text-lg leading-relaxed text-gray-700'>
                    {data.text}
                </p>
            </div>
        </div>
    );
};

// ListCard for modern card-like display
const ListCard: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    return (
        <div className='list-card py-3 px-3'>
            <Card
                className='text-center'
                style={{
                    borderRadius: '12px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    background: '#ffffff',
                }}
            >
                <i
                    className='pi pi-star text-4xl mb-4'
                    style={{
                        color: '#f59e0b',
                        textShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                    }}
                ></i>
                <p className='text-lg leading-relaxed text-gray-700'>
                    {data.text}
                </p>
            </Card>
        </div>
    );
};

// QuoteSection for highlighting quotes or mission statements
const QuoteSection: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    return (
        <div
            className='quote-section text-center py-8 px-6'
            style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #f3f4f6, #ffffff)',
                borderRadius: '12px',
                margin: '20px 0',
                padding: '20px',
            }}
        >
            <p className='text-2xl leading-relaxed text-gray-800'>
                {data.text}
            </p>
        </div>
    );
};

export default AboutUsSplit;
