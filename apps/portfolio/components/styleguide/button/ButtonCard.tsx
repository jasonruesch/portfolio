import classNames from 'classnames';
import { ReactNode } from 'react';
import { Card } from '../Card';

export const ButtonCard = ({
  children,
  name,
  className,
  baseClassName,
  hoverClassName,
  hoverWithoutStateClassName,
  focusClassName,
  focusWithoutStateClassName,
  disabledClassName,
}: {
  children?: ReactNode;
  name: string;
  className: string;
  baseClassName: string;
  hoverClassName?: string;
  hoverWithoutStateClassName?: string;
  focusClassName?: string;
  focusWithoutStateClassName?: string;
  disabledClassName?: string;
}) => (
  <Card>
    {{
      content: (
        <div className="bg-surface p-4">
          <div className="flex h-full items-stretch justify-center">
            <div
              className="flex items-center border-r border-dashed border-black border-opacity-20 p-8
              dark:border-white dark:border-opacity-20"
            >
              <button className={className}>
                {children ? children : 'Default'}
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-8 p-8">
              <button
                className={classNames(
                  baseClassName,
                  hoverWithoutStateClassName
                )}
              >
                {children ? children : 'Hover'}
              </button>
              <button
                className={classNames(
                  baseClassName,
                  focusWithoutStateClassName
                )}
              >
                {children ? children : 'Focus'}
              </button>
              <button
                className={classNames(baseClassName, disabledClassName)}
                disabled
              >
                {children ? children : 'Inactive'}
              </button>
            </div>
          </div>
        </div>
      ),
      footer: (
        <>
          <div>{name}</div>
          <div className="text-secondary mt-2 space-y-1 text-xs">
            <code className="block pb-2">{className}</code>
            <div className="text-on-surface">
              which encapsulates the following:
            </div>
            <code className="block">{baseClassName}</code>
            {hoverClassName && <code className="block">{hoverClassName}</code>}
            {focusClassName && <code className="block">{focusClassName}</code>}
            {disabledClassName && (
              <code className="block">{disabledClassName}</code>
            )}
          </div>
        </>
      ),
    }}
  </Card>
);
