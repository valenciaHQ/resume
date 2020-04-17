import React from 'react';
import { ToastContainer } from 'react-toastify';
import { STATUS_TYPE, SUCCESS_MESSAGE, ERROR_MESSAGE } from '../../constants';

export const toastConfig = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export const ToastWrapper = () => (
  <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnVisibilityChange
    draggable
    pauseOnHover
  />
);

export const getMessage = (type) => {
  switch (type) {
    case STATUS_TYPE.SUCESS:
      return SUCCESS_MESSAGE;
    case STATUS_TYPE.ERROR: {
      return ERROR_MESSAGE;
    }
    default:
      return null;
  }
};
