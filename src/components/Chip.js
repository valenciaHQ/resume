import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: 50px;
  border-radius: 25px;
  color: white;
  background-color: ${(props) => props.theme.primaryColor};
  margin: 8px;
`;
