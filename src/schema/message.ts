import { TimestampLike } from '../utils/firestore/TimestampLike';
import { LogValue } from './log';

export interface MessageValue {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  deletedAt?: TimestampLike;
  fromProfileId: string;
  text: string;
  href?: string;
  log?: LogValue;
  fromName: string;
}
