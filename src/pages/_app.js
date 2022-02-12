import { appWithTranslation } from "next-i18next";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #04b57b;
  margin: 0px;
}
`;

const theme = {
  primaryColor: "#04b57b",
  secondaryColor: "#FFFFFF",
  colors: {
    blueChill: "#118496",
    mercury: "#e7e7e7",
    gallery: "#EEEEEE",
    red: "#cc0000",
    white: "#FFFFFF",
    black: "#000000",
    jade: "#04b57b",
    aliceblue: "aliceblue",
  },
  fontSizes: {
    small: "1em",
    medium: "1.2em",
    large: "1.4em",
    xLarge: "2rem",
  },
  measures: {
    desktopPadding: "0px 100px",
    mobilePadding: "0px 25px",
  },
};

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default appWithTranslation(MyApp);
