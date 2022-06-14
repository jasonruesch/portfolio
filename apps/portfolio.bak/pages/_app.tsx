import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import PageTransitions from '../components/PageTransitions';
import '../styles/globals.css';

function CustomApp({ Component, pageProps, router }) {
  /**
   * Irritation to avoid dev errors with SSR:
   * Server/Client renderings not matching.
   *
   * Also kills any lingering page-flickers due to startup theme changes
   */
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const [routingPageOffset, setRoutingPageOffset] = useState(0);
  useEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY);
    };
    router.events.on('routeChangeComplete', pageChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Jason Ruesch</title>
      </Head>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        forcedTheme={Component.theme || null}
      >
        {isHydrated && (
          <PageTransitions
            route={router.route}
            routingPageOffset={routingPageOffset}
          >
            <Component {...pageProps} key={router.route} />
          </PageTransitions>
        )}
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
