import React from 'react';
import styled from 'styled-components';

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
  margin-top: 200px;
  justify-content: center;
  padding: ${(props) => props.theme.measures.mainPadding};
`;

export default () => (
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
  </Container>
);
