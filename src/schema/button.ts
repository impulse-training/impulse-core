import { Timestamp } from '../utils/Timestamp';

export interface ButtonValue {
  uid: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  buttonId: string;
  source: 'manual'; // The source of the sync, currently only manual
}
