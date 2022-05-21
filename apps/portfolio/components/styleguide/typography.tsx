import { Group, TypographyItem } from './models';

export default function Typography({ id, title, groups }) {
  return (
    <section
      id={id}
      className="-mb-16 pt-16 print:break-before-page lg:mb-0 lg:pt-0"
    >
      <h2 className="font-alegreya-sans-sc mx-auto flex max-w-6xl items-center px-4 pt-8 text-3xl font-bold print:pt-0 sm:px-6 lg:px-8">
        <span
          className="material-symbols-outlined mr-4 h-6 w-6 flex-shrink-0"
          aria-hidden="true"
        >
          text_fields
        </span>
        {title}
      </h2>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {groups.map((group: Group, i: number) => (
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
                className="mt-2 mb-4 grid grid-cols-1 gap-5 last-of-type:mb-0 print:grid-cols-3 sm:grid-cols-3 lg:space-y-4"
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
      </div>
    </section>
  );
}
