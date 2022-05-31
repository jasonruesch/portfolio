import { cloneDeep } from 'lodash';
import { useState, useEffect } from 'react';
import { Group, Section } from '../models';

export function useFilterGroups(searchInput, section: Section) {
  const [groups, setGroups] = useState<Group[]>();

  useEffect(() => {
    // Must search for at least 2 characters
    if (
      searchInput === '' ||
      searchInput.length < 2 ||
      searchInput.trim().toLowerCase() === section.name.toLowerCase()
    ) {
      setGroups(section.groups);
      return;
    }

    const groups = cloneDeep(section.groups);
    // Split query to words
    const queryParts = searchInput
      .trim()
      .split(' ')
      .map((part) => part.trim().toLowerCase());
    // Check if the value contains any of the words
    const contains = (value) => {
      return queryParts.every((part) =>
        String(value).toLowerCase().includes(part)
      );
    };

    const filteredGroups = groups.filter((group: Group) => {
      const filteredItems = group.items.filter((item) =>
        Object.values(item).some((value) => contains(value))
      );
      if (filteredItems.length > 0) {
        group.items = filteredItems;
      }
      return contains(group.name) || filteredItems.length > 0;
    });

    // If the section name matches the query, only use the filtered groups if they have items, otherwise include the entire section
    const result = contains(section.name)
      ? filteredGroups.length > 0
        ? filteredGroups
        : groups
      : filteredGroups;
    setGroups(result);
  }, [searchInput, section]);

  return groups;
}
