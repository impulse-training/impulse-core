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
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
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
        isEqual: undefined;
        toMillis: undefined;
        toJSON: undefined;
        toDate: undefined;
    };
}, "">;
export type QuestionDataValue = yup.InferType<typeof questionDataSchema>;
export declare const questionsLogSchema: yup.ObjectSchema<{
    openAiRequestPayload: string | undefined;
    openAiChoiceResponse: {} | undefined;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text: string | undefined;
    type: "questions";
    date: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    tacticId: string | null | undefined;
    tactic: ({
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isInGameplan?: boolean | undefined;
        prompt?: string | undefined;
        description?: string | null | undefined;
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
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        waveForm?: string | null | undefined;
        ordinal: number;
        type: "audio";
        recording: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        };
    } | {
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isInGameplan?: boolean | undefined;
        description?: string | null | undefined;
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
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        repeat?: yup.Maybe<number | undefined>;
        ordinal: number;
        prompt: string;
        type: "breathingExercise";
        inFor: number;
        holdFor: number;
        outFor: number;
    } | {
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isInGameplan?: boolean | undefined;
        description?: string | null | undefined;
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
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        prompt: string;
        type: "notifyASupportPerson";
        contactIds: string[];
    } | {
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isInGameplan?: boolean | undefined;
        description?: string | null | undefined;
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
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        prompt: string;
        type: "steps";
        steps: number;
    } | {
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isInGameplan?: boolean | undefined;
        description?: string | null | undefined;
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
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        prompt: string;
        type: "task";
    } | {
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isInGameplan?: boolean | undefined;
        description?: string | null | undefined;
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
        pastTenseTitle?: string | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        prompt: string;
        type: "video";
        video: {
            storagePath?: string | null | undefined;
            url?: string | null | undefined;
            description: string;
            title: string;
            thumbnailUrl: string;
            duration: number;
        };
    }) | yup.Maybe<{} | undefined>;
    isGptSender: boolean | undefined;
    senderProfileId: string | null | undefined;
    views: {
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
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: "counter";
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
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: "issue";
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
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: "multipleChoice";
            options: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
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
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            prompt: string;
            type: "scaleOf1To10";
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
            categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
            options?: ({
                label?: string | undefined;
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
                color?: string | undefined;
                textColor?: string | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                type: "numeric";
                text: string;
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
                color?: string | undefined;
                textColor?: string | undefined;
                type: "string";
                text: string;
            })[] | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            prompt: string;
            type: "time";
        };
    };
    questionData: {
        [x: string]: {
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            color?: string | undefined;
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
    submittedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    trackingQuestionIds: string[] | undefined;
    debriefingQuestionIds: string[] | undefined;
    isDebrief: boolean | undefined;
    followedUpQuestionIds: string[] | undefined;
}, yup.AnyObject, {
    openAiRequestPayload: undefined;
    openAiChoiceResponse: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    type: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toJSON: undefined;
        toDate: undefined;
    };
    tacticId: undefined;
    tactic: undefined;
    isGptSender: undefined;
    senderProfileId: undefined;
    views: "";
    questionsById: undefined;
    questionData: undefined;
    submittedAt: undefined;
    trackingQuestionIds: "";
    debriefingQuestionIds: "";
    isDebrief: undefined;
    followedUpQuestionIds: "";
}, "">;
export type QuestionsLogValue = yup.InferType<typeof questionsLogSchema>;
