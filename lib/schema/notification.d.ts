import { ExpoPushMessage, ExpoPushReceipt, ExpoPushTicket } from 'expo-server-sdk';
import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
export declare const NOTIFICATION_TYPES: {
    NEW_MESSAGE: string;
    WEARING_BUTTON: string;
};
export declare const notificationOptionSchema: yup.MixedSchema<NonNullable<"push" | "email" | undefined>, yup.AnyObject, undefined, "">;
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
