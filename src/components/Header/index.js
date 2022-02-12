import React from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "next-i18next";

import useDeviceSize from "../../hooks/useDeviceSize";
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
  const { isDesktopOrLaptop } = useDeviceSize();
  const { i18n } = useTranslation();

  const handleChangeLanguaje = (languaje) => i18n.changeLanguage(languaje);

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
          isDesktopOrLaptop={isDesktopOrLaptop}
          roundedIcons
        />
        <Column>
          <ActionsContainer>
            <Code
              onClick={() => window.open(GITHUB_REPOSITORY)}
              isDesktopOrLaptop={isDesktopOrLaptop}
            />
            <English
              onClick={() => handleChangeLanguaje("en")}
              isDesktopOrLaptop={isDesktopOrLaptop}
            />
            <Spanish
              onClick={() => handleChangeLanguaje("es")}
              isDesktopOrLaptop={isDesktopOrLaptop}
            />
          </ActionsContainer>
        </Column>
      </NetworkContainer>
    </Wrapper>
  );
};

export default Header;
