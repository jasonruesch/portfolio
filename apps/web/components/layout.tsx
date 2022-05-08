import cn from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import useDarkMode from '../app/use-dark-mode/use-dark-mode';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDarkMode = useDarkMode();

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
      <div
        className={`flex h-full flex-col items-center justify-center bg-background p-4 text-foreground ${cn(
          {
            dark: isDarkMode,
          }
        )}`}
      >
        <header>
          <div className="relative mb-6 flex h-[150px] w-[150px] justify-center md:mb-12 md:h-[300px] md:w-[300px]">
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
