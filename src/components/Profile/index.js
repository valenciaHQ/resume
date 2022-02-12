import React, { useRef, useState } from "react";
import moment from "moment";
import { useTranslation } from "next-i18next";
import useDeviceSize from "../../hooks/useDeviceSize";

import { Column, Row } from "../Layout";
import { Age, Email, Phone, Copy } from "../Icons";
import {
  Wrapper,
  Section,
  Footer,
  Name,
  NameRow,
  StyledColumn,
  CopiedText,
  Image,
} from "./styled";
import SocialRow from "../SocialRow";

const Profile = () => {
  const { isDesktopOrLaptop } = useDeviceSize();

  const [copied, setCopied] = useState(false);
  const mailRef = useRef();
  const { t } = useTranslation();

  const handleCopy = () => {
    const el = document.createElement("textarea");
    el.value = mailRef.current.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  return isDesktopOrLaptop ? (
    <Wrapper>
      <Row>
        <Column>
          <Image src="/image/cv_photo.jpg" alt="cv_photo" />
        </Column>
        <Column style={{ flex: 1 }}>
          <Section style={{ borderBottom: "1px solid lightgray" }}>
            <Column>
              <NameRow>
                <Column>
                  <p>{t("hello")}</p>
                </Column>
                <Column>
                  <Name>ALEJANDRO VALENCIA</Name>
                </Column>
              </NameRow>
              <Row>
                <p style={{ margin: "0px" }}>
                  React Developer - Software Developer - Crypto enthusiast
                </p>
              </Row>
            </Column>
          </Section>
          <Section style={{ flex: 1 }}>
            <Column style={{ fontSize: "large", height: "75%" }}>
              <Row style={{ flex: 1 }}>
                <StyledColumn marginRight="10px">
                  <Row>
                    <Age />
                  </Row>
                  <Row>
                    <Email />
                  </Row>
                  <Row>
                    <Phone />
                  </Row>
                </StyledColumn>
                <StyledColumn marginRight="40px">
                  <Row>{t("age")}</Row>
                  <Row>{t("email")}</Row>
                  <Row>{t("phone")}</Row>
                </StyledColumn>
                <StyledColumn>
                  <Row>{moment().diff("1989-08-22", "years")}</Row>
                  <Row>
                    <Column ref={mailRef}>
                      alejandro.d.valencia@gmail.com
                    </Column>
                    <Column style={{ marginLeft: "5px" }}>
                      <Copy onClick={handleCopy} />
                    </Column>
                    {copied && <CopiedText>{`${t("copied")}!`}</CopiedText>}
                  </Row>
                  <Row>+ 5411 40317830</Row>
                </StyledColumn>
              </Row>
            </Column>
          </Section>
          <Footer>
            <SocialRow iconSize="lg" />
          </Footer>
        </Column>
      </Row>
    </Wrapper>
  ) : (
    <Wrapper mobile>
      <Column>
        <Image src="/image/cv_photo.jpg" alt="cv_photo" mobile />
      </Column>
      <StyledColumn mobile>
        <Row>
          <Column ref={mailRef}>alejandro.d.valencia@gmail.com</Column>
        </Row>
        <Row>{`${moment().diff("1989-08-22", "years")} ${t("years")}`}</Row>
        <Row>+ 5411 40317830</Row>
      </StyledColumn>
    </Wrapper>
  );
};

export default Profile;
