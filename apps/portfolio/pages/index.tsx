import { Transition, Dialog } from '@headlessui/react';
import { MenuAlt1Icon, TemplateIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import ThemeSelector from '../components/styleguide/themeSelector';

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Sidebar for mobile */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 print:hidden lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity le-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-neutral-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-neutral-700 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-16 flex-shrink-0 items-center px-4">
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
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="fixed top-0 flex h-16 w-full items-center justify-between px-4">
          <button
            type="button"
            className="p-4 focus:outline-none lg:hidden"
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
          <div className="flex items-center">
            <Link href="/styleguide">
              <a className="hover:text-cta hidden lg:block">Style Guide</a>
            </Link>

            <ThemeSelector className="p-4" />
          </div>
        </header>

        <main>
          <h1 className="font-alegreya-sans-sc text-4xl font-bold">Hi!</h1>
        </main>
      </div>
    </>
  );
}
