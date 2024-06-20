import * as yup from 'yup';
export declare const questionTextSchema: yup.ObjectSchema<{
    prompt: string;
    type: import("..").QuestionKeyType;
    options: ({
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
        type: "numeric";
        color: string;
        textColor: string;
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
        text: string;
        type: "string";
        color: string;
        textColor: string;
    })[] | undefined;
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
export type QuestionTextValue = yup.InferType<typeof questionTextSchema>;
