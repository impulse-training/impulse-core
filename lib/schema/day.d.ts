import * as yup from 'yup';
import { LogValue } from './log';
export declare const daySchema: yup.ObjectSchema<{
    date: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    issueName: string;
    logsById: {
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
            text?: string | undefined;
            activeImpulseId?: string | null | undefined;
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
            choice?: "moreStrategies" | "debrief" | undefined;
            type: "actionRecap";
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
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
            text?: string | undefined;
            activeImpulseId?: string | null | undefined;
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
            type: "hidden";
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
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
            text?: string | undefined;
            activeImpulseId?: string | null | undefined;
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
            questionData?: {
                [x: string]: {
                    label?: string | undefined;
                    color?: string | undefined;
                    setbackThreshold?: number | undefined;
                    idValue?: string | undefined;
                    numericValue?: number | undefined;
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
            submittedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            trackingQuestionIds?: string[] | undefined;
            debriefingQuestionIds?: string[] | undefined;
            isDebrief?: boolean | undefined;
            followedUpQuestionIds?: string[] | undefined;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    setbackThreshold?: number | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    setbackThreshold?: number | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    setbackThreshold?: number | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    options: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[];
                    ordinal: number;
                    canAddNewOptions: NonNullable<boolean | undefined>;
                };
            };
            type: "questions";
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
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
            text?: string | undefined;
            activeImpulseId?: string | null | undefined;
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
            questionData?: {
                [x: string]: {
                    label?: string | undefined;
                    color?: string | undefined;
                    setbackThreshold?: number | undefined;
                    idValue?: string | undefined;
                    numericValue?: number | undefined;
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
            submittedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            isDebrief?: boolean | undefined;
            parentIssueIds: string[];
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    setbackThreshold?: number | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    setbackThreshold?: number | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
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
                    setbackThreshold?: number | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    ordinal: number;
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
                    categories?: ("general" | "impulses" | "debriefing" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                    prompt: string;
                    type: import(".").QuestionKeyType;
                    options: ({
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        setbackThreshold?: number | undefined;
                        greaterThan?: number | undefined;
                        lessThanOrEqualTo?: number | undefined;
                        text: string;
                        type: "numeric";
                    } | {
                        label?: string | undefined;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[];
                    ordinal: number;
                    canAddNewOptions: NonNullable<boolean | undefined>;
                };
            };
            type: "impulse";
            issueName: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            followedUpQuestionIds: string[];
            strategiesById: {
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    recording: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    repeat?: yup.Maybe<number | undefined>;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "breathingExercise";
                    ordinal: number;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifyASupportPerson";
                    ordinal: number;
                    contactIds: string[];
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    ordinal: number;
                    steps: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    ordinal: number;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        description: string;
                        title: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
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
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    tacticsById?: {
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            recording: {
                                localFilePath?: string | undefined;
                                waveform?: string | null | undefined;
                                remoteFilePath: string;
                            };
                            type: "audio";
                            ordinal: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "breathingExercise";
                            ordinal: number;
                            inFor: number;
                            holdFor: number;
                            outFor: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            ordinal: number;
                            contactIds: string[];
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            ordinal: number;
                            steps: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "task";
                            ordinal: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            ordinal: number;
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                                description: string;
                                title: string;
                                thumbnailUrl: string;
                                duration: number;
                            };
                        };
                    } | null | undefined;
                    slug?: string | undefined;
                    creatorProfileId?: string | undefined;
                    next3Tactics?: ({
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        recording: {
                            localFilePath?: string | undefined;
                            waveform?: string | null | undefined;
                            remoteFilePath: string;
                        };
                        type: "audio";
                        ordinal: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        repeat?: yup.Maybe<number | undefined>;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "breathingExercise";
                        ordinal: number;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifyASupportPerson";
                        ordinal: number;
                        contactIds: string[];
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "steps";
                        ordinal: number;
                        steps: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "task";
                        ordinal: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "video";
                        ordinal: number;
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                            description: string;
                            title: string;
                            thumbnailUrl: string;
                            duration: number;
                        };
                    })[] | undefined;
                    nextTacticId?: string | undefined;
                    prompt: string;
                    type: "folder";
                    ordinal: number;
                    invitationCode: string;
                    invitationUrl: string;
                };
            };
            completedTacticIds: string[];
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
            activeImpulseId?: string | null | undefined;
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
            text: string;
            type: "message";
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
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
            text?: string | undefined;
            activeImpulseId?: string | null | undefined;
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
            suggestedStrategyIds?: string[] | undefined;
            type: "strategies";
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            strategiesById: {
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    recording: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    repeat?: yup.Maybe<number | undefined>;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "breathingExercise";
                    ordinal: number;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifyASupportPerson";
                    ordinal: number;
                    contactIds: string[];
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    ordinal: number;
                    steps: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    ordinal: number;
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
                    profileId?: string | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    pastTenseTitle?: string | undefined;
                    commentCount?: number | undefined;
                    description?: string | null | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    ordinal: number;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        description: string;
                        title: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
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
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    tacticsById?: {
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            recording: {
                                localFilePath?: string | undefined;
                                waveform?: string | null | undefined;
                                remoteFilePath: string;
                            };
                            type: "audio";
                            ordinal: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "breathingExercise";
                            ordinal: number;
                            inFor: number;
                            holdFor: number;
                            outFor: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            ordinal: number;
                            contactIds: string[];
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            ordinal: number;
                            steps: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "task";
                            ordinal: number;
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
                            profileId?: string | null | undefined;
                            prompt?: string | undefined;
                            setbackThreshold?: number | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            pastTenseTitle?: string | undefined;
                            commentCount?: number | undefined;
                            description?: string | null | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                storagePath?: yup.Maybe<string | undefined>;
                                uri?: yup.Maybe<string | undefined>;
                            } | null | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            ordinal: number;
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                                description: string;
                                title: string;
                                thumbnailUrl: string;
                                duration: number;
                            };
                        };
                    } | null | undefined;
                    slug?: string | undefined;
                    creatorProfileId?: string | undefined;
                    next3Tactics?: ({
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        recording: {
                            localFilePath?: string | undefined;
                            waveform?: string | null | undefined;
                            remoteFilePath: string;
                        };
                        type: "audio";
                        ordinal: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        repeat?: yup.Maybe<number | undefined>;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "breathingExercise";
                        ordinal: number;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifyASupportPerson";
                        ordinal: number;
                        contactIds: string[];
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "steps";
                        ordinal: number;
                        steps: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "task";
                        ordinal: number;
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
                        profileId?: string | null | undefined;
                        prompt?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        pastTenseTitle?: string | undefined;
                        commentCount?: number | undefined;
                        description?: string | null | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: yup.Maybe<string | undefined>;
                            storagePath?: yup.Maybe<string | undefined>;
                            uri?: yup.Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "video";
                        ordinal: number;
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                            description: string;
                            title: string;
                            thumbnailUrl: string;
                            duration: number;
                        };
                    })[] | undefined;
                    nextTacticId?: string | undefined;
                    prompt: string;
                    type: "folder";
                    ordinal: number;
                    invitationCode: string;
                    invitationUrl: string;
                };
            };
            completedTacticIds: string[];
            followedUpTacticIds: string[];
        };
    };
    isProcessing: boolean;
}, yup.AnyObject, {
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toJSON: undefined;
        toDate: undefined;
    };
    issueName: undefined;
    logsById: undefined;
    isProcessing: false;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
