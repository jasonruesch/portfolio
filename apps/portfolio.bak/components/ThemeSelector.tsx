import { Menu, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { Fragment, useCallback } from 'react';
import classNames from 'classnames';
import {
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';

export function ThemeSelector({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme, forcedTheme } = useTheme();
  const activateMode = useCallback(
    (mode: string) => {
      setTheme(mode);
    },
    [setTheme],
  );

  return (
    !forcedTheme && (
      <Menu as="div" className="relative">
        <Menu.Button
          className={classNames(
            'flex items-center px-4 text-sm',
            'focus:outline-none',
            'lg:rounded-md lg:pr-0',
            className,
          )}
        >
          <span
            className={classNames('text-primary block text-sm font-medium', {
              '!text-neutral-500': theme === 'system',
              'hover:!text-on-background': theme === 'system',
            })}
          >
            <span className="sr-only">Open theme menu</span>
            {resolvedTheme === 'light' ? (
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
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
            className={classNames(
              'bg-surface absolute right-4 z-50 mt-2 w-48 origin-top-right rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5',
              'focus:outline-none',
              'dark:shadow-black dark:ring-opacity-50',
              'lg:right-0',
            )}
          >
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'flex w-full items-center px-4 py-2 text-sm',
                    {
                      'bg-neutral-400/20': active,
                      'dark:bg-neutral-100/20': active,
                    },
                  )}
                  onClick={() => activateMode('light')}
                >
                  <SunIcon
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Light
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'flex w-full items-center px-4 py-2 text-sm',
                    {
                      'bg-neutral-400/20': active,
                      'dark:bg-neutral-100/20': active,
                    },
                  )}
                  onClick={() => activateMode('dark')}
                >
                  <MoonIcon
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Dark
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    'flex w-full items-center px-4 py-2 text-sm',
                    {
                      'bg-neutral-400/20': active,
                      'dark:bg-neutral-100/20': active,
                    },
                  )}
                  onClick={() => activateMode('system')}
                >
                  <DesktopComputerIcon
                    className="mr-4 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  System
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  );
}
