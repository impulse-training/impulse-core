import * as yup from 'yup';
export declare const whatsappChatSchema: yup.ObjectSchema<{
    type: "whatsapp";
    uid: string;
    senderName: string | undefined;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    filesUpdatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    sessionExpiresAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    issueIds: string[] | undefined;
    phoneNumber: string;
    systemMessage: string;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    senderName: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    filesUpdatedAt: undefined;
    sessionExpiresAt: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    issueIds: "";
    phoneNumber: undefined;
    systemMessage: undefined;
}, "">;
export type WhatsappChatValue = yup.InferType<typeof whatsappChatSchema>;
