import React, { useState, useContext } from 'react';
import Tooltip from 'rc-tooltip';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import 'rc-tooltip/assets/bootstrap.css';

import { Code, English, Spanish, Light, Cogs } from '../Icons';

import { MainWrapper, CodeWrapper, EnglishWrapper, SpanishWrapper, CommentWrapper } from './styled';
import ModalContext from '../../ModalContext';
import { GITHUB_REPOSITORY } from '../../constants';

export default () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const [showChilds, setShowChilds] = useState(true);
  const { toogleModal } = useContext(ModalContext);
  const { i18n, t } = useTranslation();

  const toogleOptions = () => setShowChilds(!showChilds);
  return (
    <MainWrapper>
      {showChilds && (
        <>
          <Tooltip
            placement="left"
            overlay={<span>{t('view_code')}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <CodeWrapper>
              <Code
                onClick={() => window.open(GITHUB_REPOSITORY)}
                size={isDesktopOrLaptop && '2x'}
              />
            </CodeWrapper>
          </Tooltip>
          <Tooltip
            placement="top"
            overlay={<span>{`${t('view_english')}`}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <EnglishWrapper>
              <English
                onClick={() => {
                  i18n.changeLanguage('en');
                }}
              />
            </EnglishWrapper>
          </Tooltip>
          <Tooltip
            placement="left"
            overlay={<span>{`${t('view_spanish')}`}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <SpanishWrapper>
              <Spanish
                onClick={() => {
                  i18n.changeLanguage('es');
                }}
              />
            </SpanishWrapper>
          </Tooltip>
          <Tooltip
            placement="bottom"
            overlay={<span>{t('send_comment')}</span>}
            arrowContent={<div className="rc-tooltip-arrow-inner" />}
          >
            <CommentWrapper>
              <Light size={isDesktopOrLaptop && '2x'} onClick={toogleModal} />
            </CommentWrapper>
          </Tooltip>
        </>
      )}
      <Cogs onClick={toogleOptions} size={isDesktopOrLaptop && '4x'} />
    </MainWrapper>
  );
};
