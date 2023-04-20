import {
  ExpoPushMessage,
  ExpoPushReceipt,
  ExpoPushTicket,
} from 'expo-server-sdk';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface NotificationValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  key: string;
  ticket: ExpoPushTicket;
  receipt: ExpoPushReceipt;
  args: Partial<ExpoPushMessage>;
}
