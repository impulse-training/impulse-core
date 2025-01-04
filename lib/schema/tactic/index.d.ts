import * as yup from 'yup';
import { BasicTacticValue } from './basic';
import { BreathingExerciseTacticValue } from './breathingExercise';
import { LinkTacticValue } from './link';
import { NotifyAContactValue } from './notifyContact';
import { NotifySupportGroupValue } from './notifySupportGroup';
import { StepsTacticValue } from './steps';
import { VideoTacticValue } from './video';
export * from './basic';
export * from './breathingExercise';
export * from './link';
export * from './notifyContact';
export * from './notifySupportGroup';
export * from './steps';
export * from './utils';
export * from './video';
export type TacticValue = BreathingExerciseTacticValue | NotifyAContactValue | StepsTacticValue | BasicTacticValue | VideoTacticValue | NotifySupportGroupValue | LinkTacticValue;
export declare const tacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<TacticValue>>;
export declare const tacticSchema: yup.Lazy<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
}, yup.AnyObject, any>;
export type TacticTypes = {
    [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
};
