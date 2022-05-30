import classNames from 'classnames';
import { ReactNode } from 'react';
import { Card } from '../Card';

export const ButtonCard = ({
  children,
  name,
  className,
  hoverClassName,
  hoverWithoutStateClassName,
  activeClassName,
  activeWithoutStateClassName,
  focusClassName,
  focusWithoutStateClassName,
  disabledClassName,
}: {
  children?: ReactNode;
  name: string;
  className: string;
  hoverClassName?: string;
  hoverWithoutStateClassName?: string;
  activeClassName?: string;
  activeWithoutStateClassName?: string;
  focusClassName?: string;
  focusWithoutStateClassName?: string;
  disabledClassName?: string;
}) => (
  <Card>
    {{
      content: (
        <div className="bg-surface relative h-full p-4">
          <div className="flex h-full flex-col items-center justify-evenly space-y-4 p-8 sm:flex-row sm:space-y-0">
            <button
              key="default"
              className={classNames(
                className,
                hoverClassName,
                activeClassName,
                focusClassName,
                disabledClassName
              )}
            >
              {children ? children : 'Default'}
            </button>
            <button
              key="hover"
              className={classNames(className, hoverWithoutStateClassName)}
            >
              {children ? children : 'Hover'}
            </button>
            <button
              key="active"
              className={classNames(className, activeWithoutStateClassName)}
            >
              {children ? children : 'Active'}
            </button>
            <button
              key="focus"
              className={classNames(className, focusWithoutStateClassName)}
            >
              {children ? children : 'Focus'}
            </button>
            <button
              key="inactive"
              className={classNames(className, disabledClassName)}
              disabled
            >
              {children ? children : 'Inactive'}
            </button>
          </div>
        </div>
      ),
      footer: (
        <>
          <div>{name}</div>
          <div className="text-secondary mt-2 space-y-1 text-xs">
            <code className="block">{className}</code>
            {hoverClassName && <code className="block">{hoverClassName}</code>}
            {activeClassName && (
              <code className="block">{activeClassName}</code>
            )}
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
