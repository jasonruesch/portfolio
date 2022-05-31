import { Group } from './Group.model';

export interface Section {
  name: string;
  groups: Array<Group>;
}
