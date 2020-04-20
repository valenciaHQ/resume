import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMediaQuery } from 'react-responsive';

import { Column } from '../Layout';

import firestore from '../../firestore';
import 'react-toastify/dist/ReactToastify.css';

import {
  ModalWrapper,
  ModalCard,
  CloseButton,
  Background,
  Input,
  TextArea,
  StyledRow,
  Button,
  Error
} from './styled';
import { Close } from '../Icons';
import {
  FIREBASE_COLLECTION,
  REQUIRED,
  TOO_SHORT,
  SEND,
  VALID_MAIL,
  SUCCESS_MESSAGE,
  ERROR_MESSAGE
} from '../../constants';
import ToastContext from '../../ToastContext';

const schema = Yup.object().shape({
  email: Yup.string().email(VALID_MAIL).required(REQUIRED),
  comment: Yup.string().min(10, TOO_SHORT).required(REQUIRED)
});

export default ({ show, onClose }) => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const { showToast } = useContext(ToastContext);

  const onSubmit = (message) => {
    firestore
      .collection(FIREBASE_COLLECTION.MESSAGES)
      .add(message)
      .then(() => showToast(SUCCESS_MESSAGE))
      .catch(() => showToast(ERROR_MESSAGE));
    onClose();
  };

  if (!show) {
    return null;
  }
  return (
    <ModalWrapper>
      <ModalCard isDesktopOrLaptop={isDesktopOrLaptop}>
        <CloseButton>
          <Close onClick={onClose} size="2x" />
        </CloseButton>
        <Formik
          initialValues={{ email: '', comment: '' }}
          validateOnBlur={false}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <Column>
                <StyledRow>
                  <Column>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <Error>{errors.email}</Error>}
                  </Column>
                </StyledRow>
                <StyledRow>
                  <Column style={{ flex: 1 }}>
                    <TextArea name="comment" value={values.comment} onChange={handleChange} />
                    {errors.comment && <Error>{errors.comment}</Error>}
                  </Column>
                </StyledRow>
                <StyledRow colorized centered>
                  <Button type="submit">{SEND}</Button>
                </StyledRow>
              </Column>
            </form>
          )}
        </Formik>
      </ModalCard>
      <Background onClick={onClose} />
    </ModalWrapper>
  );
};
