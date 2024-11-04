import * as yup from 'yup';
export declare function chatBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: K & {};
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
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    senderName: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    filesUpdatedAt: undefined;
}, "">;
