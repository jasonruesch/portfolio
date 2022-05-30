import { Group } from '../models';
import { typographySection } from './Typography.data';

export function Typography({
  className,
  groups,
}: {
  className?: string;
  groups: Group[];
}) {
  return (
    groups?.length > 0 && (
      <section id="typography" className={className}>
        <h2 className="font-heading flex items-center pt-4 text-2xl font-bold lg:text-3xl">
          <span
            className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          >
            text_fields
          </span>
          {typographySection.name}
        </h2>

        {groups.map((group: Group, i: number) => (
          <div
            key={`typography-${i}`}
            className="border-b border-black border-opacity-5 py-8 last-of-type:border-b-0 dark:border-opacity-50 print:break-inside-avoid print:border-b-0"
          >
            <h3 className="font-heading text-2xl font-bold">{group.name}</h3>
            {group.items.map((item) => (
              <div key={item.key}>{item}</div>
            ))}
          </div>
        ))}
      </section>
    )
  );
}
