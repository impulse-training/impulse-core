import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface TagValue {
  uid: string;
  tacticId: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  defaultSelected?: boolean;
  ordinal: number;
  name: string;
  subtext?: string;
  emoji: string;
}
