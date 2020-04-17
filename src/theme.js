/* eslint-disable comma-dangle */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#04b57b',
  secondaryColor: '#FFFFFF',
  colors: {
    blueChill: '#118496',
    mercury: '#e7e7e7',
    gallery: '#EEEEEE',
    white: '#FFFFFF',
    black: '#000000',
    jade: '#04b57b',
    aliceblue: 'aliceblue'
  },
  fontSizes: {
    small: '0.8em',
    medium: '1em',
    large: '1.3em',
    xLarge: '2rem'
  },
  measures: {
    mainPadding: '0px 100px',
    headerHeight: '45%'
  }
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
