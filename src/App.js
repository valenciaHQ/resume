import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

import { Column, Row } from './components/Layout';
import Modal from './components/Modal';
import ModalContext from './ModalContext';
import ToastContext from './ToastContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mercury};
`;

const Section = styled(Row)`
  justify-content: center;
`;

const Body = styled(Column)`
  flex: 1;
  margin-top: 200px;
  justify-content: center;
  padding: ${(props) => props.theme.measures.mainPadding};
`;

export default () => {
  const [modal, setModal] = useState(false);
  const toogleModal = () => setModal(!modal);

  const showNotification = (message) => {
    toast(message, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return (
    <ModalContext.Provider value={{ value: modal, toogleModal }}>
      <ToastContext.Provider value={{ showToast: showNotification }}>
        <Container>
          <Header />
          <Body>
            <Section>
              <Skills />
            </Section>
            <Section>
              <Experience />
            </Section>
            <Section>
              <Education />
            </Section>
          </Body>
          <Footer />
          <FloatingButton />
          <ModalContext.Consumer>
            {({ value }) => <Modal show={value} onClose={toogleModal} />}
          </ModalContext.Consumer>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
          />
        </Container>
      </ToastContext.Provider>
    </ModalContext.Provider>
  );
};
