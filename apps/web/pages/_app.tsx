import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import './styles.css';

function WebApp({ Component, pageProps, router }) {
  /**
   * Irritation to avoid dev errors with SSR:
   * Server/Client renderings not matching.
   *
   * Also kills any lingering page-flickers due to startup theme changes
   */
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
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
  );
}

export default WebApp;
