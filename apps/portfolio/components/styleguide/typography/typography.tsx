import { Group } from '../models';
import { TypographyItem } from './typography.model';
import { typographySection } from './typography.data';

export function Typography({
  className,
  groups,
}: {
  className?: string;
  groups: Group<TypographyItem>[];
}) {
  return (
    groups?.length > 0 && (
      <section id="typography" className={className}>
        <h2 className="font-alegreya-sans-sc flex items-center pt-4 text-3xl font-bold">
          <span
            className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          >
            text_fields
          </span>
          {typographySection.name}
        </h2>

        {groups.map((group, i: number) => (
          <div
            key={`typography-${i}`}
            className="border-b border-neutral-300 py-8 last-of-type:border-b-0 dark:border-neutral-400 print:break-inside-avoid print:border-b-0"
          >
            <h3 className="font-alegreya-sans-sc text-2xl font-bold">
              {group.name}
            </h3>
            {group.items.map((item: TypographyItem, j: number) => (
              <div
                key={`typography-${i}-${j}`}
                className="mt-2 mb-4 grid grid-cols-1 gap-5 last-of-type:mb-0 print:grid-cols-3 sm:grid-cols-3"
              >
                <div className="col-span-1">
                  <h4 className="text-xl font-bold">{item.name}</h4>
                  <p className="text-sm">
                    {item.font} {item.fontWeight}
                  </p>
                  {(item.fontSize || item.lineHeight) && (
                    <small className="text-xs">
                      {item.fontSize}
                      {' / '}
                      {item.lineHeight}
                    </small>
                  )}
                </div>
                <div className="col-span-1 print:col-span-2 sm:col-span-2">
                  {item.example}
                  <code className="text-accent mt-2 block text-sm">
                    {item.description}
                  </code>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    )
  );
}
