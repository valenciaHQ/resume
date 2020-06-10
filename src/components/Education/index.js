import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import { Row, Column, SectionTitle, SectionBox } from '../Layout';

const udemy = require('../../assets/image/udemy.jpeg');
const utn = require('../../assets/image/utn.png');
const istea = require('../../assets/image/istea.jpg');

const Image = styled.img`
  width: 70px;
`;

const EntryRow = styled(Row)`
  margin-bottom: 10px;
`;

const BoxWrapper = styled(SectionBox)`
  padding: ${(props) => (props.isDesktopOrLaptop ? '0px 60px' : '0px 20px')};
  background-color: ${(props) => props.theme.primaryColor};
`;

const Box = styled(Column)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
`;

const ImageWrapper = styled(Column)`
  margin-right: 25px;
`;

export default () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const { t } = useTranslation();

  return (
    <Column style={{ flex: 1, alignItems: 'center' }}>
      <Row>
        <SectionTitle>{t('education.title')}</SectionTitle>
      </Row>
      <BoxWrapper isDesktopOrLaptop={isDesktopOrLaptop}>
        <Box style={{ flex: 1, padding: '20px' }}>
          <EntryRow>
            <ImageWrapper>
              <Image src={istea} alt="istea" />
            </ImageWrapper>
            <Column>
              <div style={{ fontWeight: 'bold' }}>{t('education.istea.name')}</div>
              <div>{t('education.istea.career')}</div>
              <div>{t('education.istea.status')}</div>
            </Column>
          </EntryRow>
          <EntryRow>
            <ImageWrapper>
              <Image src={utn} alt="utn" />
            </ImageWrapper>
            <Column>
              <div>{t('education.utn.name')}</div>
              <div>{t('education.utn.career')}</div>
            </Column>
          </EntryRow>
          <EntryRow>
            <ImageWrapper>
              <Image src={udemy} alt="udemy" />
            </ImageWrapper>
            <Column>
              <div>{t('education.udemy_flex')}</div>
            </Column>
          </EntryRow>
          <EntryRow>
            <ImageWrapper>
              <Image src={udemy} alt="udemy" />
            </ImageWrapper>
            <Column>
              <div>{t('education.udemy_css')}</div>
            </Column>
          </EntryRow>
        </Box>
      </BoxWrapper>
    </Column>
  );
};
