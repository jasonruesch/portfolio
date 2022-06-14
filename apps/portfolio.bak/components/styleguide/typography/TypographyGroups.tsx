import classNames from 'classnames';
import { Group } from '../models';
import { TypographyItem } from './TypographyItem';

const groups: Group[] = [
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
        <h1
          key="heading-h1-example"
          className="font-heading text-3xl font-bold"
        >
          {/* <h1 className="font-heading text-3xl font-bold"> */}
          Etiam nec metus vitae lectus
        </h1>
        <h1 key="heading-h1-large" className="font-heading text-4xl font-bold">
          Etiam nec metus vitae lectus
        </h1>
        <code
          key="heading-h1-description"
          className="text-secondary mt-2 block text-sm"
        >
          font-heading text-3xl lg:text-4xl font-bold
        </code>
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
        <h2
          key="heading-h2-example"
          className="font-heading text-2xl font-bold"
        >
          Etiam nec metus vitae lectus
        </h2>
        <h2 key="heading-h2-large" className="font-heading text-3xl font-bold">
          Etiam nec metus vitae lectus
        </h2>
        <code
          key="heading-h2-description"
          className="text-secondary mt-2 block text-sm"
        >
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
        <h3
          key="heading-h3-example"
          className="font-heading text-2xl font-bold"
        >
          Etiam nec metus vitae lectus
        </h3>
        <code
          key="heading-h3-description"
          className="text-secondary mt-2 block text-sm"
        >
          font-heading text-2xl font-bold
        </code>
      </TypographyItem>,
      <TypographyItem
        key="heading-h4"
        name="Heading H4"
        fontName="Inter"
        fontWeight="Bold"
        fontSize="20px"
        lineHeight="28px"
      >
        <h4 key="heading-h4-example" className="text-xl font-bold">
          Etiam nec metus vitae lectus
        </h4>
        <code
          key="heading-h4-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-xl font-bold
        </code>
      </TypographyItem>,
      <TypographyItem
        key="heading-h5"
        name="Heading H5"
        fontName="Inter"
        fontWeight="Bold"
        fontSize="18px"
        lineHeight="28px"
      >
        <h5 key="heading-h5-example" className="text-lg font-bold">
          Etiam nec metus vitae lectus
        </h5>
        <code
          key="heading-h5-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-lg font-bold
        </code>
      </TypographyItem>,
      <TypographyItem
        key="heading-h6"
        name="Heading H6"
        fontName="Inter"
        fontWeight="Bold"
        fontSize="16px"
        lineHeight="24px"
      >
        <h6 key="heading-h6-example" className="text-base font-bold">
          Etiam nec metus vitae lectus
        </h6>
        <code
          key="heading-h6-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-base font-bold
        </code>
      </TypographyItem>,
    ],
  },
  {
    name: 'Body',
    items: [
      <TypographyItem
        key="body-extra-large"
        name="Extra Large"
        fontName="Inter"
        fontSize="20px"
        lineHeight="28px"
      >
        <p key="body-extra-large-example" className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          temporibus provident voluptatem corporis tempore! Deleniti sed
          voluptates repellat laudantium alias optio blanditiis recusandae
          officiis, sunt dicta quis voluptas provident mollitia.
        </p>
        <code
          key="body-extra-large-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-xl
        </code>
      </TypographyItem>,
      <TypographyItem
        key="body-example"
        name="Default"
        fontName="Inter"
        fontSize="16px"
        lineHeight="24px"
      >
        <p key="body-example-example" className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          temporibus provident voluptatem corporis tempore! Deleniti sed
          voluptates repellat laudantium alias optio blanditiis recusandae
          officiis, sunt dicta quis voluptas provident mollitia.
        </p>
        <code
          key="body-example-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-base
        </code>
      </TypographyItem>,
      <TypographyItem
        key="body-small"
        name="Small"
        fontName="Inter"
        fontSize="14px"
        lineHeight="20px"
      >
        <p key="body-small-example" className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          temporibus provident voluptatem corporis tempore! Deleniti sed
          voluptates repellat laudantium alias optio blanditiis recusandae
          officiis, sunt dicta quis voluptas provident mollitia.
        </p>
        <code
          key="body-small-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-sm
        </code>
      </TypographyItem>,
      <TypographyItem
        key="body-extra-small"
        name="Extra Small"
        fontName="Inter"
        fontSize="12px"
        lineHeight="16px"
      >
        <p key="body-extra-small-example" className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          temporibus provident voluptatem corporis tempore! Deleniti sed
          voluptates repellat laudantium alias optio blanditiis recusandae
          officiis, sunt dicta quis voluptas provident mollitia.
        </p>
        <code
          key="body-extra-small-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-xs
        </code>
      </TypographyItem>,
    ],
  },
  {
    name: 'Rich Text',
    items: [
      <TypographyItem
        key="rich-text-normal"
        name="Normal"
        fontName="Inter"
        fontWeight="400"
      >
        <span key="rich-text-normal-example" className="font-normal">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <code
          key="rich-text-normal-description"
          className="text-secondary mt-2 block text-sm"
        >
          font-normal
        </code>
      </TypographyItem>,
      <TypographyItem
        key="rich-text-medium"
        name="Medium"
        fontName="Inter"
        fontWeight="500"
      >
        <span key="rich-text-medium-example" className="font-medium">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <code
          key="rich-text-medium-description"
          className="text-secondary mt-2 block text-sm"
        >
          font-medium
        </code>
      </TypographyItem>,
      <TypographyItem
        key="rich-text-bold"
        name="Bold"
        fontName="Inter"
        fontWeight="700"
      >
        <span key="rich-text-bold-example" className="font-bold">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <code
          key="rich-text-bold-description"
          className="text-secondary mt-2 block text-sm"
        >
          font-bold
        </code>
      </TypographyItem>,
      <TypographyItem key="rich-text-link" name="Link" fontName="Inter">
        <div key="rich-text-link-example">
          <a
            key="rich-text-link-example-a"
            href="#"
            className={classNames(
              'text-link font-medium',
              'hover:text-link-hover',
            )}
            onClick={(e) => e.preventDefault()}
          >
            Default Link
            <span key="rich-text-link-example-span" aria-hidden="true">
              {' '}
              &rarr;
            </span>
          </a>
        </div>
        <div key="rich-text-link-example-hover">
          <a
            key="rich-text-link-example-hover-a"
            href="#"
            className="text-link-hover font-medium"
            onClick={(e) => e.preventDefault()}
          >
            Hover Link
            <span key="rich-text-link-example-hover-span" aria-hidden="true">
              {' '}
              &rarr;
            </span>
          </a>
        </div>
        <code
          key="rich-text-link-description"
          className="text-secondary mt-2 block text-sm"
        >
          text-link-hover font-medium hover:text-link-hover
        </code>
      </TypographyItem>,
      <TypographyItem
        key="rich-text-bullet-list"
        name="Bullet List"
        fontName="Inter"
      >
        <ul
          key="rich-text-bullet-list-example"
          className="list-inside list-disc"
        >
          <li key="a">Lorem ipsum dolor sit amet consectetur</li>
          <li key="b">Posuere enim mi pharetra neque proin dic</li>
          <li key="c">Mauris aliquet faucibus iaculis dui vitae ullamco</li>
        </ul>
        <code
          key="rich-text-bullet-list-description"
          className="text-secondary mt-2 block text-sm"
        >
          list-inside list-disc
        </code>
      </TypographyItem>,
      <TypographyItem
        key="rich-text-ordered-list"
        name="Ordered List"
        fontName="Inter"
      >
        <ol
          key="rich-text-ordered-list-example"
          className="list-inside list-decimal"
        >
          <li key="1">Lorem ipsum dolor sit amet consectetur</li>
          <li key="2">Posuere enim mi pharetra neque proin dic</li>
          <li key="3">Mauris aliquet faucibus iaculis dui vitae ullamco</li>
        </ol>
        <code
          key="rich-text-ordered-list-description"
          className="text-secondary mt-2 block text-sm"
        >
          list-inside list-decimal
        </code>
      </TypographyItem>,
    ],
  },
];

const typographyGroups = {
  name: 'Typography',
  groups: groups,
};

export { typographyGroups };
