import { Timestamp } from '../utils/Timestamp';

export interface InvitationValue {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  fromName: string;
  toName: string;
  message: string;
}
