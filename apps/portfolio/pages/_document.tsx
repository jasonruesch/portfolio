import classNames from 'classnames';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="en"
      className={classNames(
        'bg-background text-on-background h-full',
        'print:bg-white print:text-black',
      )}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&amp;family=Alegreya+Sans+SC&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <script
          async
          src="https://code.iconify.design/2/2.2.1/iconify.min.js"
        ></script>
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />

        {/* Global notification live region rendered permanently at the end of the document */}
        <div
          aria-live="assertive"
          className={classNames(
            'pointer-events-none fixed inset-0 z-20 flex items-end px-4 py-6',
            'lg:items-start lg:px-6 lg:py-20',
            'sm-max-h:items-end sm-max-h:px-4 sm-max-h:py-6',
          )}
        >
          <div
            id="live"
            className={classNames(
              'flex w-full flex-col items-center space-y-4',
              'lg:items-end',
              'sm-max-h:items-center',
            )}
          >
            {/* Notification panel is dynamically inserted into this live region when it needs to be displayed */}
          </div>
        </div>
      </body>
    </Html>
  );
}
