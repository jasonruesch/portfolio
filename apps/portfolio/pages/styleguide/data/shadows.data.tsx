import { Group, ShadowItem } from '../models';

const shadowGroups: Group[] = [
  {
    name: 'Box Shadows',
    items: [
      {
        name: 'Box Shadow Default',
        example: <div className="h-24 w-24 rounded-lg bg-white shadow"></div>,
        description: 'shadow',
      },
      {
        name: 'Box Shadow Medium',
        example: (
          <div className="h-24 w-24 rounded-lg bg-white shadow-md"></div>
        ),
        description: 'shadow-md',
      },
      {
        name: 'Box Shadow Large',
        example: (
          <div className="h-24 w-24 rounded-lg bg-white shadow-lg"></div>
        ),
        description: 'shadow-lg',
      },
    ] as ShadowItem[],
  },
  {
    name: 'Drop Shadows',
    items: [
      {
        name: 'Drop Shadow Default',
        example: (
          <div className="h-0 w-0 border-t-0 border-l-[80px] border-r-[80px] border-b-[70px] border-solid border-transparent border-b-white drop-shadow"></div>
        ),
        description: 'drop-shadow',
      },
      {
        name: 'Drop Shadow Medium',
        example: (
          <div className="h-0 w-0 border-t-0 border-l-[80px] border-r-[80px] border-b-[70px] border-solid border-transparent border-b-white drop-shadow-md"></div>
        ),
        description: 'drop-shadow-md',
      },
      {
        name: 'Drop Shadow Large',
        example: (
          <div className="h-0 w-0 border-t-0 border-l-[80px] border-r-[80px] border-b-[70px] border-solid border-transparent border-b-white drop-shadow-lg"></div>
        ),
        description: 'drop-shadow-lg',
      },
    ] as ShadowItem[],
  },
];

export { shadowGroups };
