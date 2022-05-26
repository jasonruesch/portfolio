import { MenuAlt1Icon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Nav, Sidebar, ThemeSelector } from '../components';

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
          <Nav isSidenav onNavItemClick={() => setSidebarOpen(false)} />
        </Sidebar>

        <header className="fixed top-0 z-40 flex h-16 w-full items-center justify-between px-4 print:hidden lg:items-center lg:px-8">
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
        </header>

        <main className="sm-max-h:h-full sm-max-h:flex-row sm-max-h:justify-between flex flex-col items-center gap-12 p-4 lg:max-w-screen-sm lg:px-8">
          <div className="border-light-gray relative h-[150px] w-[150px] rounded-full border dark:border-0 md:h-[300px] md:w-[300px]">
            <Image
              priority
              src="/images/profile.png"
              className="bg-primary rounded-full"
              layout="fill"
              alt="Jason Ruesch"
            />
          </div>

          <div>
            <h1 className="font-alegreya-sans-sc text-center text-3xl font-bold lg:text-4xl">
              Hi! I&apos;m
              <br />
              <span className="text-primary">Jason Ruesch</span>
              <br />
              and I am a<br />
              <span className="text-accent">Software Engineer</span>
              <br />
              focusing on
              <br />
              Web Development and Design
            </h1>
          </div>
        </main>
      </div>
    </>
  );
}
