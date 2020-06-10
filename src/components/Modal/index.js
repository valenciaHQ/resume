import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

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
import { FIREBASE_COLLECTION, SUCCESS_MESSAGE, ERROR_MESSAGE } from '../../constants';
import ToastContext from '../../ToastContext';

export default ({ show, onClose }) => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const { showToast } = useContext(ToastContext);
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    email: Yup.string().email(t('valid_mail')).required(t('required')),
    comment: Yup.string().min(10, t('too_short')).required(t('required'))
  });

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
                  <Button type="submit">{t('send')}</Button>
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
