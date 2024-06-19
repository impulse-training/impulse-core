import * as yup from 'yup';
export declare const messageLogSchema: yup.ObjectSchema<{
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    type: "message";
    systemMessage: string;
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    profileId: string;
    text: string;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    systemMessage: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    profileId: undefined;
    text: undefined;
}, "">;
export type MessageLogValue = yup.InferType<typeof messageLogSchema>;
