import React from 'react';
import styled from 'styled-components';
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

  return (
    <Column style={{ flex: 1, alignItems: 'center' }}>
      <Row>
        <SectionTitle>Educación</SectionTitle>
      </Row>
      <BoxWrapper isDesktopOrLaptop={isDesktopOrLaptop}>
        <Box style={{ flex: 1, padding: '20px' }}>
          <EntryRow>
            <ImageWrapper>
              <Image src={istea} alt="istea" />
            </ImageWrapper>
            <Column>
              <div style={{ fontWeight: 'bold' }}>
                Tecnicatura Superior en desarrollo de software
              </div>
              <div>ISTEA</div>
              <div>Finalizada</div>
            </Column>
          </EntryRow>
          <EntryRow>
            <ImageWrapper>
              <Image src={utn} alt="utn" />
            </ImageWrapper>
            <Column>
              <div>Desarrollo en Reactjs</div>
              <div>Extensión Universitaria - UTN Buenos Aires</div>
            </Column>
          </EntryRow>
          <EntryRow>
            <ImageWrapper>
              <Image src={udemy} alt="udemy" />
            </ImageWrapper>
            <Column>
              <div>Complete CSS Flexbox guide</div>
            </Column>
          </EntryRow>
          <EntryRow>
            <ImageWrapper>
              <Image src={udemy} alt="udemy" />
            </ImageWrapper>
            <Column>
              <div>Creative CSS Animations, Transitions And Transforms Course</div>
            </Column>
          </EntryRow>
        </Box>
      </BoxWrapper>
    </Column>
  );
};
