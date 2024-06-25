import * as yup from 'yup';
export declare const questionMultipleChoiceSchema: yup.ObjectSchema<{
    prompt: string;
    type: import("..").QuestionKeyType;
    options: string[] | undefined;
    ordinal: number;
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
}, yup.AnyObject, {
    prompt: undefined;
    type: undefined;
    options: "";
    ordinal: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type QuestionMultipleChoiceValue = yup.InferType<typeof questionMultipleChoiceSchema>;