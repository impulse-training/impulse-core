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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
            openAiChoiceResponse?: {} | undefined;
            choice?: "moreStrategies" | "debrief" | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "actionRecap";
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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
            openAiChoiceResponse?: {} | undefined;
            confirmedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "dayReview";
            dayDoc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
            openAiChoiceResponse?: {} | undefined;
            issueName?: string | undefined;
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
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "impulse";
            parentIssueIds: string[];
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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
            openAiChoiceResponse?: {} | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            text: string;
            type: "message";
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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
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
            trackingQuestionIds?: string[] | undefined;
            debriefingQuestionIds?: string[] | undefined;
            isDebrief?: boolean | undefined;
            followedUpQuestionIds?: string[] | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "questions";
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
                            message: string;
                            elementRefName: string;
                            title: string;
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
                    setbackThreshold?: number | undefined;
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
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
                            message: string;
                            elementRefName: string;
                            title: string;
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
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
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
                            message: string;
                            elementRefName: string;
                            title: string;
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
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "multipleChoice";
                    prompt: string;
                    options: ({
                        label?: string | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                        color?: string | undefined;
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
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            message: string;
                            elementRefName: string;
                            title: string;
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
                    setbackThreshold?: number | undefined;
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
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
                            message: string;
                            elementRefName: string;
                            title: string;
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
                    setbackThreshold?: number | undefined;
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                    options?: ({
                        label?: string | undefined;
                        followUps?: ({
                            message?: string | undefined;
                            type: "askAnotherQuestion";
                            questionId: string;
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
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
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[] | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
            openAiChoiceResponse?: {} | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "showTour";
            steps: {
                message: string;
                elementRefName: string;
                title: string;
                confirmButtonLabel: string;
            }[];
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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
            openAiChoiceResponse?: {} | undefined;
            suggestedStrategyDocPaths?: string[] | undefined;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "strategies";
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
                    setbackThreshold?: number | null | undefined;
                    prompt?: string | undefined;
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
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
                    type: "audio";
                    ordinal: number;
                    recording: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
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
                    repeat?: yup.Maybe<number | undefined>;
                    setbackThreshold?: number | null | undefined;
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
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
                    prompt: string;
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
                    setbackThreshold?: number | null | undefined;
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
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
                    prompt: string;
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
                    setbackThreshold?: number | null | undefined;
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
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
                    steps: number;
                    prompt: string;
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
                    setbackThreshold?: number | null | undefined;
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
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
                    prompt: string;
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
                    setbackThreshold?: number | null | undefined;
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
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
                    prompt: string;
                    ordinal: number;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        title: string;
                        description: string;
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
                    profileId?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
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
                            setbackThreshold?: number | null | undefined;
                            prompt?: string | undefined;
                            profileId?: string | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
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
                            type: "audio";
                            ordinal: number;
                            recording: {
                                localFilePath?: string | undefined;
                                waveform?: string | null | undefined;
                                remoteFilePath: string;
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
                            repeat?: yup.Maybe<number | undefined>;
                            setbackThreshold?: number | null | undefined;
                            profileId?: string | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
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
                            prompt: string;
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
                            setbackThreshold?: number | null | undefined;
                            profileId?: string | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
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
                            prompt: string;
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
                            setbackThreshold?: number | null | undefined;
                            profileId?: string | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
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
                            steps: number;
                            prompt: string;
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
                            setbackThreshold?: number | null | undefined;
                            profileId?: string | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
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
                            prompt: string;
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
                            setbackThreshold?: number | null | undefined;
                            profileId?: string | null | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isInGameplan?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
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
                            prompt: string;
                            ordinal: number;
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                                title: string;
                                description: string;
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
                        setbackThreshold?: number | null | undefined;
                        prompt?: string | undefined;
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
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
                        type: "audio";
                        ordinal: number;
                        recording: {
                            localFilePath?: string | undefined;
                            waveform?: string | null | undefined;
                            remoteFilePath: string;
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
                        repeat?: yup.Maybe<number | undefined>;
                        setbackThreshold?: number | null | undefined;
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
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
                        prompt: string;
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
                        setbackThreshold?: number | null | undefined;
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
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
                        prompt: string;
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
                        setbackThreshold?: number | null | undefined;
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
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
                        steps: number;
                        prompt: string;
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
                        setbackThreshold?: number | null | undefined;
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
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
                        prompt: string;
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
                        setbackThreshold?: number | null | undefined;
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        pastTenseTitle?: string | undefined;
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
                        prompt: string;
                        ordinal: number;
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                            title: string;
                            description: string;
                            thumbnailUrl: string;
                            duration: number;
                        };
                    })[] | undefined;
                    nextTacticId?: string | undefined;
                    type: "folder";
                    prompt: string;
                    ordinal: number;
                    isShared: NonNullable<boolean | undefined>;
                    invitationCode: string;
                    invitationUrl: string;
                };
            };
            completedTacticIds: string[];
            followedUpTacticIds: string[];
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
            tacticId?: string | null | undefined;
            isGptSender?: boolean | undefined;
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
            openAiRequestPayload?: string | undefined;
            openAiChoiceResponse?: {} | undefined;
            files?: yup.Maybe<{
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            }[] | undefined>;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            type: "whatsappMessage";
            strategyPath: string;
        };
    };
    threadsById: {
        [x: string]: import("./thread").ThreadValue;
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
                    message: string;
                    elementRefName: string;
                    title: string;
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
            setbackThreshold?: number | undefined;
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "counter";
            prompt: string;
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
                    message: string;
                    elementRefName: string;
                    title: string;
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
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "issue";
            prompt: string;
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
                    message: string;
                    elementRefName: string;
                    title: string;
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
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "multipleChoice";
            prompt: string;
            options: ({
                label?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                color?: string | undefined;
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
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "showTour";
                steps: {
                    message: string;
                    elementRefName: string;
                    title: string;
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
            setbackThreshold?: number | undefined;
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            type: "scaleOf1To10";
            prompt: string;
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
                    message: string;
                    elementRefName: string;
                    title: string;
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
            setbackThreshold?: number | undefined;
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                text: string;
                type: "string";
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "time";
            prompt: string;
        };
    };
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
    threadsById: undefined;
    questionsById: undefined;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
