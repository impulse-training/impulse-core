import * as yup from 'yup';
import { OptionValue } from '.';
export declare const numericOptionSchema: yup.ObjectSchema<{
    type: "numeric";
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
    followUps: ({
        message?: string | undefined;
        type: "askAnotherQuestion";
        questionId: string;
    } | {
        message?: string | undefined;
        type: "writeAnswerToProfile";
        profileKey: string;
    } | {
        message?: string | undefined;
        type: "writeValueToProfile";
        profileKey: string;
        value: {};
    })[] | undefined;
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
    followUps: "";
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
