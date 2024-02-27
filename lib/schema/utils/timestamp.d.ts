import * as yup from 'yup';
export declare const timestampSchema: yup.ObjectSchema<{
    seconds: number;
    nanoseconds: number;
    toDate: {};
}, yup.AnyObject, {
    seconds: undefined;
    nanoseconds: undefined;
    toDate: undefined;
}, "">;
export declare const optionalTimestampSchema: yup.Lazy<yup.Maybe<{} | undefined> | {
    seconds: number;
    nanoseconds: number;
    toDate: {};
}, yup.AnyObject, any>;
