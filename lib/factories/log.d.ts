import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeImpulseLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | undefined;
    issueName?: string | undefined;
    senderProfileId?: string | null | undefined;
    views?: {
        openTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        closeTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    }[] | undefined;
    agent?: import("..").AgentName | undefined;
    gptPayload?: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    }[] | undefined;
    openAiChoiceResponse?: {} | undefined;
    debriefAfter?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    submittedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    parentIssueIds: string[];
    type: "impulse";
    date: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, "parentIssueIds" | "type" | "date" | ("createdAt" | "updatedAt" | "text" | "issueName" | "senderProfileId" | "views" | "agent" | "gptPayload" | "openAiChoiceResponse" | "debriefAfter" | "submittedAt")>;
export declare const makeQuestionsLogFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | undefined;
    senderProfileId?: string | null | undefined;
    views?: {
        openTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        closeTime: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    }[] | undefined;
    agent?: import("..").AgentName | undefined;
    gptPayload?: {
        role: NonNullable<"system" | "user" | "assistant" | undefined>;
        content: string;
    }[] | undefined;
    openAiChoiceResponse?: {} | undefined;
    submittedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    questionData?: {
        [x: string]: {
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            color?: string | undefined;
            setAt: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
    } | null | undefined;
    trackingQuestionIds?: string[] | undefined;
    debriefingQuestionIds?: string[] | undefined;
    isDebrief?: boolean | undefined;
    followedUpQuestionIds?: string[] | undefined;
    type: "questions";
    date: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    questionsById: {
        [x: string]: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
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
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
            categories?: ("dailyReview" | "emotions" | "impulses" | "other" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
                label?: string | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
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
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
            categories?: ("dailyReview" | "emotions" | "impulses" | "other" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
                label?: string | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
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
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
            categories?: ("dailyReview" | "emotions" | "impulses" | "other" | "afterSuccess" | "afterSetback")[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
            options: ({
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
                label?: string | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
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
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
            categories?: ("dailyReview" | "emotions" | "impulses" | "other" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
                label?: string | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            prompt: string;
            type: import("..").QuestionKeyType;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
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
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
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
            categories?: ("dailyReview" | "emotions" | "impulses" | "other" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
                label?: string | undefined;
                color?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
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
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: import("..").QuestionKeyType;
        };
    };
}, "type" | "date" | "questionsById" | ("createdAt" | "updatedAt" | "text" | "senderProfileId" | "views" | "agent" | "gptPayload" | "openAiChoiceResponse" | "submittedAt" | "questionData" | "trackingQuestionIds" | "debriefingQuestionIds" | "isDebrief" | "followedUpQuestionIds")>;
