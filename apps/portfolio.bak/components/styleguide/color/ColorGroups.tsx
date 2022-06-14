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
    <ColorCard
      key="success-color"
      name="Success"
      backgroundColor="bg-success"
      textOnColor="text-on-success"
      theme="light"
    />,
  ],
};

const darkThemeColorGroup: Group = {
  name: 'Dark Theme Colors',
  items: [
    <ColorCard
      key="dark-primary-color"
      name="Primary"
      backgroundColor="bg-primary"
      textOnColor="text-on-primary"
      textColorOnSurface="text-primary"
      theme="dark"
    />,
    <ColorCard
      key="dark-secondary-color"
      name="Secondary"
      backgroundColor="bg-secondary"
      textOnColor="text-on-secondary"
      textColorOnSurface="text-secondary"
      theme="dark"
    />,
    <ColorCard
      key="dark-background-color"
      name="Background"
      backgroundColor="bg-background"
      textOnColor="text-on-background"
      theme="dark"
    />,
    <ColorCard
      key="dark-surface-color"
      name="Surface"
      backgroundColor="bg-surface"
      textOnColor="text-on-surface"
      theme="dark"
    />,
    <ColorCard
      key="dark-error-color"
      name="Error"
      backgroundColor="bg-error"
      textOnColor="text-on-error"
      theme="dark"
    />,
    <ColorCard
      key="dark-success-color"
      name="Success"
      backgroundColor="bg-success"
      textOnColor="text-on-success"
      theme="dark"
    />,
  ],
};

const cyanColors = [
  { name: 'Cyan 50', backgroundColor: 'bg-cyan-50', description: '-cyan-50' },
  {
    name: 'Cyan 100',
    backgroundColor: 'bg-cyan-100',
    description: '-cyan-100',
  },
  {
    name: 'Cyan 200',
    backgroundColor: 'bg-cyan-200',
    description: '-cyan-200',
  },
  {
    name: 'Cyan 300',
    backgroundColor: 'bg-cyan-300',
    description: '-cyan-300',
  },
  {
    name: 'Cyan 400',
    backgroundColor: 'bg-cyan-400',
    description: '-cyan-400',
  },
  {
    name: 'Cyan 500',
    backgroundColor: 'bg-cyan-500',
    description: '-cyan-500',
  },
  {
    name: 'Cyan 600',
    backgroundColor: 'bg-cyan-600',
    description: '-cyan-600',
  },
  {
    name: 'Cyan 700',
    backgroundColor: 'bg-cyan-700',
    description: '-cyan-700',
  },
  {
    name: 'Cyan 800',
    backgroundColor: 'bg-cyan-800',
    description: '-cyan-800',
  },
  {
    name: 'Cyan 900',
    backgroundColor: 'bg-cyan-900',
    description: '-cyan-900',
  },
];
const cyanColorGroup: Group = {
  name: 'Cyan',
  items: cyanColors.map((color) => (
    <ColorCard
      key={color.backgroundColor}
      name={color.name}
      backgroundColor={color.backgroundColor}
      description={color.description}
    />
  )),
};

const amberColors = [
  {
    name: 'Amber 50',
    backgroundColor: 'bg-amber-50',
    description: '-amber-50',
  },
  {
    name: 'Amber 100',
    backgroundColor: 'bg-amber-100',
    description: '-amber-100',
  },
  {
    name: 'Amber 200',
    backgroundColor: 'bg-amber-200',
    description: '-amber-200',
  },
  {
    name: 'Amber 300',
    backgroundColor: 'bg-amber-300',
    description: '-amber-300',
  },
  {
    name: 'Amber 400',
    backgroundColor: 'bg-amber-400',
    description: '-amber-400',
  },
  {
    name: 'Amber 500',
    backgroundColor: 'bg-amber-500',
    description: '-amber-500',
  },
  {
    name: 'Amber 600',
    backgroundColor: 'bg-amber-600',
    description: '-amber-600',
  },
  {
    name: 'Amber 700',
    backgroundColor: 'bg-amber-700',
    description: '-amber-700',
  },
  {
    name: 'Amber 800',
    backgroundColor: 'bg-amber-800',
    description: '-amber-800',
  },
  {
    name: 'Amber 900',
    backgroundColor: 'bg-amber-900',
    description: '-amber-900',
  },
];
const amberColorGroup: Group = {
  name: 'Amber',
  items: amberColors.map((color) => (
    <ColorCard
      key={color.backgroundColor}
      name={color.name}
      backgroundColor={color.backgroundColor}
      description={color.description}
    />
  )),
};

const violetColors = [
  {
    name: 'Violet 50',
    backgroundColor: 'bg-violet-50',
    description: '-violet-50',
  },
  {
    name: 'Violet 100',
    backgroundColor: 'bg-violet-100',
    description: '-violet-100',
  },
  {
    name: 'Violet 200',
    backgroundColor: 'bg-violet-200',
    description: '-violet-200',
  },
  {
    name: 'Violet 300',
    backgroundColor: 'bg-violet-300',
    description: '-violet-300',
  },
  {
    name: 'Violet 400',
    backgroundColor: 'bg-violet-400',
    description: '-violet-400',
  },
  {
    name: 'Violet 500',
    backgroundColor: 'bg-violet-500',
    description: '-violet-500',
  },
  {
    name: 'Violet 600',
    backgroundColor: 'bg-violet-600',
    description: '-violet-600',
  },
  {
    name: 'Violet 700',
    backgroundColor: 'bg-violet-700',
    description: '-violet-700',
  },
  {
    name: 'Violet 800',
    backgroundColor: 'bg-violet-800',
    description: '-violet-800',
  },
  {
    name: 'Violet 900',
    backgroundColor: 'bg-violet-900',
    description: '-violet-900',
  },
];
const violetColorGroup: Group = {
  name: 'Violet',
  items: violetColors.map((color) => (
    <ColorCard
      key={color.backgroundColor}
      name={color.name}
      backgroundColor={color.backgroundColor}
      description={color.description}
    />
  )),
};

const tealColors = [
  { name: 'Teal 50', backgroundColor: 'bg-teal-50', description: '-teal-500' },
  {
    name: 'Teal 100',
    backgroundColor: 'bg-teal-100',
    description: '-teal-100',
  },
  {
    name: 'Teal 200',
    backgroundColor: 'bg-teal-200',
    description: '-teal-200',
  },
  {
    name: 'Teal 300',
    backgroundColor: 'bg-teal-300',
    description: '-teal-300',
  },
  {
    name: 'Teal 400',
    backgroundColor: 'bg-teal-400',
    description: '-teal-400',
  },
  {
    name: 'Teal 500',
    backgroundColor: 'bg-teal-500',
    description: '-teal-500',
  },
  {
    name: 'Teal 600',
    backgroundColor: 'bg-teal-600',
    description: '-teal-600',
  },
  {
    name: 'Teal 700',
    backgroundColor: 'bg-teal-700',
    description: '-teal-700',
  },
  {
    name: 'Teal 800',
    backgroundColor: 'bg-teal-800',
    description: '-teal-800',
  },
  {
    name: 'Teal 900',
    backgroundColor: 'bg-teal-900',
    description: '-teal-900',
  },
];
const tealColorGroup: Group = {
  name: 'Teal',
  items: tealColors.map((color) => (
    <ColorCard
      key={color.backgroundColor}
      name={color.name}
      backgroundColor={color.backgroundColor}
      description={color.description}
    />
  )),
};

const neutralColors = [
  {
    name: 'Neutral 50',
    backgroundColor: 'bg-neutral-50',
    description: '-neutral-50',
  },
  {
    name: 'Neutral 100',
    backgroundColor: 'bg-neutral-100',
    description: '-neutral-100',
  },
  {
    name: 'Neutral 200',
    backgroundColor: 'bg-neutral-200',
    description: '-neutral-200',
  },
  {
    name: 'Neutral 300',
    backgroundColor: 'bg-neutral-300',
    description: '-neutral-300',
  },
  {
    name: 'Neutral 400',
    backgroundColor: 'bg-neutral-400',
    description: '-neutral-400',
  },
  {
    name: 'Neutral 500',
    backgroundColor: 'bg-neutral-500',
    description: '-neutral-500',
  },
  {
    name: 'Neutral 600',
    backgroundColor: 'bg-neutral-600',
    description: '-neutral-600',
  },
  {
    name: 'Neutral 700',
    backgroundColor: 'bg-neutral-700',
    description: '-neutral-700',
  },
  {
    name: 'Neutral 800',
    backgroundColor: 'bg-neutral-800',
    description: '-neutral-800',
  },
  {
    name: 'Neutral 900',
    backgroundColor: 'bg-neutral-900',
    description: '-neutral-900',
  },
];
const neutralColorGroup: Group = {
  name: 'Neutral',
  items: neutralColors.map((color) => (
    <ColorCard
      key={color.backgroundColor}
      name={color.name}
      backgroundColor={color.backgroundColor}
      description={color.description}
    />
  )),
};

const redColors = [
  { name: 'Red 50', backgroundColor: 'bg-red-50', description: '-red-50' },
  { name: 'Red 100', backgroundColor: 'bg-red-100', description: '-red-100' },
  { name: 'Red 200', backgroundColor: 'bg-red-200', description: '-red-200' },
  { name: 'Red 300', backgroundColor: 'bg-red-300', description: '-red-300' },
  { name: 'Red 400', backgroundColor: 'bg-red-400', description: '-red-400' },
  { name: 'Red 500', backgroundColor: 'bg-red-500', description: '-red-500' },
  { name: 'Red 600', backgroundColor: 'bg-red-600', description: '-red-600' },
  { name: 'Red 700', backgroundColor: 'bg-red-700', description: '-red-700' },
  { name: 'Red 800', backgroundColor: 'bg-red-800', description: '-red-800' },
  { name: 'Red 900', backgroundColor: 'bg-red-900', description: '-red-900' },
];
const redColorGroup: Group = {
  name: 'Red',
  items: redColors.map((color) => (
    <ColorCard
      key={color.backgroundColor}
      name={color.name}
      backgroundColor={color.backgroundColor}
      description={color.description}
    />
  )),
};

const greenColors = [
  {
    name: 'Green 50',
    backgroundColor: 'bg-green-50',
    description: '-green-50',
  },
  {
    name: 'Green 100',
    backgroundColor: 'bg-green-100',
    description: '-green-100',
  },
  {
    name: 'Green 200',
    backgroundColor: 'bg-green-200',
    description: '-green-200',
  },
  {
    name: 'Green 300',
    backgroundColor: 'bg-green-300',
    description: '-green-300',
  },
  {
    name: 'Green 400',
    backgroundColor: 'bg-green-400',
    description: '-green-400',
  },
  {
    name: 'Green 500',
    backgroundColor: 'bg-green-500',
    description: '-green-500',
  },
  {
    name: 'Green 600',
    backgroundColor: 'bg-green-600',
    description: '-green-600',
  },
  {
    name: 'Green 700',
    backgroundColor: 'bg-green-700',
    description: '-green-700',
  },
  {
    name: 'Green 800',
    backgroundColor: 'bg-green-800',
    description: '-green-800',
  },
  {
    name: 'Green 900',
    backgroundColor: 'bg-green-900',
    description: '-green-900',
  },
];
const greenColorGroup: Group = {
  name: 'Green',
  items: greenColors.map((color) => (
    <ColorCard
      key={color.backgroundColor}
      name={color.name}
      backgroundColor={color.backgroundColor}
      description={color.description}
    />
  )),
};

const colorGroups = {
  name: 'Colors',
  groups: [
    themeColorGroup,
    darkThemeColorGroup,
    cyanColorGroup,
    amberColorGroup,
    violetColorGroup,
    tealColorGroup,
    neutralColorGroup,
    redColorGroup,
    greenColorGroup,
  ],
};

export { colorGroups };
