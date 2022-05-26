import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Nav, Sidebar, ThemeSelector } from '../components';
import classNames from 'classnames';

export function Layout({
  children,
  shouldCenterPage = false,
  isHome = false,
}: {
  children: React.ReactNode;
  shouldCenterPage?: boolean;
  isHome?: boolean;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={classNames(
        'absolute inset-0 flex flex-col items-center justify-center',
        {
          'sm-max-h:pt-0 !justify-start pt-12 lg:pt-16': !shouldCenterPage,
        }
      )}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileOnly
      >
        <Nav isSidenav onNavItemClick={() => setSidebarOpen(false)} />
      </Sidebar>

      <motion.header
        layoutId="header"
        className="fixed top-0 z-40 flex h-16 w-full items-center justify-between px-4 print:hidden lg:items-center lg:px-8"
      >
        <button
          type="button"
          className="focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <Link href="/">
          <a className="hidden lg:block">
            <Image
              layout="raw"
              width="224"
              height="30"
              src="/logo.svg"
              alt="Jason Ruesch"
              className="block dark:hidden"
            />
            <Image
              layout="raw"
              width="224"
              height="30"
              src="/logo-dark.svg"
              alt="Jason Ruesch"
              className="hidden dark:block"
            />
          </a>
        </Link>

        <div className="lg:divide-x-foreground lg:flex lg:gap-4 lg:divide-x">
          <Nav />
          <ThemeSelector className="lg:pl-4" />
        </div>
      </motion.header>

      <main className="sm-max-h:h-full sm-max-h:flex-row sm-max-h:justify-between flex flex-col items-center gap-12 p-4 lg:max-w-screen-sm lg:px-8">
        <div>
          {/* Wrapper div needed for the image to stay unwarped */}
          <motion.div
            layoutId="profile"
            className="border-light-gray relative h-[150px] w-[150px] rounded-full border dark:border-0 md:h-[300px] md:w-[300px]"
          >
            <Image
              priority
              src="/images/profile.png"
              className="bg-primary rounded-full"
              layout="fill"
              alt="Jason Ruesch"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
