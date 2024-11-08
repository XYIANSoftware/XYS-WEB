import { Button, ButtonProps } from 'primereact/button';
import React, { useState } from 'react';
import '../styles/buttonHover.scss';
export interface XYButtonProps extends ButtonProps {
    xyType?: 'transparent';
    // xyAnimate?: boolean;
}

// const DEFAULT_STYLE = ''
const XYButton = ({ xyType, ...other }: XYButtonProps) => {
    const [classType, setClassType] = useState<'whiteButton' | 'blackButton'>();

    const determineStyle = (): React.CSSProperties | undefined => {
        switch (xyType) {
            case 'transparent':
                if (classType !== 'whiteButton') setClassType('whiteButton');
                return {
                    ...other?.style,
                };
            default:
                return other?.style;
        }
    };

    return (
        <Button
            {...other}
            style={determineStyle()}
            className={`${classType} ${other.className}`}
        ></Button>
    );
};

export default XYButton;
