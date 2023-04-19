import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface ButtonValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  buttonId: string;
  source: 'manual'; // The source of the sync, currently only manual
}
