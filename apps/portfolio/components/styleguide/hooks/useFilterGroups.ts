import { useState, useEffect } from 'react';
import { Group, Section } from '../models';

export function useFilterGroups<T>(searchInput, section: Section<T>) {
  const [groups, setGroups] = useState<Group<T>[]>();

  useEffect(() => {
    const queryParts = searchInput.split(' ').map((part) => part.toLowerCase());
    const contains = (value) =>
      queryParts.every((part) => String(value).toLowerCase().includes(part));

    if (searchInput === '' || contains(section.name)) {
      setGroups(section.groups);
    }

    const filteredGroups = section.groups.filter((group: Group<T>) => {
      const filteredItems = group.items.filter((item) => {
        return Object.values(item).some((value) => contains(value));
      });
      if (filteredItems.length > 0) {
        group.items = filteredItems;
      }
      return contains(group.name) || filteredItems.length > 0;
    });
    setGroups(filteredGroups);
  }, [searchInput, section]);

  return groups;
}
