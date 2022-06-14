import classNames from 'classnames';
import { Card } from '../Card';

export type theme = 'light' | 'dark';

export const ColorCard = ({
  name,
  backgroundColor,
  textOnColor,
  textColorOnSurface,
  description,
  theme,
  transparencyGridBackgroundColor = 'bg-white',
}: {
  name: string;
  backgroundColor: string;
  textOnColor?: string;
  textColorOnSurface?: string;
  description?: string;
  theme?: theme;
  transparencyGridBackgroundColor?: string;
}) => (
  <Card>
    {{
      content: (
        <div
          className={classNames(
            'bg-[length:1rem_1rem] bg-center',
            transparencyGridBackgroundColor
          )}
          style={{
            backgroundImage: `
              linear-gradient(to right, #808080 2px, transparent 2px),
              linear-gradient(to bottom, #808080 2px, transparent 2px)
            `,
          }}
        >
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
        </div>
      ),
      footer: (
        <>
          <div>{name}</div>
          <div className="text-secondary mt-2 space-y-1 text-xs">
            {(description && <code className="block">{description}</code>) || (
              <>
                <code className="block">{backgroundColor}</code>
                {textOnColor && <code className="block">{textOnColor}</code>}
              </>
            )}
          </div>
        </>
      ),
    }}
  </Card>
);
