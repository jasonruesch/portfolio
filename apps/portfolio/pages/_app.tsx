import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

function CustomApp({ Component, pageProps }) {
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
        {isHydrated && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
