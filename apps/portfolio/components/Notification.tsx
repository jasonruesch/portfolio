/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

export type NotificatonType = 'success' | 'error';

export function Notification({
  children,
  className,
  type = 'error',
  show = false,
  onHide,
}: {
  children: React.ReactNode;
  className?: string;
  type?: NotificatonType;
  show: boolean;
  onHide: () => void;
}) {
  const live = document.getElementById('live');

  return createPortal(
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom={classNames(
        'translate-y-2 opacity-0',
        'sm:translate-y-0 sm:translate-x-2',
        'sm-max-h:translate-y-2 sm-max-h:translate-x-auto',
      )}
      enterTo={classNames(
        'translate-y-0 opacity-100',
        'sm:translate-x-0',
        'sm-max-h:translate-x-auto',
      )}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={classNames(
          'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5',
          'dark:ring-opacity-50',
          {
            'bg-error text-on-error': type === 'error',
            'bg-green-500 text-white': type === 'success',
          },
          className,
        )}
      >
        <div className="p-4">
          <div className="flex items-center">
            <p className="w-0 flex-1 text-sm font-medium">{children}</p>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className={classNames(
                  'inline-flex rounded-md',
                  'focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2',
                  {
                    'focus:ring-offset-error': type === 'error',
                    'focus:ring-offset-green-500': type === 'success',
                  },
                )}
                onClick={() => {
                  onHide();
                }}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>,
    live,
  );
}
