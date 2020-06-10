import React, { useState } from 'react';
import Tooltip from 'rc-tooltip';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import 'rc-tooltip/assets/bootstrap.css';

import { Code, English, Spanish, Cogs } from '../Icons';

import { MainWrapper, CodeWrapper, EnglishWrapper, SpanishWrapper } from './styled';
import { GITHUB_REPOSITORY } from '../../constants';

export default () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const [showChilds, setShowChilds] = useState(isDesktopOrLaptop);
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
                size={isDesktopOrLaptop && '2x'}
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
                size={isDesktopOrLaptop && '2x'}
              />
            </SpanishWrapper>
          </Tooltip>
        </>
      )}
      <Cogs onClick={toogleOptions} size={isDesktopOrLaptop ? '4x' : '2x'} />
    </MainWrapper>
  );
};
