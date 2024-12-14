import * as yup from 'yup';
import { LogValue } from './log';
export declare const daySchema: yup.ObjectSchema<{
    date: {
        isEqual?: any;
        toMillis?: any;
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
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            audioFile?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    label: string;
                    iconName: string;
                    intensity: number | null;
                };
            } | null | undefined;
            behaviorData?: {
                [x: string]: {
                    behavior: {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "counter";
                        ordinal: number;
                    } | {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "time";
                        ordinal: number;
                    };
                    data: {
                        setbackThreshold?: number | undefined;
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        color?: string | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
            senderUid?: string | null | undefined;
            type: "call";
            uid: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            audioFile?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    label: string;
                    iconName: string;
                    intensity: number | null;
                };
            } | null | undefined;
            behaviorData?: {
                [x: string]: {
                    behavior: {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "counter";
                        ordinal: number;
                    } | {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "time";
                        ordinal: number;
                    };
                    data: {
                        setbackThreshold?: number | undefined;
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        color?: string | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
            senderUid?: string | null | undefined;
            confirmedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            type: "dayReview";
            uid: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
            dayDoc: import("./utils/firestore").DocumentReferenceLike<unknown>;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            audioFile?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    label: string;
                    iconName: string;
                    intensity: number | null;
                };
            } | null | undefined;
            behaviorData?: {
                [x: string]: {
                    behavior: {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "counter";
                        ordinal: number;
                    } | {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "time";
                        ordinal: number;
                    };
                    data: {
                        setbackThreshold?: number | undefined;
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        color?: string | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
            senderUid?: string | null | undefined;
            type: "regular";
            uid: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            audioFile?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    label: string;
                    iconName: string;
                    intensity: number | null;
                };
            } | null | undefined;
            behaviorData?: {
                [x: string]: {
                    behavior: {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "counter";
                        ordinal: number;
                    } | {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "time";
                        ordinal: number;
                    };
                    data: {
                        setbackThreshold?: number | undefined;
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        color?: string | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
            senderUid?: string | null | undefined;
            animationFileName?: string | undefined;
            type: "showTour";
            uid: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
            steps: {
                elementRefName: string;
                title: string;
                message: string;
                confirmButtonLabel: string;
            }[];
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            audioFile?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    label: string;
                    iconName: string;
                    intensity: number | null;
                };
            } | null | undefined;
            behaviorData?: {
                [x: string]: {
                    behavior: {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "counter";
                        ordinal: number;
                    } | {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "time";
                        ordinal: number;
                    };
                    data: {
                        setbackThreshold?: number | undefined;
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        color?: string | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
            senderUid?: string | null | undefined;
            isAddToGameplanMode?: boolean | undefined;
            suggestedTacticDocPaths?: string[] | undefined;
            type: "tactics";
            uid: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
            tacticsById: {
                [x: string]: {
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "audio";
                    ordinal: number;
                    recording: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    };
                } | {
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    repeat?: yup.Maybe<number | undefined>;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
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
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    ordinal: number;
                    url: string;
                } | {
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifyASupportPerson";
                    ordinal: number;
                    contactIds: string[];
                } | {
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "notifySupportGroup";
                    ordinal: number;
                    supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
                } | {
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    ordinal: number;
                    targetSteps: number;
                } | {
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    prompt: string;
                    type: "task";
                    ordinal: number;
                } | {
                    recommendedForIssueIds?: string[] | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    prompt?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    sharedWithIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    ordinal: number;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                    };
                };
            };
            completedTacticIds: string[];
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            audioFile?: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    label: string;
                    iconName: string;
                    intensity: number | null;
                };
            } | null | undefined;
            behaviorData?: {
                [x: string]: {
                    behavior: {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "counter";
                        ordinal: number;
                    } | {
                        recommendedForIssueIds?: string[] | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
                        setbackThreshold?: number | undefined;
                        prompt: string;
                        type: "time";
                        ordinal: number;
                    };
                    data: {
                        setbackThreshold?: number | undefined;
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        color?: string | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
            senderUid?: string | null | undefined;
            files?: yup.Maybe<{
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            }[] | undefined>;
            type: "whatsappMessage";
            uid: string;
            strategyDoc: import("./utils/firestore").DocumentReferenceLike<unknown>;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
        };
    };
    behaviorsById: {
        [x: string]: {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
            setbackThreshold?: number | undefined;
            prompt: string;
            type: "counter";
            ordinal: number;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
            setbackThreshold?: number | undefined;
            prompt: string;
            type: "time";
            ordinal: number;
        };
    };
    summary: string | null;
}, yup.AnyObject, {
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    issueName: undefined;
    logsById: undefined;
    behaviorsById: undefined;
    summary: undefined;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
