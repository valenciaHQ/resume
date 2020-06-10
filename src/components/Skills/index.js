/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Row, Column, SectionTitle, SectionBox } from '../Layout';
import Chip from '../Chip';

const TitleRow = styled(Row)`
  justify-content: center;
  align-items: center;
`;

const ChipsRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
`;

export default () => {
  const { t } = useTranslation();

  return (
    <Column style={{ flex: 1, alignItems: 'center' }}>
      <Row>
        <SectionTitle>{t('skills.title')}</SectionTitle>
      </Row>
      <SectionBox>
        <Column>
          {t('skills.items', { returnObjects: true }).map(({ title, additionalInfo }, index) => (
            <Fragment key={index}>
              <TitleRow>
                <p>{title}</p>
              </TitleRow>

              <ChipsRow>
                {additionalInfo.map((info, j) => (
                  <Chip english={info === 'Advanced English'} key={j}>
                    {info}
                  </Chip>
                ))}
              </ChipsRow>
            </Fragment>
          ))}
        </Column>
      </SectionBox>
    </Column>
  );
};
