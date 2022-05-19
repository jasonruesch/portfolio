import { Group } from '../../models';

const themeColors: Group = {
  name: 'Theme colors',
  items: [
    {
      name: 'Background',
      bgColor: 'bg-background',
      textColor: 'text-background',
      description: '-background',
    },
    {
      name: 'Foreground',
      bgColor: 'bg-foreground',
      textColor: 'text-foreground',
      description: '-foreground',
    },
    {
      name: 'Primary',
      bgColor: 'bg-primary',
      textColor: 'text-primary',
      description: '-primary',
    },
    {
      name: 'Accent',
      bgColor: 'bg-accent',
      textColor: 'text-accent',
      description: '-accent',
    },
    {
      name: 'Warning',
      bgColor: 'bg-warning',
      textColor: 'text-warning',
      description: '-warning',
    },
    {
      name: 'Success',
      bgColor: 'bg-success',
      textColor: 'text-success',
      description: '-success',
    },
    {
      name: 'Call to Action',
      bgColor: 'bg-cta',
      textColor: 'text-cta',
      description: '-cta',
    },
  ],
};
const colorGroups: Group[] = [
  { ...themeColors },
  { ...themeColors, name: 'Dark theme colors' },
  {
    name: 'Neutral colors',
    items: [
      {
        name: 'Neutral 900',
        bgColor: 'bg-neutral-900',
        textColor: 'text-neutral-900',
        description: '-neutral-900',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 800',
        bgColor: 'bg-neutral-800',
        textColor: 'text-neutral-800',
        description: '-neutral-800',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 700',
        bgColor: 'bg-neutral-700',
        textColor: 'text-neutral-700',
        description: '-neutral-700',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 600',
        bgColor: 'bg-neutral-600',
        textColor: 'text-neutral-600',
        description: '-neutral-600',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Neutral 500',
        bgColor: 'bg-neutral-500',
        textColor: 'text-neutral-500',
        description: '-neutral-500',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Neutral 400',
        bgColor: 'bg-neutral-400',
        textColor: 'text-neutral-400',
        description: '-neutral-400',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Neutral 300',
        bgColor: 'bg-neutral-300',
        textColor: 'text-neutral-300',
        description: '-neutral-300',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Neutral 200',
        bgColor: 'bg-neutral-200',
        textColor: 'text-neutral-200',
        description: '-neutral-200',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Neutral 100',
        bgColor: 'bg-neutral-100',
        textColor: 'text-neutral-100',
        description: '-neutral-100',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Neutral 50',
        bgColor: 'bg-neutral-50',
        textColor: 'text-neutral-50',
        description: '-neutral-50',
        allowOnLight: false,
        allowOnDark: true,
      },
    ],
  },
  {
    name: 'Brand colors',
    items: [
      {
        name: 'Alabaster',
        bgColor: 'bg-[#fafafa]',
        textColor: 'text-[#fafafa]',
        description: '#fafafa',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Charcoal',
        bgColor: 'bg-[#303030]',
        textColor: 'text-[#303030]',
        description: '#303030',
        allowOnLight: true,
        allowOnDark: false,
      },
      {
        name: 'Bright Aqua',
        bgColor: 'bg-[#18ffff]',
        textColor: 'text-[#18ffff]',
        description: '#18ffff',
        allowOnLight: false,
        allowOnDark: true,
      },
      {
        name: 'Bright Turquoise',
        bgColor: 'bg-[#14e3e3]',
        textColor: 'text-[#14e3e3]',
        description: '#14e3e3',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Fire Bush',
        bgColor: 'bg-[#e39f2b]',
        textColor: 'text-[#e39f2b]',
        description: '#e39f2b',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Grapefruit',
        bgColor: 'bg-[#e33b2b]',
        textColor: 'text-[#e33b2b]',
        description: '#e33b2b',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Malachite',
        bgColor: 'bg-[#09e368]',
        textColor: 'text-[#09e368]',
        description: '#09e368',
        allowOnLight: true,
        allowOnDark: true,
      },
      {
        name: 'Electric Purple',
        bgColor: 'bg-[#ab30ff]',
        textColor: 'text-[#ab30ff]',
        description: '#ab30ff',
        allowOnLight: true,
        allowOnDark: true,
      },
    ],
  },
];
const typographyGroups: Group[] = [
  {
    name: 'Headings',
    items: [
      {
        name: 'Heading H1',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '36px',
        lineHeight: '40px',
        example: (
          <h1 className="text-4xl font-bold">Etiam nec metus vitae lectus</h1>
        ),
        description: 'text-4xl font-bold',
      },
      {
        name: 'Heading H2',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '30px',
        lineHeight: '36px',
        example: (
          <h2 className="text-3xl font-bold">Etiam nec metus vitae lectus</h2>
        ),
        description: 'text-3xl font-bold',
      },
      {
        name: 'Heading H3',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '24px',
        lineHeight: '32px',
        example: (
          <h3 className="text-2xl font-bold">Etiam nec metus vitae lectus</h3>
        ),
        description: 'text-2xl font-bold',
      },
      {
        name: 'Heading H4',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '20px',
        lineHeight: '28px',
        example: (
          <h4 className="text-xl font-bold">Etiam nec metus vitae lectus</h4>
        ),
        description: 'text-xl font-bold',
      },
      {
        name: 'Heading H5',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '18px',
        lineHeight: '28px',
        example: (
          <h5 className="text-lg font-bold">Etiam nec metus vitae lectus</h5>
        ),
        description: 'text-lg font-bold',
      },
      {
        name: 'Heading H6',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '16px',
        lineHeight: '24px',
        example: (
          <h6 className="text-base font-bold">Etiam nec metus vitae lectus</h6>
        ),
        description: 'text-base font-bold',
      },
    ],
  },
  {
    name: 'Body',
    items: [
      {
        name: 'Body Default',
        font: 'Inter',
        fontWeight: 'Regular',
        fontSize: '16px',
        lineHeight: '24px',
        example: (
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
        ),
        description: 'text-base',
      },
      {
        name: 'Body Small',
        font: 'Inter',
        fontWeight: 'Regular',
        fontSize: '14px',
        lineHeight: '20px',
        example: (
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
        ),
        description: 'text-sm',
      },
      {
        name: 'Body Extra Small',
        font: 'Inter',
        fontWeight: 'Regular',
        fontSize: '12px',
        lineHeight: '16px',
        example: (
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
        ),
        description: 'text-xs',
      },
    ],
  },
  {
    name: 'Rich Text',
    items: [
      {
        name: 'Bold Text',
        font: 'Inter',
        example: (
          <span className="font-bold">
            Lorem ipsum dolor sit amet consectetur
          </span>
        ),
        description: 'font-bold',
      },
      {
        name: 'Link',
        font: 'Inter',
        example: (
          <a href="" className="hover:text-cta underline">
            Lorem ipsum dolor sit amet consectetur
          </a>
        ),
        description: 'hover:text-cta underline',
      },
      {
        name: 'Bullet List',
        font: 'Inter',
        example: (
          <ul className="list-inside list-disc">
            <li key="a">Lorem ipsum dolor sit amet consectetur</li>
            <li key="b">Posuere enim mi pharetra neque proin dic</li>
            <li key="c">Mauris aliquet faucibus iaculis dui vitae ullamco</li>
          </ul>
        ),
        description: 'list-inside list-disc',
      },
      {
        name: 'Numbered List',
        font: 'Inter',
        example: (
          <ol className="list-inside list-decimal">
            <li key="1">Lorem ipsum dolor sit amet consectetur</li>
            <li key="2">Posuere enim mi pharetra neque proin dic</li>
            <li key="3">Mauris aliquet faucibus iaculis dui vitae ullamco</li>
          </ol>
        ),
        description: 'list-inside list-decimal',
      },
      {
        name: 'Blockquote',
        font: 'Inter',
        fontWeight: 'Bold',
        fontSize: '24px',
        lineHeight: '32px',
        example: (
          <blockquote className="rounded-lg bg-neutral-300 px-6 py-12 text-center text-2xl font-bold dark:bg-neutral-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore!
          </blockquote>
        ),
        description:
          'rounded-lg bg-neutral-300 px-6 py-12 text-center text-2xl font-bold dark:bg-neutral-700',
      },
    ],
  },
];

export { colorGroups, typographyGroups };
