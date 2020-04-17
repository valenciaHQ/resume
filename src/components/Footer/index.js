import React from 'react';
import styled from 'styled-components';

import { Row, Column } from '../Layout';
import SocialRow from '../SocialRow';

const Wrapper = styled(Column)`
  height: 100px;
  margin-top: 30px;
  background-color: ${(props) => props.theme.primaryColor};
  padding-left: 20px;
`;

export default () => (
  <Wrapper>
    <Row style={{ flex: 1, alignItems: 'center' }}>
      <SocialRow width="300px" iconSize="2x" />
    </Row>
  </Wrapper>
);
