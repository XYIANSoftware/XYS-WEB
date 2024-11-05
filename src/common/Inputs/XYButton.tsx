import { Button, ButtonProps } from 'primereact/button';
import React from 'react';
import '../styles/buttonHover.scss';
export interface XYButtonProps extends ButtonProps {
    xyType?: 'transparent';
    // xyAnimate?: boolean;
}

// const DEFAULT_STYLE = ''
const XYButton = ({ xyType, ...other }: XYButtonProps) => {
    const determineStyle = (): React.CSSProperties | undefined => {
        switch (xyType) {
            case 'transparent':
                return {
                    ...other?.style,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                };
            default:
                return other?.style;
        }
    };

    return <Button {...other} style={determineStyle()}></Button>;
};

export default XYButton;
