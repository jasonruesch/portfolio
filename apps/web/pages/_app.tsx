import { AppProps } from 'next/app';
import Head from 'next/head';
import useDarkMode from '../app/use-dark-mode/use-dark-mode';
import './styles.css';

function WebApp({ Component, pageProps }: AppProps) {
  const isDarkMode = useDarkMode();

  return (
    <>
      <Head>
        <title>Jason Ruesch</title>
      </Head>
      <main id="main" className={`h-full ${isDarkMode ? 'dark' : ''}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default WebApp;
