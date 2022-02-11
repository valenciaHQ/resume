/* eslint-disable react/no-array-index-key */
import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "next-i18next";

import { Row, Column, SectionTitle, SectionBox } from "../Layout";

import { Briefcase } from "../Icons";

const Experience = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const { t, ready } = useTranslation();

  console.log("ready: ", ready);
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
