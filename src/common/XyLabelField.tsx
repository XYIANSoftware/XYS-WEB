import { ReactNode } from 'react';
import { LabelFieldSize } from '@/components/helpers/types';
import { Helpers } from '@/components/helpers';
export interface XyLabelFieldProps {
    field: ReactNode;
    label?: string;
    labelSize?: LabelFieldSize;
    fieldSize?: LabelFieldSize;
    inline?: boolean;
    required?: boolean;
}

export const XyLabelField = ({
    label,
    labelSize,
    field,
    fieldSize,
    inline,
    required,
}: XyLabelFieldProps) => {
    const { getSize } = Helpers();
    const RequiredIcon = (
        <b style={{ color: 'red', transform: 'translate(10,30)' }}>*</b>
    );
    return label ? (
        <div
            className={`flex gap-2 align-items-center ${
                inline === true ? 'flex-row' : 'flex-column'
            } `}
        >
            <div style={{ width: getSize(labelSize) }}>
                {required && RequiredIcon}
                {label}:
            </div>
            <div style={{ width: getSize(fieldSize) }}>{field}</div>
        </div>
    ) : (
        <div style={{ width: getSize(fieldSize) }}>
            {required && RequiredIcon}
            {field}
        </div>
    );
};
