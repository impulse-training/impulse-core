import * as yup from 'yup';
export declare function optionValueBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
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
    text: string;
    color: string;
    label: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    color: undefined;
    label: undefined;
}, "">;
