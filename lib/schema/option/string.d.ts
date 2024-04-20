import * as yup from 'yup';
import { OptionValue } from '.';
export declare const stringOptionSchema: yup.ObjectSchema<{
    type: "string";
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
    strategiesPath: string | undefined;
    ordinal: number;
    value: string;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    strategiesPath: undefined;
    ordinal: undefined;
    value: undefined;
}, "">;
export type StringOptionValue = yup.InferType<typeof stringOptionSchema>;
export declare function optionIsStringOption(option: OptionValue): option is StringOptionValue;
