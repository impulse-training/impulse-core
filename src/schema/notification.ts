import {
  ExpoPushMessage,
  ExpoPushReceipt,
  ExpoPushTicket,
} from 'expo-server-sdk';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export const NOTIFICATION_TYPES = {
  NEW_MESSAGE: 'When I receive a new message',
  // WEARING_BUTTON: 'After putting on the impulse button',
  // MORNINGS: "In the mornings if I haven't put on the impulse button",
  // DEBRIEF_REMINDERS: 'A reminder to debrief my impulse moments',
};

export type NotificationOption = 'push' | 'email';

export interface NotificationValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  key: string;
  ticket: ExpoPushTicket;
  receipt: ExpoPushReceipt;
  args: Partial<ExpoPushMessage>;
}
