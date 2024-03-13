import * as yup from 'yup';
export declare const timestampSchema: yup.ObjectSchema<{
    seconds: number;
    nanoseconds: number;
    toDate: Function;
}, yup.AnyObject, {
    seconds: undefined;
    nanoseconds: undefined;
    toDate: undefined;
}, "">;
export declare const optionalTimestampSchema: yup.ObjectSchema<yup.Maybe<{
    seconds: number;
    nanoseconds: number;
    toDate: Function;
}>, yup.AnyObject, undefined, "d">;
