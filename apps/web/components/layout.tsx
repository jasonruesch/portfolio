import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ThemeSelector from './themeSelector';

export default function Layout({
  children,
  props,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: {
    centerPage: boolean;
  };
}) {
  const { route } = useRouter();

  return (
    <>
      <Head>
        <title>Jason Ruesch</title>
        <link rel="mask-icon" href="/mask-icon.svg" color="#888888"></link>
      </Head>
      <div className="h-full">
        <header className="mx-4 flex h-14 items-center justify-end gap-4 md:mx-8">
          <Link href="/">
            <a
              className={`hover:text-brand-bleu-de-france ${
                route === '/' ? 'text-brand-bleu-de-france' : ''
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`hover:text-brand-bleu-de-france ${
                route === '/about' ? 'text-brand-bleu-de-france' : ''
              }`}
            >
              About
            </a>
          </Link>
          <ThemeSelector />
        </header>
        <main
          className={`sm-max-h:flex-row sm-max-h:justify-between sm-max-h:h-screen sm-max-h:-mt-14 flex flex-col items-center justify-center gap-12 p-4 md:px-8 ${
            props?.centerPage ? '-mt-14 h-screen' : ''
          }`}
        >
          <div>
            <motion.div
              layoutId="profile_image"
              className="border-light-gray relative h-[150px] w-[150px] rounded-full border dark:border-0 md:h-[300px] md:w-[300px]"
            >
              <Image
                priority
                src="/images/profile.png"
                className="rounded-full bg-logo-primary"
                layout="fill"
                alt="Jason Ruesch"
              />
            </motion.div>
          </div>
          <motion.div layoutId="content" layout="position">
            {children}
          </motion.div>
        </main>
      </div>
    </>
  );
}
