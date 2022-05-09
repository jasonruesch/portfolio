import Head from 'next/head';
import React from 'react';
import { ThemeSelector } from './themeSelector';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Jason Ruesch</title>
        <link rel="mask-icon" href="/mask-icon.svg" color="#888888"></link>
      </Head>
      <div className="h-full">
        <header className="p-4 text-right md:px-8">
          <ThemeSelector />
        </header>
        <main className="h-full p-4 md:px-8">{children}</main>
      </div>
    </>
  );
}
