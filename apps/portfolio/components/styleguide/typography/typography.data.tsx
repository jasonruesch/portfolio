import { Group, Section } from '../models';
import { TypographyItem } from './typography.model';

const typographyGroups: Group<TypographyItem>[] = [
  {
    name: 'Headings',
    items: [
      {
        name: 'Heading H1',
        font: 'Alegreya Sans SC',
        fontWeight: 'Bold',
        fontSize: '30px',
        lineHeight: '36px',
        largeFontSize: '36px',
        largeLineHeight: '40px',
        example: (
          <>
            <h1 key="h1" className="font-alegreya-sans-sc text-3xl font-bold">
              Etiam nec metus vitae lectus
            </h1>
            <h1
              key="h1-large"
              className="font-alegreya-sans-sc text-4xl font-bold"
            >
              Etiam nec metus vitae lectus
            </h1>
          </>
        ),
        description: 'font-alegreya-sans-sc text-3xl lg:text-4xl font-bold',
      },
      {
        name: 'Heading H2',
        font: 'Alegreya Sans SC',
        fontWeight: 'Bold',
        fontSize: '24px',
        lineHeight: '32px',
        largeFontSize: '30px',
        largeLineHeight: '36px',
        example: (
          <>
            <h2 key="h2" className="font-alegreya-sans-sc text-2xl font-bold">
              Etiam nec metus vitae lectus
            </h2>
            <h2
              key="h2-large"
              className="font-alegreya-sans-sc text-3xl font-bold"
            >
              Etiam nec metus vitae lectus
            </h2>
          </>
        ),
        description: 'font-alegreya-sans-sc text-2xl lg:text-3xl font-bold',
      },
      {
        name: 'Heading H3',
        font: 'Alegreya Sans SC',
        fontWeight: 'Bold',
        fontSize: '24px',
        lineHeight: '32px',
        example: (
          <h3 className="font-alegreya-sans-sc text-2xl font-bold">
            Etiam nec metus vitae lectus
          </h3>
        ),
        description: 'font-alegreya-sans-sc text-2xl font-bold',
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
        name: 'Body Extra Large',
        font: 'Inter',
        fontWeight: 'Regular',
        fontSize: '20px',
        lineHeight: '28px',
        example: (
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
        ),
        description: 'text-xl',
      },
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
        name: 'Regular',
        font: 'Inter',
        fontWeight: '400',
        example: (
          <span className="font-regular">
            Lorem ipsum dolor sit amet consectetur
          </span>
        ),
        description: 'font-regular',
      },
      {
        name: 'Bold',
        font: 'Inter',
        fontWeight: '600',
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
          <>
            <a key="link" href="#" className="hover:text-cta block underline">
              Lorem ipsum dolor sit amet consectetur
            </a>
            <a key="link-hover" href="#" className="text-cta block underline">
              Lorem ipsum dolor sit amet consectetur
            </a>
          </>
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
    ],
  },
];

const typographySection: Section<TypographyItem> = {
  name: 'Typography',
  groups: typographyGroups,
};

export { typographySection };
