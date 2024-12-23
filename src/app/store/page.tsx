'use client';
import { NextPage } from 'next';
import StoreItemDisplay from './components/StoreItemDisplay';
import { STORE_ITEMS } from '@/constants';
interface Props {}

const Store: NextPage<Props> = ({}) => {
    return (
        <div className='h-full w-full justify-content-center align-items-center'>
            <h1 className='p-2'>XYS Store</h1>
            <StoreItemDisplay storeItemList={STORE_ITEMS} />
        </div>
    );
};

export default Store;
