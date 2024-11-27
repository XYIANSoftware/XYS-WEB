import { ScrollTop } from 'primereact/scrolltop';
import React from 'react';

interface XYSToTop {
    color?: 'white' | 'black' | undefined;
}
export const XYSToTop = ({ color }: XYSToTop) => {
    const colorSelect = (color: string) => {
        switch (color) {
            default:
                return;
        }
    };
    return <ScrollTop />;
};
