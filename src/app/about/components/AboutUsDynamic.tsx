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

const AboutUsDynamic: React.FC<AboutUsProps> = ({ data }) => {
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

// HeroSection with a sleek gradient and modern design
const HeroSection: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    return (
        <div
            className='hero-section text-center py-8 px-6'
            style={{
                background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                color: '#fff',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Image
                width={150}
                height={150}
                src={data.imageSrc}
                alt='Primary'
                className='mb-4'
                style={{ maxWidth: '180px', borderRadius: '50%' }}
            />
            <h1 className='text-4xl font-bold mb-4'>
                Welcome to XYIAN Software
            </h1>
            <p className='text-lg leading-relaxed'>{data.text}</p>
            <Button
                label='Discover More'
                icon='pi pi-arrow-right'
                className='p-button-rounded p-button-outlined mt-5'
                style={{ color: '#fff', borderColor: '#fff' }}
            />
        </div>
    );
};

// SplitSection with smooth alternating layout and animations
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

export default AboutUsDynamic;
