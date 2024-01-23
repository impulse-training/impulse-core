import { ExpoPushMessage, ExpoPushReceipt, ExpoPushTicket } from 'expo-server-sdk';
import { TimestampLike } from '../utils/TimestampLike';
export declare const NOTIFICATION_TYPES: {
    NEW_MESSAGE: string;
};
export type NotificationOption = 'push' | 'email';
export interface NotificationValue {
    uid: string;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    key: string;
    ticket: ExpoPushTicket;
    receipt: ExpoPushReceipt;
    args: Partial<ExpoPushMessage>;
}
