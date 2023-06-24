import { ExpoPushMessage, ExpoPushReceipt, ExpoPushTicket } from 'expo-server-sdk';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const NOTIFICATION_TYPES: {
    NEW_MESSAGE: string;
    WEARING_BUTTON: string;
    MORNINGS: string;
    DEBRIEF_REMINDERS: string;
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
