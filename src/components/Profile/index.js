import React, { useRef, useState } from 'react';
import moment from 'moment';

import { Column, Row } from '../Layout';
import { Age, Email, Phone, Copy } from '../Icons';
import { Wrapper, Section, Footer, Name, NameRow, StyledColumn, CopiedText } from './styled';
import SocialRow from '../SocialRow';
import { HELLO, AGE, EMAIL, PHONE, COPIED } from '../../constants';

const photo = require('../../assets/image/cv_photo.jpg');

export default () => {
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

  return (
    <Wrapper>
      <Row>
        <Column>
          <img src={photo} width="250px" alt="cv_photo" />
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
  );
};
