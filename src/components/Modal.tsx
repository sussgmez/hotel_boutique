import React from 'react'
import ReactDOM from 'react-dom'


interface Props {
    children: React.ReactNode;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal = ({ children }: Props) => {
    return ReactDOM.createPortal(children, modalRoot)
}

export default Modal