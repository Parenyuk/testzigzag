import {createPortal} from 'react-dom';
import React from 'react';
import './MainModal.scss'


export const Modal: React.FC<any> = ({children}: any) => (
    createPortal(
        <div className='modal'>
            {children}
        </div>,
        document.getElementById('modal-root') as HTMLElement
    )
);
