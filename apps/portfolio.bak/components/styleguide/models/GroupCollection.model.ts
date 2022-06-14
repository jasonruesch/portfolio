import { Group } from './Group.model';

export interface GroupCollection {
  name: string;
  groups: Array<Group>;
}
