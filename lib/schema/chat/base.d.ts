import * as yup from 'yup';
export declare function chatBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: K & {};
    uid: string;
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
    filesUpdatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    filesUpdatedAt: undefined;
}, "">;
