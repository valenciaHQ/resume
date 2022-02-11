import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Footer from "./Footer";

import { Column, Row } from "./Layout";

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
  margin-top: ${(props) => props.isDesktopOrLaptop && "200px"};
  justify-content: center;
  padding: ${(props) =>
    props.isDesktopOrLaptop
      ? props.theme.measures.desktopPadding
      : props.theme.measures.mobilePadding};
`;
const App = () => {
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
    </Container>
  );
};

export default App;
