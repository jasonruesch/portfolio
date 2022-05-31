import { useEffect, useState } from 'react';
import { Buttons, buttonSection } from './Buttons';
import { Colors, colorSection } from './Colors';
import { useFilterGroups } from './hooks/useFilterGroups';
import { Shadows, shadowSection } from './Shadows';
import { Typography, typographySection } from './Typography';

export function Sections({ searchInput }: { searchInput: string }) {
  const colorGroups = useFilterGroups(searchInput, colorSection);
  const typographyGroups = useFilterGroups(searchInput, typographySection);
  const shadowGroups = useFilterGroups(searchInput, shadowSection);
  const buttonGroups = useFilterGroups(searchInput, buttonSection);
  const [hasResults, setHasResults] = useState(true);

  useEffect(() => {
    const hasResults =
      colorGroups?.length > 0 ||
      typographyGroups?.length > 0 ||
      shadowGroups?.length > 0 ||
      buttonGroups?.length > 0;
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
    colorGroups,
    typographyGroups,
    shadowGroups,
    buttonGroups,
  ]);

  // Each seciton should have top padding to account for fixed header
  // The last section should have the 'min-h-screen' class, applied above after filtering

  return (
    <>
      <div className="divide-y-4 divide-black divide-opacity-20 dark:divide-white dark:divide-opacity-20 print:divide-none">
        <Colors className="pt-16" groups={colorGroups} />

        <Typography
          className="mt-8 pt-8 print:break-before-page"
          groups={typographyGroups}
        />

        <Shadows
          className="mt-8 pt-8 print:break-before-page"
          groups={shadowGroups}
        />

        <Buttons
          className="mt-8 pt-8 print:break-before-page"
          groups={buttonGroups}
        />
      </div>

      {/* No results */}
      {!hasResults && (
        <div className="pt-16 text-center">
          <h2 className="font-heading pt-4 text-2xl font-bold lg:text-3xl">
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
