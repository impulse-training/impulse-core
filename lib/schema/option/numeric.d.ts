import * as yup from 'yup';
import { OptionValue } from '.';
export declare const timeOptionSchema: yup.ObjectSchema<{
    type: "question-time";
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
    strategiesPath: string;
    label: string | undefined;
    setbackThreshold: number | undefined;
    greaterThan: number | undefined;
    lessThanOrEqualTo: number | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    color: undefined;
    textColor: undefined;
    strategiesPath: undefined;
    label: undefined;
    setbackThreshold: undefined;
    greaterThan: undefined;
    lessThanOrEqualTo: undefined;
}, "">;
export declare const counterOptionSchema: yup.ObjectSchema<{
    type: "question-counter";
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
    strategiesPath: string;
    label: string | undefined;
    setbackThreshold: number | undefined;
    greaterThan: number | undefined;
    lessThanOrEqualTo: number | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    color: undefined;
    textColor: undefined;
    strategiesPath: undefined;
    label: undefined;
    setbackThreshold: undefined;
    greaterThan: undefined;
    lessThanOrEqualTo: undefined;
}, "">;
export type TimeOptionValue = yup.InferType<typeof timeOptionSchema>;
export type CounterOptionValue = yup.InferType<typeof counterOptionSchema>;
export type NumericOptionValue = TimeOptionValue | CounterOptionValue;
export declare function optionIsTimeOption(option: OptionValue): option is TimeOptionValue;
export declare function optionIsCounterOption(option: OptionValue): option is TimeOptionValue;
export declare function optionIsNumericOption(option: OptionValue): option is NumericOptionValue;
export declare function numericOptionText(option: NumericOptionValue): string;
