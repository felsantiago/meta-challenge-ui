import React, { useEffect } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import Router from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <link rel='stylesheet' href='/css/global.css' />
        </Head>
        <UserTheme>
          <ToastContainer autoClose={3000} />
          <Component {...pageProps} />
        </UserTheme>
      </>
    </GlobalStateProvider>
  );
};

export default App;
