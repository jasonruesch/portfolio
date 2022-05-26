import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useEffect, useState } from 'react';
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
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        )}
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
