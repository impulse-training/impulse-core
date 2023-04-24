import { FakeTimestamp } from '../utils/FakeTimestamp';

// We serialize the entire tactic collection into the gameplan document for now
export interface GameplanValue {
  uid: string;
  name: string;
  isFeatured: boolean;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
}
