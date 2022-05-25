import { useEffect } from 'react';
import { Buttons } from './buttons';
import { buttonSection } from './buttons/buttons.data';
import { Colors, colorSection } from './colors';
import { useFilterGroups } from './hooks/useFilterGroups';
import { Shadows, shadowSection } from './shadows';
import { Typography, typographySection } from './typography';

export function Sections({
  searchInput,
  onFilter,
}: {
  searchInput: string;
  onFilter: (hasResults: boolean) => void;
}) {
  const colorGroups = useFilterGroups(searchInput, colorSection);
  const typographyGroups = useFilterGroups(searchInput, typographySection);
  const shadowGroups = useFilterGroups(searchInput, shadowSection);
  const buttonGroups = useFilterGroups(searchInput, buttonSection);

  useEffect(() => {
    const hasResults =
      colorGroups?.length > 0 ||
      typographyGroups?.length > 0 ||
      shadowGroups?.length > 0 ||
      buttonGroups?.length > 0;
    onFilter(hasResults);
  }, [onFilter, colorGroups, typographyGroups, shadowGroups, buttonGroups]);

  return (
    <>
      <Colors className="-mb-16 pt-16 lg:mb-0 lg:pt-0" groups={colorGroups} />

      <Typography
        className="-mb-16 pt-16 print:break-before-page lg:mb-0 lg:pt-0"
        groups={typographyGroups}
      />

      <Shadows
        className="-mb-16 pt-16 print:break-before-page lg:mb-0 lg:pt-0"
        groups={shadowGroups}
      />

      <Buttons
        className="-mb-16 min-h-screen pt-16 print:break-before-page lg:mb-0 lg:pt-0"
        groups={buttonGroups}
      />
    </>
  );
}
