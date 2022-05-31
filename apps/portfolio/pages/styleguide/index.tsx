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

const StyleGuide = () => {
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

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
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
                    <div className="focus-within:text-on-background relative w-full text-neutral-500">
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
                        className="block h-full w-full border-none bg-transparent py-0.5 pl-8 pr-0 placeholder-neutral-500 focus:outline-none focus:ring-0"
                        placeholder="Search styles"
                        onChange={handleSearch}
                        autoFocus
                      />
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
            `bg-secondary text-on-secondary hover:bg-secondary-600 active:bg-secondary-500 focus:ring-secondary disabled:bg-secondary-300 rounded-full
            border-transparent
            p-2
            text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white
            disabled:text-neutral-500 dark:focus:ring-offset-black`,
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
