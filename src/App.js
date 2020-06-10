/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

import { Column, Row } from './components/Layout';

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
  margin-top: ${(props) => props.isDesktopOrLaptop && '200px'};
  justify-content: center;
  padding: ${(props) =>
    props.isDesktopOrLaptop
      ? props.theme.measures.desktopPadding
      : props.theme.measures.mobilePadding};
`;

export default () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1024 });

  return (
    <Container>
      <Header />
      <Body isDesktopOrLaptop={isDesktopOrLaptop}>
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
    </Container>
  );
};
