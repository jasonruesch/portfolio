import { Group } from '../models';
import { ColorCard } from './ColorCard';

const themeColorGroup: Group = {
  name: 'Theme Colors',
  items: [
    <ColorCard
      key="primary-color"
      name="Primary"
      backgroundColor="bg-primary"
      textOnColor="text-on-primary"
      textColorOnSurface="text-primary"
      theme="light"
    />,
    <ColorCard
      key="secondary-color"
      name="Secondary"
      backgroundColor="bg-secondary"
      textOnColor="text-on-secondary"
      textColorOnSurface="text-secondary"
      theme="light"
    />,
    <ColorCard
      key="background-color"
      name="Background"
      backgroundColor="bg-background"
      textOnColor="text-on-background"
      theme="light"
    />,
    <ColorCard
      key="surface-color"
      name="Surface"
      backgroundColor="bg-surface"
      textOnColor="text-on-surface"
      theme="light"
    />,
    <ColorCard
      key="error-color"
      name="Error"
      backgroundColor="bg-error"
      textOnColor="text-on-error"
      theme="light"
    />,
  ],
};

const darkThemeColorGroup: Group = {
  name: 'Dark Theme Colors',
  items: [
    <ColorCard
      key="primary-color"
      name="Primary"
      backgroundColor="bg-primary"
      textOnColor="text-on-primary"
      textColorOnSurface="text-primary"
      theme="dark"
    />,
    <ColorCard
      key="secondary-color"
      name="Secondary"
      backgroundColor="bg-secondary"
      textOnColor="text-on-secondary"
      textColorOnSurface="text-secondary"
      theme="dark"
    />,
    <ColorCard
      key="background-color"
      name="Background"
      backgroundColor="bg-background"
      textOnColor="text-on-background"
      theme="dark"
    />,
    <ColorCard
      key="surface-color"
      name="Surface"
      backgroundColor="bg-surface"
      textOnColor="text-on-surface"
      theme="dark"
    />,
    <ColorCard
      key="error-color"
      name="Error"
      backgroundColor="bg-error"
      textOnColor="text-on-error"
      theme="dark"
    />,
  ],
};

const colorSection = {
  name: 'Colors',
  groups: [themeColorGroup, darkThemeColorGroup],
};

export { colorSection };
