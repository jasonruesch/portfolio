import { motion } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { SearchIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import { debounce } from 'lodash';
import { animateScroll as scroll } from 'react-scroll';
import { Logo, Nav, Sidebar, ThemeSelector } from '../../components';
import { Sidenav, Sections } from '../../components/styleguide';
import classNames from 'classnames';
import { useActionKey } from '../../components/styleguide/hooks/useActionKey';

const StyleGuide = () => {
  const actionKey = useActionKey();
  const [searchInput, setSearchInput] = useState('');
  const [showTopButton, setShowTopButton] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resizeHeader, setResizeHeader] = useState(false);

  const handleSearch = debounce((e) => {
    const searchValue: string = e.target.value;
    setSearchInput(searchValue);
  }, 300);

  const handleScroll = (e) => {
    const scrollingElement = e.target.scrollingElement;

    // Show top button and resize header when user scrolls down the height of the page header
    if (scrollingElement.scrollTop >= 96) {
      setResizeHeader(true);
      setShowTopButton(true);
    } else {
      setResizeHeader(false);
      setShowTopButton(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();

      const input = document.querySelector('#search');
      (input as HTMLElement).focus();
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Style Guide - Jason Ruesch</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="min-h-full"
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <Sidenav onNavItemClick={() => setSidebarOpen(false)} />
          <Nav
            isSidenav
            includeTopBorder
            onNavItemClick={() => setSidebarOpen(false)}
          />
        </Sidebar>

        <div className="lg:pl-[288px]">
          <Transition
            as={Fragment}
            appear
            show={resizeHeader}
            unmount={false}
            enter="ease-in-out duration-300"
            enterTo="lg:h-16 lg:pb-0 lg:items-center shadow dark:shadow-black"
            leave="ease-in-out duration-300"
            leaveTo="lg:h-24 lg:pb-8 lg:items-start"
          >
            <header className="fixed top-0 left-0 right-0 z-10 !flex h-16 items-center bg-white dark:bg-black print:!hidden lg:left-[288px] lg:h-24 lg:items-end lg:pb-8">
              <button
                type="button"
                className="px-4 focus:outline-none lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="flex w-full justify-between lg:px-8">
                <div className="flex flex-1">
                  <form
                    className="flex w-full"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="focus-within:text-on-background relative w-full max-w-sm text-neutral-500">
                      <div
                        className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <input
                        type="search"
                        id="search"
                        name="search"
                        className="block h-full w-full border-none bg-transparent py-0.5 pl-8 pr-11 placeholder-neutral-500 focus:outline-none focus:ring-0"
                        placeholder="Quick search..."
                        onChange={handleSearch}
                        autoFocus
                      />
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0"
                        aria-hidden="true"
                      >
                        <kbd className="font-sans font-semibold text-neutral-500">
                          <abbr
                            title={actionKey[1]}
                            className="text-neutral-500 no-underline"
                          >
                            {actionKey[0]}
                          </abbr>{' '}
                          K
                        </kbd>
                      </div>
                    </div>
                  </form>
                </div>
                <ThemeSelector className="px-4 lg:pr-0" />
              </div>
            </header>
          </Transition>

          <main className="flex-1">
            {/* Page header */}
            <header className="-mb-16 bg-white pt-16 shadow dark:bg-black dark:shadow-black print:pt-0 print:shadow-none lg:pt-24">
              <div className="p-3 lg:mx-auto lg:max-w-screen-lg lg:px-8">
                <Logo className="mb-4 hidden h-[30px] w-[224px] print:block" />
                <h1 className="font-heading text-3xl font-bold lg:text-4xl">
                  Style Guide
                </h1>
              </div>
            </header>

            <div className="px-4 lg:mx-auto lg:max-w-screen-lg lg:px-8">
              <Sections searchInput={searchInput} />
            </div>
          </main>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <Transition
        as={Fragment}
        appear
        show={showTopButton}
        enter="ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          className={classNames(
            `bg-button-primary text-button-primary border-button-primary hover:bg-button-primary-hover hover:text-button-primary-hover focus:ring-offset-button-primary-focus focus:ring-button-primary-focus disabled:bg-button-primary-disabled disabled:text-button-primary-disabled inline-flex
            items-center rounded-full
            border p-2 font-medium shadow-sm focus:outline-none
            focus:ring-2 focus:ring-offset-2`,
            'fixed bottom-8 right-12 z-40 print:hidden'
          )}
          onClick={() =>
            scroll.scrollToTop({
              smooth: true,
            })
          }
        >
          <ChevronUpIcon className="h-12 w-12" />
        </button>
      </Transition>
    </>
  );
};

// StyleGuide.theme = 'light';
export default StyleGuide;
