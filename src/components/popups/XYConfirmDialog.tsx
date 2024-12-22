import React from 'react';
import '../../styles/';
import { ConfirmDialog } from 'primereact/confirmdialog';
const XYConfirmDialog = () => {
    return (
        <ConfirmDialog
            className='XYConfirmDialog'
            pt={{
                acceptButton: {
                    root: {
                        style: {
                            color: 'black',
                            backgroundColor: 'white',
                        },
                    },
                },
            }}
        />
    );
};

export default XYConfirmDialog;
