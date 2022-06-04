import classNames from 'classnames';
import { ReactNode } from 'react';

export const TypographyItem = ({
  children,
  name,
  fontName,
  fontWeight,
  fontSize,
  lineHeight,
  largeFontSize,
  largeLineHeight,
}: {
  children?: ReactNode;
  name: string;
  fontName: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  largeFontSize?: string;
  largeLineHeight?: string;
}) => (
  <div
    className={classNames(
      'mt-2 mb-4 grid grid-cols-1 gap-5',
      'last-of-type:mb-0',
      'sm:grid-cols-3',
      'print:grid-cols-3',
    )}
  >
    <div className="col-span-1">
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-sm">
        {fontName} {fontWeight}
      </p>
      {(fontSize || lineHeight) && (
        <small className="block text-xs">
          {fontSize}
          {' / '}
          {lineHeight}
        </small>
      )}
      {(largeFontSize || largeLineHeight) && (
        <small className="block text-xs">
          {largeFontSize}
          {' / '}
          {largeLineHeight} (Large Screen)
        </small>
      )}
    </div>
    <div
      className={classNames('col-span-1', 'sm:col-span-2', 'print:col-span-2')}
    >
      {children}
    </div>
  </div>
);
