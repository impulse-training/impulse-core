import * as yup from 'yup';
import { WhatsappChatValue } from './whatsapp';
export * from './whatsapp';
export declare const chatSchemas: Record<ChatValue['type'], yup.ObjectSchema<ChatValue>>;
export declare const chatSchema: yup.Lazy<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    filesUpdatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    strategyDoc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
    type: "whatsapp";
    profileId: string;
    sessionExpiresAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    phoneNumber: string;
    systemMessage: string;
}, yup.AnyObject, any>;
export type ChatValue = WhatsappChatValue;
