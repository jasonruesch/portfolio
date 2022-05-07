import { AppProps } from 'next/app';
import './styles.css';

function WebApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default WebApp;
