import { ReactElement } from 'react';

export interface TypographyItem {
  name: string;
  font: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  example: ReactElement;
  description: string;
}
