import * as yup from 'yup';
import { TacticData } from './log';
export declare const optionSchema: yup.ObjectSchema<{
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
    equalTo: yup.Maybe<string | number | undefined>;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    strategiesPath: undefined;
    ordinal: undefined;
    greaterThan: undefined;
    lessThanOrEqualTo: undefined;
    equalTo: undefined;
}, "">;
export type OptionValue = yup.InferType<typeof optionSchema>;
export declare function optionMatches(option: OptionValue, data: TacticData): boolean | undefined;
