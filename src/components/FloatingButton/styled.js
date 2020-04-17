import styled from 'styled-components';

export const IconWrapper = styled.div`
  position: fixed;
  color: ${(props) => props.theme.colors.black};
`;

export const CodeWrapper = styled(IconWrapper)`
  right: 100px;
  top: 55%;
`;

export const SpanishWrapper = styled(IconWrapper)`
  right: 90px;
  top: 47%;
`;

export const EnglishWrapper = styled(IconWrapper)`
  right: 50px;
  top: 40%;
`;

export const CommentWrapper = styled(IconWrapper)`
  right: 50px;
  top: 65%;
`;

export const MainWrapper = styled(IconWrapper)`
  right: 10px;
  top: 50%;
`;
