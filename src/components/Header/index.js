import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile';
import SocialRow from '../SocialRow';

const Wrapper = styled.div`
  padding: ${(props) => props.theme.measures.mainPadding};
  height: ${(props) => props.theme.measures.headerHeight};
  background-color: ${(props) => props.theme.colors.jade};
`;

const Title = styled.div`
  position: absolute;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};
  top: 50px;
  left: 10%;
`;

const SubTitle = styled.div`
  position: absolute;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  top: 100px;
  left: 10%;
`;
const NetworkContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 10%;
`;

export default () => (
  <Wrapper>
    <Title>Alejandro Valencia</Title>
    <SubTitle>Software Engineer</SubTitle>
    <Profile />
    <NetworkContainer>
      <SocialRow width="250px" iconSize="2x" roundedIcons />
    </NetworkContainer>
  </Wrapper>
);
