import { ChevronUpIcon } from '@heroicons/react/solid';
import { Group } from '../models';
import { ButtonCard } from './ButtonCard';

const buttonGroups: Group[] = [
  {
    name: 'Buttons',
    items: [
      <ButtonCard
        key="primary-button"
        name="Primary Buttons"
        className="bg-primary text-on-primary rounded-md border-transparent py-2 px-4 text-sm font-bold"
        hoverClassName="hover:bg-primary-600"
        hoverWithoutStateClassName="bg-primary-600"
        activeClassName="active:bg-primary-500"
        activeWithoutStateClassName="bg-primary-500"
        focusClassName="focus:ring-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-black"
        focusWithoutStateClassName="ring-primary outline-none ring-2 ring-offset-1 ring-offset-white dark:ring-offset-black"
        disabledClassName="disabled:bg-primary-300 disabled:text-neutral-600"
      />,
      <ButtonCard
        key="secondar-button"
        name="Secondary Buttons"
        className="bg-secondary text-on-secondary rounded-md border-transparent py-2 px-4 text-sm font-bold"
        hoverClassName="hover:bg-secondary-600"
        hoverWithoutStateClassName="bg-secondary-600"
        activeClassName="active:bg-secondary-500"
        activeWithoutStateClassName="bg-secondary-500"
        focusClassName="focus:ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-black"
        focusWithoutStateClassName="ring-secondary outline-none ring-2 ring-offset-1 ring-offset-white dark:ring-offset-black"
        disabledClassName="disabled:bg-secondary-300 disabled:text-neutral-600"
      />,
      <ButtonCard
        key="tertiary-button"
        name="Tertiary Buttons"
        className="text-secondary rounded-md border-transparent bg-transparent py-2 px-4 text-sm font-bold"
        hoverClassName="hover:bg-neutral-300 hover:text-secondary-600"
        hoverWithoutStateClassName="bg-neutral-300 text-secondary-600"
        activeClassName="active:bg-neutral-200 active:text-secondary-500"
        activeWithoutStateClassName="bg-neutral-200 text-secondary-500"
        focusClassName="focus:bg-transparent focus:ring-secondary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-black"
        focusWithoutStateClassName="ring-secondary outline-none ring-2 ring-offset-1 ring-offset-white dark:ring-offset-black"
        disabledClassName="disabled:bg-neutral-100 disabled:text-neutral-400"
      />,
    ],
  },
  {
    name: 'Icon Buttons',
    items: [
      <ButtonCard
        key="primary-icon-button"
        name="Primary Icon Buttons"
        className="bg-primary text-on-primary rounded-full border-transparent p-2 text-sm font-bold"
        hoverClassName="hover:bg-primary-600"
        hoverWithoutStateClassName="bg-primary-600"
        activeClassName="active:bg-primary-500"
        activeWithoutStateClassName="bg-primary-500"
        focusClassName="focus:ring-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-black"
        focusWithoutStateClassName="ring-primary outline-none ring-2 ring-offset-1 ring-offset-white dark:ring-offset-black"
        disabledClassName="disabled:bg-primary-300 disabled:text-neutral-600"
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
