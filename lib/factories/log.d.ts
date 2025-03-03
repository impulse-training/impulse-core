import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeLogFactories: (TimestampKlass: typeof TimestampLike) => {
    regularLogFactory: Factory.Sync.Factory<{
        text?: string | null | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        skipGptResponse?: boolean | undefined;
        metricData?: {
            [x: string]: {
                doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                data: {
                    label: string;
                    metricInputValue: number;
                    absoluteAttributeValue: number;
                };
                attribute: {
                    icon?: import("..").MetricIcons | undefined;
                    name: string;
                    key: string;
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
                                uid?: string | undefined;
                                prompt?: string | undefined;
                                description?: string | null | undefined;
                                image?: {
                                    localFilePath?: import("yup").Maybe<string | undefined>;
                                    isDeleted?: boolean | undefined;
                                    metadata?: {} | null | undefined;
                                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                                    storagePath: string;
                                    url: string;
                                } | undefined;
                                backgroundColor?: string | undefined;
                                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                uid?: string | undefined;
                                prompt?: string | undefined;
                                description?: string | null | undefined;
                                image?: {
                                    localFilePath?: import("yup").Maybe<string | undefined>;
                                    isDeleted?: boolean | undefined;
                                    metadata?: {} | null | undefined;
                                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                                    storagePath: string;
                                    url: string;
                                } | undefined;
                                backgroundColor?: string | undefined;
                                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                prompt?: string | undefined;
                                description?: string | null | undefined;
                                image?: {
                                    localFilePath?: import("yup").Maybe<string | undefined>;
                                    isDeleted?: boolean | undefined;
                                    metadata?: {} | null | undefined;
                                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                                    storagePath: string;
                                    url: string;
                                } | undefined;
                                backgroundColor?: string | undefined;
                                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                description?: string | null | undefined;
                                image?: {
                                    localFilePath?: import("yup").Maybe<string | undefined>;
                                    isDeleted?: boolean | undefined;
                                    metadata?: {} | null | undefined;
                                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                                    storagePath: string;
                                    url: string;
                                } | undefined;
                                backgroundColor?: string | undefined;
                                timerSeconds?: import("yup").Maybe<number | undefined>;
                                audio?: {
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
                                uid?: string | undefined;
                                prompt?: string | undefined;
                                description?: string | null | undefined;
                                image?: {
                                    localFilePath?: import("yup").Maybe<string | undefined>;
                                    isDeleted?: boolean | undefined;
                                    metadata?: {} | null | undefined;
                                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                                    storagePath: string;
                                    url: string;
                                } | undefined;
                                backgroundColor?: string | undefined;
                                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                uid?: string | undefined;
                                prompt?: string | undefined;
                                description?: string | null | undefined;
                                image?: {
                                    localFilePath?: import("yup").Maybe<string | undefined>;
                                    isDeleted?: boolean | undefined;
                                    metadata?: {} | null | undefined;
                                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                                    storagePath: string;
                                    url: string;
                                } | undefined;
                                backgroundColor?: string | undefined;
                                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                uid?: string | undefined;
                                prompt?: string | undefined;
                                description?: string | null | undefined;
                                image?: {
                                    localFilePath?: import("yup").Maybe<string | undefined>;
                                    isDeleted?: boolean | undefined;
                                    metadata?: {} | null | undefined;
                                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                                    storagePath: string;
                                    url: string;
                                } | undefined;
                                backgroundColor?: string | undefined;
                                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    uid?: string | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    uid?: string | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    prompt?: string | undefined;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    audio?: {
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
                    uid?: string | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    uid?: string | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    uid?: string | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                        thumbnailUri?: import("yup").Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    url: string;
                    type: "link";
                };
                doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
            };
        } | undefined;
        senderUid?: string | null | undefined;
        senderName?: string | null | undefined;
        audioTranscript?: string | undefined;
        audioTranscribedLocally?: boolean | undefined;
        uid: string;
        type: "user";
        date: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        isDisplayable: NonNullable<boolean | undefined>;
        dateString: string;
        role: "user";
    }, "uid" | "type" | "date" | "isDisplayable" | "dateString" | "role" | ("text" | "createdAt" | "updatedAt" | "audioFile" | "skipGptResponse" | "metricData" | "behaviorData" | "tacticsData" | "senderUid" | "senderName" | "audioTranscript" | "audioTranscribedLocally")>;
};
