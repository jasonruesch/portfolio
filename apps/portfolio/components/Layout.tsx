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
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center overflow-hidden">
        <div className="flex w-[108rem] flex-none justify-end">
          <picture>
            <source
              srcSet="/images/docs@30.beeb08605f12f699c5abc3814763b65e.avif"
              type="image/avif"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png"
              alt=""
              className="w-[71.75rem] max-w-none flex-none dark:hidden"
            />
          </picture>
          <picture>
            <source
              srcSet="/images/docs-dark@30.77f062b5fd90f0d2cd4752cd9a8649c8.avif"
              type="image/avif"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png"
              alt=""
              className="hidden w-[90rem] max-w-none flex-none dark:block"
            />
          </picture>
        </div>
      </div>
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
            'fixed top-0 z-30 flex h-16 w-full items-center justify-between px-4',
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
              <Logo className="w-72" />
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
            <ThemeSelector className="pr-0" />
          </div>
        </motion.header>

        <main
          className={classNames(
            'absolute inset-0 z-20 mx-auto flex h-full w-full flex-col justify-center gap-8 overflow-hidden p-4',
            'sm-max-h:flex-row sm-max-h:items-center',
            'lg:max-w-screen-sm lg:justify-start lg:px-8 lg:pt-16',
            {
              'lg:justify-center lg:pt-0': shouldCenterPage,
            },
          )}
        >
          <div
            className={classNames(
              'mx-auto',
              'sm-max-h:absolute sm-max-h:left-8',
            )}
          >
            {/* Wrapper div needed for the image to stay unwarped */}
            <motion.div
              layoutId="profile"
              className={classNames(
                'relative h-[150px] w-[150px] rounded-full',
                {
                  'md:h-[300px] md:w-[300px]': isHome,
                },
              )}
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
    </>
  );
}
