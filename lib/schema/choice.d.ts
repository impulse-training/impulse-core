import * as yup from 'yup';
export declare const choiceSchema: yup.ObjectSchema<{
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
    strategiesPath: string | undefined;
    ordinal: number;
    greaterThan: yup.Maybe<number | undefined>;
    lessThan: yup.Maybe<number | undefined>;
    equalTo: yup.Maybe<string | number | undefined>;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    strategiesPath: undefined;
    ordinal: undefined;
    greaterThan: undefined;
    lessThan: undefined;
    equalTo: undefined;
}, "">;
export type ChoiceValue = yup.InferType<typeof choiceSchema>;
