import * as Factory from 'factory.ts';
import { MetricIcons } from '../schema';
import { TimestampLike } from '../utils';
export declare const makeDaysSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
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
            };
            metrics: {
                [x: string]: {
                    doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        icon?: MetricIcons | undefined;
                        name: string;
                        key: string;
                    };
                };
            };
        };
    };
}, "dates" | ("createdAt" | "updatedAt")>;
