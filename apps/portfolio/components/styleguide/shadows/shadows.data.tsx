import { Group, Section } from '../models';
import { Shadow } from './shadow.model';

const shadowGroups: Group<Shadow>[] = [
  {
    name: 'Box Shadows',
    items: [
      {
        name: 'Box Shadow Default',
        example: (
          <div className="flex h-full items-center justify-center">
            <div className="dark:bg-background h-24 w-24 rounded-lg bg-white shadow dark:shadow-black"></div>
          </div>
        ),
        description: 'shadow',
      },
      {
        name: 'Box Shadow Medium',
        example: (
          <div className="flex h-full items-center justify-center">
            <div className="dark:bg-background h-24 w-24 rounded-lg bg-white shadow-md dark:shadow-black"></div>
          </div>
        ),
        description: 'shadow-md',
      },
      {
        name: 'Box Shadow Large',
        example: (
          <div className="flex h-full items-center justify-center">
            <div className="dark:bg-background h-24 w-24 rounded-lg bg-white shadow-lg dark:shadow-black"></div>
          </div>
        ),
        description: 'shadow-lg',
      },
    ],
  },
  {
    name: 'Drop Shadows',
    items: [
      {
        name: 'Drop Shadow Default',
        example: (
          <div className="flex h-full items-center justify-center">
            <div className="dark:drop-shadow-black h-0 w-0 border-t-0 border-l-[48px] border-r-[48px] border-b-[72px] border-solid border-transparent border-b-white drop-shadow dark:border-b-neutral-700"></div>
          </div>
        ),
        description: 'drop-shadow',
      },
      {
        name: 'Drop Shadow Medium',
        example: (
          <div className="flex h-full items-center justify-center">
            <div className="dark:drop-shadow-black h-0 w-0 border-t-0 border-l-[48px] border-r-[48px] border-b-[72px] border-solid border-transparent border-b-white drop-shadow-md dark:border-b-neutral-700"></div>
          </div>
        ),
        description: 'drop-shadow-md',
      },
      {
        name: 'Drop Shadow Large',
        example: (
          <div className="flex h-full items-center justify-center">
            <div className="h-0 w-0 border-t-0 border-l-[48px] border-r-[48px] border-b-[72px] border-solid border-transparent border-b-white drop-shadow-lg dark:border-b-neutral-700"></div>
          </div>
        ),
        description: 'drop-shadow-lg',
      },
    ],
  },
];

const shadowSection: Section<Shadow> = {
  name: 'Shadows',
  groups: shadowGroups,
};

export { shadowSection };