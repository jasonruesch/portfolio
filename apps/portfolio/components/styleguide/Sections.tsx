import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ButtonSection, buttonGroups } from './button';
import { ColorSection, colorGroups } from './color';
import { useFilterGroups } from './hooks/useFilterGroups';
import { ShadowSection, shadowGroups } from './shadow';
import { TypographySection, typographyGroups } from './typography';

export function Sections({ searchInput }: { searchInput: string }) {
  const colorFilteredGroups = useFilterGroups(searchInput, colorGroups);
  const typographyFilteredGroups = useFilterGroups(
    searchInput,
    typographyGroups,
  );
  const shadowFilteredGroups = useFilterGroups(searchInput, shadowGroups);
  const buttonFilteredGroups = useFilterGroups(searchInput, buttonGroups);
  const [hasResults, setHasResults] = useState(true);

  useEffect(() => {
    const hasResults =
      colorFilteredGroups?.length > 0 ||
      typographyFilteredGroups?.length > 0 ||
      shadowFilteredGroups?.length > 0 ||
      buttonFilteredGroups?.length > 0;
    setHasResults(hasResults);

    // Apply the min-h-screen class to the last section
    document
      .querySelectorAll('section')
      ?.forEach((section) => section.classList.toggle('min-h-screen', false));
    document
      .querySelector('section:last-of-type')
      ?.classList.toggle('min-h-screen', true);
  }, [
    setHasResults,
    colorFilteredGroups,
    typographyFilteredGroups,
    shadowFilteredGroups,
    buttonFilteredGroups,
  ]);

  // Each seciton should have top margin and padding to account for fixed header
  // The last section should have the 'min-h-screen' class, which is applied above after filtering

  return (
    <>
      <div
        className={classNames(
          'divide-y-4 divide-black divide-opacity-20',
          'dark:divide-white dark:divide-opacity-20',
          'print:divide-none',
        )}
      >
        <ColorSection className="pt-16" groups={colorFilteredGroups} />

        <TypographySection
          className={classNames('mt-8 pt-8', 'print:break-before-page')}
          groups={typographyFilteredGroups}
        />

        <ShadowSection
          className={classNames('mt-8 pt-8', 'print:break-before-page')}
          groups={shadowFilteredGroups}
        />

        <ButtonSection
          className={classNames('mt-8 pt-8', 'print:break-before-page')}
          groups={buttonFilteredGroups}
        />
      </div>

      {/* No results */}
      {!hasResults && (
        <div className="mt-8 pt-8">
          <h2
            className={classNames(
              'font-heading pt-4 text-2xl font-bold',
              'lg:text-3xl',
            )}
          >
            Searching for &quot;
            <span className="text-secondary font-sans text-2xl">
              {searchInput}
            </span>
            &quot; found no matching styles
          </h2>
        </div>
      )}
    </>
  );
}
