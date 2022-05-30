import classNames from 'classnames';
import { Card } from '../Card';

export const BoxShadowCard = ({
  name,
  shadow,
}: {
  name: string;
  shadow: string;
}) => (
  <Card>
    {{
      content: (
        <div className="bg-background relative h-40">
          <div className="flex h-full items-center justify-center">
            <div
              className={classNames(
                'bg-surface h-24 w-24 rounded-lg dark:shadow-black',
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
