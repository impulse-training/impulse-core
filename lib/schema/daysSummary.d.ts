import * as yup from 'yup';
export declare const daysSummarySchema: yup.ObjectSchema<{
    dates: {
        [x: string]: {
            behaviors: {
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
                        trackingUnit?: string | undefined;
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        tacticsById: {
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
                                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                    sharedWithIssueIds?: string[] | undefined;
                                    uid?: string | undefined;
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
                                    repeat?: yup.Maybe<number | undefined>;
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
                                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                    sharedWithIssueIds?: string[] | undefined;
                                    uid?: string | undefined;
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
                                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                    sharedWithIssueIds?: string[] | undefined;
                                    uid?: string | undefined;
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
                                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                    sharedWithIssueIds?: string[] | undefined;
                                    uid?: string | undefined;
                                    recommendedForIssueIds?: string[] | undefined;
                                    recommendedForIssueOrdinals?: {
                                        [x: string]: number;
                                    } | null | undefined;
                                    isShared?: boolean | undefined;
                                    description?: string | null | undefined;
                                    pastTenseTitle?: string | undefined;
                                    debriefAfterMinutes?: number | null | undefined;
                                    image?: {
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
                                        localFilePath?: yup.Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                        thumbnailUri?: yup.Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | null | undefined;
                                    prompt: string;
                                    type: "basic";
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
                                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                    sharedWithIssueIds?: string[] | undefined;
                                    uid?: string | undefined;
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
                                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                    sharedWithIssueIds?: string[] | undefined;
                                    uid?: string | undefined;
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
                                    supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                    sharedWithIssueIds?: string[] | undefined;
                                    uid?: string | undefined;
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
                                    url: string;
                                    type: "link";
                                };
                                doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                            };
                        };
                        isHelpful: boolean | null;
                    };
                    data: {
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        formattedValue: string;
                    };
                };
            };
            metrics: {
                [x: string]: {
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        icon?: import("./metric").MetricIcons | undefined;
                        name: string;
                        key: string;
                    };
                };
            };
        };
    };
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
}, yup.AnyObject, {
    dates: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type DaysSummaryValue = yup.InferType<typeof daysSummarySchema>;
