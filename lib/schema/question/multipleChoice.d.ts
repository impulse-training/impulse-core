import * as yup from 'yup';
export declare const questionMultipleChoiceSchema: yup.ObjectSchema<{
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
            type: "profileData";
            profileKey: string;
            profileValue: {};
        } | {
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
            type: "profileData";
            profileKey: string;
            profileValue: {};
        } | {
            type: "question";
            questionId: string;
        }) | undefined;
        color?: string | undefined;
        textColor?: string | undefined;
        text: string;
        type: "string";
    })[];
    ordinal: number;
    templateFor: "onboarding" | undefined;
    writeAnswerToProfileMemoryKey: string | undefined;
    followUp: ({
        type: "profileData";
        profileKey: string;
        profileValue: {};
    } | {
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
    canAddNewOptions: NonNullable<boolean | undefined>;
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
    canAddNewOptions: false;
}, "">;
export type QuestionMultipleChoiceValue = yup.InferType<typeof questionMultipleChoiceSchema>;
