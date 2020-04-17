import styled from 'styled-components';
import { Row, Column } from '../Layout';

export const Wrapper = styled.div`
  position: relative;
  top: 200px;
  left: 20%;
  height: 400px;
  width: 60%;
  background-color: white;
  box-shadow: 0px 14px 20px 0px rgba(0, 0, 0, 0.75);
`;

export const Section = styled(Row)`
  padding: 20px;
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
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 'auto')};
  justify-content: space-around;
`;

export const CopiedText = styled(Column)`
  margin-left: 5px;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.primaryColor};
`;
