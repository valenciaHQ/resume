import styled from 'styled-components';
import { DEVICE } from '../../constants';

export const IconWrapper = styled.div`
  position: fixed;
  color: ${(props) => props.theme.colors.black};
`;

export const CodeWrapper = styled(IconWrapper)`
  @media ${DEVICE.mobileS} {
    right: 5%;
    top: 55%;
  }
  @media ${DEVICE.tablet} {
    right: 5%;
    top: 56%;
  }

  @media ${DEVICE.laptop} {
    top: 58%;
  }

  @media ${DEVICE.laptopL} {
    top: 60%;
  }
`;

export const EnglishWrapper = styled(IconWrapper)`
  @media ${DEVICE.mobileS} {
    right: 15%;
    top: 46%;
  }
  @media ${DEVICE.tablet} {
    right: 5%;
  }

  @media ${DEVICE.laptop} {
    top: 45%;
  }

  @media ${DEVICE.laptopL} {
    top: 46%;
  }
`;

export const SpanishWrapper = styled(IconWrapper)`
  @media ${DEVICE.mobileS} {
    right: 3%;
    top: 43%;
  }
  @media ${DEVICE.tablet} {
    right: 9%;
    top: 51%;
  }

  @media ${DEVICE.laptopL} {
    top: 53%;
  }
`;

export const MainWrapper = styled(IconWrapper)`
  right: 2%;
  top: 50%;
`;
