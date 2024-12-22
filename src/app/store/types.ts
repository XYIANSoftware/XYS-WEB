export type Sizes = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';

export type Item = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    longDescription?: string | undefined;
    size?: Sizes | undefined;
};
