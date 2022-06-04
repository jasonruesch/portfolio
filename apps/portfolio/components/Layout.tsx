import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Nav, Sidebar, ThemeSelector } from '.';
import classNames from 'classnames';
import { Logo } from './Logo';

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
    <div className={classNames('absolute inset-0')}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileOnly
      >
        <Nav isSidenav onNavItemClick={() => setSidebarOpen(false)} />
      </Sidebar>

      <motion.header
        layoutId="header"
        className={classNames(
          'fixed top-0 z-40 flex h-16 w-full items-center justify-between px-4',
          'lg:items-end lg:px-8',
          'print:hidden',
        )}
      >
        <button
          type="button"
          className={classNames('focus:outline-none', 'lg:hidden')}
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <Link href="/">
          <a className={classNames('hidden', 'lg:block')}>
            <Logo className="h-[30px] w-[224px]" />
          </a>
        </Link>

        <div
          className={classNames(
            'divide-black divide-opacity-20',
            'dark:divide-white dark:divide-opacity-20',
            'lg:flex lg:gap-4 lg:divide-x',
          )}
        >
          <Nav className={classNames('hidden', 'lg:block')} />
          <ThemeSelector className="lg:pl-4" />
        </div>
      </motion.header>

      <main
        className={classNames(
          'absolute inset-0 mx-auto flex h-full w-full flex-col justify-center gap-8 overflow-hidden p-4',
          'sm-max-h:flex-row sm-max-h:items-center',
          'lg:max-w-screen-sm lg:justify-start lg:px-8 lg:pt-16',
          {
            'lg:justify-center lg:pt-0': shouldCenterPage,
          },
        )}
      >
        <div
          className={classNames('mx-auto', 'sm-max-h:absolute sm-max-h:left-8')}
        >
          {/* Wrapper div needed for the image to stay unwarped */}
          <motion.div
            layoutId="profile"
            className={classNames('relative h-[150px] w-[150px] rounded-full', {
              'md:h-[300px] md:w-[300px]': isHome,
            })}
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
          className={classNames(
            'mx-auto',
            'sm-max-h:absolute sm-max-h:top-4 sm-max-h:bottom-4 sm-max-h:right-4 sm-max-h:ml-[182px] sm-max-h:left-8 sm-max-h:w-auto',
            {
              'bg-surface text-on-surface w-full overflow-y-auto rounded-md p-4 shadow ring-1 ring-black ring-opacity-5':
                !isHome,
              'dark:shadow-black dark:ring-opacity-50': !isHome,
              'sm-max-h:!top-16': !isHome,
              'flex items-center': shouldCenterPage,
            },
          )}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
