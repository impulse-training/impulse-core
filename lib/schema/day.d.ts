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
            type: "dayReview";
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
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
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            message: string;
                            elementRefName: string;
                            title: string;
                            confirmButtonLabel: string;
                        }[];
                    })[] | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    prompt: string;
                    type: import(".").QuestionKeyType;
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
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            message: string;
                            elementRefName: string;
                            title: string;
                            confirmButtonLabel: string;
                        }[];
                    })[] | undefined;
                    setbackThreshold?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    prompt: string;
                    type: import(".").QuestionKeyType;
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
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            message: string;
                            elementRefName: string;
                            title: string;
                            confirmButtonLabel: string;
                        }[];
                    })[] | undefined;
                    setbackThreshold?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    prompt: string;
                    type: import(".").QuestionKeyType;
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
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            message: string;
                            elementRefName: string;
                            title: string;
                            confirmButtonLabel: string;
                        }[];
                    })[] | undefined;
                    setbackThreshold?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    prompt: string;
                    type: import(".").QuestionKeyType;
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
                    categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            message: string;
                            elementRefName: string;
                            title: string;
                            confirmButtonLabel: string;
                        }[];
                    })[] | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
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
                        } | {
                            message?: string | undefined;
                            type: "showTour";
                            steps: {
                                message: string;
                                elementRefName: string;
                                title: string;
                                confirmButtonLabel: string;
                            }[];
                        })[] | undefined;
                        color?: string | undefined;
                        textColor?: string | undefined;
                        text: string;
                        type: "string";
                    })[];
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
            type: "showTour";
            steps: {
                message: string;
                elementRefName: string;
                title: string;
                confirmButtonLabel: string;
            }[];
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
                    repeat?: yup.Maybe<number | undefined>;
                    prompt: string;
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
                    prompt: string;
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
                    prompt: string;
                    type: "steps";
                    steps: number;
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
                    prompt: string;
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
                    prompt: string;
                    type: "video";
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
                    slug?: string | undefined;
                    creatorProfileId?: string | undefined;
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
                            repeat?: yup.Maybe<number | undefined>;
                            prompt: string;
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
                            prompt: string;
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
                            prompt: string;
                            type: "steps";
                            steps: number;
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
                            prompt: string;
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
                            prompt: string;
                            type: "video";
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
                        repeat?: yup.Maybe<number | undefined>;
                        prompt: string;
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
                        prompt: string;
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
                        prompt: string;
                        type: "steps";
                        steps: number;
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
                        prompt: string;
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
                        prompt: string;
                        type: "video";
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
                    prompt: string;
                    type: "folder";
                    ordinal: number;
                    invitationCode: string;
                    invitationUrl: string;
                };
            };
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            completedTacticIds: string[];
            followedUpTacticIds: string[];
        };
    };
    threadsById: {
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
            title?: string | undefined;
            firstLogId?: string | undefined;
            isProcessing?: boolean | undefined;
            profileId: string;
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
                    type: "dayReview";
                    date: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    };
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
                            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                            } | {
                                message?: string | undefined;
                                type: "showTour";
                                steps: {
                                    message: string;
                                    elementRefName: string;
                                    title: string;
                                    confirmButtonLabel: string;
                                }[];
                            })[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            prompt: string;
                            type: import(".").QuestionKeyType;
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
                            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                            } | {
                                message?: string | undefined;
                                type: "showTour";
                                steps: {
                                    message: string;
                                    elementRefName: string;
                                    title: string;
                                    confirmButtonLabel: string;
                                }[];
                            })[] | undefined;
                            setbackThreshold?: number | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            lowEmoji?: yup.Maybe<string | undefined>;
                            highEmoji?: yup.Maybe<string | undefined>;
                            prompt: string;
                            type: import(".").QuestionKeyType;
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
                            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                            } | {
                                message?: string | undefined;
                                type: "showTour";
                                steps: {
                                    message: string;
                                    elementRefName: string;
                                    title: string;
                                    confirmButtonLabel: string;
                                }[];
                            })[] | undefined;
                            setbackThreshold?: number | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            prompt: string;
                            type: import(".").QuestionKeyType;
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
                            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                            } | {
                                message?: string | undefined;
                                type: "showTour";
                                steps: {
                                    message: string;
                                    elementRefName: string;
                                    title: string;
                                    confirmButtonLabel: string;
                                }[];
                            })[] | undefined;
                            setbackThreshold?: number | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            templateFor?: "onboarding" | undefined;
                            writeAnswerToProfileMemoryKey?: string | undefined;
                            prompt: string;
                            type: import(".").QuestionKeyType;
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
                            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
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
                            } | {
                                message?: string | undefined;
                                type: "showTour";
                                steps: {
                                    message: string;
                                    elementRefName: string;
                                    title: string;
                                    confirmButtonLabel: string;
                                }[];
                            })[] | undefined;
                            ordinals?: {
                                [x: string]: number;
                            } | null | undefined;
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
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
                                } | {
                                    message?: string | undefined;
                                    type: "showTour";
                                    steps: {
                                        message: string;
                                        elementRefName: string;
                                        title: string;
                                        confirmButtonLabel: string;
                                    }[];
                                })[] | undefined;
                                color?: string | undefined;
                                textColor?: string | undefined;
                                text: string;
                                type: "string";
                            })[];
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
                    type: "showTour";
                    steps: {
                        message: string;
                        elementRefName: string;
                        title: string;
                        confirmButtonLabel: string;
                    }[];
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
                            repeat?: yup.Maybe<number | undefined>;
                            prompt: string;
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
                            prompt: string;
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
                            prompt: string;
                            type: "steps";
                            steps: number;
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
                            prompt: string;
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
                            prompt: string;
                            type: "video";
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
                            slug?: string | undefined;
                            creatorProfileId?: string | undefined;
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
                                    repeat?: yup.Maybe<number | undefined>;
                                    prompt: string;
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
                                    prompt: string;
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
                                    prompt: string;
                                    type: "steps";
                                    steps: number;
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
                                    prompt: string;
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
                                    prompt: string;
                                    type: "video";
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
                                repeat?: yup.Maybe<number | undefined>;
                                prompt: string;
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
                                prompt: string;
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
                                prompt: string;
                                type: "steps";
                                steps: number;
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
                                prompt: string;
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
                                prompt: string;
                                type: "video";
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
                            prompt: string;
                            type: "folder";
                            ordinal: number;
                            invitationCode: string;
                            invitationUrl: string;
                        };
                    };
                    date: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    };
                    completedTacticIds: string[];
                    followedUpTacticIds: string[];
                };
            };
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
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
