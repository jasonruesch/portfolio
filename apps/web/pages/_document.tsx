import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
      </Head>
      <body className="bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}