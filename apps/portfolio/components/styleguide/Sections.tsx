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

  // The last section should have the 'min-h-screen' class, which is applied above after filtering

  return (
    <>
      <ColorSection groups={colorFilteredGroups} />

      <TypographySection
        className="print:break-before-page"
        groups={typographyFilteredGroups}
      />

      <ShadowSection
        className="print:break-before-page"
        groups={shadowFilteredGroups}
      />

      <ButtonSection
        className="print:break-before-page"
        groups={buttonFilteredGroups}
      />

      {/* No results */}
      {!hasResults && (
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
      )}
    </>
  );
}
