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
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    followUps: "";
    text: undefined;
    color: undefined;
    textColor: undefined;
    label: undefined;
}, "">;
export type StringOptionValue = yup.InferType<typeof stringOptionSchema>;
export declare function optionIsStringOption(option: OptionValue): option is StringOptionValue;
