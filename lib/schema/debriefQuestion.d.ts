import { Timestamp } from '../utils/Timestamp';
export interface DebriefQuestionValue {
  uid: string;
  createdAt: Timestamp;
  prompt: string;
  ordinal: number;
  showForSuccesses?: true;
  showForSetbacks?: true;
  showForAllPatterns?: true;
}
