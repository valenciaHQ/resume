import React from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";

import Profile from "../Profile";
import SocialRow from "../SocialRow";
import { Row, Column } from "../Layout";
import { Code, English, Spanish } from "../Icons";
import { GITHUB_REPOSITORY, DEVICE } from "../../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.jade};
  justify-content: center;
  align-items: center;
  padding: 15px 0px;

  ${({ isDesktopOrLaptop }) =>
    isDesktopOrLaptop &&
    css`
      padding: ${(props) =>
        props.isDesktopOrLaptop && props.theme.measures.desktopPadding};
      height: ${(props) => props.isDesktopOrLaptop && "45%"};
    `};
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};

  ${({ isDesktopOrLaptop }) =>
    isDesktopOrLaptop &&
    css`
      position: absolute;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.white};
      top: 50px;
      left: 10%;
    `}
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  ${({ isDesktopOrLaptop }) =>
    isDesktopOrLaptop &&
    css`
      position: absolute;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.white};
      top: 100px;
      left: 10%;
    `}
`;
const NetworkContainer = styled.div`
  margin-top: 30px;
  ${({ isDesktopOrLaptop }) =>
    isDesktopOrLaptop &&
    css`
      position: absolute;
      top: 50px;
      right: 10%;
    `};
`;

const ActionsContainer = styled(Row)`
  align-items: center;
  justify-content: space-around;
  color: white;

  @media ${DEVICE.mobileS} {
    margin-top: 10px;
  }

  @media ${DEVICE.tablet} {
    margin-top: 30px;
  }
`;

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const { i18n } = useTranslation();

  return (
    <Wrapper>
      <Title isDesktopOrLaptop={isDesktopOrLaptop}>Alejandro Valencia</Title>
      <SubTitle isDesktopOrLaptop={isDesktopOrLaptop}>
        Software Engineer
      </SubTitle>
      <Profile />
      <NetworkContainer isDesktopOrLaptop={isDesktopOrLaptop}>
        <SocialRow
          width={isDesktopOrLaptop ? "250px" : "150px"}
          iconSize={isDesktopOrLaptop ? "2x" : null}
          roundedIcons
        />
        <Column>
          <ActionsContainer>
            <Code
              onClick={() => window.open(GITHUB_REPOSITORY)}
              size={isDesktopOrLaptop && "2x"}
            />
            <English
              onClick={() => {
                i18n.changeLanguage("en");
              }}
              size={isDesktopOrLaptop && "2x"}
            />
            <Spanish
              onClick={() => {
                i18n.changeLanguage("es");
              }}
              size={isDesktopOrLaptop && "2x"}
            />
          </ActionsContainer>
        </Column>
      </NetworkContainer>
    </Wrapper>
  );
};

export default Header;
