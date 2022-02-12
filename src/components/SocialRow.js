/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import styled from "styled-components";

import { GitHub, Twitter, Instagram, StackOverFlow, Linkedln } from "./Icons";
import { Row, Column } from "./Layout";
import { SOCIAL_NETWORK } from "../constants";

const Wrapper = styled(Row)`
  flex: 1;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: ${(props) => props.theme.colors.white};
  justify-content: space-around;
`;

const IconWrapper = styled(Column)``;

const Icon = ({ Component }) => <IconWrapper>{Component}</IconWrapper>;

const SocialRow = ({ width, isDesktopOrLaptop, roundedWrapper }) => (
  <Wrapper width={width}>
    <Icon
      Component={
        <GitHub
          isDesktopOrLaptop={isDesktopOrLaptop}
          onClick={() => window.open(SOCIAL_NETWORK.GITHUB)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <Twitter
          isDesktopOrLaptop={isDesktopOrLaptop}
          onClick={() => window.open(SOCIAL_NETWORK.TWITTER)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <Instagram
          isDesktopOrLaptop={isDesktopOrLaptop}
          onClick={() => window.open(SOCIAL_NETWORK.INSTAGRAM)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <StackOverFlow
          isDesktopOrLaptop={isDesktopOrLaptop}
          onClick={() => window.open(SOCIAL_NETWORK.STACK_EXCHANGE)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <Linkedln
          isDesktopOrLaptop={isDesktopOrLaptop}
          onClick={() => window.open(SOCIAL_NETWORK.LINKEDLN)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
  </Wrapper>
);

export default SocialRow;
