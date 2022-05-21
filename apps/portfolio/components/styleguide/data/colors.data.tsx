import { Group, ColorItem } from '../models';

const themeGroup: Group = {
  name: 'Theme Colors',
  items: [
    {
      name: 'Background',
      description: '-background',
      example: (
        <div className="light h-full">
          <div className="bg-background h-full"></div>
        </div>
      ),
    },
    {
      name: 'Foreground',
      description: '-foreground',
      example: (
        <div className="light h-full">
          <div className="bg-foreground h-full"></div>
        </div>
      ),
    },
    {
      name: 'Primary',
      description: '-primary',
      example: (
        <div className="light h-full">
          <div className="bg-primary h-full"></div>
        </div>
      ),
    },
    {
      name: 'Accent',
      description: '-accent',
      example: (
        <div className="light h-full">
          <div className="bg-accent h-full"></div>
        </div>
      ),
    },
    {
      name: 'Warning',
      description: '-warning',
      example: (
        <div className="light h-full">
          <div className="bg-warning h-full"></div>
        </div>
      ),
    },
    {
      name: 'Success',
      description: '-success',
      example: (
        <div className="light h-full">
          <div className="bg-success h-full"></div>
        </div>
      ),
    },
    {
      name: 'Call to Action',
      description: '-cta',
      example: (
        <div className="light h-full">
          <div className="bg-cta h-full"></div>
        </div>
      ),
    },
  ] as ColorItem[],
};
const darkThemeGroup: Group = {
  name: 'Dark Theme Colors',
  items: [
    {
      name: 'Background',
      description: '-background',
      example: (
        <div className="dark h-full">
          <div className="bg-background h-full"></div>
        </div>
      ),
    },
    {
      name: 'Foreground',
      description: '-foreground',
      example: (
        <div className="dark h-full">
          <div className="bg-foreground h-full"></div>
        </div>
      ),
    },
    {
      name: 'Primary',
      description: '-primary',
      example: (
        <div className="dark h-full">
          <div className="bg-primary h-full"></div>
        </div>
      ),
    },
    {
      name: 'Accent',
      description: '-accent',
      example: (
        <div className="dark h-full">
          <div className="bg-accent h-full"></div>
        </div>
      ),
    },
    {
      name: 'Warning',
      description: '-warning',
      example: (
        <div className="dark h-full">
          <div className="bg-warning h-full"></div>
        </div>
      ),
    },
    {
      name: 'Success',
      description: '-success',
      example: (
        <div className="dark h-full">
          <div className="bg-success h-full"></div>
        </div>
      ),
    },
    {
      name: 'Call to Action',
      description: '-cta',
      example: (
        <div className="dark h-full">
          <div className="bg-cta h-full"></div>
        </div>
      ),
    },
  ] as ColorItem[],
};
const colorGroups: Group[] = [
  { ...themeGroup },
  { ...darkThemeGroup },
  {
    name: 'Neutral Colors',
    items: [
      {
        name: 'Neutral 900',
        description: '-neutral-900',
        example: (
          <div className="flex h-full justify-end bg-neutral-900 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-neutral-900 print:px-2">
              Neutral 900
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 800',
        description: '-neutral-800',
        example: (
          <div className="flex h-full justify-end bg-neutral-800 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-neutral-800 print:px-2">
              Neutral 800
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 700',
        description: '-neutral-700',
        example: (
          <div className="flex h-full justify-end bg-neutral-700 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-neutral-700 print:px-2">
              Neutral 700
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 600',
        description: '-neutral-600',
        example: (
          <div className="flex h-full justify-end bg-neutral-600 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-neutral-600 print:px-2">
              Neutral 600
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 500',
        description: '-neutral-500',
        example: (
          <div className="flex h-full flex-col items-end bg-neutral-500 p-4 text-xs">
            <div
              key="neutral-500-light"
              className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-neutral-500 print:px-2"
            >
              Neutral 500
            </div>
            <div
              key="neutral-500-dark"
              className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-neutral-500 print:px-2"
            >
              Neutral 500
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 400',
        description: '-neutral-400',
        example: (
          <div className="flex h-full flex-col items-end bg-neutral-400 p-4 text-xs">
            <div
              key="neutral-400-light"
              className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-neutral-400 print:px-2"
            >
              Neutral 400
            </div>
            <div
              key="neutral-400-dark"
              className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-neutral-400 print:px-2"
            >
              Neutral 400
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 300',
        description: '-neutral-300',
        example: (
          <div className="flex h-full justify-end bg-neutral-300 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-neutral-300 print:px-2">
              Neutral 300
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 200',
        description: '-neutral-200',
        example: (
          <div className="flex h-full justify-end bg-neutral-200 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-neutral-200 print:px-2">
              Neutral 200
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 100',
        description: '-neutral-100',
        example: (
          <div className="flex h-full justify-end bg-neutral-100 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-neutral-100 print:px-2">
              Neutral 100
            </div>
          </div>
        ),
      },
      {
        name: 'Neutral 50',
        description: '-neutral-50',
        example: (
          <div className="flex h-full justify-end bg-neutral-50 p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-neutral-50 print:px-2">
              Neutral 50
            </div>
          </div>
        ),
      },
    ] as ColorItem[],
  },
  {
    name: 'Brand Colors',
    items: [
      {
        name: 'Alabaster',
        description: '#fafafa',
        example: (
          <div className="flex h-full justify-end bg-[#fafafa] p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-[#fafafa] print:px-2">
              Alabaster
            </div>
          </div>
        ),
      },
      {
        name: 'Charcoal',
        description: '#303030',
        example: (
          <div className="flex h-full justify-end bg-[#303030] p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-[#303030] print:px-2">
              Charcoal
            </div>
          </div>
        ),
      },
      {
        name: 'Bright Aqua',
        description: '#18ffff',
        example: (
          <div className="flex h-full justify-end bg-[#18ffff] p-4 text-xs">
            <div className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-[#18ffff] print:px-2">
              Bright Aqua
            </div>
          </div>
        ),
      },
      {
        name: 'Bright Turquoise',
        description: '#14e3e3',
        example: (
          <div className="flex h-full flex-col items-end bg-[#14e3e3] p-4 text-xs">
            <div
              key="bright-turquoise-light"
              className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-[#14e3e3] print:px-2"
            >
              Bright Turquoise
            </div>
            <div
              key="bright-turquoise-dark"
              className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-[#14e3e3] print:px-2"
            >
              Bright Turquoise
            </div>
          </div>
        ),
      },
      {
        name: 'Fire Bush',
        description: '#e39f2b',
        example: (
          <div className="flex h-full flex-col items-end bg-[#e39f2b] p-4 text-xs">
            <div
              key="fire-bush-light"
              className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-[#e39f2b] print:px-2"
            >
              Fire Bush
            </div>
            <div
              key="fire-bush-dark"
              className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-[#e39f2b] print:px-2"
            >
              Fire Bush
            </div>
          </div>
        ),
      },
      {
        name: 'Grapefruit',
        description: '#e33b2b',
        example: (
          <div className="flex h-full flex-col items-end bg-[#e33b2b] p-4 text-xs">
            <div
              key="grapefruit-light"
              className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-[#e33b2b] print:px-2"
            >
              Grapefruit
            </div>
            <div
              key="grapefruit-dark"
              className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-[#e33b2b] print:px-2"
            >
              Grapefruit
            </div>
          </div>
        ),
      },
      {
        name: 'Malachite',
        description: '#09e368',
        example: (
          <div className="flex h-full flex-col items-end bg-[#09e368] p-4 text-xs">
            <div
              key="malachite-light"
              className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-[#09e368] print:px-2"
            >
              Malachite
            </div>
            <div
              key="malachite-dark"
              className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-[#09e368] print:px-2"
            >
              Malachite
            </div>
          </div>
        ),
      },
      {
        name: 'Electric Purple',
        description: '#ab30ff',
        example: (
          <div className="flex h-full flex-col items-end bg-[#ab30ff] p-4 text-xs">
            <div
              key="electric-purple-light"
              className="mb-2 h-8 rounded-3xl bg-white py-2 px-4 text-[#ab30ff] print:px-2"
            >
              Electric Purple
            </div>
            <div
              key="electric-purple-dark"
              className="mb-2 h-8 rounded-3xl bg-black py-2 px-4 text-[#ab30ff] print:px-2"
            >
              Electric Purple
            </div>
          </div>
        ),
      },
    ] as ColorItem[],
  },
];

export { colorGroups };
