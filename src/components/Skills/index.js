/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row, Column, SectionTitle, SectionBox } from '../Layout';
import Chip from '../Chip';

import data from '../../constants/data';

const TitleRow = styled(Row)`
  justify-content: center;
  align-items: center;
`;

const ChipsRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
`;

export default () => (
  <Column style={{ flex: 1, alignItems: 'center' }}>
    <Row>
      <SectionTitle>Habilidades</SectionTitle>
    </Row>
    <SectionBox>
      <Column>
        {data.skills.map(({ title, additionalInfo, i }) => (
          <Fragment key={i}>
            <TitleRow>
              <p>{title}</p>
            </TitleRow>

            <ChipsRow>
              {additionalInfo.map((info, j) => (
                <Chip key={j}>{info}</Chip>
              ))}
            </ChipsRow>
          </Fragment>
        ))}
      </Column>
    </SectionBox>
  </Column>
);
