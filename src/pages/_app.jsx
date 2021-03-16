import React, { useEffect } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import Router from 'next/router';

import GTMPageView from '../utils/gtm';
import useRouterScroll from '../utils/UseRouterScroll';
import GlobalStateProvider from '../store/GlobalStateProvider';
import UserTheme from '../components/UserTheme';

const App = ({ Component, pageProps }) => {
  const { publicRuntimeConfig } = getConfig();

  const GTM_ID = publicRuntimeConfig.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    if (GTM_ID) {
      const handleRouteChange = (url) => GTMPageView(url);
      Router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        Router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, []);

  useRouterScroll();

  return (
    <GlobalStateProvider>
      <>
        <Head>
          <script src='/scripts/newrelic.js' />
          <script src='/scripts/amplitude.js' />
          <link rel='stylesheet' href='/css/global.css' />
        </Head>
        <UserTheme>
          <Component {...pageProps} />
        </UserTheme>
      </>
    </GlobalStateProvider>
  );
};

export default App;
