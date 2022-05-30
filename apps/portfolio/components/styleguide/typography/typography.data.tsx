import { Group } from '../models';
import { TypographyItem } from './TypographyItem';

const typographyGroups: Group[] = [
  {
    name: 'Headings',
    items: [
      <TypographyItem
        key="heading-h1"
        name="Heading H1"
        fontName="Alegreya Sans SC"
        fontWeight="Bold"
        fontSize="30px"
        lineHeight="36px"
        largeFontSize="36px"
        largeLineHeight="40px"
      >
        <>
          <h1 className="font-heading text-3xl font-bold">
            Etiam nec metus vitae lectus
          </h1>
          <h1 className="font-heading text-4xl font-bold">
            Etiam nec metus vitae lectus
          </h1>
          <code className="text-secondary mt-2 block text-sm">
            font-heading text-3xl lg:text-4xl font-bold
          </code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="heading-h2"
        name="Heading H2"
        fontName="Alegreya Sans SC"
        fontWeight="Bold"
        fontSize="24px"
        lineHeight="32px"
        largeFontSize="30px"
        largeLineHeight="36px"
      >
        <>
          <h2 key="h2" className="font-heading text-2xl font-bold">
            Etiam nec metus vitae lectus
          </h2>
          <h2 key="h2-large" className="font-heading text-3xl font-bold">
            Etiam nec metus vitae lectus
          </h2>
        </>
        <code className="text-secondary mt-2 block text-sm">
          font-heading text-2xl lg:text-3xl font-bold
        </code>
      </TypographyItem>,
      <TypographyItem
        key="heading-h3"
        name="Heading H3"
        fontName="Alegreya Sans SC"
        fontWeight="Bold"
        fontSize="24px"
        lineHeight="32px"
      >
        <>
          <h3 className="font-heading text-2xl font-bold">
            Etiam nec metus vitae lectus
          </h3>
          <code className="text-secondary mt-2 block text-sm">
            font-heading text-2xl font-bold
          </code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="heading-h4"
        name="Heading H4"
        fontName="Inter"
        fontWeight="Bold"
        fontSize="20px"
        lineHeight="28px"
      >
        <>
          <h4 className="text-xl font-bold">Etiam nec metus vitae lectus</h4>
          <code className="text-secondary mt-2 block text-sm">
            text-xl font-bold
          </code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="heading-h5"
        name="Heading H5"
        fontName="Inter"
        fontWeight="Bold"
        fontSize="18px"
        lineHeight="28px"
      >
        <>
          <h5 className="text-lg font-bold">Etiam nec metus vitae lectus</h5>
          <code className="text-secondary mt-2 block text-sm">
            text-lg font-bold
          </code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="heading-h6"
        name="Heading H6"
        fontName="Inter"
        fontWeight="Bold"
        fontSize="16px"
        lineHeight="24px"
      >
        <>
          <h6 className="text-base font-bold">Etiam nec metus vitae lectus</h6>
          <code className="text-secondary mt-2 block text-sm">
            text-base font-bold
          </code>
        </>
      </TypographyItem>,
    ],
  },
  {
    name: 'Body',
    items: [
      <TypographyItem
        key="body-extra-larg"
        name="Body Extra Large"
        fontName="Inter"
        fontWeight="Regular"
        fontSize="20px"
        lineHeight="28px"
      >
        <>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
          <code className="text-secondary mt-2 block text-sm">text-xl</code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="body-default"
        name="Body Default"
        fontName="Inter"
        fontWeight="Regular"
        fontSize="16px"
        lineHeight="24px"
      >
        <>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
          <code className="text-secondary mt-2 block text-sm">text-base</code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="body-small"
        name="Body Small"
        fontName="Inter"
        fontWeight="Regular"
        fontSize="14px"
        lineHeight="20px"
      >
        <>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
          <code className="text-secondary mt-2 block text-sm">text-sm</code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="body-extra-small"
        name="Body Extra Small"
        fontName="Inter"
        fontWeight="Regular"
        fontSize="12px"
        lineHeight="16px"
      >
        <>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            temporibus provident voluptatem corporis tempore! Deleniti sed
            voluptates repellat laudantium alias optio blanditiis recusandae
            officiis, sunt dicta quis voluptas provident mollitia.
          </p>
          <code className="text-secondary mt-2 block text-sm">text-xs</code>
        </>
      </TypographyItem>,
    ],
  },
  {
    name: 'Rich Text',
    items: [
      <TypographyItem
        key="rich-text-regular"
        name="Regular"
        fontName="Inter"
        fontWeight="400"
      >
        <>
          <span className="font-regular">
            Lorem ipsum dolor sit amet consectetur
          </span>
          <code className="text-secondary mt-2 block text-sm">
            font-regular
          </code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="rich-text-bold"
        name="Bold"
        fontName="Inter"
        fontWeight="600"
      >
        <>
          <span className="font-bold">
            Lorem ipsum dolor sit amet consectetur
          </span>
          <code className="text-secondary mt-2 block text-sm">font-bold</code>
        </>
      </TypographyItem>,
      <TypographyItem key="rich-text-link" name="Link" fontName="Inter">
        <>
          <a key="link" href="#" className="hover:text-cta block underline">
            Lorem ipsum dolor sit amet consectetur
          </a>
          <a key="link-hover" href="#" className="text-cta block underline">
            Lorem ipsum dolor sit amet consectetur
          </a>
          <code className="text-secondary mt-2 block text-sm">
            hover:text-cta underline
          </code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="rich-text-bullet-list"
        name="Bullet List"
        fontName="Inter"
      >
        <>
          <ul className="list-inside list-disc">
            <li key="a">Lorem ipsum dolor sit amet consectetur</li>
            <li key="b">Posuere enim mi pharetra neque proin dic</li>
            <li key="c">Mauris aliquet faucibus iaculis dui vitae ullamco</li>
          </ul>
          <code className="text-secondary mt-2 block text-sm">
            list-inside list-disc
          </code>
        </>
      </TypographyItem>,
      <TypographyItem
        key="rich-text-ordered-list"
        name="Ordered List"
        fontName="Inter"
      >
        <>
          <ol className="list-inside list-decimal">
            <li key="1">Lorem ipsum dolor sit amet consectetur</li>
            <li key="2">Posuere enim mi pharetra neque proin dic</li>
            <li key="3">Mauris aliquet faucibus iaculis dui vitae ullamco</li>
          </ol>
          <code className="text-secondary mt-2 block text-sm">
            list-inside list-decimal
          </code>
        </>
      </TypographyItem>,
    ],
  },
];

const typographySection = {
  name: 'Typography',
  groups: typographyGroups,
};

export { typographySection };
