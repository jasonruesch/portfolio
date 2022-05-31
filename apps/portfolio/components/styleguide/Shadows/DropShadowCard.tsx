import classNames from 'classnames';
import { Card } from '../Card';

export const DropShadowCard = ({
  name,
  shadow,
}: {
  name: string;
  shadow: string;
}) => (
  <Card>
    {{
      content: (
        <div className="bg-background p-4">
          <div className="flex h-full items-center justify-center p-8">
            <div
              className={classNames(
                'border-b-surface h-0 w-0 border-t-0 border-l-[48px] border-r-[48px] border-b-[72px] border-solid border-transparent',
                shadow
              )}
            ></div>
          </div>
        </div>
      ),
      footer: (
        <>
          <div>{name}</div>
          <div className="text-secondary mt-2 space-y-1 text-xs">
            <code className="block">{shadow}</code>
          </div>
        </>
      ),
    }}
  </Card>
);
