import { Fragment, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { SearchIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import { debounce } from 'lodash';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import { Sidebar, ThemeSelector } from '../../components';
import { Sidenav, Sections } from '../../components/styleguide';

const StyleGuide = () => {
  const [searchInput, setSearchInput] = useState('');
  const [showTopButton, setShowTopButton] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasSearchResults, setHasSearchResults] = useState(false);

  const handleSearch = debounce((e) => {
    const searchValue: string = e.target.value;
    setSearchInput(searchValue.trim());
  }, 300);

  const handleScroll = (e) => {
    const scrollingElement = e.target.scrollingElement;

    if (scrollingElement.scrollTop > 180) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const handleNavItemClick = (e) => {
    setSidebarOpen(false);
  };

  const handleFilter = (hasResults: boolean) => {
    setHasSearchResults(hasResults);
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
      <div className="min-h-full">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
          <Sidenav onNavItemClick={handleNavItemClick} />
        </Sidebar>

        {/* Content */}
        <div className="flex flex-1 flex-col lg:pl-[288px]">
          {/* Header */}
          <header className="fixed z-10 box-content flex h-16 w-full flex-shrink-0 items-center border-b border-neutral-300 bg-white dark:border-neutral-400 dark:bg-black print:hidden lg:relative lg:items-end lg:border-none">
            <button
              type="button"
              className="px-4 focus:outline-none lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex flex-1 justify-between lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="flex flex-1">
                <form className="flex w-full" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="focus-within:text-foreground relative w-full text-neutral-500">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      type="search"
                      id="search-field"
                      name="search-field"
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

          {/* Main */}
          <main className="flex-1 pt-16 pb-8 print:pt-0 lg:pt-0">
            {/* Page header */}
            <div className="-mb-16 bg-white shadow dark:bg-black print:shadow-none lg:mb-0">
              <div className="px-4 sm:px-6 sm:pt-4 lg:mx-auto lg:max-w-6xl lg:px-8">
                <div className="py-6 lg:border-t lg:border-neutral-300 lg:dark:border-neutral-400">
                  <Image
                    layout="raw"
                    width="224"
                    height="30"
                    src="/logo.svg"
                    alt="Jason Ruesch"
                    className="mb-4 hidden print:block"
                  />
                  <h1 className="font-alegreya-sans-sc text-4xl font-bold sm:truncate sm:leading-9">
                    Style Guide
                  </h1>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Sections searchInput={searchInput} onFilter={handleFilter} />

              {!hasSearchResults && (
                <div className="text-center">
                  <h2 className="font-alegreya-sans-sc text-3xl font-bold">
                    Searching for{' '}
                    <span className="text-accent font-sans text-2xl">
                      &quot;{searchInput}&quot;
                    </span>{' '}
                    found no matching styles.
                  </h2>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
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
          className="bg-cta border-cta/50 fixed bottom-8 right-12 z-40 rounded-full border py-2 px-2 text-white hover:bg-opacity-70 disabled:bg-opacity-50 disabled:text-opacity-70 print:hidden"
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
