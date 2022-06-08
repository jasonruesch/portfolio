import { motion } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { SearchIcon, ChevronUpIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import { debounce } from 'lodash';
import { animateScroll as scroll } from 'react-scroll';
import { Logo, Sidebar, ThemeSelector } from '../../components';
import { Sidenav, Sections } from '../../components/styleguide';
import classNames from 'classnames';
import { useActionKey } from '../../components/styleguide/hooks/useActionKey';
import Link from 'next/link';
import { withRouter } from 'next/router';

const StyleGuide = ({ router }) => {
  const actionKey = useActionKey();
  const [showTopButton, setShowTopButton] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchInput = router.query.q || '';
  const pageTitleHeight = 40;

  const handleSearch = debounce((e) => {
    const searchValue: string = e.target.value;
    // Set the query parameter 'q' to the search value
    router.push({
      pathname: router.pathname,
      query: !!searchValue && {
        q: searchValue,
      },
    });
  }, 300);

  const handleScroll = () => {
    // Show top button when the user scrolls down the height of the page title
    if (document.documentElement.scrollTop > pageTitleHeight) {
      setShowTopButton(true);
    } else {
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

    handleScroll();

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
        </Sidebar>

        <div id="top" className="lg:pl-72">
          <header
            className={classNames(
              'supports-backdrop-blur:bg-white/60 sticky top-0 z-10 flex h-16 w-full items-center bg-white/95 backdrop-blur transition-colors duration-500',
              'dark:border-neutral-50/[0.06] dark:bg-black/75',
              'lg:left-[288px] lg:border-b lg:border-neutral-900/10',
              'print:!hidden',
            )}
          >
            <button
              type="button"
              className={classNames('px-4', 'focus:outline-none', 'lg:hidden')}
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className={classNames('flex w-full', 'lg:px-8')}>
              <div className="mr-4 flex-1">
                <Link href="/">
                  <a
                    className={classNames('text-link', 'hover:text-link-hover')}
                  >
                    &larr;{' '}
                    <span className={classNames('hidden', 'sm:inline')}>
                      Back to Home
                    </span>
                  </a>
                </Link>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div
                  className={classNames(
                    'relative w-full max-w-sm text-neutral-500',
                    'focus-within:text-on-background',
                  )}
                >
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
                    className={classNames(
                      'block h-full w-full border-none bg-transparent py-0.5 pl-8 pr-11 placeholder-neutral-500',
                      'focus:outline-none focus:ring-0',
                    )}
                    placeholder="Quick search..."
                    defaultValue={searchInput}
                    onInput={handleSearch}
                    onChange={handleSearch}
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
              <ThemeSelector />
            </div>
          </header>

          <main className="flex-1">
            {/* Page header */}
            <div
              className={classNames(
                'p-3',
                'lg:mx-auto lg:max-w-screen-lg lg:px-8',
              )}
            >
              <Logo className={classNames('mb-4 hidden w-72', 'print:block')} />
              <h1
                className={classNames(
                  'font-heading text-3xl font-bold',
                  'lg:text-4xl',
                )}
              >
                Style Guide
              </h1>
            </div>

            <div
              className={classNames(
                'px-4',
                'lg:mx-auto lg:max-w-screen-lg lg:px-8',
              )}
            >
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
            'circular-button-primary fixed bottom-8 right-12 z-40',
            'print:hidden',
          )}
          onClick={() =>
            scroll.scrollToTop({
              smooth: true,
            })
          }
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      </Transition>
    </>
  );
};

// StyleGuide.theme = 'light';
export default withRouter(StyleGuide);
