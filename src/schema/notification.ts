import {
  ExpoPushMessage,
  ExpoPushReceipt,
  ExpoPushTicket,
} from 'expo-server-sdk';
import * as yup from 'yup';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const NOTIFICATION_TYPES = {
  NEW_MESSAGE: 'When I receive a new message',
  WEARING_BUTTON: 'After putting on the impulse button',
  // MORNINGS: "In the mornings if I haven't put on the impulse button",
  // DEBRIEF_REMINDERS: 'A reminder to debrief my impulse moments',
};

export const notificationOptionSchema = yup
  .mixed<'push' | 'email'>()
  .oneOf(['push', 'email'])
  .required();
export type NotificationOption = yup.InferType<typeof notificationOptionSchema>;

export interface NotificationValue {
  profileId: string;
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  key: string;
  ticket: ExpoPushTicket;
  receipt: ExpoPushReceipt;
  args: Partial<ExpoPushMessage>;
}
