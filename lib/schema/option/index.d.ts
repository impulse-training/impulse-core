import * as yup from 'yup';
import { TacticData } from '../log';
import { MultipleChoiceOptionValue } from './multipleChoice';
import { CounterOptionValue, TimeOptionValue } from './numeric';
export * from './multipleChoice';
export * from './numeric';
export declare const optionSchemas: Record<OptionValue['type'], yup.ObjectSchema<OptionValue>>;
export declare const optionSchema: yup.Lazy<ValidatedOption, yup.AnyObject, any>;
export declare const optionWithStrategiesPathSchema: yup.Lazy<{
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    label?: string | undefined;
    text: string;
    type: "question-multiple-choice";
    color: string;
    textColor: string;
    strategiesPath: string;
} | {
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    label?: string | undefined;
    setbackThreshold?: number | undefined;
    greaterThan?: number | undefined;
    lessThanOrEqualTo?: number | undefined;
    text: string;
    type: "question-time";
    color: string;
    textColor: string;
    strategiesPath: string;
} | {
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    label?: string | undefined;
    setbackThreshold?: number | undefined;
    greaterThan?: number | undefined;
    lessThanOrEqualTo?: number | undefined;
    text: string;
    type: "question-counter";
    color: string;
    textColor: string;
    strategiesPath: string;
}, yup.AnyObject, any>;
export type OptionWithStrategiesPath = yup.InferType<typeof optionWithStrategiesPathSchema>;
type ValidatedOption = {
    [K in OptionValue['type']]: yup.InferType<(typeof optionSchemas)[K]>;
}[OptionValue['type']];
export type OptionValue = TimeOptionValue | CounterOptionValue | MultipleChoiceOptionValue;
export declare function optionSortValueForDisplay(option: OptionValue): [number, number];
export declare function findBestMatchingOption(optionsById: Record<string, OptionValue>, data: TacticData): string | undefined;
export declare function optionMatches(option: OptionValue, data: TacticData): boolean;
export declare function optionText(option: OptionValue): string;
