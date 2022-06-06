import { XIcon } from '@heroicons/react/outline';
import { Transition, Dialog } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import classNames from 'classnames';

export function Sidebar({
  children,
  sidebarOpen,
  setSidebarOpen,
  mobileOnly = false,
}: {
  children: ReactNode;
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
  mobileOnly?: boolean;
}) {
  return (
    <>
      {/* Sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className={classNames('relative z-40', 'lg:hidden', 'print:hidden')}
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
            <div
              className="fixed inset-0 bg-neutral-600 bg-opacity-75"
              aria-hidden="true"
            />
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
              <Dialog.Panel
                className={classNames(
                  'bg-surface text-on-surface relative flex w-full max-w-xs flex-1 flex-col pb-4 shadow ring-1 ring-black ring-opacity-5',
                  'dark:shadow-black dark:ring-opacity-50',
                )}
              >
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
                      className={classNames(
                        'ml-1 flex h-10 w-10 items-center justify-center rounded-full',
                        'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                      )}
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
                <div
                  className={classNames(
                    'flex h-16 flex-shrink-0 items-center px-4',
                    'lg:items-end lg:px-8',
                  )}
                >
                  <Link href="/">
                    <a>
                      <Logo className="w-56" />
                    </a>
                  </Link>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      {!mobileOnly && (
        <div
          className={classNames(
            'fixed inset-y-0 z-20 hidden',
            'lg:flex',
            'print:hidden',
          )}
        >
          <div
            className={classNames(
              'bg-surface text-on-surface relative flex w-[288px] flex-1 translate-x-0 flex-col pb-4 shadow ring-1 ring-black ring-opacity-5',
              'dark:shadow-black dark:ring-opacity-50',
            )}
          >
            <div
              className={classNames(
                'flex h-16 flex-shrink-0 items-center px-4',
                'lg:items-end lg:px-8',
              )}
            >
              <Link href="/">
                <a>
                  <Logo className="w-56" />
                </a>
              </Link>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
