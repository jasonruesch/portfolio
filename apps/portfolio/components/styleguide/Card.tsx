import { ReactNode } from 'react';

export const Card = ({
  children: { content, footer },
}: {
  children: {
    content: ReactNode;
    footer: ReactNode;
  };
}) => (
  <div className="divide-y divide-black divide-opacity-5 overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5 dark:divide-opacity-50 dark:shadow-black dark:ring-opacity-50">
    <div className="relative h-40">{content}</div>
    <div className="bg-surface text-on-surfce h-full px-5 py-3">{footer}</div>
  </div>
);
