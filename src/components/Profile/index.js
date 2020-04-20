import React, { useRef, useState } from 'react';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

import { Column, Row } from '../Layout';
import { Age, Email, Phone, Copy } from '../Icons';
import { Wrapper, Section, Footer, Name, NameRow, StyledColumn, CopiedText, Image } from './styled';
import SocialRow from '../SocialRow';
import { HELLO, AGE, EMAIL, PHONE, COPIED, YEARS } from '../../constants';

const photo = require('../../assets/image/cv_photo.jpg');

export default () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const [copied, setCopied] = useState(false);
  const mailRef = useRef();

  const handleCopy = () => {
    const el = document.createElement('textarea');
    el.value = mailRef.current.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  };

  return isDesktopOrLaptop ? (
    <Wrapper>
      <Row>
        <Column>
          <Image src={photo} alt="cv_photo" />
        </Column>
        <Column style={{ flex: 1 }}>
          <Section style={{ borderBottom: '1px solid lightgray' }}>
            <Column>
              <NameRow>
                <Column>
                  <p>{HELLO}</p>
                </Column>
                <Column>
                  <Name>ALEJANDRO VALENCIA</Name>
                </Column>
              </NameRow>
              <Row>
                <p style={{ margin: '0px' }}>Software engineer</p>
              </Row>
            </Column>
          </Section>
          <Section style={{ flex: 1 }}>
            <Column style={{ fontSize: 'large', height: '75%' }}>
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
                  <Row>{AGE}</Row>
                  <Row>{EMAIL}</Row>
                  <Row>{PHONE}</Row>
                </StyledColumn>
                <StyledColumn>
                  <Row>{moment().diff('1989-08-22', 'years')}</Row>
                  <Row>
                    <Column ref={mailRef}>alejandro.d.valencia@gmail.com</Column>
                    <Column style={{ marginLeft: '5px' }}>
                      <Copy onClick={handleCopy} />
                    </Column>
                    {copied && <CopiedText>{`${COPIED}!`}</CopiedText>}
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
        <Image src={photo} alt="cv_photo" mobile />
      </Column>
      <StyledColumn mobile>
        <Row>
          <Column ref={mailRef}>alejandro.d.valencia@gmail.com</Column>
        </Row>
        <Row>{`${moment().diff('1989-08-22', 'years')} ${YEARS}`}</Row>
        <Row>+ 5411 40317830</Row>
      </StyledColumn>
    </Wrapper>
  );
};
