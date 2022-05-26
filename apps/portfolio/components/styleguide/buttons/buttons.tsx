import { Group } from '../models';
import { Button } from './button.model';
import { buttonSection } from './buttons.data';

export function Buttons({
  className,
  groups,
}: {
  className?: string;
  groups: Group<Button>[];
}) {
  return (
    groups?.length > 0 && (
      <section id="buttons" className={className}>
        <h2 className="font-alegreya-sans-sc flex items-center pt-4 text-2xl font-bold lg:text-3xl">
          <span
            className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          >
            smart_button
          </span>
          {buttonSection.name}
        </h2>

        {groups.map((group, i: number) => (
          <div
            key={`buttons-${i}`}
            className="border-b border-neutral-300 py-8 last-of-type:border-b-0 dark:border-neutral-400 print:break-inside-avoid print:border-b-0"
          >
            <h3 className="font-alegreya-sans-sc text-2xl font-bold">
              {group.name}
            </h3>
            <div className="mt-2 text-sm">
              {group.items.map((item: Button, j: number) => (
                <div
                  key={`buttons-${i}-${j}`}
                  className="divide-y divide-neutral-200 overflow-hidden rounded-lg border border-neutral-200 shadow-md dark:divide-neutral-900 dark:border-neutral-900"
                >
                  <div className="min-h-40 relative">{item.example}</div>
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
