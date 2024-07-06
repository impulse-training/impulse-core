import * as yup from 'yup';
export declare const questionDataSchema: yup.ObjectSchema<{
    setbackThreshold: number | undefined;
    idValue: string | undefined;
    numericValue: number | undefined;
    stringValue: string;
    label: string | undefined;
    color: string | undefined;
    unit: string;
    setAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, yup.AnyObject, {
    setbackThreshold: undefined;
    idValue: undefined;
    numericValue: undefined;
    stringValue: undefined;
    label: undefined;
    color: undefined;
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
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: import("..").QuestionKeyType;
            ordinal: number;
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
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: import("..").QuestionKeyType;
            ordinal: number;
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
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: import("..").QuestionKeyType;
            ordinal: number;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[];
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
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            type: import("..").QuestionKeyType;
            ordinal: number;
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
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
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
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: import("..").QuestionKeyType;
            ordinal: number;
            prompt: string;
        };
    };
    questionData: {
        [x: string]: {
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            color?: string | undefined;
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
    followedUpQuestionIds: string[] | undefined;
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
    followedUpQuestionIds: "";
}, "">;
export type QuestionsLogValue = yup.InferType<typeof questionsLogSchema>;
