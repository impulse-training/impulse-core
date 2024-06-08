import * as yup from 'yup';
type Schema = yup.ObjectSchema<yup.AnyObject> | yup.Lazy<unknown, unknown>;
export declare function strategyValueBaseSchema<T extends string, K extends Schema>(type: T, schema: K): yup.ObjectSchema<{
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
    type: T & {};
    docRef: import("../utils/firestore").DocumentReferenceLike<unknown>;
    docData: K extends yup.ISchema<any, any, any, any> ? K extends infer T_1 ? T_1 extends K ? T_1 extends yup.ISchema<any, any, infer F extends yup.Flags, any> ? Extract<F, "s"> extends never ? T_1["__outputType"] : never : T_1["__outputType"] : never : never : K extends yup.Reference<infer T_2> ? T_2 : unknown;
    ordinal: number;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    docRef: undefined;
    docData: K extends yup.ISchema<any, any, any, any> ? K["__default"] : undefined;
    ordinal: undefined;
}, "">;
export {};
