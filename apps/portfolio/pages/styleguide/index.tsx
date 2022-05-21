import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import {
  colorGroups,
  typographyGroups,
  shadowGroups,
} from '../../components/styleguide/data';
import Sidebar from '../../components/styleguide/sidebar';
import { Group } from '../../components/styleguide/models';
import { debounce, cloneDeep } from 'lodash';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import ThemeSelector from '../../components/themeSelector';
import Colors from '../../components/styleguide/colors';
import Typography from '../../components/styleguide/typography';
import Shadows from '../../components/styleguide/shadows';

const StyleGuide = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredColorGroups, setFilteredColorGroups] = useState<Group[]>([]);
  const [filteredTypographyGroups, setFilteredTypographyGroups] = useState<
    Group[]
  >([]);
  const [filteredShadowGroups, setFilteredShadowGroups] = useState<Group[]>([]);
  const [showTopButton, setShowTopButton] = useState(false);

  const colorsTitle = 'Colors';
  const typographyTitle = 'Typography';
  const shadowsTitle = 'Shadows';

  const handleSearch = debounce((e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
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

  const filter = (query: string, data: Group[], title: string) => {
    const queryParts = query.split(' ').map((part) => part.toLowerCase());
    const contains = (value) =>
      queryParts.every((part) => String(value).toLowerCase().includes(part));

    if (query === '' || contains(title)) {
      return data;
    }

    return data.filter((group: Group) => {
      const filteredItems = group.items.filter((item) => {
        return Object.values(item).some((value) => contains(value));
      });
      if (filteredItems.length > 0) {
        group.items = filteredItems;
      }
      return contains(group.name) || filteredItems.length > 0;
    });
  };

  useEffect(() => {
    // Deep clone and filter color groups
    const colorGroupsClone = cloneDeep(colorGroups);
    const filteredColorGroups = filter(
      searchInput,
      colorGroupsClone,
      colorsTitle
    );
    setFilteredColorGroups(filteredColorGroups);

    // Deep clone and filter typography groups
    const typographyGroupsClone = cloneDeep(typographyGroups);
    const filteredTypographyGroups = filter(
      searchInput,
      typographyGroupsClone,
      typographyTitle
    );
    setFilteredTypographyGroups(filteredTypographyGroups);

    // Deep clone and filter shadow groups
    const shadowGroupsClone = cloneDeep(shadowGroups);
    const filteredShadowGroups = filter(
      searchInput,
      shadowGroupsClone,
      shadowsTitle
    );
    setFilteredShadowGroups(filteredShadowGroups);
  }, [searchInput]);

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
                  <Sidebar onNavItemClick={handleNavItemClick} />
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden print:hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex flex-grow flex-col overflow-y-auto bg-neutral-700 pb-4">
            <Sidebar onNavItemClick={handleNavItemClick} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col lg:pl-64">
          {/* Header */}
          <header className="fixed z-10 box-content flex h-16 w-full flex-shrink-0 border-b border-neutral-300 bg-white dark:border-neutral-400 dark:bg-black print:hidden lg:relative lg:border-none">
            <button
              type="button"
              className="border-r border-neutral-300 px-4 focus:outline-none dark:border-neutral-400 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex flex-1 justify-between lg:mx-auto lg:max-w-6xl">
              <div className="flex flex-1 px-4 lg:px-8">
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
                      className="block h-full w-full border-transparent bg-transparent py-2 pl-8 pr-3 placeholder-neutral-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search styles"
                      onChange={handleSearch}
                      autoFocus
                    />
                  </div>
                </form>
              </div>
              <ThemeSelector className="border-l border-neutral-300 px-4 py-5 dark:border-neutral-400 lg:mr-4 lg:border-l-0" />
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 pt-16 pb-8 print:pt-0 lg:pt-0">
            {/* Page header */}
            <div className="-mb-16 bg-white shadow dark:bg-black print:shadow-none lg:mb-0">
              <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
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
              {/* Colors */}
              {filteredColorGroups.length > 0 && (
                <Colors
                  id="colors"
                  title={colorsTitle}
                  groups={filteredColorGroups}
                />
              )}

              {/* Typography */}
              {filteredTypographyGroups.length > 0 && (
                <Typography
                  id="typography"
                  title={typographyTitle}
                  groups={filteredTypographyGroups}
                />
              )}

              {/* Shadows */}
              {filteredShadowGroups.length > 0 && (
                <Shadows
                  id="shadows"
                  title={shadowsTitle}
                  groups={filteredShadowGroups}
                />
              )}

              {filteredColorGroups.length === 0 &&
                filteredTypographyGroups.length === 0 &&
                filteredShadowGroups.length === 0 && (
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
          className="bg-cta fixed bottom-8 right-12 z-40 rounded-lg px-4 py-2 text-white ring-1 ring-neutral-600 hover:bg-neutral-600 print:hidden"
          onClick={() =>
            scroll.scrollToTop({
              smooth: true,
            })
          }
        >
          <ChevronUpIcon className="h-8 w-8 sm:h-12 sm:w-12" />
        </button>
      </Transition>
    </>
  );
};

// StyleGuide.theme = 'light';
export default StyleGuide;
