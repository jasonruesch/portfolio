import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import './styles.css';

function WebApp({ Component, pageProps }) {
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
      {isHydrated && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default WebApp;
