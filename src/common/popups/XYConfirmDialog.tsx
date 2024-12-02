import React from 'react';
import '../styles/_confirmDialog.scss';
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
