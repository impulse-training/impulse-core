import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeThreadFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    title?: string | undefined;
    debriefedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefAfter?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefReminderSentAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    summary?: string | undefined;
    outcome?: "success" | "setback" | undefined;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    logsById: {
        [x: string]: import("../schema").WithTacticsById<{
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
            text?: string | null | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            metricData?: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("../schema").MetricIcons | undefined>;
                    };
                };
            } | null | undefined;
            behaviorData?: {
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
                        unit?: string | undefined;
                        dailyLimit?: number | undefined;
                        skipReminderAutoCreation?: boolean | undefined;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    repeat?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    type: "notifySupportGroup";
                                    supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    url: string;
                                    type: "link";
                                };
                                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            } | null | undefined;
            tacticsData?: {
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        url: string;
                        type: "link";
                    };
                    doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                };
            } | undefined;
            senderUid?: string | null | undefined;
            uid: string;
            type: "call";
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
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
            text?: string | null | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            metricData?: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("../schema").MetricIcons | undefined>;
                    };
                };
            } | null | undefined;
            behaviorData?: {
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
                        unit?: string | undefined;
                        dailyLimit?: number | undefined;
                        skipReminderAutoCreation?: boolean | undefined;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    repeat?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    type: "notifySupportGroup";
                                    supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    url: string;
                                    type: "link";
                                };
                                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            } | null | undefined;
            tacticsData?: {
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        url: string;
                        type: "link";
                    };
                    doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                };
            } | undefined;
            senderUid?: string | null | undefined;
            uid: string;
            type: "gpt";
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: "assistant";
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
            text?: string | null | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            metricData?: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("../schema").MetricIcons | undefined>;
                    };
                };
            } | null | undefined;
            behaviorData?: {
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
                        unit?: string | undefined;
                        dailyLimit?: number | undefined;
                        skipReminderAutoCreation?: boolean | undefined;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    repeat?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    type: "notifySupportGroup";
                                    supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    url: string;
                                    type: "link";
                                };
                                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            } | null | undefined;
            tacticsData?: {
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        url: string;
                        type: "link";
                    };
                    doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                };
            } | undefined;
            senderUid?: string | null | undefined;
            triggerDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
            uid: string;
            type: "impulse";
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: "user";
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
            text?: string | null | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            metricData?: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("../schema").MetricIcons | undefined>;
                    };
                };
            } | null | undefined;
            behaviorData?: {
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
                        unit?: string | undefined;
                        dailyLimit?: number | undefined;
                        skipReminderAutoCreation?: boolean | undefined;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    repeat?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    type: "notifySupportGroup";
                                    supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    url: string;
                                    type: "link";
                                };
                                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            } | null | undefined;
            tacticsData?: {
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        url: string;
                        type: "link";
                    };
                    doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                };
            } | undefined;
            senderUid?: string | null | undefined;
            animationFileName?: string | undefined;
            uid: string;
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
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
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
            text?: string | null | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            metricData?: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("../schema").MetricIcons | undefined>;
                    };
                };
            } | null | undefined;
            behaviorData?: {
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
                        unit?: string | undefined;
                        dailyLimit?: number | undefined;
                        skipReminderAutoCreation?: boolean | undefined;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    repeat?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    type: "notifySupportGroup";
                                    supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    url: string;
                                    type: "link";
                                };
                                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            } | null | undefined;
            tacticsData?: {
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        url: string;
                        type: "link";
                    };
                    doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                };
            } | undefined;
            senderUid?: string | null | undefined;
            uid: string;
            type: "toolCall";
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: "tool";
            toolCallId: string;
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
            text?: string | null | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            metricData?: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("../schema").MetricIcons | undefined>;
                    };
                };
            } | null | undefined;
            behaviorData?: {
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
                        unit?: string | undefined;
                        dailyLimit?: number | undefined;
                        skipReminderAutoCreation?: boolean | undefined;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    repeat?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    type: "notifySupportGroup";
                                    supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    url: string;
                                    type: "link";
                                };
                                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            } | null | undefined;
            tacticsData?: {
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        url: string;
                        type: "link";
                    };
                    doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                };
            } | undefined;
            senderUid?: string | null | undefined;
            uid: string;
            type: "user";
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
            role: "user";
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
            text?: string | null | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            metricData?: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("../schema").MetricIcons | undefined>;
                    };
                };
            } | null | undefined;
            behaviorData?: {
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
                        unit?: string | undefined;
                        dailyLimit?: number | undefined;
                        skipReminderAutoCreation?: boolean | undefined;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    repeat?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    type: "notifySupportGroup";
                                    supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        localFilePath?: import("yup").Maybe<string | undefined>;
                                        isDeleted?: boolean | undefined;
                                        metadata?: {} | null | undefined;
                                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                                        storagePath: string;
                                        url: string;
                                    } | undefined;
                                    backgroundColor?: string | undefined;
                                    likesCount?: number | null | undefined;
                                    timerSeconds?: import("yup").Maybe<number | undefined>;
                                    isSuggested?: boolean | undefined;
                                    url: string;
                                    type: "link";
                                };
                                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            } | null | undefined;
            tacticsData?: {
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        type: "notifySupportGroup";
                        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            isDeleted?: boolean | undefined;
                            metadata?: {} | null | undefined;
                            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                            thumbnailUri?: import("yup").Maybe<string | undefined>;
                            storagePath: string;
                            url: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        url: string;
                        type: "link";
                    };
                    doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                };
            } | undefined;
            senderUid?: string | null | undefined;
            files?: import("yup").Maybe<{
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                storagePath: string;
                url: string;
            }[] | undefined>;
            uid: string;
            type: "whatsappMessage";
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
        }>;
    };
}, "date" | "dateString" | "logsById" | ("createdAt" | "updatedAt" | "title" | "debriefedAt" | "debriefAfter" | "debriefReminderSentAt" | "summary" | "outcome")>;
