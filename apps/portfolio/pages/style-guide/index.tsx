import { Fragment, ReactElement, useCallback, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ColorSwatchIcon,
  DocumentTextIcon,
  MenuAlt1Icon,
  XIcon,
} from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import cn from 'classnames';
import ThemeSelector from '../../components/themeSelector';
import Link from 'next/link';

interface ColorItem {
  name: string;
  bgColor: string;
  textColor: string;
  description: string;
  allowOnLight?: boolean;
  allowOnDark?: boolean;
}
interface ColorGroup {
  name: string;
  items: ColorItem[];
}
interface TypographyItem {
  name: string;
  font: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  example: ReactElement;
  description: string;
}
interface TypographyGroup {
  name: string;
  items: TypographyItem[];
}

const navigation = [
  { name: 'Colors', href: '#colors', icon: ColorSwatchIcon },
  {
    name: 'Typography',
    href: '#typography',
    icon: DocumentTextIcon,
  },
  { name: 'Shadows', href: '#shadows', icon: DocumentTextIcon },
];
// const secondaryNavigation = [
//   { name: 'Buttons', href: '#buttons', icon: TemplateIcon },
//   { name: 'Links', href: '#links', icon: LinkIcon },
//   { name: 'Badges', href: '#badges', icon: TemplateIcon },
//   { name: 'Inputs', href: '#inputs', icon: TemplateIcon },
//   { name: 'Avatars', href: '#avatars', icon: TemplateIcon },
//   { name: 'Icons', href: '#icons', icon: TemplateIcon },
// ];

const themeColors: ColorGroup = {
  name: 'Theme colors',
  items: [
    {
      name: 'Background',
      bgColor: 'bg-background',
      textColor: 'text-background',
      description: '-background',
    },
    {
      name: 'Foreground',
      bgColor: 'bg-foreground',
      textColor: 'text-foreground',
      description: '-foreground',
    },
    {
      name: 'Primary',
      bgColor: 'bg-primary',
      textColor: 'text-primary',
      description: '-primary',
    },
    {
      name: 'Accent',
      bgColor: 'bg-accent',
      textColor: 'text-accent',
      description: '-accent',
    },
    {
      name: 'Warning',
      bgColor: 'bg-warning',
      textColor: 'text-warning',
      description: '-warning',
    },
    {
      name: 'Success',
      bgColor: 'bg-success',
      textColor: 'text-success',
      description: '-success',
    },
    {
      name: 'Call to Action',
      bgColor: 'bg-cta',
      textColor: 'text-cta',
      description: '-cta',
    },
  ],
};
const colorGroups: ColorGroup[] = [
  {
    name: 'Neutral colors',
    items: [
      {
        name: 'Neutral 900',
        bgColor: 'bg-neutral-900',
        textColor: 'text-neutral-900',
        description: '-neutral-900',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 800',
        bgColor: 'bg-neutral-800',
        textColor: 'text-neutral-800',
        description: '-neutral-800',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 700',
        bgColor: 'bg-neutral-700',
        textColor: 'text-neutral-700',
        description: '-neutral-700',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 600',
        bgColor: 'bg-neutral-600',
        textColor: 'text-neutral-600',
        description: '-neutral-600',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 500',
        bgColor: 'bg-neutral-500',
        textColor: 'text-neutral-500',
        description: '-neutral-500',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Neutral 400',
        bgColor: 'bg-neutral-400',
        textColor: 'text-neutral-400',
        description: '-neutral-400',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Neutral 300',
        bgColor: 'bg-neutral-300',
        textColor: 'text-neutral-300',
        description: '-neutral-300',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Neutral 200',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-200',
        description: '-neutral-200',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Neutral 100',
        bgColor: 'bg-neutral-100',
        textColor: 'text-neutral-100',
        description: '-neutral-100',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Neutral 50',
        bgColor: 'bg-neutral-50',
        textColor: 'text-neutral-50',
        description: '-neutral-50',
        allowOnLight: false,
        allowOnDark: true,
      },
    ],
  },
  {
    name: 'Brand colors',
    items: [
      {
        name: 'Alabaster',
        bgColor: 'bg-[#fafafa]',
        textColor: 'text-[#fafafa]',
        description: '#fafafa',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Charcoal',
        bgColor: 'bg-[#303030]',
        textColor: 'text-[#303030]',
        description: '#303030',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Bright Aqua',
        bgColor: 'bg-[#18ffff]',
        textColor: 'text-[#18ffff]',
        description: '#18ffff',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Bright Turquoise',
        bgColor: 'bg-[#14e3e3]',
        textColor: 'text-[#14e3e3]',
        description: '#14e3e3',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Fire Bush',
        bgColor: 'bg-[#e39f2b]',
        textColor: 'text-[#e39f2b]',
        description: '#e39f2b',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Grapefruit',
        bgColor: 'bg-[#e33b2b]',
        textColor: 'text-[#e33b2b]',
        description: '#e33b2b',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Malachite',
        bgColor: 'bg-[#09e368]',
        textColor: 'text-[#09e368]',
        description: '#09e368',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Electric Purple',
        bgColor: 'bg-[#ab30ff]',
        textColor: 'text-[#ab30ff]',
        description: '#ab30ff',
        allowOnLight: true,
        allowOnDark: true,
      },
    ],
  },
];
const typographyGroups: TypographyGroup[] = [
  {
    name: 'Headings',
    items: [
      {
        name: 'Heading H1',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '36px',
        lineHeight: '40px',
        example: (
          <h1 className="text-4xl font-bold">Etiam nec metus vitae lectus</h1>
        ),
        description: 'text-4xl font-bold',
      },
      {
        name: 'Heading H2',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '30px',
        lineHeight: '36px',
        example: (
          <h2 className="text-3xl font-bold">Etiam nec metus vitae lectus</h2>
        ),
        description: 'text-3xl font-bold',
      },
      {
        name: 'Heading H3',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '24px',
        lineHeight: '32px',
        example: (
          <h3 className="text-2xl font-bold">Etiam nec metus vitae lectus</h3>
        ),
        description: 'text-2xl font-bold',
      },
      {
        name: 'Heading H4',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '20px',
        lineHeight: '28px',
        example: (
          <h4 className="text-xl font-bold">Etiam nec metus vitae lectus</h4>
        ),
        description: 'text-xl font-bold',
      },
      {
        name: 'Heading H5',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '18px',
        lineHeight: '28px',
        example: (
          <h5 className="text-lg font-bold">Etiam nec metus vitae lectus</h5>
        ),
        description: 'text-lg font-bold',
      },
      {
        name: 'Heading H6',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '16px',
        lineHeight: '24px',
        example: (
          <h6 className="text-base font-bold">Etiam nec metus vitae lectus</h6>
        ),
        description: 'text-base font-bold',
      },
    ],
  },
  {
    name: 'Body',
    items: [
      {
        name: 'Body Default',
        font: 'Inter',
        fontWeight: 'Regular',
        fontSize: '16px',
        lineHeight: '24px',
        example: (
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
        ),
        description: 'text-base',
      },
      {
        name: 'Body Small',
        font: 'Inter',
        fontWeight: 'Regular',
        fontSize: '14px',
        lineHeight: '20px',
        example: (
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
        ),
        description: 'text-sm',
      },
      {
        name: 'Body Extra Small',
        font: 'Inter',
        fontWeight: 'Regular',
        fontSize: '12px',
        lineHeight: '16px',
        example: (
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
        ),
        description: 'text-xs',
      },
    ],
  },
  {
    name: 'Rich Text',
    items: [
      {
        name: 'Bold Text',
        font: 'Inter',
        example: (
          <span className="font-bold">
            Lorem ipsum dolor sit amet consectetur
          </span>
        ),
        description: 'font-bold',
      },
      {
        name: 'Link',
        font: 'Inter',
        example: (
          <a href="" className="hover:text-cta underline">
            Lorem ipsum dolor sit amet consectetur
          </a>
        ),
        description: 'hover:text-cta underline',
      },
      {
        name: 'Bullet List',
        font: 'Inter',
        example: (
          <ul className="list-inside list-disc">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Posuere enim mi pharetra neque proin dic</li>
            <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
          </ul>
        ),
        description: 'list-inside list-disc',
      },
      {
        name: 'Numbered List',
        font: 'Inter',
        example: (
          <ol className="list-inside list-decimal">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Posuere enim mi pharetra neque proin dic</li>
            <li>Mauris aliquet faucibus iaculis dui vitae ullamco</li>
          </ol>
        ),
        description: 'list-inside list-decimal',
      },
      {
        name: 'Blockquote',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '24px',
        lineHeight: '32px',
        example: (
          <blockquote className="rounded-lg bg-neutral-300 px-6 py-12 text-center text-2xl font-bold dark:bg-neutral-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore!
          </blockquote>
        ),
        description:
          'rounded-lg bg-neutral-300 px-6 py-12 text-center text-2xl font-bold dark:bg-neutral-700',
      },
    ],
  },
];

export default function StyleGuide() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavItemClick = useCallback(
    (e) => {
      e.preventDefault();

      setSidebarOpen(false);

      const location = e.target.getAttribute('href');
      const offset = document.querySelector(location)?.offsetTop || 0;
      window.scrollTo({
        top: offset - (sidebarOpen ? 64 : 0),
      });
    },
    [sidebarOpen]
  );

  return (
    <div className="min-h-full">
      {/* Sidebar for mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
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
                <div className="flex flex-shrink-0 items-center px-4">
                  <Link href="/">
                    <a onClick={() => setSidebarOpen(false)}>
                      <Image
                        layout="raw"
                        width="224"
                        height="30"
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="Jason Ruesch"
                      />
                    </a>
                  </Link>
                </div>
                <nav
                  className="mt-5 h-full flex-shrink-0 divide-y divide-neutral-500 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="space-y-1 px-2">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={handleNavItemClick}
                        className={cn(
                          index === -1
                            ? 'bg-neutral-800 text-white'
                            : 'text-neutral-100 hover:bg-neutral-600 hover:text-white',
                          'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                        )}
                        aria-current={index === -1 ? 'page' : undefined}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-neutral-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* <div className="mt-6 pt-6">
                    <div className="space-y-1 px-2">
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-neutral-100 hover:bg-neutral-600 hover:text-white"
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 text-neutral-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div> */}
                </nav>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-neutral-700 pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <Link href="/">
              <a>
                <Image
                  layout="raw"
                  width="224"
                  height="30"
                  className="h-8 w-auto"
                  src="/logo.svg"
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
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavItemClick}
                  className={cn(
                    index === -1
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-100 hover:bg-neutral-600 hover:text-white',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6'
                  )}
                  aria-current={index === -1 ? 'page' : undefined}
                >
                  <item.icon
                    className="mr-4 h-6 w-6 flex-shrink-0 text-neutral-200"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </div>
            {/* <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-neutral-100 hover:bg-neutral-600 hover:text-white"
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 text-neutral-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div> */}
          </nav>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Sidebar button, search and theme selector */}
        <div className="fixed z-10 flex h-16 w-full flex-shrink-0 border-b border-neutral-300 bg-white dark:bg-black print:hidden lg:relative lg:w-auto lg:border-none">
          {/* Open sidebar button */}
          <button
            type="button"
            className="border-r border-neutral-300 px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="flex flex-1">
              {/* Search bar */}
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
                    id="search-field"
                    name="search-field"
                    className="block h-full w-full border-transparent bg-transparent py-2 pl-8 pr-3 placeholder-neutral-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search styles"
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              {/* Theme dropdown */}
              <ThemeSelector />
            </div>
          </div>
        </div>

        <main id="main" className="flex-1 pt-16 pb-8 print:pt-0 lg:pt-0">
          {/* Page header */}
          <div className="bg-white px-4 shadow dark:bg-black print:shadow-none sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="py-6 lg:border-t lg:border-neutral-300">
              <h1 className="text-4xl font-bold sm:truncate sm:leading-9">
                <span className="hidden print:inline">Jason Ruesch&apos;s</span>{' '}
                Style Guide
              </h1>
            </div>
          </div>

          <div className="mt-8">
            {/* Colors */}
            <section id="colors">
              <h2 className="mx-auto flex max-w-6xl items-center px-4 pt-8 print:pt-0 sm:px-6 lg:px-8">
                <ColorSwatchIcon
                  className="mr-4 h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                Colors
              </h2>
              <div className="mx-auto max-w-6xl space-y-8 divide-y divide-neutral-300 px-4 print:divide-y-0 sm:px-6 lg:px-8">
                {[
                  themeColors,
                  { ...themeColors, name: 'Dark theme colors' },
                  ...colorGroups,
                ].map((group) => (
                  <div
                    key={group.name}
                    className={`pt-8 print:break-inside-avoid ${cn({
                      'dark hidden print:block':
                        group.name === 'Dark theme colors',
                    })}`}
                  >
                    <h3>{group.name}</h3>
                    <div className="mt-2 grid grid-cols-1 gap-5 print:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4">
                      {/* Item */}
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className={`ring-foreground/10 overflow-hidden rounded-lg shadow ring-1 ${item.bgColor}`}
                        >
                          <div className="relative h-40">
                            <div className="absolute top-5 right-5">
                              {item.allowOnLight && (
                                <div
                                  className={`mb-2 rounded-3xl bg-white py-2 px-4 text-sm ${item.textColor}`}
                                >
                                  {item.name}
                                </div>
                              )}
                              {item.allowOnDark && (
                                <div
                                  className={`rounded-3xl bg-black py-2 px-4 text-sm ${item.textColor}`}
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
            <section id="typography" className="print:break-before-page">
              <h2 className="mx-auto flex max-w-6xl items-center px-4 pt-8 sm:px-6 lg:px-8">
                <DocumentTextIcon
                  className="mr-4 h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                Typography
              </h2>
              <div className="mx-auto max-w-6xl space-y-8 divide-y divide-neutral-300 px-4 print:divide-y-0 sm:px-6 lg:px-8">
                {typographyGroups.map((group) => (
                  <div
                    key={group.name}
                    className="space-y-8 pt-8 print:break-inside-avoid"
                  >
                    <h3>{group.name}</h3>
                    {/* Item */}
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-1 gap-5 print:grid-cols-3 sm:grid-cols-3"
                      >
                        <div className="col-span-1">
                          <h4>{item.name}</h4>
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
          </div>
        </main>
      </div>
    </div>
  );
}
