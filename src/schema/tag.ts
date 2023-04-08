import { Timestamp } from '../utils/Timestamp';

export interface TagValue {
  uid: string;
  createdAt: Timestamp;
  defaultSelected?: boolean;
  ordinal: number;
  name: string;
  subtext?: string;
  emoji: string;
}
