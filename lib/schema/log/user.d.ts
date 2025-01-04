import * as yup from 'yup';
export declare const userLogSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    type: "user";
    uid: string;
    audioFile: {
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
        storagePath: string;
        url: string;
    } | undefined;
    metricData: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
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
                dailyLimit?: number | undefined;
                skipGameplanAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
            tactic: {
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
                uid?: string | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                recommendedForIssueIds?: string[] | undefined;
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
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
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
                    storagePath: string;
                    url: string;
                } | null | undefined;
                type: "basic";
                prompt: string;
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
                uid?: string | undefined;
                repeat?: yup.Maybe<number | undefined>;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
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
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
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
                uid?: string | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
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
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "link";
                url: string;
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
                uid?: string | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
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
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
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
                uid?: string | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
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
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
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
                uid?: string | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
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
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
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
                uid?: string | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
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
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            };
        };
    };
    text: string | null | undefined;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    senderUid: string | null | undefined;
    role: "user";
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    uid: undefined;
    audioFile: undefined;
    metricData: undefined;
    behaviorData: undefined;
    tacticsData: undefined;
    text: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    dateString: undefined;
    senderUid: undefined;
    role: undefined;
}, "">;
export type UserLogValue = yup.InferType<typeof userLogSchema>;
