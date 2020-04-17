import React, { useState, useContext } from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import { Wizard, Code, English, Spanish, Light } from '../Icons';

import {
  GITHUB_REPOSITORY,
  VIEW_ENGLISH,
  COMMING_SOON,
  VIEW_CODE,
  VIEW_SPANISH,
  SEND_COMMENT
} from '../../constants';
import { MainWrapper, CodeWrapper, EnglishWrapper, SpanishWrapper, CommentWrapper } from './styled';
import ModalContext from '../../ModalContext';

export default () => {
  const [showChilds, setShowChilds] = useState(false);
  const { toogleModal } = useContext(ModalContext);

  const toogleOptions = () => setShowChilds(!showChilds);
  return (
    <MainWrapper>
      {showChilds && (
        <>
          <Tooltip
            placement="left"
            overlay={<span>{VIEW_CODE}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <CodeWrapper>
              <Code onClick={() => window.open(GITHUB_REPOSITORY)} size="2x" />
            </CodeWrapper>
          </Tooltip>
          <Tooltip
            placement="top"
            overlay={<span>{`${VIEW_ENGLISH} (${COMMING_SOON.toLowerCase()})`}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <EnglishWrapper>
              <English disabled />
            </EnglishWrapper>
          </Tooltip>
          <Tooltip
            placement="left"
            overlay={<span>{VIEW_SPANISH}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <SpanishWrapper>
              <Spanish />
            </SpanishWrapper>
          </Tooltip>
          <Tooltip
            placement="left"
            overlay={<span>{SEND_COMMENT}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <CommentWrapper>
              <Light size="2x" onClick={toogleModal} />
            </CommentWrapper>
          </Tooltip>
        </>
      )}
      <Wizard onClick={toogleOptions} size="4x" />
    </MainWrapper>
  );
};
