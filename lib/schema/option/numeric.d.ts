import * as yup from 'yup';
import { OptionValue } from '.';
export declare const numericOptionSchema: yup.ObjectSchema<{
    type: "numeric";
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
    greaterThan: yup.Maybe<number | undefined>;
    lessThanOrEqualTo: yup.Maybe<number | undefined>;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    strategiesPath: undefined;
    ordinal: undefined;
    greaterThan: undefined;
    lessThanOrEqualTo: undefined;
}, "">;
export type NumericOptionValue = yup.InferType<typeof numericOptionSchema>;
export declare function optionIsNumericOption(option: OptionValue): option is NumericOptionValue;
