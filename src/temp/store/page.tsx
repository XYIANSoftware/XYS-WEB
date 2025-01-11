'use client';
import { NextPage } from 'next';
import StoreItemDisplay from './components/StoreItemDisplay';
import { STORE_ITEMS } from '@/constants';
import ReturnPolicy from './components/ReturnPolicy';
interface Props {}

const Store: NextPage<Props> = ({}) => {
    return (
        <div className='h-full w-full justify-content-center align-items-center flex flex-column gap-2'>
            <h1 className='p-2'>Xyian Apparel&trade;</h1>
            <StoreItemDisplay storeItemList={STORE_ITEMS} />
            <ReturnPolicy />
        </div>
    );
};

export default Store;
