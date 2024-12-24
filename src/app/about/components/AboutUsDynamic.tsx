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
    const getComponentByIndex = (item: (typeof ABOUT_US)[0], index: number) => {
        const components = [
            <HeroSection key={item.id} data={item} />,
            <SplitSection
                key={item.id}
                data={item}
                reverse={index % 2 !== 0}
            />,
            <ListCard key={item.id} data={item} />,
            <QuoteSection key={item.id} data={item} />,
            <ImageTextOverlay key={item.id} data={item} />,
        ];

        // Ensure no consecutive reuse of the same component
        return components[index % components.length];
    };

    return (
        <div className='about-us-dynamic'>
            {data.map((item, index) => getComponentByIndex(item, index))}
        </div>
    );
};

// HeroSection for prominent display
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

// ListCard for card-like display
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

// ImageTextOverlay for modern overlay styles
const ImageTextOverlay: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({
    data,
}) => {
    return (
        <div
            className='image-text-overlay relative w-full h-96'
            style={{
                backgroundImage: `url(${data.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                overflow: 'hidden',
            }}
        >
            <div
                className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center px-6'
                style={{ backdropFilter: 'blur(5px)' }}
            >
                <p className='text-lg leading-relaxed'>{data.text}</p>
            </div>
        </div>
    );
};

export default AboutUsDynamic;
