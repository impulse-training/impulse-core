import * as yup from 'yup';
export declare const conversationSchema: yup.ObjectSchema<{
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
    name: string | undefined;
    participantUids: string[];
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    name: undefined;
    participantUids: "";
}, "">;
export type ConversationValue = yup.InferType<typeof conversationSchema>;
