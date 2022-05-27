import { Group } from './Group.model';

export interface Section<T> {
  name: string;
  groups: Array<Group<T>>;
}
