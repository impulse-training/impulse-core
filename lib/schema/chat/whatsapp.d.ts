import * as yup from 'yup';
export declare const whatsappChatSchema: yup.ObjectSchema<{
    type: "whatsapp";
    profileId: string;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
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
}, yup.AnyObject, {
    type: undefined;
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    sessionExpiresAt: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toJSON: undefined;
        toDate: undefined;
    };
    phoneNumber: undefined;
    systemMessage: undefined;
}, "">;
export type WhatsappChatValue = yup.InferType<typeof whatsappChatSchema>;
