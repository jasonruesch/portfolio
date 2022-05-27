import { ReactElement } from 'react';

export interface TypographyItem {
  name: string;
  font: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  largeFontSize?: string;
  largeLineHeight?: string;
  example: ReactElement;
  description: string;
}
