import * as yup from 'yup';
export declare const timestampSchema: yup.ObjectSchema<{
    seconds: number;
    nanoseconds: number;
    isEqual: any;
    toMillis: any;
    toDate: Function;
}, yup.AnyObject, {
    seconds: undefined;
    nanoseconds: undefined;
    isEqual: undefined;
    toMillis: undefined;
    toDate: undefined;
}, "">;
export declare const optionalTimestampSchema: yup.ObjectSchema<yup.Maybe<{
    seconds: number;
    nanoseconds: number;
    isEqual: any;
    toMillis: any;
    toDate: Function;
}>, yup.AnyObject, undefined, "d">;
