import * as yup from 'yup';
import { CallLogValue } from './callLog';
import { GptLogValue } from './gptLog';
import { ImpulseLogValue } from './impulseLog';
import { ShowTourLogValue } from './showTourLog';
import { ToolCallLogValue } from './toolCallLog';
import { UserLogValue } from './userLog';
import { WhatsappMessageLogValue } from './whatsappMessageLog';
export * from './gptLog';
export * from './impulseLog';
export * from './showTourLog';
export * from './toolCallLog';
export * from './userLog';
export * from './whatsappMessageLog';
export * from './utils/behaviorData';
export * from './utils/emotionData';
export * from './utils/tacticData';
export declare const logSchemas: Record<LogValue['type'], yup.ObjectSchema<LogValue>>;
export declare const logSchema: yup.Lazy<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
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
        storagePath: string;
        url: string;
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
                gameplanId?: string | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
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
            } | null;
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
                recording?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
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
        storagePath: string;
        url: string;
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
                gameplanId?: string | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
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
            } | null;
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
                recording?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
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
    } | null | undefined;
    text?: string | null | undefined;
    senderUid?: string | null | undefined;
    type: "gpt";
    uid: string;
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
        storagePath: string;
        url: string;
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
                gameplanId?: string | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
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
            } | null;
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
                recording?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
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
    } | null | undefined;
    text?: string | null | undefined;
    senderUid?: string | null | undefined;
    type: "impulse";
    uid: string;
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
        storagePath: string;
        url: string;
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
                gameplanId?: string | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
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
            } | null;
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
                recording?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
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
    } | null | undefined;
    text?: string | null | undefined;
    senderUid?: string | null | undefined;
    animationFileName?: string | undefined;
    type: "showTour";
    uid: string;
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
        storagePath: string;
        url: string;
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
                gameplanId?: string | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
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
            } | null;
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
                recording?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
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
    } | null | undefined;
    text?: string | null | undefined;
    senderUid?: string | null | undefined;
    type: "toolCall";
    uid: string;
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
        storagePath: string;
        url: string;
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
                gameplanId?: string | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
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
            } | null;
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
                recording?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
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
    } | null | undefined;
    text?: string | null | undefined;
    senderUid?: string | null | undefined;
    type: "user";
    uid: string;
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
        storagePath: string;
        url: string;
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
                gameplanId?: string | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                isHelpful: boolean | null;
            };
            data: {
                label?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
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
            } | null;
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
                recording?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
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
        storagePath: string;
        url: string;
    }[] | undefined>;
    type: "whatsappMessage";
    uid: string;
    strategyDoc: import("../utils/firestore").DocumentReferenceLike<unknown>;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
}, yup.AnyObject, any>;
export type LogValues = {
    [K in LogValue['type']]: yup.InferType<(typeof logSchemas)[K]>;
};
export type LogValue = UserLogValue | CallLogValue | ShowTourLogValue | ToolCallLogValue | WhatsappMessageLogValue | ImpulseLogValue | GptLogValue;
