import * as yup from 'yup';
export declare const tacticsLogSchema: yup.ObjectSchema<{
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
    type: "tactics";
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
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    emotionData: {
        [x: string]: {
            name: string;
            label: string;
            color: string;
            key: string;
            intensity: number | null;
        };
    } | null | undefined;
    behaviorData: {
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
    text: string | null | undefined;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    role: NonNullable<"user" | "assistant" | "system" | "tool" | undefined>;
    senderUid: string | null | undefined;
    isAddToGameplanMode: boolean | undefined;
    suggestedTacticDocPaths: string[] | undefined;
    tacticsById: {
        [x: string]: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
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
            setbackThreshold?: number | null | undefined;
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
            setbackThreshold?: number | null | undefined;
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
            setbackThreshold?: number | null | undefined;
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
            setbackThreshold?: number | null | undefined;
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
            setbackThreshold?: number | null | undefined;
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
            setbackThreshold?: number | null | undefined;
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
            setbackThreshold?: number | null | undefined;
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
        };
    };
    completedTacticIds: string[];
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    uid: undefined;
    audioFile: undefined;
    emotionData: undefined;
    behaviorData: undefined;
    text: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    dateString: undefined;
    role: undefined;
    senderUid: undefined;
    isAddToGameplanMode: undefined;
    suggestedTacticDocPaths: "";
    tacticsById: undefined;
    completedTacticIds: "";
}, "">;
export type TacticsLogValue = yup.InferType<typeof tacticsLogSchema>;
