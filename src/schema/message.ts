import { FakeTimestamp } from '../utils/FakeTimestamp';
import { LogValue } from './logs';

export interface MessageValue {
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  deletedAt?: FakeTimestamp;
  fromUid: string;
  text: string;
  href?: string;
  log?: LogValue;
  fromName: string;
}
