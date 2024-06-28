import * as yup from 'yup';
export declare const questionDataSchema: yup.ObjectSchema<{
    idValue: string | undefined;
    numericValue: number | undefined;
    stringValue: string;
    unit: string;
    setAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, yup.AnyObject, {
    idValue: undefined;
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
    text: string | undefined;
    type: "questions";
    date: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    senderProfileId: string | null | undefined;
    views: {
        openTime: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        closeTime: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    }[] | undefined;
    agent: import("../..").AgentName | undefined;
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
            followUp?: ({
                type: "profileData";
                profileKey: string;
                profileValue: {};
            } | {
                type: "question";
                questionId: string;
            }) | undefined;
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
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToMemoryKey?: string | undefined;
            type: import("..").QuestionKeyType;
            prompt: string;
            ordinal: number;
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
            followUp?: ({
                type: "profileData";
                profileKey: string;
                profileValue: {};
            } | {
                type: "question";
                questionId: string;
            }) | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToMemoryKey?: string | undefined;
            type: import("..").QuestionKeyType;
            prompt: string;
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
            canAddNewOptions: NonNullable<boolean | undefined>;
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
            followUp?: ({
                type: "profileData";
                profileKey: string;
                profileValue: {};
            } | {
                type: "question";
                questionId: string;
            }) | undefined;
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
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToMemoryKey?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            type: import("..").QuestionKeyType;
            prompt: string;
            ordinal: number;
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
            followUp?: ({
                type: "profileData";
                profileKey: string;
                profileValue: {};
            } | {
                type: "question";
                questionId: string;
            }) | undefined;
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
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToMemoryKey?: string | undefined;
            type: import("..").QuestionKeyType;
            prompt: string;
            ordinal: number;
        };
    };
    questionData: {
        [x: string]: {
            idValue?: string | undefined;
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
    submittedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    openAiChoiceResponse: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    type: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    senderProfileId: undefined;
    views: "";
    agent: undefined;
    gptPayload: "";
    questionsById: undefined;
    questionData: undefined;
    submittedAt: undefined;
}, "">;
export type QuestionsLogValue = yup.InferType<typeof questionsLogSchema>;
