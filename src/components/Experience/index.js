/* eslint-disable react/no-array-index-key */
import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { useTranslation } from "next-i18next";

import useDeviceSize from "../../hooks/useDeviceSize";
import { Row, Column, SectionTitle, SectionBox } from "../Layout";

import { Briefcase } from "../Icons";

const Experience = () => {
  const { isDesktopOrLaptop } = useDeviceSize();

  const { t, ready } = useTranslation();

  return (
    <Column style={{ flex: 1, alignItems: "center" }}>
      <Row>
        <SectionTitle>{t("experience.title")}</SectionTitle>
      </Row>
      <SectionBox isDesktopOrLaptop={isDesktopOrLaptop}>
        <Column style={{ flex: 1 }}>
          {/*<Timeline>
            {ready &&
              t("experience.items", { returnObjects: true }).map(
                ({ range, title, description, location }, index) => (
                  <TimelineEvent
                    key={index}
                    title={title}
                    createdAt={range}
                    icon={<Briefcase />}
                    subtitle={location}
                  >
                    {"" || description}
                  </TimelineEvent>
                )
              )}
                </Timeline>*/}
        </Column>
      </SectionBox>
    </Column>
  );
};

export default Experience;
