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
    label: string | undefined;
    color: string | undefined;
    strategiesPath: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    label: undefined;
    color: undefined;
    strategiesPath: undefined;
}, "">;
