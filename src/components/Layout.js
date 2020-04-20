import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme.primaryColor};
  margin: 50px 0px;
`;

export const SectionBox = styled(Row)`
  width: ${(props) => props.isDesktopOrLaptop && '70%'};
  justify-content: center;
  padding: 20px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.75);
`;
