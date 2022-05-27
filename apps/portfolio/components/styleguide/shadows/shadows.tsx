import { Group } from '../models';
import { Shadow } from './Shadow.model';
import { shadowSection } from './Shadows.data';

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
        <h2 className="font-alegreya-sans-sc flex items-center pt-4 text-2xl font-bold lg:text-3xl">
          <span
            className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          >
            ev_shadow
          </span>
          {shadowSection.name}
        </h2>

        {groups.map((group, i: number) => (
          <div
            key={`shadows-${i}`}
            className="border-divider border-b py-8 last-of-type:border-b-0 print:break-inside-avoid print:border-b-0"
          >
            <h3 className="font-alegreya-sans-sc text-2xl font-bold">
              {group.name}
            </h3>
            <div className="mt-2 grid grid-cols-1 gap-5 text-sm print:grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
              {group.items.map((item: Shadow, j: number) => (
                <div
                  key={`shadows-${i}-${j}`}
                  className="divide-divider border-card-border divide-y overflow-hidden rounded-lg border shadow-md dark:shadow-black"
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
      </section>
    )
  );
}
