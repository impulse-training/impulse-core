import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface InvitationValue {
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  fromName: string;
  toName: string;
  message: string;
}
