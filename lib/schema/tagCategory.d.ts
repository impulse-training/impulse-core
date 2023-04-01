import { Timestamp } from '../utils/Timestamp';
export interface TagCategoryValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  prompt: string;
  ordinal: number;
}
