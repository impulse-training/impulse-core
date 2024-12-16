import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeLogFactories: (TimestampKlass: typeof TimestampLike) => {
    regularLogFactory: Factory.Sync.Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        emotionData?: {
            [x: string]: {
                color?: string | undefined;
                name: string;
                label: string;
                key: string;
                intensity: number | null;
            };
        } | null | undefined;
        behaviorData?: {
            [x: string]: {
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
                    setbackThreshold?: number | undefined;
                    name: string;
                    ordinal: number;
                    trackingType: NonNullable<"time" | "counter" | undefined>;
                    isHelpful: boolean | null;
                };
                data: {
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
        tacticsData?: {
            [x: string]: {
                data: {
                    setAt: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    };
                    isCompleted: NonNullable<boolean | undefined>;
                };
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
                    type: "audio";
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    repeat?: import("yup").Maybe<number | undefined>;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
                    type: "task";
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
                    setbackThreshold?: number | null | undefined;
                    uid?: string | undefined;
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        contentType: string;
                        storagePath: string;
                        uri: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
                    type: "video";
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                    };
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
    }, "type" | "uid" | "date" | "dateString" | "role" | ("createdAt" | "updatedAt" | "audioFile" | "emotionData" | "behaviorData" | "tacticsData" | "text" | "senderUid")>;
};
