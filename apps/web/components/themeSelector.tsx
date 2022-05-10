import { Menu, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { Fragment, useCallback } from 'react';

export default function ThemeSelector({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme, forcedTheme } = useTheme();
  const activateMode = useCallback(
    (mode: string) => {
      setTheme(mode);
    },
    [setTheme]
  );
  // Theme is forced, we shouldn't allow user to change the theme.
  const disabled = !!forcedTheme;

  return (
    <Menu
      as="div"
      className={`relative inline-block text-left leading-3 ${className} ${
        disabled ? 'hidden' : ''
      }`}
    >
      <label className="sr-only" id="theme-selector-label">
        Theme
      </label>
      <Menu.Button
        aria-labelledby="theme-selector-label"
        className={`focus:outline-none ${
          theme === 'system' ? 'text-gray' : 'text-brand-bleu-de-france'
        }`}
      >
        {resolvedTheme === 'light' ? (
          <LightIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <DarkIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="dark:bg-dark-gray ring-light-gray-15 absolute top-full right-0 z-50 mt-2 w-36 overflow-hidden rounded-lg bg-background py-1 text-sm font-semibold shadow-lg ring-1 focus:outline-none dark:ring-0"
          aria-labelledby="theme-selector-label"
        >
          <Menu.Item
            as="li"
            className={`flex cursor-pointer items-center py-1 px-2 ${
              theme === 'light' ? 'text-brand-bleu-de-france' : ''
            } hover:bg-light-gray-15`}
            onClick={() => activateMode('light')}
          >
            <LightIcon
              className={`mr-2 h-6 w-6 ${
                theme === 'light' ? 'text-brand-bleu-de-france' : 'text-gray'
              }`}
              aria-hidden="true"
            />
            Light
          </Menu.Item>
          <Menu.Item
            as="li"
            className={`flex cursor-pointer items-center py-1 px-2 ${
              theme === 'dark' ? 'text-brand-bleu-de-france' : ''
            } hover:bg-light-gray-15`}
            onClick={() => activateMode('dark')}
          >
            <DarkIcon
              className={`mr-2 h-6 w-6 ${
                theme === 'dark' ? 'text-brand-bleu-de-france' : 'text-gray'
              }`}
              aria-hidden="true"
            />
            Dark
          </Menu.Item>
          <Menu.Item
            as="li"
            className={`flex cursor-pointer items-center py-1 px-2 ${
              theme === 'system' ? 'text-brand-bleu-de-france' : ''
            } hover:bg-light-gray-15`}
            onClick={() => activateMode('system')}
          >
            <SystemIcon
              className={`mr-2 h-6 w-6 ${
                theme === 'system' ? 'text-brand-bleu-de-france' : 'text-gray'
              }`}
              aria-hidden="true"
            />
            System
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function LightIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className="stroke-current"
      ></path>
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className="stroke-current"
      ></path>
    </svg>
  );
}

function DarkIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className="fill-transparent"
      ></path>
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className="fill-current"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className="fill-current"
      ></path>
    </svg>
  );
}

function SystemIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        strokeWidth="2"
        strokeLinejoin="round"
        className="stroke-current"
      ></path>
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-current"
      ></path>
    </svg>
  );
}
