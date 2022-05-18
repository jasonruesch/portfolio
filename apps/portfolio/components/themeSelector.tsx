import { Menu, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { Fragment, useCallback } from 'react';
import cn from 'classnames';
import {
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';

export default function ThemeSelector() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activateMode = useCallback(
    (mode: string) => {
      setTheme(mode);
    },
    [setTheme]
  );

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="focus:ring-cta flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 lg:rounded-md lg:p-2">
          <span
            className={cn(
              theme === 'system' ? 'text-neutral-500' : 'text-cta',
              'hidden text-sm font-medium lg:block'
            )}
          >
            <span className="sr-only">Open theme menu</span>
            {resolvedTheme === 'light' ? (
              <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                className={cn(
                  active ? 'bg-neutral-100' : '',
                  'flex w-full items-center px-4 py-2 text-sm text-neutral-700'
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
                className={cn(
                  active ? 'bg-neutral-100' : '',
                  'flex w-full items-center px-4 py-2 text-sm text-neutral-700'
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
                className={cn(
                  active ? 'bg-neutral-100' : '',
                  'flex w-full items-center px-4 py-2 text-sm text-neutral-700'
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
  );
}