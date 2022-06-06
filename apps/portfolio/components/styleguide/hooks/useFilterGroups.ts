import { cloneDeep } from 'lodash';
import {
  useState,
  useEffect,
  isValidElement,
  ReactNode,
  Children,
  cloneElement,
} from 'react';
import { Group, GroupCollection } from '../models';

type Options = Partial<{
  maxDepth: number;
  visit: 'breadthFirst' | 'depthFirst';
}>;

function _map<T, C extends ReactNode>(
  children: C | C[],
  fn: (element: ReactNode) => T,
  maxDepth: number,
  depth: number,
) {
  return Children.map(children, (child) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (isValidElement(child) && child.props.children && depth !== maxDepth) {
      child = cloneElement(child, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
        children: _map(child.props.children, fn, maxDepth, depth + 1),
      }) as C;
    }

    return fn(child);
  });
}

function map<T, C extends ReactNode>(
  children: C | C[],
  fn: (element: ReactNode) => T,
  options: Omit<Options, 'visit'> = {},
) {
  const maxDepth = options['maxDepth'] ?? -1;
  return _map(children, fn, maxDepth, 0);
}

export function useFilterGroups(searchInput, collection: GroupCollection) {
  const [groups, setGroups] = useState<Group[]>();

  useEffect(() => {
    // Must search for at least 2 characters
    // Return all groups for the section if search matches the section name
    if (
      searchInput === '' ||
      searchInput.length < 2 ||
      searchInput.trim().toLowerCase() === collection.name.toLowerCase()
    ) {
      setGroups(collection.groups);
      return;
    }

    const groups = cloneDeep(collection.groups);
    // Split query to words
    const queryParts = searchInput
      .trim()
      .split(' ')
      .map((part) => part.trim().toLowerCase());
    // Check if the value contains any of the words
    const contains = (value) => {
      const text = String(value).toLowerCase();
      if (!text) {
        return false;
      }
      return queryParts.every((part) => text.includes(part));
    };
    const toString = (value) => {
      if (typeof value === 'object') {
        let values = Object.values(value).filter(
          (v) => v && typeof v === 'string',
        );
        values = values.concat(
          Object.values(value)
            .filter((v) => v && typeof v === 'object')
            .map((v) => {
              return toString(v);
            }),
        );
        return values.join(' ').trim();
      }
      return String(value);
    };

    const filteredGroups = groups.filter((group: Group) => {
      const filteredItems = group.items.filter((item) => {
        const value = map(item, (el) => toString(el))?.toString();
        // return Object.values(item).some((value) => contains(value));
        return contains(value);
      });
      if (filteredItems.length > 0) {
        group.items = filteredItems;
      }
      return contains(group.name) || filteredItems.length > 0;
    });

    // If the section name matches the query, only use the filtered groups if they have items, otherwise include the entire section
    const result = contains(collection.name)
      ? filteredGroups.length > 0
        ? filteredGroups
        : groups
      : filteredGroups;
    setGroups(result);
  }, [searchInput, collection]);

  return groups;
}
