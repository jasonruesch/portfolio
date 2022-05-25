import { ChevronUpIcon } from '@heroicons/react/solid';
import { Group, Section } from '../models';
import { Button } from './button.model';

const buttonGroups: Group<Button>[] = [
  {
    name: 'Primary Button',
    items: [
      {
        name: 'Primary Button States',
        example: (
          <div className="flex h-full flex-col items-center justify-evenly space-y-4 bg-neutral-200 p-4 sm:flex-row">
            <button
              key="primary-default"
              className="bg-cta border-cta/50 rounded-lg border py-2 px-8 text-white hover:bg-opacity-70"
            >
              Default
            </button>
            <button
              key="primary-hover"
              className="bg-cta border-cta/50 rounded-lg border bg-opacity-70 py-2 px-8 text-white"
            >
              Hover
            </button>
            <button
              key="primary-disabled"
              className="bg-cta border-cta/50 rounded-lg border py-2 px-8 text-white disabled:bg-opacity-50 disabled:text-opacity-70"
              disabled
            >
              Disabled
            </button>
          </div>
        ),
        description:
          'bg-cta border-cta/50 rounded-lg border py-2 px-8 text-white hover:bg-opacity-70 disabled:bg-opacity-50 disabled:text-opacity-70',
      },
    ],
  },
  {
    name: 'Secondary Button',
    items: [
      {
        name: 'Secondary Button States',
        example: (
          <div className="flex h-full flex-col items-center justify-evenly space-y-4 bg-neutral-200 p-4 sm:flex-row">
            <button
              key="secondary-default"
              className="rounded-lg border border-neutral-300/50 bg-neutral-300 py-2 px-8 text-black hover:bg-opacity-70"
            >
              Default
            </button>
            <button
              key="secondary-hover"
              className="rounded-lg border border-neutral-300/50 bg-neutral-300 bg-opacity-70 py-2 px-8 text-black"
            >
              Hover
            </button>
            <button
              key="secondary-disabled"
              className="rounded-lg border border-neutral-300/50 bg-neutral-300 py-2 px-8 text-black disabled:bg-opacity-50 disabled:text-neutral-400 disabled:text-opacity-70"
              disabled
            >
              Disabled
            </button>
          </div>
        ),
        description:
          'rounded-lg border border-neutral-300/50 bg-neutral-300 py-2 px-8 text-black hover:bg-opacity-70 disabled:bg-opacity-50 disabled:text-neutral-400 disabled:text-opacity-70',
      },
    ],
  },
  {
    name: 'Icon Buttons',
    items: [
      {
        name: 'Primary Icon Button States',
        example: (
          <div className="flex h-full flex-col items-center justify-evenly space-y-4 bg-neutral-200 p-4 sm:flex-row">
            <div key="primary-icon-default" className="space-y-4 text-center">
              <button
                key="primary-icon-default-button"
                className="bg-cta border-cta/50 rounded-full border py-2 px-2 text-white hover:bg-opacity-70"
              >
                <ChevronUpIcon className="h-12 w-12" />
              </button>
              <p key="primary-icon-default-name" className="text-black">
                Default
              </p>
            </div>
            <div key="primary-icon-hover" className="space-y-4 text-center">
              <button
                key="primary-icon-hover-button"
                className="bg-cta border-cta/50 rounded-full border bg-opacity-70 py-2 px-2 text-white"
              >
                <ChevronUpIcon className="h-12 w-12" />
              </button>
              <p key="primary-icon-hover-name" className="text-black">
                Hover
              </p>
            </div>
            <div key="primary-icon-disabled" className="space-y-4 text-center">
              <button
                key="primary-icon-disabled-button"
                className="bg-cta border-cta/50 rounded-full border py-2 px-2 text-white disabled:bg-opacity-50 disabled:text-opacity-70"
                disabled
              >
                <ChevronUpIcon className="h-12 w-12" />
              </button>
              <p key="primary-icon-disabled-name" className="text-black">
                Disabled
              </p>
            </div>
          </div>
        ),
        description:
          'bg-cta border-cta/50 rounded-full border py-2 px-2 text-white hover:bg-opacity-70 disabled:bg-opacity-50 disabled:text-opacity-70',
      },
    ],
  },
];

const buttonSection: Section<Button> = {
  name: 'Buttons',
  groups: buttonGroups,
};

export { buttonSection };
