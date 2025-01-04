import * as yup from 'yup';
export declare const supportGroupSchema: yup.ObjectSchema<{
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
    unreadCounts: {
        [x: string]: number;
    };
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    name: undefined;
    participantUids: "";
    unreadCounts: undefined;
}, "">;
export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;
