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
    color: string;
    textColor: string;
    label: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    color: undefined;
    textColor: undefined;
    label: undefined;
}, "">;
export type StringOptionValue = yup.InferType<typeof stringOptionSchema>;
export declare function optionIsStringOption(option: OptionValue): option is StringOptionValue;