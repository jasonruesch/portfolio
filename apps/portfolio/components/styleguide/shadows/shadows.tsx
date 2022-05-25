import { Group } from '../models';
import { Shadow } from './shadow.model';
import { shadowSection } from './shadows.data';

export function Shadows({
  className,
  groups,
}: {
  className?: string;
  groups: Group<Shadow>[];
}) {
  return (
    groups?.length > 0 && (
      <section id="shadows" className={className}>
        <h2 className="font-alegreya-sans-sc mx-auto flex max-w-6xl items-center px-4 pt-8 text-3xl font-bold print:pt-0 sm:px-6 lg:px-8">
          <span
            className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          >
            ev_shadow
          </span>
          {shadowSection.name}
        </h2>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {groups.map((group, i: number) => (
            <div
              key={`shadows-${i}`}
              className="border-b border-neutral-300 py-8 last-of-type:border-b-0 dark:border-neutral-400 print:break-inside-avoid print:border-b-0"
            >
              <h3 className="font-alegreya-sans-sc text-2xl font-bold">
                {group.name}
              </h3>
              <div className="mt-2 grid grid-cols-1 gap-5 text-sm print:grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
                {group.items.map((item: Shadow, j: number) => (
                  <div
                    key={`shadows-${i}-${j}`}
                    className="divide-y divide-neutral-200 overflow-hidden rounded-lg border border-neutral-200 shadow-md dark:divide-neutral-900 dark:border-neutral-900"
                  >
                    <div className="relative h-40">{item.example}</div>
                    <div className="h-full bg-white px-5 py-3 text-black dark:bg-black dark:text-white">
                      {item.name}
                      <code className="text-accent mt-2 block">
                        {item.description}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  );
}
