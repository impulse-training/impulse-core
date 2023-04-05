import { Timestamp } from '../utils/Timestamp';

// We serialize the entire tactic collection into the gameplan document for now
export interface GameplanValue {
  uid: string;
  name: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
