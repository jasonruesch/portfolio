import { Group } from '../models';
import { BoxShadowCard } from './BoxShadowCard';
import { DropShadowCard } from './DropShadowCard';

const groups: Group[] = [
  {
    name: 'Box Shadows',
    items: [
      <BoxShadowCard
        key="box-shadow-small"
        name="Box Shadow Small"
        shadow="shadow-sm"
      />,
      <BoxShadowCard
        key="box-shadow-default"
        name="Box Shadow Default"
        shadow="shadow"
      />,
      <BoxShadowCard
        key="box-shadow-medium"
        name="Box Shadow Medium"
        shadow="shadow-md"
      />,
      <BoxShadowCard
        key="box-shadow-large"
        name="Box Shadow Large"
        shadow="shadow-lg"
      />,
    ],
  },
  {
    name: 'Drop Shadows',
    items: [
      <DropShadowCard
        key="drop-shadow-small"
        name="Drop Shadow Small"
        shadow="drop-shadow-sm"
      />,
      <DropShadowCard
        key="drop-shadow-default"
        name="Drop Shadow Default"
        shadow="drop-shadow"
      />,
      <DropShadowCard
        key="drop-shadow-medium"
        name="Drop Shadow Medium"
        shadow="drop-shadow-md"
      />,
      <DropShadowCard
        key="drop-shadow-large"
        name="Drop Shadow Large"
        shadow="drop-shadow-lg"
      />,
    ],
  },
];

const shadowGroups = {
  name: 'Shadows',
  groups: groups,
};

export { shadowGroups };
