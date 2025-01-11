import * as yup from 'yup';
import { WhatsappChatValue } from './whatsapp';
export * from './whatsapp';
export declare const chatSchemas: Record<ChatValue['type'], yup.ObjectSchema<ChatValue>>;
export declare const chatSchema: yup.Lazy<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    senderName?: string | undefined;
    filesUpdatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    issueIds?: string[] | undefined;
    uid: string;
    type: "whatsapp";
    sessionExpiresAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    phoneNumber: string;
    systemMessage: string;
}, yup.AnyObject, any>;
export type ChatValue = WhatsappChatValue;
