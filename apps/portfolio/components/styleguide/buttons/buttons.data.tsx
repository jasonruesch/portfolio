import { ChevronUpIcon } from '@heroicons/react/solid';
import { Group, Section } from '../models';
import { Button } from './Button.model';

const buttonGroups: Group<Button>[] = [
  {
    name: 'Buttons',
    items: [
      {
        name: 'Primary Button States',
        example: (
          <div className="flex h-full flex-col items-center justify-evenly space-y-4 p-8 sm:flex-row sm:space-y-0">
            <button
              key="primary-default"
              className="bg-cta border-cta-50 rounded-lg border py-2 px-8 text-white hover:bg-opacity-70"
            >
              Default
            </button>
            <button
              key="primary-hover"
              className="bg-cta border-cta-50 rounded-lg border bg-opacity-70 py-2 px-8 text-white"
            >
              Hover
            </button>
            <button
              key="primary-disabled"
              className="bg-cta border-cta-50 rounded-lg border py-2 px-8 text-white disabled:bg-opacity-50 disabled:text-opacity-70"
              disabled
            >
              Disabled
            </button>
          </div>
        ),
        description:
          'bg-cta border-cta-50 rounded-lg border py-2 px-8 text-white hover:bg-opacity-70 disabled:bg-opacity-50 disabled:text-opacity-70',
      },
      {
        name: 'Secondary Button States',
        example: (
          <div className="flex h-full flex-col items-center justify-evenly space-y-4 p-8 sm:flex-row sm:space-y-0">
            <button
              key="secondary-default"
              className="rounded-lg border border-neutral-400 bg-neutral-300 py-2 px-8 text-black hover:bg-neutral-400"
            >
              Default
            </button>
            <button
              key="secondary-hover"
              className="rounded-lg border border-neutral-400 bg-neutral-400 py-2 px-8 text-black"
            >
              Hover
            </button>
            <button
              key="secondary-disabled"
              className="rounded-lg border border-neutral-400 bg-neutral-300 py-2 px-8 text-black disabled:bg-neutral-400 disabled:text-neutral-500"
              disabled
            >
              Disabled
            </button>
          </div>
        ),
        description:
          'rounded-lg border border-neutral-400 bg-neutral-300 py-2 px-8 text-black hover:bg-neutral-400 disabled:bg-neutral-400 disabled:text-neutral-500',
      },
    ],
  },
  {
    name: 'Icon Buttons',
    items: [
      {
        name: 'Primary Icon Button States',
        example: (
          <div className="flex h-full flex-col items-center justify-evenly space-y-4 p-8 sm:flex-row sm:space-y-0">
            <div key="primary-icon-default" className="space-y-4 text-center">
              <button
                key="primary-icon-default-button"
                className="bg-cta border-cta-50 rounded-full border py-2 px-2 text-white hover:bg-opacity-70"
              >
                <ChevronUpIcon className="h-12 w-12" />
              </button>
              <p key="primary-icon-default-name">Default</p>
            </div>
            <div key="primary-icon-hover" className="space-y-4 text-center">
              <button
                key="primary-icon-hover-button"
                className="bg-cta border-cta-50 rounded-full border bg-opacity-70 py-2 px-2 text-white"
              >
                <ChevronUpIcon className="h-12 w-12" />
              </button>
              <p key="primary-icon-hover-name">Hover</p>
            </div>
            <div key="primary-icon-disabled" className="space-y-4 text-center">
              <button
                key="primary-icon-disabled-button"
                className="bg-cta border-cta-50 rounded-full border py-2 px-2 text-white disabled:bg-opacity-50 disabled:text-opacity-70"
                disabled
              >
                <ChevronUpIcon className="h-12 w-12" />
              </button>
              <p key="primary-icon-disabled-name">Disabled</p>
            </div>
          </div>
        ),
        description:
          'bg-cta border-cta-50 rounded-full border py-2 px-2 text-white hover:bg-opacity-70 disabled:bg-opacity-50 disabled:text-opacity-70',
      },
    ],
  },
];

const buttonSection: Section<Button> = {
  name: 'Buttons',
  groups: buttonGroups,
};

export { buttonSection };
