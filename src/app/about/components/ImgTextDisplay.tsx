import { Image } from 'primereact/image';
import React from 'react';

interface Props {
    imgSrc: string;
    description: string;
    alt: string;
    imgOrientation?: 'vertical' | 'horizontal';
}
const ImgTextDisplay = ({
    imgSrc,
    description,
    alt,
    imgOrientation,
}: Props) => {
    // const x = imgOrientation?.x === 'left' ? '' : '';
    return (
        <div
            className={`imgDisplay flex gap-2 justify-content-${
                imgOrientation === 'horizontal'
                    ? 'between'
                    : 'center flex-column'
            }`}
        >
            <div className='imgDisplay-image-wrapper'>
                <Image className='imgDisplay-image' alt={alt} src={imgSrc} />
            </div>
            <div className='imgDisplay-description-wrapper'>
                <p className='imgDisplay-description'>{description}</p>
            </div>
        </div>
    );
};

export default ImgTextDisplay;
