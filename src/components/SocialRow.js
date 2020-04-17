/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import styled from 'styled-components';

import { GitHub, Twitter, Instagram, StackExchange, Linkedln } from './Icons';
import { Row, Column } from './Layout';
import { SOCIAL_NETWORK } from '../constants';

const Wrapper = styled(Row)`
  flex: 1;
  width: ${(props) => (props.width ? props.width : 'auto')};
  color: ${(props) => props.theme.colors.white};
  justify-content: space-around;
`;

const IconWrapper = styled(Column)``;

const Icon = ({ Component }) => <IconWrapper>{Component}</IconWrapper>;

export default ({ width, iconSize, roundedWrapper }) => (
  <Wrapper width={width}>
    <Icon
      Component={
        <GitHub
          size={iconSize}
          onClick={() => window.open(SOCIAL_NETWORK.GITHUB)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <Twitter
          size={iconSize}
          onClick={() => window.open(SOCIAL_NETWORK.TWITTER)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <Instagram
          size={iconSize}
          onClick={() => window.open(SOCIAL_NETWORK.INSTAGRAM)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <StackExchange
          size={iconSize}
          onClick={() => window.open(SOCIAL_NETWORK.STACK_EXCHANGE)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
    <Icon
      Component={
        <Linkedln
          size={iconSize}
          onClick={() => window.open(SOCIAL_NETWORK.LINKEDLN)}
          roundedWrapper={roundedWrapper}
        />
      }
    />
  </Wrapper>
);
