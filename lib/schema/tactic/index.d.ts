import * as yup from 'yup';
import { AudioTacticValue } from './audio';
import { BreatheTacticValue } from './breathingExercise';
import { LinkTacticValue } from './link';
import { NotifyAContactValue } from './notifyContact';
import { NotifySupportGroupValue } from './notifySupportGroup';
import { StepsTacticValue } from './steps';
import { TaskTacticValue } from './task';
import { VideoTacticValue } from './video';
export * from './audio';
export * from './breathingExercise';
export * from './link';
export * from './notifyContact';
export * from './notifySupportGroup';
export * from './steps';
export * from './task';
export * from './utils';
export * from './video';
export type TacticValue = AudioTacticValue | BreatheTacticValue | NotifyAContactValue | StepsTacticValue | TaskTacticValue | VideoTacticValue | NotifySupportGroupValue | LinkTacticValue;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
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
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isSuggested?: boolean | undefined;
    ordinal: number;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isSuggested?: boolean | undefined;
    ordinal: number;
    type: "video";
    video: {
        storagePath?: string | null | undefined;
        url?: string | null | undefined;
    };
}, yup.AnyObject, any>;
export type TacticTypes = {
    [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
};
export type TacticsById = Record<string, TacticValue>;
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
    tacticsById: TacticsById;
};
