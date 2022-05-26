import { MenuAlt1Icon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar, ThemeSelector, Nav } from '../../components';

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="sm-max-h:pt-0 absolute inset-0 flex min-h-full flex-col items-center justify-start pt-12">
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
          <div>
            {/* Wrapper div needed for the image to stay unwarped */}
            <div className="border-light-gray relative h-[150px] w-[150px] rounded-full border dark:border-0 md:h-[300px] md:w-[300px]">
              <Image
                priority
                src="/images/profile.png"
                className="bg-primary rounded-full"
                layout="fill"
                alt="Jason Ruesch"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-alegreya-sans-sc text-accent text-3xl font-bold lg:text-4xl">
              About Me
            </h1>
            <p>
              My name is Jason Ruesch, and I enjoy creating software that looks
              amazing and is easy to use! I have a passion for learning new
              technologies and building things that are useful to others.
            </p>
            <p>
              Outside of work, I like to spend time with my family, play video
              games, and watch movies and tv shows.
            </p>
            <p>
              I am always open to connect. If you are interested in learning
              more about me or how I can help you with your web needs, please
              reach out.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
