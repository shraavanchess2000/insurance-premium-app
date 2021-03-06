import { Person } from './person';

export interface Employee extends Person {
  grossAmountPerPaycheck: number;
  dependentsOnInsurance: Person[];
}
