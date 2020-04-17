import styled from 'styled-components';
import { Row } from '../Layout';

export const StyledRow = styled(Row)`
  padding: 10px 25px;
  background-color: ${(props) => props.colorized && props.theme.primaryColor};
  justify-content: ${(props) => props.centered && 'center'};
  align-items: ${(props) => props.centered && 'center'};
`;

export const Button = styled.button`
  width: 128px;
  height: 32px;
  border-radius: 10px;
  font-size: medium;
  background-color: ${(props) => props.theme.colors.white};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled.div`
  position: relative;
  min-width: 500px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 1px solid;
  padding: 10px 10px 5px 10px;
  font-size: 16px;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.primaryColor};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  height: 150px;
  padding: 15px 10px;
  font-size: 16px;
  border: none;
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.43);

  :focus {
    border: 1px solid ${(props) => props.theme.primaryColor};
    outline: none;
  }
`;

export const Error = styled.div`
  color: ${(props) => props.theme.colors.red};
`;
