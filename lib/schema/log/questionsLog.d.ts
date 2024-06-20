import * as yup from 'yup';
export declare const questionDataSchema: yup.ObjectSchema<{
    numericValue: number | undefined;
    stringValue: string;
    unit: string;
    setAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, yup.AnyObject, {
    numericValue: undefined;
    stringValue: undefined;
    unit: undefined;
    setAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
}, "">;
export type QuestionDataValue = yup.InferType<typeof questionDataSchema>;
export declare const questionsLogSchema: yup.ObjectSchema<{
    openAiChoiceResponse: {} | undefined;
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
    type: "questions";
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    senderProfileId: string | null | undefined;
    gptPayload: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    }[] | undefined;
    questionsById: {
        [x: string]: {
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
            options?: ({
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
            type: import("..").QuestionKeyType;
            prompt: string;
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
            options?: string[] | undefined;
            type: import("..").QuestionKeyType;
            prompt: string;
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
            setbackThreshold?: number | undefined;
            options?: ({
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
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            type: import("..").QuestionKeyType;
            prompt: string;
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
            setbackThreshold?: number | undefined;
            options?: ({
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
            type: import("..").QuestionKeyType;
            prompt: string;
        };
    };
    questionData: {
        [x: string]: {
            numericValue?: number | undefined;
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
    };
}, yup.AnyObject, {
    openAiChoiceResponse: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    senderProfileId: undefined;
    gptPayload: "";
    questionsById: undefined;
    questionData: undefined;
}, "">;
export type QuestionsLogValue = yup.InferType<typeof questionsLogSchema>;
