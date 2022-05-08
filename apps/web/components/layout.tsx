import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import useDarkMode from '../app/use-dark-mode/use-dark-mode';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDarkMode = useDarkMode();
  useEffect(() => {
    document.querySelector('html').classList.toggle('dark', isDarkMode);
  });

  return (
    <>
      <Head>
        <title>Jason Ruesch</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href={isDarkMode ? '/icon-dark.svg' : '/icon-light.svg'}
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <div className="sm-max-h:flex-row sm-max-h:justify-between flex h-full flex-col items-center justify-center gap-12 p-4 md:px-8">
        <header>
          <div className="relative h-[150px] w-[150px] md:h-[300px] md:w-[300px]">
            <Image
              priority
              src="/images/profile.png"
              className="rounded-full bg-logo-primary"
              layout="fill"
              alt="Jason Ruesch"
            />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
