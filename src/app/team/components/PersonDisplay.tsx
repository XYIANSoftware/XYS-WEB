import { MemberDetail } from '@/common';
import { Card } from 'primereact/card';
import { useEffect, useState, ReactNode } from 'react';

interface PersonDisplayProps {
    memberDetails: MemberDetail;
}

export const PersonDisplay = ({ memberDetails }: PersonDisplayProps) => {
    const { name, imageSrc, position, bio } = memberDetails;
    return (
        <Card title={<h2>{name}</h2>} subTitle={bio}>
            Filler
        </Card>
    );
};
