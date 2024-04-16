import * as yup from 'yup';
export declare const choiceSchema: yup.ObjectSchema<{
    text: string;
    strategiesPath: string | undefined;
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
    text: undefined;
    strategiesPath: undefined;
    ordinal: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ChoiceValue = yup.InferType<typeof choiceSchema>;
