import styled, { css } from 'styled-components';
import { Row, Column } from '../Layout';

export const Wrapper = styled.div`
  position: relative;
  top: 200px;
  background-color: white;
  box-shadow: 0px 14px 20px 0px rgba(0, 0, 0, 0.75);

  ${({ mobile }) =>
    mobile &&
    css`
      display: flex;
      position: static;
      margin: 30px 0px 10px 0px;
      font-size: small;
    `}
`;

export const Section = styled(Row)`
  padding: 20px;
`;

export const Image = styled.img`
  width: 250px;

  ${({ mobile }) =>
    mobile &&
    css`
      width: 100px;
    `}
`;

export const Footer = styled(Row)`
  height: 50px;
  border-top: 1px solid lightgray;
  background-color: #04b57b;
  color: white;
  justify-content: space-around;
  align-items: center;
`;

export const NameRow = styled(Row)`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const Name = styled.p`
  margin-left: 5px;
  font-weight: bolder;
  color: ${(props) => props.theme.primaryColor};
`;

export const StyledColumn = styled(Column)`
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')};
  justify-content: space-around;
  ${({ mobile }) =>
    mobile &&
    css`
      flex: 1;
      align-items: center;
      padding: 30px 10px;
    `}
`;

export const CopiedText = styled(Column)`
  margin-left: 20px;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.primaryColor};
`;
