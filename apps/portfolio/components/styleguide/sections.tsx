import { useEffect, useState } from 'react';
import { Buttons, buttonSection } from './buttons';
import { Colors, colorSection } from './colors';
import { useFilterGroups } from './hooks/useFilterGroups';
import { Shadows, shadowSection } from './shadows';
import { Typography, typographySection } from './typography';

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
  }, [
    setHasResults,
    colorGroups,
    typographyGroups,
    shadowGroups,
    buttonGroups,
  ]);

  // Each seciton should have top padding to account for fixed header
  // The last section should have the 'min-h-screen' class

  return (
    <>
      <Colors className="pt-16 lg:pt-24" groups={colorGroups} />

      <Typography
        className="pt-16 print:break-before-page lg:pt-24"
        groups={typographyGroups}
      />

      <Shadows
        className="pt-16 print:break-before-page lg:pt-24"
        groups={shadowGroups}
      />

      <Buttons
        className="min-h-screen pt-16 print:break-before-page lg:pt-24"
        groups={buttonGroups}
      />

      {/* No results */}
      {!hasResults && (
        <div className="pt-16 text-center lg:pt-24">
          <h2 className="font-alegreya-sans-sc pt-4 text-2xl font-bold lg:text-3xl">
            Searching for &quot;
            <span className="text-accent font-sans text-2xl">
              {searchInput}
            </span>
            &quot; found no matching styles
          </h2>
        </div>
      )}
    </>
  );
}
