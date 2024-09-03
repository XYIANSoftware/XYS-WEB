import { MemberDetail } from '@/common';
import { Card } from 'primereact/card';
import { useEffect, useState, ReactNode } from 'react';

interface PersonDisplayProps {
    memberDetails: MemberDetail;
}

export const PersonDisplay = ({ memberDetails }: PersonDisplayProps) => {
    const { name, imageSrc } = memberDetails;
    return <Card header={name}>Filler</Card>;
};
