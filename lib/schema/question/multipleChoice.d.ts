import * as yup from 'yup';
export declare const questionMultipleChoiceSchema: yup.ObjectSchema<{
    prompt: string;
    type: import("..").QuestionKeyType;
    options: string[] | undefined;
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
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type QuestionMultipleChoiceValue = yup.InferType<typeof questionMultipleChoiceSchema>;
