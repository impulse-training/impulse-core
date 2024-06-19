import * as yup from 'yup';
export declare function logBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
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
    type: yup.Defined<K>;
    systemMessage: string;
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    profileId: string;
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
}, "">;
