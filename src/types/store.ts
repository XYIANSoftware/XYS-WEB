export type Sizes = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export type RemainingSupply = 'critical' | 'low' | 'average' | 'unlimited';
export type StoreFunctionType = 'cart' | 'store';
export type PriceId = string;
export type Quantity = number;

export type Item = {
    id: number;
    quantity: Quantity;
    priceId: PriceId;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    longDescription: string;
    subTitle: string;
    size?: Sizes | undefined;
    stock?: RemainingSupply;
};

export type StripeCheckoutModel = {
    priceId: PriceId;
    quantity: Quantity;
};
