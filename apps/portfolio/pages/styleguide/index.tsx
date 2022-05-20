import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ColorSwatchIcon, MenuAlt1Icon, XIcon } from '@heroicons/react/outline';
import { SearchIcon, ChevronUpIcon } from '@heroicons/react/solid';
import cn from 'classnames';
import ThemeSelector from '../../components/themeSelector';
import Head from 'next/head';
import { colorGroups, typographyGroups, shadowGroups } from './data';
import Sidebar from '../../components/sidebar';
import { ColorItem, Group, TypographyItem } from '../../models';
import { debounce, cloneDeep } from 'lodash';
import { Element, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import { ShadowItem } from '../../models/shadowItem.model';

export default function StyleGuide() {
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
      return (
        !group.printOnly && (contains(group.name) || filteredItems.length > 0)
      );
    });
  };

  useEffect(() => {
    // Deep clone and search color groups
    const colorGroupsClone = cloneDeep(colorGroups);
    const filteredColorGroups = filter(
      searchInput,
      colorGroupsClone,
      colorsTitle
    );
    setFilteredColorGroups(filteredColorGroups);

    // Deep clone and search typography groups
    const typographyGroupsClone = cloneDeep(typographyGroups);
    const filteredTypographyGroups = filter(
      searchInput,
      typographyGroupsClone,
      typographyTitle
    );
    setFilteredTypographyGroups(filteredTypographyGroups);

    // Deep clone and search shadow groups
    const shadowGroupsClone = cloneDeep(shadowGroups);
    const filteredShadowGroups = filter(
      searchInput,
      shadowGroupsClone,
      shadowsTitle
    );
    setFilteredShadowGroups(filteredShadowGroups);
  }, [searchInput]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 180) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
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
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-neutral-700 pt-5 pb-4">
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
                  <Sidebar />
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
          <div className="flex flex-grow flex-col overflow-y-auto bg-neutral-700 pt-5 pb-4">
            <Sidebar />
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:pl-64">
          {/* Sidebar button, search and theme selector */}
          <div className="fixed z-10 flex h-16 w-full flex-shrink-0 border-b border-neutral-300 bg-white dark:border-neutral-400 dark:bg-black print:hidden lg:relative lg:border-none">
            <button
              type="button"
              className="border-r border-neutral-300 px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 dark:border-neutral-400 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex flex-1 justify-between px-4 lg:mx-auto lg:max-w-6xl lg:px-8">
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
                      className="block h-full w-full border-transparent bg-transparent py-2 pl-8 pr-3 placeholder-neutral-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search styles"
                      onChange={handleSearch}
                      autoFocus
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center border-l border-neutral-300 pl-4 dark:border-neutral-400 lg:border-none">
                <ThemeSelector />
              </div>
            </div>
          </div>

          <main id="main" className="flex-1 pt-16 pb-8 print:pt-0 lg:pt-0">
            {/* Page header */}
            <div className="bg-white dark:bg-black">
              <div className="px-4 shadow print:shadow-none sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
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
              <section
                id="colors"
                className={cn({
                  hidden: filteredColorGroups.length === 0,
                })}
              >
                <h2 className="font-alegreya-sans-sc mx-auto flex max-w-6xl items-center px-4 pt-8 text-3xl font-bold print:pt-0 sm:px-6 lg:px-8">
                  <ColorSwatchIcon
                    className="mr-4 h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {colorsTitle}
                </h2>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  {filteredColorGroups.map((group) => (
                    <div
                      key={group.name}
                      className={`border-b border-neutral-300 py-8 last-of-type:border-b-0 dark:border-neutral-400 print:break-inside-avoid print:border-b-0 ${cn(
                        {
                          'dark hidden print:block': group.printOnly,
                        }
                      )}`}
                    >
                      <h3 className="font-alegreya-sans-sc text-2xl font-bold">
                        {group.name}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 gap-5 print:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
                        {group.items.map((item: ColorItem) => (
                          <div
                            key={item.name}
                            className={`ring-foreground/10 overflow-hidden rounded-lg shadow ring-1 ${item.bgColor}`}
                          >
                            <div className="relative h-40">
                              <div className="absolute top-5 right-5">
                                {item.allowOnLight && (
                                  <div
                                    className={`mb-2 rounded-3xl bg-white py-2 px-4 text-sm print:px-2 ${item.textColor}`}
                                  >
                                    {item.name}
                                  </div>
                                )}
                                {item.allowOnDark && (
                                  <div
                                    className={`rounded-3xl bg-black py-2 px-4 text-sm print:px-2 ${item.textColor}`}
                                  >
                                    {item.name}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="border-t-foreground/10 border-t bg-white px-5 py-3 text-black dark:bg-black dark:text-white">
                              {item.name}
                              <code className="text-accent mt-2 block text-sm">
                                {item.description}
                              </code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Typography */}
              <section
                id="typography"
                className={cn(
                  {
                    hidden: filteredTypographyGroups.length === 0,
                  },
                  'print:break-before-page'
                )}
              >
                <h2 className="font-alegreya-sans-sc mx-auto flex max-w-6xl items-center px-4 pt-8 text-3xl font-bold sm:px-6 lg:px-8">
                  <span
                    className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  >
                    text_fields
                  </span>
                  {typographyTitle}
                </h2>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  {filteredTypographyGroups.map((group) => (
                    <div
                      key={group.name}
                      className="space-y-8 border-b border-neutral-300 py-8 last-of-type:border-b-0 dark:border-neutral-400 print:break-inside-avoid print:border-b-0"
                    >
                      <h3 className="font-alegreya-sans-sc text-2xl font-bold">
                        {group.name}
                      </h3>
                      {group.items.map((item: TypographyItem) => (
                        <div
                          key={item.name}
                          className="grid grid-cols-1 gap-5 print:grid-cols-3 sm:grid-cols-3"
                        >
                          <div className="col-span-1">
                            <h4 className="text-xl font-bold">{item.name}</h4>
                            <p className="text-sm">
                              {item.font} {item.fontWeight}
                            </p>
                            {(item.fontSize || item.lineHeight) && (
                              <small className="text-xs">
                                {item.fontSize}
                                {' / '}
                                {item.lineHeight}
                              </small>
                            )}
                          </div>
                          <div className="col-span-1 print:col-span-2 sm:col-span-2">
                            {item.example}
                            <code className="text-accent mt-2 block text-sm">
                              {item.description}
                            </code>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              {/* Shadows */}
              <section
                id="shadows"
                className={cn(
                  {
                    hidden: filteredShadowGroups.length === 0,
                  },
                  'min-h-screen'
                )}
              >
                <h2 className="font-alegreya-sans-sc mx-auto flex max-w-6xl items-center px-4 pt-8 text-3xl font-bold print:pt-0 sm:px-6 lg:px-8">
                  <span
                    className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ev_shadow
                  </span>
                  {shadowsTitle}
                </h2>
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  {filteredShadowGroups.map((group) => (
                    <div
                      key={group.name}
                      className="border-b border-neutral-300 py-8 last-of-type:border-b-0 dark:border-neutral-400 print:break-inside-avoid print:border-b-0"
                    >
                      <h3 className="font-alegreya-sans-sc text-2xl font-bold">
                        {group.name}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 gap-5 print:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
                        {group.items.map((item: ShadowItem) => (
                          <div
                            key={item.name}
                            className="ring-foreground/10 overflow-hidden rounded-lg shadow ring-1"
                          >
                            <div className="flex h-40 items-center justify-center bg-neutral-200 p-8">
                              {item.example}
                            </div>
                            <div className="border-t-foreground/10 border-t bg-white px-5 py-3 text-black dark:bg-black dark:text-white">
                              {item.name}
                              <code className="text-accent mt-2 block text-sm">
                                {item.description}
                              </code>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {filteredColorGroups.length === 0 &&
                filteredTypographyGroups.length === 0 &&
                filteredShadowGroups.length === 0 && (
                  <div className="text-center">
                    <h2
                      className="font-alegreya-sans-sc text-3xl font-bold
"
                    >
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
}
