/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

export function Notification({
  children,
  className,
  show = false,
  onHide,
}: {
  children: React.ReactNode;
  className?: string;
  show: boolean;
  onHide: () => void;
}) {
  const live = document.getElementById('live');

  return createPortal(
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2 sm-max-h:translate-y-2 sm-max-h:translate-x-auto"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0 sm-max-h:translate-x-auto"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={classNames(
          'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5',
          className
        )}
      >
        <div className="p-4">
          <div className="flex items-center">
            <p className="w-0 flex-1 text-sm font-medium text-gray-900">
              {children}
            </p>
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="focus:ring-cta inline-flex rounded-md bg-inherit text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
    live
  );
}
