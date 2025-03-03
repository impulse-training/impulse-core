import * as yup from 'yup';
export declare const behaviorDataSchema: yup.ObjectSchema<{
    counterValue: number | undefined;
    timeSeconds: number | undefined;
    formattedValue: string;
    label: {
        color?: string | undefined;
        text: string;
    } | null | undefined;
}, yup.AnyObject, {
    counterValue: undefined;
    timeSeconds: undefined;
    formattedValue: undefined;
    label: undefined;
}, "">;
export declare const behaviorAndBehaviorDataSchema: yup.ObjectSchema<{
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
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
                    uid?: string | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
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
                    timerSeconds?: yup.Maybe<number | undefined>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
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
                    uid?: string | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
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
                    timerSeconds?: yup.Maybe<number | undefined>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    type: "notifySupportGroup";
                    supportGroup: import("../../utils/firestore").DocumentReferenceLike<unknown>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        isDeleted?: boolean | undefined;
                        metadata?: {} | null | undefined;
                        thumbnailStoragePath?: yup.Maybe<string | undefined>;
                        thumbnailUri?: yup.Maybe<string | undefined>;
                        storagePath: string;
                        url: string;
                    } | undefined;
                    backgroundColor?: string | undefined;
                    timerSeconds?: yup.Maybe<number | undefined>;
                    url: string;
                    type: "link";
                };
                doc: import("../../utils/firestore").DocumentReferenceLike<unknown>;
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
    color: string | undefined;
}, yup.AnyObject, {
    behavior: {
        name: undefined;
        ordinal: undefined;
        trackingType: undefined;
        trackingUnit: undefined;
        tacticsById: undefined;
        dailyLimit: undefined;
        isHelpful: undefined;
        createdAt: undefined;
        updatedAt: undefined;
    };
    data: {
        counterValue: undefined;
        timeSeconds: undefined;
        formattedValue: undefined;
        label: undefined;
    };
    color: undefined;
}, "">;
export type BehaviorDataValue = yup.InferType<typeof behaviorDataSchema>;
export type BehaviorAndBehaviorDataValue = yup.InferType<typeof behaviorAndBehaviorDataSchema>;
