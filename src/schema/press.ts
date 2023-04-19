import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface PressValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  impulseId: string;
  buttonId: string;
  pressedAt: FakeTimestamp;
}
