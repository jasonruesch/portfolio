import { Group } from '../models';
import { Button } from './Button.model';
import { buttonSection } from './Buttons.data';

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
        <h2 className="font-heading flex items-center pt-4 text-2xl font-bold lg:text-3xl">
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
            className="border-divide border-b py-8 last-of-type:border-b-0 print:break-inside-avoid print:border-b-0"
          >
            <h3 className="font-heading text-2xl font-bold">{group.name}</h3>
            <div className="mt-2 space-y-5 text-sm">
              {group.items.map((item: Button, j: number) => (
                <div
                  key={`buttons-${i}-${j}`}
                  className="divide-base border-card divide-y overflow-hidden rounded-lg border shadow-md dark:shadow-black"
                >
                  <div className="min-h-40 relative">{item.example}</div>
                  <div className="h-full bg-white px-5 py-3 text-black dark:bg-black dark:text-white">
                    {item.name}
                    <code className="text-styleguide-description mt-2 block">
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
