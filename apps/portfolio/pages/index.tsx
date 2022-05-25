import { MenuAlt1Icon, TemplateIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar, ThemeSelector } from '../components';

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          mobileOnly
        >
          <div className="flex h-16 flex-shrink-0 items-center px-4 lg:px-8">
            <Link href="/">
              <a>
                <Image
                  layout="raw"
                  width="224"
                  height="30"
                  src="/logo-dark.svg"
                  alt="Jason Ruesch"
                />
              </a>
            </Link>
          </div>
          <nav
            className="mt-5 flex flex-1 flex-col divide-y divide-neutral-500 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="space-y-1 px-2">
              <Link href="/styleguide">
                <a className="group flex cursor-pointer items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-neutral-100 hover:bg-neutral-600 hover:text-white">
                  <div
                    className="mr-4 h-6 w-6 flex-shrink-0 text-neutral-200"
                    aria-hidden="true"
                  >
                    <TemplateIcon />
                  </div>
                  Style Guide
                </a>
              </Link>
            </div>
          </nav>
        </Sidebar>

        <header className="fixed top-0 flex h-16 w-full items-center justify-between px-4 lg:items-center lg:px-8">
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
            <Link href="/styleguide">
              <a className="hover:text-cta hidden lg:block">Style Guide</a>
            </Link>
            <ThemeSelector className="lg:pl-4" />
          </div>
        </header>

        <main className="p-4 text-center lg:max-w-screen-sm">
          <h1 className="font-alegreya-sans-sc text-4xl font-bold">
            Hi! My name is
            <br />
            Jason Ruesch
            <br />
            and I am a<br />
            Software Engineer
            <br />
            focusing on
            <br />
            Web Development and Design
          </h1>
        </main>
      </div>
    </>
  );
}
