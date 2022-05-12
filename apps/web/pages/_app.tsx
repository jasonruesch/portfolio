import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
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

  const baseUrl = 'https://jasonruesch.dev';

  return (
    <>
      <Head>
        <link rel="mask-icon" href="/mask-icon.svg" color="#888888"></link>
      </Head>
      <DefaultSeo
        title="Jason Ruesch"
        description="Software Engineer focusing on Web Development &amp; Design"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `${baseUrl}${router.route}`,
          site_name: 'Jason Ruesch',
          images: [
            {
              url: `${baseUrl}/images/og-image-01.jpg`,
              width: 1200,
              height: 630,
              alt: 'Jason Ruesch',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@jasonruesch',
          site: '@jasonruesch',
          cardType: 'summary_large_image',
        }}
      />
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

export default WebApp;
