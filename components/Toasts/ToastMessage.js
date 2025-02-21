// src/components/Toast.js
import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    return <ToastContainer />;
};


const toastOption = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

const showToast = (message, type = 'default') => {
    switch (type) {
        case 'success':
            return toast.success(message, toastOption);
        case 'error':
            return toast.error(message, toastOption);
        case 'info':
            return toast.info(message, toastOption);
        case 'warn':
            return toast.warn(message, toastOption);
        default:
            return
    }
};

export { Toast, showToast };
