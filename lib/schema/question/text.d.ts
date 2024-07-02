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
        followUp?: ({
            message?: string | undefined;
            type: "profileData";
            profileKey: string;
            profileValue: {};
        } | {
            message?: string | undefined;
            type: "question";
            questionId: string;
        }) | undefined;
        color?: string | undefined;
        textColor?: string | undefined;
        greaterThan?: number | undefined;
        lessThanOrEqualTo?: number | undefined;
        text: string;
        type: "numeric";
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
        followUp?: ({
            message?: string | undefined;
            type: "profileData";
            profileKey: string;
            profileValue: {};
        } | {
            message?: string | undefined;
            type: "question";
            questionId: string;
        }) | undefined;
        color?: string | undefined;
        textColor?: string | undefined;
        text: string;
        type: "string";
    })[] | undefined;
    ordinal: number;
    templateFor: "onboarding" | undefined;
    writeAnswerToProfileMemoryKey: string | undefined;
    followUp: ({
        message?: string | undefined;
        type: "profileData";
        profileKey: string;
        profileValue: {};
    } | {
        message?: string | undefined;
        type: "question";
        questionId: string;
    }) | undefined;
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
    templateFor: undefined;
    writeAnswerToProfileMemoryKey: undefined;
    followUp: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type QuestionTextValue = yup.InferType<typeof questionTextSchema>;
