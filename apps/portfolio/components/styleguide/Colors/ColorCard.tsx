import classNames from 'classnames';
import { ReactNode } from 'react';
import { Card } from '../Card';

export const ColorCard = ({
  children,
  name,
  backgroundColor,
  textOnColor,
  textColorOnSurface,
  theme = '',
}: {
  children?: ReactNode;
  name: string;
  backgroundColor: string;
  textOnColor?: string;
  textColorOnSurface?: string;
  theme?: string;
}) => (
  <Card>
    {{
      content: (
        <div className={classNames('h-40 p-4', theme, backgroundColor)}>
          {textOnColor && (
            <div
              className={classNames('absolute bottom-4 left-4', textOnColor)}
            >
              On {name}
            </div>
          )}
          {textColorOnSurface && (
            <div
              className={classNames(
                'bg-surface absolute top-4 right-4 rounded-3xl py-2 px-4',
                textColorOnSurface
              )}
            >
              {name}
            </div>
          )}
        </div>
      ),
      footer: (
        <>
          <div>{name}</div>
          <div className="text-secondary mt-2 space-y-1 text-xs">
            {!!children && children}
            {!children && (
              <>
                <code className="block">{backgroundColor}</code>
                <code className="block">{textOnColor}</code>
              </>
            )}
          </div>
        </>
      ),
    }}
  </Card>
);
