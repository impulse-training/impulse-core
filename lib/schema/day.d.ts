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
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            type: "actionRecap";
            profileId: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
        } | {
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            type: "animation";
            profileId: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            source: string;
        } | {
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            type: "dayReview";
            profileId: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            dayDoc: import("./utils/firestore").DocumentReferenceLike<unknown>;
        } | {
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            issueId?: string | null | undefined;
            issueName?: string | undefined;
            submittedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            type: "impulse";
            profileId: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            parentIds: string[];
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            type: "message";
            text: string;
            profileId: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
        } | {
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            type: "questions";
            profileId: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            questionsById: {
                [x: string]: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            };
        } | {
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            animationFileName?: string | undefined;
            type: "showTour";
            profileId: string;
            steps: {
                message: string;
                title: string;
                elementRefName: string;
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
            dateString: string;
        } | {
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            sourceSuggestion?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
            isAddToGameplanMode?: boolean | undefined;
            suggestedTacticDocPaths?: string[] | undefined;
            type: "tactics";
            profileId: string;
            tacticsById: {
                [x: string]: {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    prompt?: string | undefined;
                    profileId?: string | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                    waveForm?: string | null | undefined;
                    type: "audio";
                    ordinal: number;
                    recording: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    };
                } | {
                    repeat?: yup.Maybe<number | undefined>;
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                    type: "notifySupportGroup";
                    prompt: string;
                    ordinal: number;
                    supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                    type: "question";
                    prompt: string;
                    ordinal: number;
                    question: {
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
                        recommendedForIssueIds?: string[] | undefined;
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
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                        ordinal?: number | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "counter";
                        prompt: string;
                    } | {
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
                        recommendedForIssueIds?: string[] | undefined;
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
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                        ordinal?: number | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "issue";
                        prompt: string;
                    } | {
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
                        recommendedForIssueIds?: string[] | undefined;
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
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                        ordinal?: number | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                        recommendedForIssueIds?: string[] | undefined;
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
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                        ordinal?: number | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        lowEmoji?: yup.Maybe<string | undefined>;
                        highEmoji?: yup.Maybe<string | undefined>;
                        type: "scaleOf1To10";
                        prompt: string;
                    } | {
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
                        recommendedForIssueIds?: string[] | undefined;
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
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                        ordinal?: number | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "text";
                        prompt: string;
                    } | {
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
                        recommendedForIssueIds?: string[] | undefined;
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
                        isPublic?: boolean | undefined;
                        categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                        ordinal?: number | undefined;
                        ordinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                        writeAnswerToProfileMemoryKey?: string | undefined;
                        type: "time";
                        prompt: string;
                    };
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                    prompt: string;
                    ordinal: number;
                    targetSteps: number;
                } | {
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                    setbackThreshold?: number | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
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
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
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
                        description: string;
                        title: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
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
            dateString: string;
            completedTacticIds: string[];
            followedUpTacticIds: string[];
        } | {
            text?: string | undefined;
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
            audioFile?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            audioDurationSeconds?: number | undefined;
            audioWaveform?: string | undefined;
            profileEmojiIDString?: string | undefined;
            tacticId?: string | null | undefined;
            tactic?: ({
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                prompt?: string | undefined;
                profileId?: string | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                waveForm?: string | null | undefined;
                type: "audio";
                ordinal: number;
                recording: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                };
            } | {
                repeat?: yup.Maybe<number | undefined>;
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "notifySupportGroup";
                prompt: string;
                ordinal: number;
                supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                type: "question";
                prompt: string;
                ordinal: number;
                question: {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "counter";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "issue";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    lowEmoji?: yup.Maybe<string | undefined>;
                    highEmoji?: yup.Maybe<string | undefined>;
                    type: "scaleOf1To10";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "text";
                    prompt: string;
                } | {
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
                    recommendedForIssueIds?: string[] | undefined;
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
                    isPublic?: boolean | undefined;
                    categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
                    ordinal?: number | undefined;
                    ordinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
                    writeAnswerToProfileMemoryKey?: string | undefined;
                    type: "time";
                    prompt: string;
                };
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                prompt: string;
                ordinal: number;
                targetSteps: number;
            } | {
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                setbackThreshold?: number | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
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
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            }) | yup.Maybe<{} | undefined>;
            tacticData?: {
                [x: string]: {} | undefined;
            } | null | undefined;
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
            type: "whatsappMessage";
            profileId: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            strategyDoc: import("./utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    questionsById: {
        [x: string]: {
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
            recommendedForIssueIds?: string[] | undefined;
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
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
            ordinal?: number | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "counter";
            prompt: string;
        } | {
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
            recommendedForIssueIds?: string[] | undefined;
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
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
            ordinal?: number | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "issue";
            prompt: string;
        } | {
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
            recommendedForIssueIds?: string[] | undefined;
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
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
            ordinal?: number | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
            recommendedForIssueIds?: string[] | undefined;
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
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
            ordinal?: number | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            type: "scaleOf1To10";
            prompt: string;
        } | {
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
            recommendedForIssueIds?: string[] | undefined;
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
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
            ordinal?: number | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
            writeAnswerToProfileMemoryKey?: string | undefined;
            type: "text";
            prompt: string;
        } | {
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
            recommendedForIssueIds?: string[] | undefined;
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
            isPublic?: boolean | undefined;
            categories?: ("questionOfTheDay" | "debriefing" | "impulses" | "afterSuccess" | "afterSetback" | "dayReview")[] | undefined;
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
            ordinal?: number | undefined;
            ordinals?: {
                [x: string]: number;
            } | null | undefined;
            templateFor?: "afterSuccess" | "afterSetback" | "onboarding" | undefined;
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
    questionsById: undefined;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
