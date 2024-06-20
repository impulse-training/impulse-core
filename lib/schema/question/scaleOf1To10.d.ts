import * as yup from 'yup';
export declare const questionScaleOf1To10Schema: yup.ObjectSchema<{
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
    setbackThreshold: number | undefined;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    prompt: undefined;
    type: undefined;
    options: "";
    createdAt: undefined;
    updatedAt: undefined;
    setbackThreshold: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type QuestionScaleOf1To10Value = yup.InferType<typeof questionScaleOf1To10Schema>;
