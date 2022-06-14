import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState, useEffect } from 'react';

import Header from '../components/Header';
import PageTransitions from '../components/PageTransitions';

import './styles.css';

function CustomApp({ Component, pageProps, router }: AppProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const [routingPageOffset, setRoutingPageOffset] = useState(0);
  useEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY);
    };
    router.events.on('routeChangeStart', pageChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Welcome to portfolio!</title>
      </Head>
      {isHydrated && (
        <>
          <Header />
          <PageTransitions
            route={router.asPath}
            routingPageOffset={routingPageOffset}
          >
            <Component {...pageProps} />
          </PageTransitions>
        </>
      )}

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default CustomApp;
