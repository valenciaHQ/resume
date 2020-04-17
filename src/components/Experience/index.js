/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import { Row, Column, SectionTitle, SectionBox } from '../Layout';

import data from '../../constants/data';

export default () => (
  <Column style={{ flex: 1, alignItems: 'center' }}>
    <Row>
      <SectionTitle>Experiencia Profesional</SectionTitle>
    </Row>
    <SectionBox>
      <Column style={{ flex: 1 }}>
        <Timeline>
          {data.experience.map(({ range, title, company, description, location, Icon }, index) => (
            <TimelineEvent
              key={index}
              title={`${title} en ${company}`}
              createdAt={range}
              icon={Icon}
              subtitle={location}
            >
              {description}
            </TimelineEvent>
          ))}
        </Timeline>
      </Column>
    </SectionBox>
  </Column>
);
