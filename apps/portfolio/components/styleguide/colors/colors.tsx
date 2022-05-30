import { ColorSwatchIcon } from '@heroicons/react/outline';
import { Group } from '../models';
import { colorSection } from './Colors.data';

export function Colors({
  className,
  groups,
}: {
  className?: string;
  groups: Group[];
}) {
  return (
    groups?.length > 0 && (
      <section id="colors" className={className}>
        <h2 className="font-heading flex items-center pt-4 text-2xl font-bold lg:text-3xl">
          <ColorSwatchIcon
            className="mr-4 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          />
          {colorSection.name}
        </h2>

        {groups.map((group: Group, i: number) => (
          <div
            key={`colors-${i}`}
            className="border-b border-black border-opacity-20 py-8 last-of-type:border-b-0 dark:border-white dark:border-opacity-20 print:break-inside-avoid print:border-b-0"
          >
            <h3 className="font-heading text-2xl font-bold">{group.name}</h3>
            <div className="mt-2 grid grid-cols-1 gap-5 text-sm print:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {group.items.map((item) => (
                <div key={item.key}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </section>
    )
  );
}
