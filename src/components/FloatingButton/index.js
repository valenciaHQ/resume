import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import { Wizard, Code, English, Spanish } from '../Icons';

const CodeWrapper = styled.div`
  position: fixed;
  right: 100px;
  top: 55%;
  color: ${(props) => props.theme.colors.black};
`;

const SpanishWrapper = styled.div`
  position: fixed;
  right: 90px;
  top: 47%;
  color: ${(props) => props.theme.colors.black};
`;

const EnglishWrapper = styled.div`
  position: fixed;
  right: 50px;
  top: 40%;
  color: ${(props) => props.theme.colors.black};
`;

const Wrapper = styled.div`
  position: fixed;
  right: 10px;
  top: 50%;
  color: ${(props) => props.theme.colors.black};
`;

export default () => {
  const [showChilds, setShowChilds] = useState(false);

  const toogle = () => setShowChilds(!showChilds);
  return (
    <Wrapper>
      {showChilds && (
        <>
          <Tooltip
            placement="left"
            overlay={<span>Ver codigo fuente</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <CodeWrapper>
              <Code onClick={() => console.log('Open')} size="2x" />
            </CodeWrapper>
          </Tooltip>
          <Tooltip
            placement="top"
            overlay={<span>Ver en inglés (proximamente)</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <EnglishWrapper>
              <English disabled />
            </EnglishWrapper>
          </Tooltip>
          <Tooltip
            placement="left"
            overlay={<span>Ver en español</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <SpanishWrapper>
              <Spanish />
            </SpanishWrapper>
          </Tooltip>
        </>
      )}

      <Wizard onClick={toogle} size="4x" />
    </Wrapper>
  );
};
