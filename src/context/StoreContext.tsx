'use client'; // important for context

import { Item } from '@/types';
import { createContext, useContext, useState } from 'react';

interface StoreContextProps {
    user: string | null;
    setUser: (user: string | null) => void;
    cart: Item[];
    setCart: (cart: Item[]) => void;
}

const StoreContext = createContext<StoreContextProps>({
    user: null,
    setUser: () => {},
    cart: [],
    setCart: () => {},
});

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(null);
    const [cart, setCart] = useState<Item[]>([]);

    return (
        <StoreContext.Provider value={{ user, setUser, cart, setCart }}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    return useContext(StoreContext);
}
