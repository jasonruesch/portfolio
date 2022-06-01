import { ChevronUpIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { Group } from '../models';
import { ButtonCard } from './ButtonCard';

const buttonGroups: Group[] = [
  {
    name: 'Buttons',
    items: [
      <ButtonCard
        key="primary-button"
        name="Primary Buttons"
        className={classNames(
          'inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm',
          'bg-button-primary text-button-primary border-button-primary'
        )}
        hoverClassName="hover:bg-button-primary-hover hover:text-button-primary-hover"
        hoverWithoutStateClassName="bg-button-primary-hover text-button-primary-hover"
        focusClassName={classNames(
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'focus:ring-offset-button-primary-focus focus:ring-button-primary-focus'
        )}
        focusWithoutStateClassName={classNames(
          'outline-none ring-2 ring-offset-2',
          'ring-offset-button-primary-focus ring-button-primary-focus'
        )}
        disabledClassName="disabled:bg-button-primary-disabled disabled:text-button-primary-disabled"
      />,
      <ButtonCard
        key="secondary-button"
        name="Secondary Buttons"
        className={classNames(
          'inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm',
          'bg-button-secondary text-button-secondary border-button-secondary'
        )}
        hoverClassName="hover:bg-button-secondary-hover hover:text-button-secondary-hover"
        hoverWithoutStateClassName="bg-button-secondary-hover text-button-secondary-hover"
        focusClassName={classNames(
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'focus:ring-offset-button-secondary-focus focus:ring-button-secondary-focus'
        )}
        focusWithoutStateClassName={classNames(
          'outline-none ring-2 ring-offset-2',
          'ring-offset-button-secondary-focus ring-button-secondary-focus'
        )}
        disabledClassName="disabled:bg-button-secondary-disabled disabled:text-button-secondary-disabled"
      />,
    ],
  },
  {
    name: 'Icon Buttons',
    items: [
      <ButtonCard
        key="primary-button"
        name="Primary Buttons"
        className={classNames(
          'inline-flex items-center rounded-full border p-2 font-medium shadow-sm',
          'bg-button-primary text-button-primary border-button-primary'
        )}
        hoverClassName="hover:bg-button-primary-hover hover:text-button-primary-hover"
        hoverWithoutStateClassName="bg-button-primary-hover text-button-primary-hover"
        focusClassName={classNames(
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'focus:ring-offset-button-primary-focus focus:ring-button-primary-focus'
        )}
        focusWithoutStateClassName={classNames(
          'outline-none ring-2 ring-offset-2',
          'ring-offset-button-primary-focus ring-button-primary-focus'
        )}
        disabledClassName="disabled:bg-button-primary-disabled disabled:text-button-primary-disabled"
      >
        <ChevronUpIcon className="h-12 w-12" />
      </ButtonCard>,
      <ButtonCard
        key="secondary-button"
        name="Secondary Buttons"
        className={classNames(
          'inline-flex items-center rounded-full border p-2 font-medium shadow-sm',
          'bg-button-secondary text-button-secondary border-button-secondary'
        )}
        hoverClassName="hover:bg-button-secondary-hover hover:text-button-secondary-hover"
        hoverWithoutStateClassName="bg-button-secondary-hover text-button-secondary-hover"
        focusClassName={classNames(
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'focus:ring-offset-button-secondary-focus focus:ring-button-secondary-focus'
        )}
        focusWithoutStateClassName={classNames(
          'outline-none ring-2 ring-offset-2',
          'ring-offset-button-secondary-focus ring-button-secondary-focus'
        )}
        disabledClassName="disabled:bg-button-secondary-disabled disabled:text-button-secondary-disabled"
      >
        <ChevronUpIcon className="h-12 w-12" />
      </ButtonCard>,
    ],
  },
];

const buttonSection = {
  name: 'Buttons',
  groups: buttonGroups,
};

export { buttonSection };
