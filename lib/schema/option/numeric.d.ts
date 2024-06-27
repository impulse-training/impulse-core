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
    followUpQuestionId: string | undefined;
    text: string;
    color: string | undefined;
    textColor: string | undefined;
    label: string | undefined;
    setbackThreshold: number | undefined;
    greaterThan: number | undefined;
    lessThanOrEqualTo: number | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    followUpQuestionId: undefined;
    text: undefined;
    color: undefined;
    textColor: undefined;
    label: undefined;
    setbackThreshold: undefined;
    greaterThan: undefined;
    lessThanOrEqualTo: undefined;
}, "">;
export type NumericOptionValue = yup.InferType<typeof numericOptionSchema>;
export declare function optionIsNumericOption(option: OptionValue): option is NumericOptionValue;
export declare function numericOptionText(option: NumericOptionValue): string;
