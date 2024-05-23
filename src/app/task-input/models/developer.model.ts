import { Skill } from './skill.model';
export class Developer {
  lastName!: string;
  firstName!: string;
  age!: number;
  gender!: 'M' | 'F' | 'Other';
  bio!: string;
  skills!: Skill[];
}