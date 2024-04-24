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
    color: string;
    textColor: string;
    strategiesPath: string;
    label: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    color: undefined;
    textColor: undefined;
    strategiesPath: undefined;
    label: undefined;
}, "">;
export type MultipleChoiceOptionValue = yup.InferType<typeof multipleChoiceOptionSchema>;
export declare function optionIsMultipleChoiceOption(option: OptionValue): option is MultipleChoiceOptionValue;
