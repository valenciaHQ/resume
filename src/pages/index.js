import React from "react";

import Head from "next/head";
import App from "../components/App";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Bienvenidos!" />

      <title>Alejandro Valencia</title>
    </Head>
    <App />
  </>
);

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
