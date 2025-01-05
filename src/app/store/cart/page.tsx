'use client';

import { Item } from '@/types';
import { Panel } from 'primereact/panel';
import React from 'react';
import { useStore } from '@/context';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart, setCart } = useStore();
    return (
        <div className='w-full h-full pt-6'>
            <Panel title='XYS Shopping Cart' className='m-4'>
                <div>
                    {cart && cart.length > 0 ? (
                        cart.map((item: Item) => {
                            return (
                                <CartItem
                                    cartItemToDisplay={item}
                                    key={item.id}
                                />
                            );
                        })
                    ) : (
                        <div>
                            <h2 className='p-2 text-center'>Cart is Empty</h2>
                        </div>
                    )}
                </div>
            </Panel>
        </div>
    );
};

export default Cart;
