import React from 'react';

import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faStackExchange,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import {
  faBriefcase,
  faEnvelope,
  faMobileAlt,
  faUserClock,
  faCopy,
  faHatWizard,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

const spanishFlagIcon = require('../assets/icons/spain-flag.png');
const englishFlagIcon = require('../assets/icons/united-kingdom-flag.png');

const Wrapper = styled.div`
  ${({ onClick }) =>
    onClick &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const Code = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faCode} size={size} />
  </Wrapper>
);

export const Wizard = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faHatWizard} size={size} />
  </Wrapper>
);

export const Copy = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faCopy} size={size} />
  </Wrapper>
);

export const Age = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faUserClock} size={size} />
  </Wrapper>
);

export const Phone = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faMobileAlt} size={size} />
  </Wrapper>
);

export const Email = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faEnvelope} size={size} />
  </Wrapper>
);

export const Facebook = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faFacebook} size={size} />
  </Wrapper>
);

export const Twitter = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faTwitter} size={size} />
  </Wrapper>
);

export const Instagram = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faInstagram} size={size} />
  </Wrapper>
);

export const StackExchange = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faStackExchange} size={size} />
  </Wrapper>
);

export const Linkedln = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faLinkedin} size={size} />
  </Wrapper>
);

export const GitHub = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faGithub} size={size} />
  </Wrapper>
);

export const Briefcase = ({ size, onClick }) => (
  <Wrapper onClick={onClick}>
    <FontAwesomeIcon icon={faBriefcase} size={size} />
  </Wrapper>
);

export const English = ({ onClick, disabled }) => (
  <Wrapper onClick={onClick}>
    <input
      type="image"
      src={englishFlagIcon}
      border="0"
      alt="english"
      style={disabled && { opacity: '0.2' }}
    />
  </Wrapper>
);

export const Spanish = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <input type="image" src={spanishFlagIcon} border="0" alt="spanish" />
  </Wrapper>
);
