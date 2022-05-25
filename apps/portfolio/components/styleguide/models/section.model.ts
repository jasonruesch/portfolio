import { Group } from './group.model';

export interface Section<T> {
  name: string;
  groups: Array<Group<T>>;
}
