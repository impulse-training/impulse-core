import * as yup from 'yup';
import { OptionValue } from '.';
export declare const multipleChoiceOptionSchema: yup.ObjectSchema<{
    type: "question-multiple-choice";
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
    ordinal: number;
    value: string;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    label: undefined;
    color: undefined;
    strategiesPath: undefined;
    ordinal: undefined;
    value: undefined;
}, "">;
export type MultipleChoiceOptionValue = yup.InferType<typeof multipleChoiceOptionSchema>;
export declare function optionIsMultipleChoiceOption(option: OptionValue): option is MultipleChoiceOptionValue;
