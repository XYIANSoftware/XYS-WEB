import { MemberDetail } from '@/common';
// import Image from 'next/image';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import '../../../common/styles/displayCard.scss';
interface PersonDisplayProps {
    memberDetails: MemberDetail;
}

export const PersonDisplay = ({ memberDetails }: PersonDisplayProps) => {
    const { name, imageSrc, position, bio } = memberDetails;
    const CardHeaderImage = () => {
        return (
            <div className='flex justify-content-center align-content-center'>
                <Image
                    alt={name}
                    src={imageSrc}
                    imageStyle={{ maxWidth: '100%', objectFit: 'cover' }}
                />
            </div>
        );
    };
    return (
        <Card
            header={<CardHeaderImage />}
            title={<h2>{name}</h2>}
            subTitle={position}
            className='w-full m-3 p-3 custom-card'
        >
            <p className='pt-4 pb-1'>{bio}</p>
        </Card>
    );
};
