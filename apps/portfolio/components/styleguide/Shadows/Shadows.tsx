import { Group } from '../models';
import { shadowSection } from './Shadows.data';

export function Shadows({
  className,
  groups,
}: {
  className?: string;
  groups: Group[];
}) {
  return (
    groups?.length > 0 && (
      <section id="shadows" className={className}>
        <h2 className="font-heading flex items-center pt-4 text-2xl font-bold lg:text-3xl">
          <span
            className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          >
            ev_shadow
          </span>
          {shadowSection.name}
        </h2>

        {groups.map((group: Group, i: number) => (
          <div
            key={`shadows-${i}`}
            className="border-b border-black border-opacity-20 py-8 last-of-type:border-b-0 dark:border-white dark:border-opacity-20 print:break-inside-avoid print:border-b-0"
          >
            <h3 className="font-heading text-2xl font-bold">{group.name}</h3>
            <div className="mt-2 grid grid-cols-1 gap-5 text-sm print:grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
              {group.items.map((item) => item)}
            </div>
          </div>
        ))}
      </section>
    )
  );
}
